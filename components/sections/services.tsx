import {
  HeartPulse,
  Activity,
  ShieldPlus,
  Brain,
  Stethoscope,
  Syringe,
  ArrowUpRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const SERVICES = [
  {
    icon: Stethoscope,
    title: 'General Physician Consultation',
    desc: 'Comprehensive evaluation and treatment for fevers, infections, fatigue, and everyday health concerns.',
  },
  {
    icon: Activity,
    title: 'Chronic Disease Management',
    desc: 'Ongoing, coordinated care for diabetes, hypertension, thyroid, and lifestyle-related conditions.',
  },
  {
    icon: ShieldPlus,
    title: 'Preventive Health Checkups',
    desc: 'Personalised screening packages that catch risks early — before they become problems.',
  },
  {
    icon: HeartPulse,
    title: 'Cardiac Risk Assessment',
    desc: 'Detailed heart-health evaluation with ECG review, lipid profiling, and lifestyle counselling.',
  },
  {
    icon: Brain,
    title: 'Lifestyle & Wellness Counselling',
    desc: 'Practical, sustainable guidance on nutrition, sleep, stress, and exercise tailored to you.',
  },
  {
    icon: Syringe,
    title: 'Vaccination & Immunity Care',
    desc: 'Age-appropriate immunisations, booster guidance, and immunity planning for all ages.',
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-muted/40 py-20 sm:py-28"
    >
      <div className="container-px flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="What I Offer"
          title={
            <>
              Comprehensive care,{' '}
              <span className="text-gradient">all under one roof</span>
            </>
          }
          description="From routine consultations to long-term chronic care, every service is designed around your wellbeing and delivered with attention to detail."
        />

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }, index) => (
            <article
              key={title}
              className="reveal group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              {/* hover wash */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-primary/5 group-hover:to-accent/20" />

              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>

              <div className="relative flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>

              <a
                href="#appointment"
                className="relative mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
