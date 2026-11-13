import { BarChart3, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionCta } from "./section-cta";
import { Accent, Container, SectionHeading } from "./ui";

const questions = [
  "Which ad brought the most site visits this month?",
  "What's my cost per site visit, project by project?",
  "Which leads have been waiting more than 4 hours?",
  "How did this week compare with last week?",
  "Which salesperson converts the most visits into bookings?",
];

const projects = [
  { name: "Aurum Heights", cpl: 412, leads: 186, visits: 24 },
  { name: "Skyline Residency", cpl: 655, leads: 97, visits: 11 },
];

export function Reports() {
  const maxCpl = Math.max(...projects.map((p) => p.cpl));

  return (
    <section id="reports" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Reports, by asking"
          title={
            <>
              Skip the Excel sheet. <Accent>Just ask.</Accent>
            </>
          }
          body="QualIQ already knows every lead, call, site visit and rupee of ad spend. Ask a question in plain words and get the answer in seconds, from your real numbers."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line-strong bg-elev">
              <div className="flex items-center gap-2 border-b border-line px-5 py-3">
                <BarChart3 size={15} className="text-brand" />
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Reports</p>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-brand px-4 py-2.5 text-sm text-brand-ink">
                  Compare cost per lead for Aurum Heights and Skyline Residency, last 30 days.
                </p>

                <div className="rounded-2xl rounded-tl-sm border border-line bg-card p-4 sm:p-5">
                  <p className="flex items-center gap-2 text-xs text-muted">
                    <Sparkles size={13} className="text-brand" />
                    QualIQ
                  </p>

                  <div className="mt-4 space-y-4">
                    {projects.map((p, i) => (
                      <div key={p.name}>
                        <div className="flex items-baseline justify-between gap-3 text-sm">
                          <span className="text-fg">{p.name}</span>
                          <span className={`font-mono ${i === 0 ? "text-brand" : "text-muted"}`}>
                            ₹{p.cpl} / lead
                          </span>
                        </div>
                        <div className="mt-1.5 h-2 rounded-full bg-white/[0.05]">
                          <div
                            className={`h-full rounded-full ${i === 0 ? "bg-brand" : "bg-white/25"}`}
                            style={{ width: `${(p.cpl / maxCpl) * 100}%` }}
                          />
                        </div>
                        <p className="mt-1.5 text-xs text-dim">
                          {p.leads} leads · {p.visits} site visits
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-fg">
                    Aurum Heights gets leads <span className="text-brand">37% cheaper</span>, and more
                    of them turn into site visits. Moving ₹20,000 of Skyline’s budget to the
                    Aurum carousel ad is worth testing.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">
              Things people ask
            </p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {questions.map((q) => (
                <li
                  key={q}
                  className="rounded-full border border-line bg-elev px-4 py-2 text-sm text-muted"
                >
                  “{q}”
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              Prefer charts you can check every morning? The standard views are there too: the
              full funnel from lead to booking, lead sources, campaign results and ad spend.
            </p>
          </Reveal>
        </div>
        <SectionCta text="Curious what your own numbers would say?" label="I’m interested" />
      </Container>
    </section>
  );
}
