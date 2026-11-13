import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./reveal";
import { Accent, ButtonLink, Container, SectionHeading } from "./ui";
import { site } from "@/lib/site";

const included = [
  "Unlimited team members",
  "Unlimited projects",
  "All lead-source integrations",
  "Web dashboard and phone app",
  "Pay only when your AI agent talks to someone",
  "GST invoice with every top-up",
];

const usage = [
  { k: "AI call minutes", v: "Credits per minute" },
  { k: "AI-written WhatsApp replies", v: "Credits per reply" },
  { k: "Calls nobody picks up", v: "Free" },
  { k: "Messages your team types", v: "Free" },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          align="center"
          title={
            <>
              No seats. No salaries. <Accent>Pay per conversation.</Accent>
            </>
          }
          body="Top up credits, and QualIQ spends them only when it’s actually talking to someone. Credits last 12 months."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="grid overflow-hidden rounded-3xl border border-line-strong bg-elev md:grid-cols-2">
            <div className="p-7 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Every workspace gets</p>
              <ul className="mt-6 space-y-3.5">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-fg">
                    <Check size={16} className="shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href={site.demoUrl} className="mt-9 w-full sm:w-auto">
                Get pilot pricing <ArrowRight size={16} />
              </ButtonLink>
            </div>
            <div className="border-t border-line bg-card/60 p-7 sm:p-10 md:border-l md:border-t-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">What uses credits</p>
              <dl className="mt-6 divide-y divide-line">
                {usage.map((u) => (
                  <div key={u.k} className="flex items-center justify-between gap-4 py-3.5 text-sm">
                    <dt className="text-muted">{u.k}</dt>
                    <dd className={u.v === "Free" ? "font-medium text-brand" : "text-fg"}>{u.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-dim">
                Rates are being finalised for the January 2027 launch. Pilot developers get them first.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
