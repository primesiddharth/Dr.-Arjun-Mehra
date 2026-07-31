'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Stethoscope, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Me', href: '#why-me' },
  { label: 'Patients', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container-px flex h-16 items-center justify-between sm:h-20">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2.5"
          aria-label="Dr. Arjun Mehra — home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform hover:scale-105">
            <Stethoscope className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-bold text-foreground sm:text-lg">
              Dr. Arjun Mehra
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Consultant Physician
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919788901235"
            className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <PhoneCall className="h-4 w-4" />
            +91 97889 01235
          </a>
          <a
            href="#appointment"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-lg transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919788901235"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2 rounded-lg px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <PhoneCall className="h-5 w-5 text-primary" />
            +91 97889 01235
          </a>
          <a
            href="#appointment"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground shadow-sm"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
