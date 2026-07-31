import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Hypertension patient',
    quote:
      'Dr. Mehra is the first doctor who actually explained my blood pressure readings in a way I understood. His calm, patient approach made all the difference.',
  },
  {
    name: 'Rajesh Patel',
    role: 'Diabetes management',
    quote:
      'After years of jumping between clinics, I finally feel cared for. He tracks my history, adjusts my plan thoughtfully, and never rushes me out the door.',
  },
  {
    name: 'Anita Desai',
    role: 'Preventive checkup',
    quote:
      'The health checkup was thorough and the report was explained line by line. I left knowing exactly what to do next. Highly recommend Dr. Mehra.',
  },
  {
    name: 'Karan Malhotra',
    role: 'Father of a patient',
    quote:
      'My father has multiple chronic conditions. Dr. Mehra coordinates everything seamlessly and is always reachable when we need reassurance.',
  },
  {
    name: 'Sneha Iyer',
    role: 'Lifestyle counselling',
    quote:
      'I came in for fatigue and left with a practical lifestyle plan that actually worked. No unnecessary tests, just honest, sensible guidance.',
  },
  {
    name: 'Mohit Shah',
    role: 'Cardiac risk assessment',
    quote:
      'Detailed, patient, and genuinely caring. He reviewed my family history carefully and built a prevention plan that feels made just for me.',
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-muted/40 py-20 sm:py-28"
    >
      <div className="container-px flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Patient Stories"
          title={
            <>
              Trusted by patients across{' '}
              <span className="text-gradient">Vadodara</span>
            </>
          }
          description="Real words from people who found clarity, comfort, and better health under Dr. Mehra's care."
        />

        <div className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <figure
              key={t.name}
              className="reveal relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/20" />

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 border-t border-border/70 pt-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                  {initials(t.name)}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
