import Image from 'next/image';
import {
  ShieldCheck,
  CalendarCheck,
  Award,
  Stethoscope,
  ArrowRight,
  Star,
} from 'lucide-react';

const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '12k+', label: 'Patients Treated' },
  { value: '4.9', label: 'Patient Rating' },
];

const HIGHLIGHTS = [
  { icon: ShieldCheck, text: 'Evidence-based care' },
  { icon: Award, text: 'MD, Internal Medicine' },
  { icon: CalendarCheck, text: 'Same-day appointments' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      {/* Decorative background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent/40 blur-3xl"
      />

      <div className="container-px relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — copy */}
        <div className="reveal flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Accepting new patients
          </span>

          <h1 className="text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
            Compassionate care for a{' '}
            <span className="text-gradient">healthier tomorrow</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m <strong className="font-semibold text-foreground">Dr. Arjun Mehra</strong>,
            a consultant physician in Vadodara dedicated to personalised
            internal medicine — combining modern diagnostics with a
            human-first approach to keep you and your family well.
          </p>

          {/* Highlights */}
          <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                <Icon className="h-4 w-4 text-primary" />
                {text}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#appointment"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-6 grid w-full max-w-md grid-cols-3 gap-4 border-t border-border/70 pt-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — portrait */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full">
            {/* Glow frame */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-accent/40 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/60 bg-secondary shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/28755708/pexels-photo-28755708.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="Dr. Arjun Mehra, consultant physician, in his clinic"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-top"
              />
              {/* subtle gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating credential card */}
          <div className="absolute -left-4 top-10 hidden animate-float rounded-2xl border border-border bg-background/90 p-4 shadow-xl backdrop-blur-md sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">MD Medicine</span>
                <span className="text-xs text-muted-foreground">MCI Registered</span>
              </div>
            </div>
          </div>

          {/* Floating rating card */}
          <div
            className="absolute -right-2 bottom-8 hidden animate-float rounded-2xl border border-border bg-background/90 p-4 shadow-xl backdrop-blur-md sm:block"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-foreground">4.9</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">1,200+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
