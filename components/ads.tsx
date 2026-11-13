import { Check, Megaphone, PhoneCall, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { SectionCta } from "./section-cta";
import { Accent, Container, SectionHeading } from "./ui";

const steps: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <Sparkles size={18} />,
    title: "The AI makes your ad",
    body: "Pick the project. QualIQ chooses your best render, writes the headline and offer from your approved prices, and designs it in feed and story sizes, RERA number included. Want a change? Edit it like a Canva design.",
  },
  {
    icon: <Megaphone size={18} />,
    title: "It posts to Facebook and Instagram",
    body: "One tap sends it live to your Meta ad account as a lead ad. Your Admin gives the final OK. No wrestling with Ads Manager.",
  },
  {
    icon: <PhoneCall size={18} />,
    title: "Leads land. The phone rings.",
    body: "Every form fill from that ad flows straight in and gets an instant call. You see which ad brought buyers who actually visited, not just who clicked.",
  },
];

export function Ads() {
  return (
    <section id="ads" className="overflow-x-clip py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ads on autopilot"
          title={
            <>
              It makes the ad. Posts the ad. <Accent>Calls the leads.</Accent>
            </>
          }
          body="Tell QualIQ which project to promote. It writes the copy, designs the creative from your real project photos and posts it as a Facebook and Instagram lead ad. Every lead it brings in gets called the moment it arrives."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <li className="flex gap-4 rounded-2xl border border-line bg-elev p-5 sm:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    {s.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-fg sm:text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={150}>
            <AdPreview />
          </Reveal>
        </div>
        <SectionCta text="Show me an ad it would make for my project." label="Book a demo" />
      </Container>
    </section>
  );
}

/** A mock Facebook lead ad, with the lead it produced underneath. */
function AdPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[40px] bg-[radial-gradient(60%_60%_at_50%_40%,rgb(46_232_138/0.18),transparent_70%)] blur-2xl"
      />
      <p className="relative mb-3 flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand-soft px-3 py-1.5 text-xs text-brand">
        <Sparkles size={13} />
        Written, designed and posted by QualIQ
      </p>
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-card">
        <div className="flex items-center gap-3 px-4 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-semibold text-brand-ink">
            A
          </span>
          <div className="flex-1">
            <p className="text-sm font-medium text-fg">Aurum Heights</p>
            <p className="text-xs text-dim">Sponsored · Facebook &amp; Instagram</p>
          </div>
          <span className="rounded-full border border-brand/40 bg-brand-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-brand">
            Live
          </span>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(160deg,#173828_0%,#0b1712_55%,#050706_100%)]">
          {/* Stylised tower render */}
          <div aria-hidden="true" className="absolute bottom-0 left-[48%] h-[62%] w-[16%] rounded-t-md border border-white/10 bg-[repeating-linear-gradient(0deg,rgb(255_255_255/0.08)_0_2px,transparent_2px_14px)] bg-white/[0.04]" />
          <div aria-hidden="true" className="absolute bottom-0 left-[66%] h-[88%] w-[18%] rounded-t-md border border-white/10 bg-[repeating-linear-gradient(0deg,rgb(46_232_138/0.22)_0_2px,transparent_2px_14px)] bg-white/[0.05]" />
          <div aria-hidden="true" className="absolute bottom-0 left-[86%] h-[50%] w-[11%] rounded-t-md border border-white/10 bg-[repeating-linear-gradient(0deg,rgb(255_255_255/0.08)_0_2px,transparent_2px_14px)] bg-white/[0.04]" />
          <div className="absolute left-4 top-4 max-w-[46%]">
            <p className="font-serif text-2xl italic leading-tight text-fg">Your 2 BHK in GIFT City</p>
            <p className="mt-1 text-sm text-brand">from ₹82 L</p>
          </div>
          <p className="absolute inset-x-0 bottom-0 bg-black/60 px-4 py-1.5 font-mono text-[10px] tracking-[0.08em] text-muted">
            RERA No. PR/GJ/GANDHINAGAR/XXXX · added automatically
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <p className="text-sm text-fg">Book a free site visit this weekend</p>
          <span className="shrink-0 rounded-md bg-white/10 px-3 py-1.5 text-xs font-medium text-fg">Sign up</span>
        </div>
      </div>

      <div className="relative mt-3 flex items-center gap-3 rounded-xl border border-brand/40 bg-elev px-4 py-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-brand-ink">
          <Check size={13} strokeWidth={3} />
        </span>
        <p className="text-sm text-fg">
          New lead from this ad: Rohan Mehta.{" "}
          <span className="text-brand">AI calling now…</span>
        </p>
      </div>
    </div>
  );
}
