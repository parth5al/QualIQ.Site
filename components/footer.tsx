import { Logo } from "./logo";
import { Container } from "./ui";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-14">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The AI sales team for real estate developers in India. Never takes a chai break.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16 text-sm">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Product</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted transition-colors hover:text-fg">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">Company</p>
            <ul className="mt-4 space-y-3">
              <li><a href={site.demoUrl} className="text-muted transition-colors hover:text-fg">Book a demo</a></li>
              <li><a href={site.demoUrl} className="text-muted transition-colors hover:text-fg">Contact</a></li>
              <li><a href="/privacy" className="text-muted transition-colors hover:text-fg">Privacy policy</a></li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="mt-14">
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-xs text-dim sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} QualIQ. All rights reserved.</p>
          <p>Made in India, for people who sell homes.</p>
        </div>
      </Container>
    </footer>
  );
}
