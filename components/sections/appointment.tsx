import { CalendarCheck, Clock, PhoneCall, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';
import { AppointmentForm } from '@/components/appointment-form';

const INFO = [
  {
    icon: PhoneCall,
    title: 'Call Us',
    lines: ['+91 97889 01235', 'Mon – Sat, 9am – 8pm'],
  },
  {
    icon: MapPin,
    title: 'Visit the Clinic',
    lines: ['63 Wellness Centre, Alkapuri', 'Vadodara, Gujarat 390007'],
  },
  {
    icon: Clock,
    title: 'Clinic Hours',
    lines: ['Mon – Sat: 9am – 8pm', 'Sunday: By appointment'],
  },
];

export function Appointment() {
  return (
    <section id="appointment" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="reveal overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-teal-700 shadow-xl">
          <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
            {/* Left — copy + info */}
            <div className="flex flex-col gap-6 p-8 text-primary-foreground sm:p-10 lg:p-12">
              <SectionHeading
                align="left"
                eyebrow="Book a Visit"
                title={
                  <span className="text-primary-foreground">
                    Schedule your appointment today
                  </span>
                }
                description="Take the first step toward better health. Fill out the form and our team will confirm your slot — usually within a few hours."
              />

              <div className="flex flex-col gap-4">
                {INFO.map(({ icon: Icon, title, lines }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <div className="flex flex-col">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
                        {title}
                      </h3>
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm text-primary-foreground/85"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 p-4">
                <CalendarCheck className="h-5 w-5 shrink-0 text-primary-foreground" />
                <p className="text-sm text-primary-foreground/90">
                  Same-day appointments often available — just ask.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-background p-8 sm:p-10 lg:p-12">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">
                  Request an Appointment
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us a little about your visit and we&apos;ll handle the
                  rest.
                </p>
              </div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
