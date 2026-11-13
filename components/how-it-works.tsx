import { CalendarCheck, Inbox, PhoneCall } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { SectionCta } from "./section-cta";
import { Accent, Container, SectionHeading } from "./ui";

const steps: {
  n: string;
  icon: ReactNode;
  title: string;
  body: string;
  visual: ReactNode;
}[] = [
  {
    n: "01",
    icon: <Inbox size={18} />,
    title: "Every lead, one list",
    body: "Ads, portals, WhatsApp, your website and walk-ins all land in one place. Duplicates merge by phone number, and each new lead goes to the next salesperson in line. No spreadsheets were harmed.",
    visual: <CaptureVisual />,
  },
  {
    n: "02",
    icon: <PhoneCall size={18} />,
    title: "Your AI agent calls. Instantly.",
    body: "The moment a lead lands, QualIQ rings them. It asks about budget, location and timeline, then marks them Positive, Needs more info or Not a fit, with notes your team will actually read.",
    visual: <QualifyVisual />,
  },
  {
    n: "03",
    icon: <CalendarCheck size={18} />,
    title: "Visit booked. Reminders sent.",
    body: "The buyer picks a slot on the call. It sends the WhatsApp confirmation, nudges them 24 hours and 2 hours before, and briefs your salesperson.",
    visual: <BookVisual />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From ad click to site visit. <Accent>Zero chasing.</Accent>
            </>
          }
          body="Buyers enquire with three real estate developers at once. The first one to call usually gets the visit. QualIQ makes sure that’s you."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-elev">
                <div className="flex h-56 items-center justify-center border-b border-line bg-[radial-gradient(80%_80%_at_50%_100%,rgb(46_232_138/0.08),transparent)] p-6">
                  {step.visual}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      {step.icon}
                    </span>
                    <span className="font-mono text-xs text-dim">{step.n}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <SectionCta text="See it work on your own leads, live on a call." />
      </Container>
    </section>
  );
}

function CaptureVisual() {
  const rows = [
    { name: "Rohan Mehta", src: "Meta ad", fresh: true },
    { name: "Ananya Shah", src: "99acres", fresh: false },
    { name: "Vikram Patel", src: "WhatsApp", fresh: false },
  ];
  return (
    <div className="w-full max-w-[260px] space-y-2">
      {rows.map((r) => (
        <div
          key={r.name}
          className={`flex items-center justify-between rounded-lg border px-3 py-2.5 text-xs ${
            r.fresh ? "border-brand/40 bg-brand-soft" : "border-line bg-card"
          }`}
        >
          <span className="text-fg">{r.name}</span>
          <span className={r.fresh ? "font-mono text-brand" : "font-mono text-dim"}>
            {r.fresh ? "NEW · " : ""}
            {r.src}
          </span>
        </div>
      ))}
    </div>
  );
}

function QualifyVisual() {
  return (
    <div className="w-full max-w-[260px] rounded-xl border border-line bg-card p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted">AI score</span>
        <span className="font-mono text-xs text-brand">86 / 100</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div className="h-full w-[86%] rounded-full bg-brand" />
      </div>
      <ul className="mt-4 space-y-2 text-xs">
        {["Budget fits (₹85 L)", "Wants GIFT City", "Agreed to a visit"].map((t) => (
          <li key={t} className="flex items-center gap-2 text-fg">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookVisual() {
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
  return (
    <div className="w-full max-w-[260px]">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">Saturday</p>
      <div className="grid grid-cols-3 gap-2">
        {slots.map((s) => (
          <span
            key={s}
            className={`rounded-lg border py-2 text-center font-mono text-xs ${
              s === "11:00"
                ? "border-brand bg-brand font-semibold text-brand-ink"
                : "border-line bg-card text-muted"
            }`}
          >
            {s}
          </span>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-muted">Reminders at −24h and −2h</p>
    </div>
  );
}
