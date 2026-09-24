import { type ReactNode } from "react";
import { Link } from "@/i18n/navigation";

const variants = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900",
  accent:
    "bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)] focus-visible:outline-[var(--accent)] shadow-sm",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  ghost:
    "border border-white/70 bg-transparent text-white hover:border-white hover:bg-white/10",
  whatsapp: "bg-emerald-600 text-white hover:bg-emerald-700",
} as const;

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
