import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline";
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const variants = {
    primary: "border border-primary bg-primary text-primary-foreground hover:bg-primary-bright hover:border-primary-bright",
    outline: "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
  };

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}