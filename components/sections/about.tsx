import Image from 'next/image';
import {
  GraduationCap,
  Stethoscope,
  HeartPulse,
  Languages,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const CREDENTIALS = [
  'MBBS — Baroda Medical College, 2009',
  'MD, Internal Medicine — AIIMS, New Delhi, 2013',
  'Fellowship in Preventive Cardiology, 2016',
  'Member, Indian Medical Association',
];

const FOCUS = [
  { icon: Stethoscope, title: 'Diagnostic Accuracy', desc: 'Thorough evaluations that get to the root cause, fast.' },
  { icon: HeartPulse, title: 'Preventive Care', desc: 'Proactive screening and lifestyle guidance to stay ahead of illness.' },
];

const LANGUAGES = ['English', 'Hindi', 'Gujarati', 'Marathi'];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-px grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Image collage */}
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full">
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-primary/15" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="https://images.pexels.com/photos/12660379/pexels-photo-12660379.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="Dr. Arjun Mehra reviewing patient notes in his clinic"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute -right-3 -bottom-5 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-xl">
            <p className="font-heading text-3xl font-bold leading-none">15+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary-foreground/80">
              Years of Practice
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="About the Doctor"
            title={
              <>
                Meet{' '}
                <span className="text-gradient">Dr. Arjun Mehra</span>
              </>
            }
            description="With over fifteen years in internal medicine, Dr. Mehra blends rigorous diagnostics with genuine empathy — treating every patient as a person, not a chart."
          />

          <p className="reveal -mt-2 text-base leading-relaxed text-muted-foreground">
            Based in the heart of Alkapuri, Vadodara, Dr. Mehra built his
            practice on a simple belief: great medicine is personal. From
            everyday fevers to complex chronic conditions, he takes the time
            to listen, explain, and walk with each patient toward lasting
            wellness.
          </p>

          {/* Credentials */}
          <div className="reveal grid gap-3 sm:grid-cols-2">
            {CREDENTIALS.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground/90">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Focus areas */}
          <div className="reveal grid gap-4 sm:grid-cols-2">
            {FOCUS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="reveal flex flex-wrap items-center gap-3 rounded-xl bg-muted/60 p-4">
            <Languages className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Consults in:
            </span>
            {LANGUAGES.map((lang) => (
              <span
                key={lang}
                className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground/80 shadow-sm"
              >
                {lang}
              </span>
            ))}
          </div>

          {/* Education icon strip */}
          <div className="reveal flex items-center gap-3 text-sm font-medium text-muted-foreground">
            <GraduationCap className="h-5 w-5 text-primary" />
            Trained at Baroda Medical College &amp; AIIMS, New Delhi
          </div>
        </div>
      </div>
    </section>
  );
}
