# QualIQ website

Marketing site for QualIQ, the AI sales team for Indian real estate developers. Dark theme, green brand colour. Built with Next.js 16, Tailwind CSS 4 and lucide-react.

## Run it

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Where things live

- `app/page.tsx`: the page, section by section
- `components/`: one file per section (hero, live call demo, two ways (before vs with QualIQ), how it works, features, who it's for, pricing, FAQ, CTA, footer)
- `app/globals.css`: brand colour tokens (`--color-brand` is the green) and animations
- `lib/site.ts`: domain, app login URL, contact email and demo link

## Placeholders to replace before launch

- `lib/site.ts`: the site lives at `qualiq.io`. "Book a demo" opens an email to `xspacesai@gmail.com` with the subject and message already filled in (edit `demoSubject` and `demoBody`). Every contact link (Book a demo, Contact, "I'm interested") opens that same email. There is no Log in link until the app is live at `app.qualiq.io`.
- Pricing shows how credits work but no rates; add numbers once the pricing check is done.
- The call transcript and names in the demo (Aurum Heights, Rohan, Priya) are made up.
