import { ArrowRight } from "lucide-react";
import { Accent, ButtonLink, Container, Eyebrow } from "./ui";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section id="pilot" className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-elev px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden="true"
            className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_70%_at_50%_100%,black,transparent)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-brand/25 blur-[100px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <Eyebrow>Pilot · January 2027</Eyebrow>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] text-fg sm:text-6xl">
              Your competitor calls tomorrow. <Accent>QualIQ calls now.</Accent>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted sm:text-lg">
              We’re taking a handful of developers into the pilot. Bring one project and
              we’ll put QualIQ on your leads together.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={site.demoUrl} className="w-full sm:w-auto">
                Book a demo <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
