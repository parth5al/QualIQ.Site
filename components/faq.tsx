import { Plus } from "lucide-react";
import { Container, SectionHeading } from "./ui";

const faqs = [
  {
    q: "Does it really speak Hindi?",
    a: "Haan ji. Run Hindi and English voices, each with its own name. Your AI agent introduces your project, asks about budget, location and timeline, and writes a summary on the lead after every call.",
  },
  {
    q: "How instant is instant?",
    a: "It calls the moment an enquiry lands, any time between 9 AM and 9 PM. A lead that arrives at midnight gets a call when the window opens, because nobody wants a property call at 2 AM. Overseas buyers are called within the same hours in their own time zone.",
  },
  {
    q: "What happens when a buyer wants to talk to a person?",
    a: "It transfers the call live if a salesperson is free. Otherwise it books a callback within 2 working hours. If nobody acts on a lead for 4 working hours, it goes to that person's manager.",
  },
  {
    q: "Won’t it annoy people?",
    a: "No. At most 2 call attempts a day for up to 3 days, then it switches to a message or hands a task to your team. Anyone who says “don’t call me” is never contacted again.",
  },
  {
    q: "Which lead sources can we connect?",
    a: "Meta Lead Ads, Google Ads, LinkedIn Lead Gen, WhatsApp, 99acres, MagicBricks, Housing.com, JustDial, IndiaMART, any website form through a webhook, Zapier or Make, and CSV or Excel imports.",
  },
  {
    q: "Is our customers’ data safe?",
    a: "Staff see only the leads assigned to them, and only Admins can export data. Every export and every status change is logged. When a customer's data is deleted, it is wiped from the AI’s memory too.",
  },
  {
    q: "When can we start?",
    a: "We're onboarding a small group of pilot developers for January 2027. Book a demo and we’ll set QualIQ up on your leads with you.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Things real estate developers ask before saying yes"
          body="Anything else? Ask us on the demo call."
        />
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium text-fg [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus
                  size={18}
                  className="shrink-0 text-muted transition-transform duration-300 group-open:rotate-45 group-open:text-brand"
                />
              </summary>
              <p className="-mt-1 pb-6 pr-10 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
