import {
  ArrowRight,
  Headphones,
  LineChart,
  MessageCircle,
  PauseCircle,
  PhoneIncoming,
  PhoneOutgoing,
  ShieldCheck,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { SectionCta } from "./section-cta";
import { Accent, Container, SectionHeading } from "./ui";

function Card({
  icon,
  title,
  body,
  children,
  className = "",
}: {
  icon: ReactNode;
  title: string;
  body: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-elev p-6 transition-colors hover:border-line-strong sm:p-7 ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-card text-brand">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{body}</p>
      {children ? <div className="mt-6 flex-1">{children}</div> : null}
    </article>
  );
}

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Meet QualIQ"
          title={
            <>
              QualIQ dials. <Accent>You close.</Accent>
            </>
          }
          body="Everything between “new enquiry” and “see you at the site”, handled. Your salespeople show up for the part that needs a human."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          <Reveal className="md:col-span-2 lg:col-span-4">
            <Card
              icon={<Headphones size={18} />}
              title="A voice that speaks your buyer’s language"
              body="Hindi or English, inbound and outbound. It calls new leads, picks up when buyers call you, and never quotes a price that isn’t on your approved list. No freelancing."
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <AgentChip name="Shruti" lang="Hindi" mode="Outbound" icon={<PhoneOutgoing size={14} />} status="On call · 02:14" live />
                <AgentChip name="Riya" lang="English" mode="Inbound" icon={<PhoneIncoming size={14} />} status="Answering · 00:41" live />
                <AgentChip name="Shruti" lang="Hindi" mode="Outbound" icon={<PhoneOutgoing size={14} />} status="Dialing next lead" />
                <AgentChip name="Riya" lang="English" mode="Follow-up" icon={<PhoneOutgoing size={14} />} status="Idle · 6 queued" />
              </div>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={80}>
            <Card
              icon={<MessageCircle size={18} />}
              title="WhatsApp, minus the copy-paste"
              body="Brochures, locations, follow-ups. Your AI agent drafts the replies and shows exactly when the 24-hour reply window closes."
            >
              <div className="space-y-2 text-xs">
                <p className="w-fit max-w-[85%] rounded-xl rounded-tl-sm border border-line bg-card px-3 py-2 text-fg">
                  Can you share the floor plan for 2 BHK?
                </p>
                <p className="ml-auto w-fit max-w-[85%] rounded-xl rounded-tr-sm bg-brand px-3 py-2 text-brand-ink">
                  Sure Rohan ji, here it is. Shall I hold Saturday 11 AM for you?
                </p>
                <p className="pt-1 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
                  Reply window · 18h left
                </p>
              </div>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-2">
            <Card
              icon={<ArrowRight size={18} />}
              title="Hands over before it gets awkward"
              body="Buyer wants a human? It transfers the call live, or books a callback within 2 working hours. Leads ignored for 4 hours go to the manager. Nobody slips through."
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full border border-line bg-card px-3 py-1.5 text-muted">AI agent</span>
                <ArrowRight size={14} className="text-brand" />
                <span className="rounded-full border border-brand/40 bg-brand-soft px-3 py-1.5 text-brand">Priya · Sales</span>
              </div>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={80}>
            <Card
              icon={<LineChart size={18} />}
              title="Know what actually sells"
              body="Qualified, visit booked, visit done, re-visit, booking. See which ad brings real buyers and which campaign gets them to sign, not just who clicked."
            >
              <Ladder />
            </Card>
          </Reveal>

          <Reveal className="md:col-span-2 lg:col-span-2" delay={160}>
            <Card
              icon={<Workflow size={18} />}
              title="Follow-ups on autopilot"
              body="Chain calls, WhatsApp, SMS and email with waits in between. Calling limits and quiet hours are built in: persistent, never pushy."
            >
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                {["AI call", "wait 1d", "WhatsApp", "wait 2d", "AI call"].map((s, i) => (
                  <span
                    key={i}
                    className={`rounded-md border px-2 py-1 ${
                      s.startsWith("wait") ? "border-dashed border-line text-dim" : "border-line bg-card text-fg"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <Card
              icon={<Smartphone size={18} />}
              title="The site team’s pocket sidekick"
              body="Log walk-ins at the site office, see today’s visits, put units on hold, and get pinged the second a hot lead is yours."
            >
              <ul className="space-y-1.5 text-xs">
                {[
                  { t: "11:00", n: "Rohan Mehta", s: "Confirmed" },
                  { t: "12:30", n: "Ananya Shah", s: "Running late" },
                ].map((v) => (
                  <li key={v.t} className="flex items-center gap-3 rounded-lg border border-line bg-card px-3 py-2">
                    <span className="font-mono text-dim">{v.t}</span>
                    <span className="flex-1 text-fg">{v.n}</span>
                    <span className={v.s === "Confirmed" ? "text-brand" : "text-muted"}>{v.s}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={80}>
            <Card
              icon={<ShieldCheck size={18} />}
              title="You hold the keys"
              body="Decide who sees which leads, who confirms bookings and who can export data. Every change is logged and opt-outs are final. Wrong price in an ad? One tap pauses everything on that project."
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs text-fg">
                <PauseCircle size={14} className="text-brand" />
                Pause everything on Aurum Heights
              </span>
            </Card>
          </Reveal>
        </div>
        <SectionCta text="Want a closer look at what it can do for your team?" label="I’m interested" />
      </Container>
    </section>
  );
}

function AgentChip({
  name,
  lang,
  mode,
  icon,
  status,
  live = false,
}: {
  name: string;
  lang: string;
  mode: string;
  icon: ReactNode;
  status: string;
  live?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-line bg-card px-3.5 py-3">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
          live ? "bg-brand-soft text-brand" : "bg-white/[0.05] text-dim"
        }`}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-fg">
          {name} <span className="text-dim">· {lang}</span>
        </p>
        <p className="truncate text-xs text-muted">
          {mode} · {status}
        </p>
      </div>
      {live ? <span className="h-2 w-2 shrink-0 animate-pulse-dot rounded-full bg-brand" /> : null}
    </div>
  );
}

function Ladder() {
  const steps = [
    { label: "Qualified", w: 100 },
    { label: "Visit booked", w: 64 },
    { label: "Visit done", w: 46 },
    { label: "Re-visit", w: 28 },
    { label: "Booking", w: 16 },
  ];
  return (
    <div className="space-y-1.5" aria-hidden="true">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3">
          <span className="w-20 shrink-0 text-[11px] text-muted">{s.label}</span>
          <span className="h-2 flex-1 rounded-full bg-white/[0.04]">
            <span
              className="block h-full rounded-full bg-brand"
              style={{ width: `${s.w}%`, opacity: 1 - i * 0.14 }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}
