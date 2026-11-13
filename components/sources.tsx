import { Container } from "./ui";

const sources = [
  "Meta Lead Ads",
  "Google Ads",
  "WhatsApp",
  "99acres",
  "MagicBricks",
  "Housing.com",
  "JustDial",
  "IndiaMART",
  "LinkedIn Lead Gen",
  "Website forms",
  "Zapier",
  "CSV import",
];

export function Sources() {
  return (
    <section aria-label="Lead sources" className="border-y border-line py-10">
      <Container>
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
          Wherever your buyers raise their hand, QualIQ picks up
        </p>
      </Container>
      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[...sources, ...sources].map((name, i) => (
            <span
              key={i}
              aria-hidden={i >= sources.length}
              className="whitespace-nowrap text-lg font-medium tracking-tight text-fg/45"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "Instant", label: "first call, the moment an enquiry lands*" },
  { value: "0", label: "chai breaks, sick days or Monday moods" },
  { value: "12", label: "lead sources, one tidy list" },
  { value: "₹0", label: "for calls nobody picks up. Ghosted? Not billed." },
];

export function Stats() {
  return (
    <section aria-label="At a glance" className="py-20 sm:py-24">
      <Container>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="bg-bg p-6 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-[-0.04em] text-fg sm:text-[2.6rem]">
                {s.value}
              </dd>
              <dd className="mt-2 text-sm leading-snug text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-xs text-dim">
          * Between 9 AM and 9 PM, in the buyer’s own time zone. We don’t call anyone at 2 AM.
          Nobody should.
        </p>
      </Container>
    </section>
  );
}
