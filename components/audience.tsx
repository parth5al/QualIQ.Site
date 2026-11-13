import { Check } from "lucide-react";
import { Reveal } from "./reveal";
import { Accent, Container, SectionHeading } from "./ui";

const points = [
  "Run Meta and Google ads and see which ones bring buyers who actually visit",
  "Units & Prices per project, so your AI agent only quotes what’s approved",
  "Every project in one workspace, with no limit on projects or team members",
  "Round-robin assignment across your sales team, with manager escalation",
  "Admins confirm bookings; every status change is on record",
];

export function Audience() {
  return (
    <section id="who" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Who it's for"
          title={
            <>
              Built for real estate developers who’d rather <Accent>sell than dial.</Accent>
            </>
          }
        />

        <Reveal className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-line bg-elev p-6 sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
              For real estate developers selling their own projects
            </h3>
            <ul className="mt-6 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-brand/25 bg-[radial-gradient(100%_100%_at_100%_0%,rgb(46_232_138/0.14),transparent_60%)] p-6 sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
              Picture this
            </p>
            <p className="mt-6 font-serif text-2xl leading-snug text-fg sm:text-3xl">
              “Last night’s enquiries get called the moment the clock hits 9. Your team walks in
              to booked visits, not a list of numbers to dial.”
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
