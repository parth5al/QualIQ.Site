export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0d110f" stroke="rgb(255 255 255 / 0.12)" />
      <circle cx="15" cy="15" r="7" fill="none" stroke="#2ee88a" strokeWidth="4" />
      <path d="M19 19l5.5 5.5" stroke="#ecf2ee" strokeWidth="4" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className="text-[15px] font-semibold uppercase tracking-[0.14em] text-fg">
        Qual<span className="text-brand">IQ</span>
      </span>
    </span>
  );
}
