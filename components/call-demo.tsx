"use client";

import { useEffect, useState } from "react";
import { Check, Loader2, MessageCircle, PhoneCall } from "lucide-react";

type Line = { who: "ai" | "lead"; text: string };

const script: Line[] = [
  { who: "ai", text: "Namaste Rohan ji, main Shruti bol rahi hoon, Aurum Heights GIFT City se. Aapne 2 BHK ke liye enquiry ki thi?" },
  { who: "lead", text: "Haan, boliye." },
  { who: "ai", text: "Aapka budget roughly kitna hai?" },
  { who: "lead", text: "Around 85 lakh." },
  { who: "ai", text: "Perfect, 2 BHK ₹82 lakh se start hote hain. Is Saturday site visit ke liye aa sakte hain?" },
  { who: "lead", text: "Saturday 11 baje theek rahega." },
  { who: "ai", text: "Done. Saturday 11 AM book ho gaya, location WhatsApp pe bhej rahi hoon." },
];

// How many script lines must have played before each fact is confirmed.
const facts = [
  { label: "Budget", value: "₹85 L", after: 4 },
  { label: "Location", value: "GIFT City", after: 1 },
  { label: "Interest", value: "Site visit", after: 6 },
];

const STEP_MS = 1900;
const HOLD_MS = 4200;

export function CallDemo() {
  const [shown, setShown] = useState(1);

  useEffect(() => {
    // Reduced motion: jump straight to the finished call and stay there.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const done = shown >= script.length;
    if (reduced && done) return;
    const t = setTimeout(
      () => setShown(reduced ? script.length : done ? 1 : shown + 1),
      reduced ? 0 : done ? HOLD_MS : STEP_MS,
    );
    return () => clearTimeout(t);
  }, [shown]);

  const finished = shown >= script.length;
  const visible = script.slice(Math.max(0, shown - 4), shown);
  const seconds = 14 + shown * 9;
  const clock = `00:${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 rounded-[40px] bg-[radial-gradient(60%_60%_at_50%_0%,rgb(46_232_138/0.22),transparent_70%)] blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-elev/90 shadow-[0_40px_120px_-40px_rgb(0_0_0/0.9)] backdrop-blur">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
            QualIQ · Live call<span className="hidden sm:inline"> · Lead #2041</span>
          </p>
          <span className="w-12" />
        </div>

        <div className="grid md:grid-cols-[1.45fr_1fr]">
          {/* Conversation */}
          <div className="border-b border-line p-5 sm:p-6 md:border-b-0 md:border-r">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <PhoneCall size={17} />
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse-dot rounded-full bg-brand" />
                </div>
                <div>
                  <p className="text-sm font-medium text-fg">Shruti · AI voice</p>
                  <p className="text-xs text-muted">Calling Rohan Mehta · Hindi</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Waveform active={!finished} />
                <span className="font-mono text-xs tabular-nums text-muted">{clock}</span>
              </div>
            </div>

            <ul className="mt-6 flex min-h-[200px] sm:min-h-[248px] flex-col justify-end gap-3" aria-live="polite">
              {visible.map((line, i) => (
                <li
                  key={`${shown}-${i}`}
                  className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-[13.5px] leading-relaxed ${
                    line.who === "ai"
                      ? "self-start rounded-tl-sm border border-line bg-card text-fg"
                      : "self-end rounded-tr-sm bg-brand text-brand-ink"
                  } ${i === visible.length - 1 ? "animate-fade-in" : ""}`}
                >
                  {line.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Qualification panel */}
          <div className="p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
              Qualification
            </p>
            <ul className="mt-4 space-y-2.5">
              {facts.map((fact) => {
                const ok = shown >= fact.after;
                return (
                  <li
                    key={fact.label}
                    className="flex items-center justify-between rounded-xl border border-line bg-card px-3.5 py-3"
                  >
                    <span className="text-sm text-muted">{fact.label}</span>
                    <span className="flex items-center gap-2 text-sm">
                      {ok ? (
                        <>
                          <span className="text-fg">{fact.value}</span>
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-brand-ink">
                            <Check size={12} strokeWidth={3} />
                          </span>
                        </>
                      ) : (
                        <Loader2 size={15} className="animate-spin text-dim" />
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div
              className={`mt-5 rounded-xl border p-4 transition-colors duration-500 ${
                finished ? "border-brand/40 bg-brand-soft" : "border-line bg-card"
              }`}
            >
              <p className="text-xs text-muted">Lead status</p>
              <p className={`mt-1 text-base font-semibold ${finished ? "text-brand" : "text-fg"}`}>
                {finished ? "Positive · Visit booked" : "Qualifying…"}
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs text-muted">
                <MessageCircle size={13} className={finished ? "text-brand" : "text-dim"} />
                {finished ? "Sat 11:00 AM · WhatsApp confirmation sent" : "Assigned to Priya after the call"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Waveform({ active }: { active: boolean }) {
  return (
    <span className="flex h-5 items-center gap-[3px]" aria-hidden="true">
      {[0.2, 0.5, 0.1, 0.7, 0.35, 0.6, 0.15].map((delay, i) => (
        <span
          key={i}
          className={`h-full w-[3px] origin-center rounded-full bg-brand ${active ? "animate-wave" : "scale-y-[0.3] opacity-50"}`}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </span>
  );
}
