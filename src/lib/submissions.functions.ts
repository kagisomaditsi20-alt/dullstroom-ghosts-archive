import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const MAX = 10 * 1024 * 1024;
const emailSchema = z.string().trim().email().max(255);

function getFile(form: FormData, key: string, exts: string[]) {
  const file = form.get(key);
  if (!(file instanceof File) || file.size === 0) throw new Error(`Missing ${key}`);
  if (file.size > MAX) throw new Error("File too large (max 10MB)");
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!exts.includes(ext)) throw new Error(`Unsupported file type for ${key}`);
  return { file, ext };
}

async function save(folder: string, files: { name: string; file: File }[], details: Record<string, string>) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const id = `${new Date().toISOString().replace(/[:.]/g, "-")}-${crypto.randomUUID().slice(0, 8)}`;
  const bucket = supabaseAdmin.storage.from("submissions");
  for (const { name, file } of files) {
    const { error } = await bucket.upload(`${folder}/${id}/${name}`, file, { contentType: file.type || "application/octet-stream" });
    if (error) throw new Error("Upload failed, please try again.");
  }
  const { error } = await bucket.upload(`${folder}/${id}/details.json`, new Blob([JSON.stringify(details, null, 2)], { type: "application/json" }));
  if (error) throw new Error("Upload failed, please try again.");
  // TODO: once an email sender domain is set up, email dullstroomghosts@yahoo.com here with links to these files.
}

export const submitReaderPayment = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    if (!(data instanceof FormData)) throw new Error("Invalid form");
    return data;
  })
  .handler(async ({ data }) => {
    const email = emailSchema.parse(data.get("email"));
    const story = z.enum(["Story 1 - Children At Play", "Story 2 - Friends United"]).parse(data.get("story"));
    const proof = getFile(data, "proof", ["jpg", "jpeg", "png", "pdf"]);
    await save("reader-payments", [{ name: `proof.${proof.ext}`, file: proof.file }], {
      subject: `READER PAYMENT: ${story} from ${email}`,
      customerEmail: email,
      storyRequested: story,
      date: new Date().toISOString(),
      amount: "R29",
    });
    return { ok: true };
  });

export const submitWriterStory = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    if (!(data instanceof FormData)) throw new Error("Invalid form");
    return data;
  })
  .handler(async ({ data }) => {
    const title = z.string().trim().min(1).max(200).parse(data.get("title"));
    const email = emailSchema.parse(data.get("email"));
    if (data.get("permissions") !== "all") throw new Error("All permissions are required");
    const story = getFile(data, "storyFile", ["doc", "docx", "pdf", "txt"]);
    const proof = getFile(data, "proof", ["jpg", "jpeg", "png", "pdf"]);
    await save("writer-submissions", [
      { name: `story.${story.ext}`, file: story.file },
      { name: `proof.${proof.ext}`, file: proof.file },
    ], {
      subject: `WRITER SUBMISSION: ${title}`,
      title,
      email,
      permissions: "Publish, commercialise and edit — all granted",
      paymentReference: title,
      amount: "R29",
      date: new Date().toISOString(),
    });
    return { ok: true };
  });
