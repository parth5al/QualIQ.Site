import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { ButtonLink } from "./ui";
import { site } from "@/lib/site";

/** A one-line nudge at the end of a section, with a button that opens the demo email. */
export function SectionCta({
  text,
  label = "Book a demo",
  href = site.demoUrl,
}: {
  text: ReactNode;
  label?: string;
  href?: string;
}) {
  return (
    <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-brand/25 bg-[linear-gradient(90deg,rgb(46_232_138/0.08),transparent_70%)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <p className="text-base font-medium text-fg sm:text-lg">{text}</p>
      <ButtonLink href={href} className="w-full shrink-0 sm:w-auto">
        {label} <ArrowRight size={16} />
      </ButtonLink>
    </div>
  );
}
