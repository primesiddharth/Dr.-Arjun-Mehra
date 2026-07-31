import {
  Clock,
  UserRound,
  Microscope,
  HandHeart,
  FileText,
  PhoneCall,
} from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const REASONS = [
  {
    icon: Clock,
    title: 'Unhurried Appointments',
    desc: 'No 5-minute visits. Every consultation gives you the time to ask, understand, and decide.',
  },
  {
    icon: Microscope,
    title: 'Modern Diagnostics',
    desc: 'Evidence-led investigations with clear interpretation — you always know what your results mean.',
  },
  {
    icon: HandHeart,
    title: 'Personalised Treatment',
    desc: 'Care plans built around your lifestyle, history, and goals — never one-size-fits-all.',
  },
  {
    icon: FileText,
    title: 'Transparent Records',
    desc: 'Detailed, easy-to-read summaries after every visit so you stay informed and in control.',
  },
  {
    icon: UserRound,
    title: 'Continuity of Care',
    desc: 'One trusted doctor who knows your history across every visit and every season.',
  },
  {
    icon: PhoneCall,
    title: 'Accessible & Responsive',
    desc: 'Quick follow-ups and reachable support — your concerns never fall through the cracks.',
  },
];

const METRICS = [
  { value: '98%', label: 'Patient satisfaction' },
  { value: '15+', label: 'Years of experience' },
  { value: '20+', label: 'Areas of expertise' },
  { value: '7', label: 'Days a week available' },
];

export function WhyChooseMe() {
  return (
    <section id="why-me" className="relative py-20 sm:py-28">
      <div className="container-px flex flex-col gap-12">
        <SectionHeading
          eyebrow="Why Choose Me"
          title={
            <>
              Medicine done{' '}
              <span className="text-gradient">the right way</span>
            </>
          }
          description="Patients stay with Dr. Mehra for years because the care is thorough, honest, and genuinely personal. Here&apos;s what sets the practice apart."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className="reveal flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics band */}
        <div className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center justify-center gap-1 bg-primary px-6 py-8 text-center text-primary-foreground"
            >
              <span className="font-heading text-3xl font-bold sm:text-4xl">
                {metric.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-wide text-primary-foreground/85 sm:text-sm">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
