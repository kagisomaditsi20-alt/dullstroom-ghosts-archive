import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, LockKeyhole, Mail, Menu, X } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "../components/Button";
import heroAsset from "../assets/dullstroom-ghosts-banner.jpg.asset.json";
import marketAsset from "../assets/dullstroom-village-market.jpg.asset.json";
import damWoman from "../assets/dam-woman.jpg";
import sleeplessHotel from "../assets/sleepless-hotel.jpg";
import childInMist from "../assets/child-in-mist.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dullstroom Ghosts | True Hauntings from the Highlands" },
      {
        name: "description",
        content: "True ghost stories, local legends and strange encounters from Dullstroom, Mpumalanga.",
      },
      { property: "og:title", content: "Dullstroom Ghosts | True Hauntings from the Highlands" },
      {
        property: "og:description",
        content: "Enter the mist and discover the real ghost stories of Dullstroom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stories = [
  {
    title: "The Woman of Dullstroom Dam",
    excerpt: "Fishermen hear her singing before the fog closes in. Those who follow the voice return with water in their boots.",
    image: damWoman,
    alt: "A spectral woman standing in the mist at Dullstroom Dam",
    category: "Waterside encounter",
  },
  {
    title: "The Hotel That Never Sleeps",
    excerpt: "Room seven has been empty for years, yet every night the floorboards pace until the first light reaches the veranda.",
    image: sleeplessHotel,
    alt: "An old Dullstroom hotel with one lit window at night",
    category: "Unexplained activity",
  },
  {
    title: "The Child in the Mist",
    excerpt: "Drivers on the old road brake for a child who vanishes at the verge, leaving one small handprint on the glass.",
    image: childInMist,
    alt: "A distant child silhouette on a misty country road",
    category: "Roadside apparition",
  },
];

const navItems = [
  ["Stories", "#stories"],
  ["Events", "#events"],
  ["Submit Your Story", "mailto:kagisomaditsi20@gmail.com?subject=My Dullstroom Ghost Story"],
  ["Subscribe", "#subscribe"],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  function submitEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    window.location.href = `mailto:kagisomaditsi20@gmail.com?subject=${encodeURIComponent("Dullstroom Ghosts membership")}&body=${encodeURIComponent(`Please contact me about membership. My email is ${email}.`)}`;
    setNotice("Your email app has been opened to complete the request.");
  }

  function demoPayment(provider: string) {
    setNotice(`${provider} checkout is currently in preview. No payment has been taken.`);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
          <a href="#top" className="min-w-0 font-display text-lg font-bold uppercase tracking-[0.08em] text-bone sm:text-xl">
            Dullstroom <span className="text-primary-bright">Ghosts</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="nav-link text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-bone">
                {label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-bone md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-foreground/10 bg-background px-5 py-5 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)} className="border-b border-foreground/10 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-bone">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[70vh] items-end justify-center pt-18">
        <img src={heroAsset.url} alt="Dullstroom Ghosts in a misty haunted village" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="hero-shade absolute inset-0" aria-hidden="true" />
        <div className="fog fog-one" aria-hidden="true" />
        <div className="fog fog-two" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-14 text-center sm:pb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-bone/65">True accounts · Local legends · The Mpumalanga mist</p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-bone text-shadow sm:text-5xl lg:text-6xl">
            Every Town Has Secrets.<br />Dullstroom Has Ghosts.
          </h1>
          <a href="#stories" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary-bright">
            Read The First Haunting <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="events" className="relative border-y border-foreground/10 bg-surface py-20 sm:py-28">
        <div className="fog fog-three" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <p className="section-kicker">Beyond the veil</p>
            <h2 className="section-title">What&apos;s On in Dullstroom</h2>
          </div>
          <article className="event-glow mx-auto grid max-w-5xl overflow-hidden border border-primary/70 bg-card md:grid-cols-[minmax(280px,0.78fr)_1fr]">
            <div className="relative bg-secondary">
              <img src={marketAsset.url} alt="Dullstroom Village Market Hello Spring event poster" loading="lazy" width={640} height={960} className="h-full max-h-[740px] w-full object-cover object-top" />
              <span className="absolute left-4 top-4 bg-primary px-3 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-primary-foreground">Sponsored Ad</span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <CalendarDays className="mb-7 h-8 w-8 text-primary-bright" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-bright">3 &amp; 4 October 2026</p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-bone sm:text-4xl">Dullstroom Village Market</h3>
              <p className="mt-3 font-display text-xl italic text-muted-foreground">Hello Spring</p>
              <div className="my-8 h-px w-16 bg-primary" />
              <p className="max-w-md text-base leading-7 text-muted-foreground">A weekend of local makers, flowers, food, crafts and unmistakable village character at Verlorenkloof.</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-bone">Verlorenkloof · Dullstroom</p>
            </div>
          </article>
        </div>
      </section>

      <section id="stories" className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-11 md:flex md:items-end md:justify-between">
            <div>
              <p className="section-kicker">Case files from the mist</p>
              <h2 className="section-title text-left">Latest Hauntings</h2>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground md:mt-0 md:text-right">Collected from whispered testimony, old guest books and people who still refuse to drive alone after dark.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {stories.map((story, index) => (
              <article key={story.title} className="story-card group border border-foreground/10 bg-card">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={story.image} alt={story.alt} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-image-shade" />
                  <span className="absolute left-5 top-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-bone/75">Case 0{index + 1}</span>
                  <LockKeyhole className="absolute right-5 top-5 h-5 w-5 text-bone/80" aria-label="Members only" />
                </div>
                <div className="flex min-h-[280px] flex-col p-6">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.17em] text-primary-bright">{story.category}</p>
                  <h3 className="mt-3 font-display text-2xl leading-snug text-bone">{story.title}</h3>
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">{story.excerpt}</p>
                  <Button className="mt-auto w-full" onClick={() => document.querySelector("#subscribe")?.scrollIntoView({ behavior: "smooth" })}>
                    <LockKeyhole className="h-4 w-4" aria-hidden="true" /> Unlock · R29/month
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="border-y border-primary/35 bg-membership py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-bone/60">The inner circle</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-bone sm:text-5xl">Become a Member</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-bone/75">Unlock all ghost stories, submit your own, and support local legends.</p>
            <div className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-3xl font-bold text-bone">R29</span><span className="text-sm text-bone/65">/ month</span>
              <span className="text-bone/30">or</span>
              <span className="font-display text-3xl font-bold text-bone">R199</span><span className="text-sm text-bone/65">/ year</span>
            </div>
          </div>
          <div className="border border-bone/20 bg-background/35 p-6 sm:p-8">
            <form onSubmit={submitEmail}>
              <label htmlFor="member-email" className="text-xs font-bold uppercase tracking-[0.13em] text-bone">Start with your email</label>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="relative min-w-0">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                  <input id="member-email" name="email" type="email" required placeholder="you@example.com" className="h-12 w-full rounded-sm border border-bone/20 bg-background/70 pl-11 pr-4 text-sm text-bone outline-none placeholder:text-muted-foreground focus:border-bone/60" />
                </div>
                <Button type="submit">Join the list</Button>
              </div>
            </form>
            <div className="my-6 flex items-center gap-4 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-bone/40 before:h-px before:flex-1 before:bg-bone/15 after:h-px after:flex-1 after:bg-bone/15">or pay with</div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button variant="outline" onClick={() => demoPayment("Paystack")}>Paystack</Button>
              <Button variant="outline" onClick={() => demoPayment("PayPal")}>PayPal</Button>
            </div>
            {notice && <p role="status" className="mt-4 text-sm leading-5 text-bone/70">{notice}</p>}
            <p className="mt-5 text-xs leading-5 text-bone/45">Payment buttons are a preview and will not charge you yet.</p>
          </div>
        </div>
      </section>

      <footer className="bg-footer py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 text-center sm:grid-cols-[1fr_auto] sm:text-left lg:px-8">
          <p className="font-display text-sm uppercase tracking-[0.1em] text-bone">Dullstroom Ghosts</p>
          <p className="text-xs text-muted-foreground">True stories from where the mist refuses to lift.</p>
        </div>
      </footer>
    </main>
  );
}
