import {
  Stethoscope,
  PhoneCall,
  Mail,
  MapPin,
  ArrowUp,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Me', href: '#why-me' },
  { label: 'Patient Stories', href: '#testimonials' },
  { label: 'Book Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container-px grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Stethoscope className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-base font-bold">
                Dr. Arjun Mehra
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-background/60">
                Consultant Physician
              </span>
            </span>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-background/70">
            Compassionate, evidence-based internal medicine in the heart of
            Alkapuri, Vadodara — caring for families since 2010.
          </p>
        </div>

        {/* Quick links */}
        <nav className="flex flex-col gap-3" aria-label="Footer">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-background/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-background/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                63 Wellness Centre, Alkapuri,
                <br />
                Vadodara, Gujarat 390007
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneCall className="h-4 w-4 shrink-0 text-primary" />
              <a
                href="tel:+919788901235"
                className="transition-colors hover:text-primary"
              >
                +91 97889 01235
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a
                href="mailto:care@drarjunmehra.in"
                className="transition-colors hover:text-primary"
              >
                care@drarjunmehra.in
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-background/90">
            Clinic Hours
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-background/70">
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              Mon – Sat: 9am – 8pm
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              Sunday: By appointment
            </li>
          </ul>
          <a
            href="#appointment"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-background/60">
            &copy; {new Date().getFullYear()} Dr. Arjun Mehra. All rights
            reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-medium text-background/70 transition-colors hover:text-primary"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
                 {/* Credit */}
          <p className="flex flex-wrap font-body text-xs text-background/60 items-center justify-center gap-1.5 lg:justify-start">
            <span>Made with</span>
            <span className="animate-pulse text-red-500">❤</span>
            <span>by</span>
            <a
              href="https://creyotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 font-medium hover:underline  transition-colors duration-300 hover:text-primary"
            >
              Creyotech IT Services
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
