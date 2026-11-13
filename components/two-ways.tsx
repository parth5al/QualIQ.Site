import { Check, X } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionCta } from "./section-cta";
import { Accent, Container, SectionHeading } from "./ui";

const usual = [
  { t: "7:42 PM", e: "Rohan fills your Meta ad form for a 2 BHK." },
  { t: "7:43 PM", e: "The lead lands in a sheet. Your team has gone home." },
  { t: "Next day, 11:10 AM", e: "A salesperson finally calls." },
  { t: "11:10 AM", e: "“Sorry, I’ve already booked a visit somewhere else.”" },
];

const lmai = [
  { t: "7:42 PM", e: "Rohan fills your Meta ad form for a 2 BHK." },
  { t: "Seconds later", e: "Your AI agent calls him." },
  { t: "7:46 PM", e: "Budget ₹85 L, wants GIFT City, keen to see it." },
  { t: "7:47 PM", e: "Saturday 11 AM visit booked. Location sent on WhatsApp." },
];

export function TwoWays() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why instant matters"
          title={
            <>
              Two ways to handle a <Accent>7:42 PM</Accent> enquiry.
            </>
          }
          body="Same lead, same ad, same evening. Only one of these ends with a site visit."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal>
            <Timeline
              label="The usual way"
              rows={usual}
              outcome="Lead lost to a faster developer"
              good={false}
            />
          </Reveal>
          <Reveal delay={120}>
            <Timeline
              label="With QualIQ"
              rows={lmai}
              outcome="Visit booked before dinner"
              good
            />
          </Reveal>
        </div>
        <SectionCta text="Be the developer who calls first, every time." label="I’m interested" />
      </Container>
    </section>
  );
}

function Timeline({
  label,
  rows,
  outcome,
  good,
}: {
  label: string;
  rows: { t: string; e: string }[];
  outcome: string;
  good: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${
        good
          ? "border-brand/30 bg-[radial-gradient(100%_80%_at_100%_0%,rgb(46_232_138/0.12),transparent_60%)] bg-elev"
          : "border-line bg-elev"
      }`}
    >
      <p className={`font-mono text-[11px] uppercase tracking-[0.16em] ${good ? "text-brand" : "text-dim"}`}>
        {label}
      </p>
      <ol className="mt-6 flex-1 space-y-5 border-l border-line pl-5">
        {rows.map((r, i) => (
          <li key={i} className="relative">
            <span
              className={`absolute -left-[25px] top-1.5 h-2 w-2 rounded-full ${
                good ? "bg-brand" : "bg-dim"
              }`}
            />
            <p className={`font-mono text-xs ${good ? "text-brand" : "text-dim"}`}>{r.t}</p>
            <p className={`mt-1 text-[15px] leading-relaxed ${good ? "text-fg" : "text-muted"}`}>{r.e}</p>
          </li>
        ))}
      </ol>
      <p
        className={`mt-8 flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-medium ${
          good ? "border-brand/40 bg-brand-soft text-brand" : "border-line bg-card text-muted"
        }`}
      >
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full ${
            good ? "bg-brand text-brand-ink" : "bg-white/10 text-muted"
          }`}
        >
          {good ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
        </span>
        {outcome}
      </p>
    </div>
  );
}
