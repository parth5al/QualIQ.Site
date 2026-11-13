import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}

/** Italic serif accent used for one or two words inside a headline. */
export function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-serif text-[1.08em] font-normal italic tracking-normal text-brand">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const styles =
    variant === "primary"
      ? "bg-brand text-brand-ink hover:bg-brand-strong shadow-[0_0_0_1px_rgb(46_232_138/0.4),0_8px_30px_-8px_rgb(46_232_138/0.6)]"
      : "border border-line-strong text-fg hover:border-fg/30 hover:bg-white/[0.04]";
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
