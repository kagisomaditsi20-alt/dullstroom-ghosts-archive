CREATE TABLE public.proofs (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), buyer_email TEXT NOT NULL, file_url TEXT NOT NULL, created_at TIMESTAMPTZ NOT NULL DEFAULT now());
GRANT ALL ON public.proofs TO service_role;
ALTER TABLE public.proofs ENABLE ROW LEVEL SECURITY;