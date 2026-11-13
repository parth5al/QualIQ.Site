const email = "xspacesai@gmail.com";

const demoSubject = "Demo request: QualIQ";
const demoBody = `Hi QualIQ team,

I'm interested in QualIQ and would like to book a demo for my company.

Name:
Company:
Project(s) and city:
Phone number:
Best time to call:

Thanks!`;

export const site = {
  name: "QualIQ",
  url: "https://qualiq.io",
  email,
  demoUrl: `mailto:${email}?subject=${encodeURIComponent(demoSubject)}&body=${encodeURIComponent(demoBody)}`,
};

export const navLinks = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];
