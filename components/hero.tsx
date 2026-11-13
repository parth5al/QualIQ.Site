import { ArrowRight } from "lucide-react";
import { CallDemo } from "./call-demo";
import { Accent, ButtonLink, Container } from "./ui";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(46_232_138/0.16),transparent)]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <a
            href="#pilot"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] py-1 pl-1 pr-3 text-xs text-muted transition-colors hover:text-fg"
          >
            <span className="rounded-full bg-brand-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-brand">
              Pilot
            </span>
            <span className="sm:hidden">Meet QualIQ</span>
            <span className="hidden sm:inline">Meet QualIQ · pilot opens January 2027</span>
            <ArrowRight size={13} />
          </a>

          <h1 className="text-gradient mt-8 text-balance text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-7xl">
            Leads don’t wait.{" "}
            <span className="block">
              <Accent>Neither does QualIQ.</Accent>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Someone fills your ad form. Before they’ve put their phone down, QualIQ is
            calling them, in Hindi or English. It asks the budget question, books the
            site visit, and hands your team a buyer who’s ready to talk.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={site.demoUrl} className="w-full sm:w-auto">
              Book a demo <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href="#how" variant="ghost" className="w-full sm:w-auto">
              Watch it work
            </ButtonLink>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <CallDemo />
        </div>
      </Container>
    </section>
  );
}
