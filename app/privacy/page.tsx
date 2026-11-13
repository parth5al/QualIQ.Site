import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy · QualIQ",
  description:
    "How QualIQ collects, uses and protects personal data, including enquiries handled by QualIQ for real estate developers.",
  alternates: { canonical: "/privacy" },
};

const UPDATED = "31 October 2026";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="text-xl font-semibold tracking-[-0.02em] text-fg">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted [&_strong]:font-medium [&_strong]:text-fg">
        {children}
      </div>
    </section>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-dim">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export default function PrivacyPage() {
  const mail = (
    <a href={`mailto:${site.email}`} className="text-brand underline-offset-4 hover:underline">
      {site.email}
    </a>
  );

  return (
    <>
      <header className="border-b border-line">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="QualIQ home"><Logo /></Link>
          <Link href="/" className="text-sm text-muted transition-colors hover:text-fg">Back to home</Link>
        </Container>
      </header>

      <main>
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brand">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-fg sm:text-5xl">Privacy policy</h1>
          <p className="mt-4 text-sm text-dim">Last updated {UPDATED}</p>

          <div className="mt-10 space-y-10">
            <p className="text-[15px] leading-relaxed text-muted">
              QualIQ (“we”, “us”) makes software that helps real estate developers in India
              respond to property enquiries. This policy explains what personal data we handle, why, and the choices
              you have. It is written to follow India’s Digital Personal Data Protection Act, 2023.
            </p>

            <Section title="Who this policy covers">
              <List items={[
                <><strong>People who enquire about a property</strong> with a real estate developer that uses QualIQ, for example through a Facebook or Instagram lead form, a property portal or the developer’s website.</>,
                <><strong>Real estate developers and their staff</strong> who use QualIQ.</>,
                <><strong>Visitors to this website</strong> and people who contact us.</>,
              ]} />
              <p>
                When you enquire about a developer’s project, <strong>that developer decides how your data is used</strong>,
                and we process it on their behalf to respond to your enquiry. Questions about a specific project can go to
                the developer or to us.
              </p>
            </Section>

            <Section title="What we collect">
              <List items={[
                <><strong>Contact details:</strong> name, phone number, email address.</>,
                <><strong>Enquiry details:</strong> the project you asked about and what you tell us, such as budget, preferred location, home configuration and when you plan to buy.</>,
                <><strong>Conversation records:</strong> call recordings, call transcripts and summaries, and WhatsApp or SMS messages exchanged with you.</>,
                <><strong>Your choices:</strong> your consent to be contacted, and any request not to be contacted.</>,
                <><strong>For developers using QualIQ:</strong> account and business details needed to run the service and issue invoices.</>,
              ]} />
            </Section>

            <Section title="How we use it">
              <List items={[
                <>To contact you about the project you enquired about, by phone, WhatsApp or SMS, <strong>including through an AI assistant</strong>. The assistant introduces itself as a virtual assistant and tells you if you ask whether it is an AI.</>,
                <>To answer your questions using the developer’s approved project information, check what you are looking for, and book or remind you about site visits.</>,
                <>To pass your enquiry to the developer’s sales team when you need a person.</>,
                <>To tell you about the developer’s other projects only if you have agreed to that.</>,
                <>To keep the service secure, fix problems and improve quality, and to meet legal obligations.</>,
              ]} />
              <p><strong>We do not sell your personal data</strong>, and we do not use it to advertise unrelated products to you.</p>
            </Section>

            <Section title="Calls, recordings and contact hours">
              <List items={[
                <>Calls are recorded, and you are told so at the start of the call. If you don’t want to be recorded, you can say so and continue on WhatsApp instead.</>,
                <><strong>Call audio is deleted after 90 days</strong>, unless it is needed to resolve a dispute. Written transcripts and summaries are kept as part of your enquiry.</>,
                <>We only make calls between 9 AM and 9 PM in your local time.</>,
              ]} />
            </Section>

            <Section title="Who we share it with">
              <List items={[
                <><strong>The real estate developer</strong> you enquired with, and their sales team.</>,
                <><strong>Service providers</strong> who help us run QualIQ, such as cloud hosting, telephone and WhatsApp messaging providers, and AI providers that process conversations. They may use your data only to provide their service to us, and AI providers may not use it to train their models.</>,
                <><strong>Authorities</strong>, when the law requires it.</>,
              ]} />
            </Section>

            <Section title="Where it is stored and how long we keep it">
              <p>
                We store personal data <strong>in India</strong>. Some AI processing may happen outside India, with providers
                that are contractually bound not to keep or train on the data.
              </p>
              <p>
                We keep enquiry records for as long as the developer keeps your enquiry, except call audio (90 days, above).
                We delete your data when you ask us to (below), keeping only a minimal record of your number so that you are
                not contacted again.
              </p>
            </Section>

            <Section title="Your choices and rights">
              <List items={[
                <><strong>Stop being contacted at any time:</strong> say so on a call, reply “STOP” on WhatsApp, or email us. We stop straight away.</>,
                <><strong>Access, correct or delete</strong> your personal data, or <strong>withdraw your consent</strong>, by emailing us.</>,
                <><strong>Complain:</strong> email us first and we will respond. You can also approach the Data Protection Board of India.</>,
              ]} />
            </Section>

            <Section title="Security">
              <p>
                We protect data with access controls, encryption in transit and limited staff access. Developers’ staff see
                only the enquiries their role allows. No system is perfectly secure; if a breach affects you, we will tell you
                and the authorities as the law requires.
              </p>
            </Section>

            <Section title="This website">
              <p>
                This website does not use advertising or analytics cookies. If you email us or book a demo, we use your
                message only to reply to you.
              </p>
            </Section>

            <Section title="Children">
              <p>QualIQ is not meant for anyone under 18, and we do not knowingly collect their data.</p>
            </Section>

            <Section title="Changes to this policy">
              <p>If we change this policy, we will update the date at the top of this page.</p>
            </Section>

            <Section title="Contact us">
              <p>For privacy questions, data requests or complaints, email {mail}.</p>
            </Section>
          </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
