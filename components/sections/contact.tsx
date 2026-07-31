import { PhoneCall, MapPin, Mail, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

const CONTACT_CARDS = [
  {
    icon: PhoneCall,
    title: 'Phone',
    value: '+91 97889 01235',
    href: 'tel:+919788901235',
    sub: 'Mon – Sat, 9am – 8pm',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'care@drarjunmehra.in',
    href: 'mailto:care@drarjunmehra.in',
    sub: 'We reply within a day',
  },
  {
    icon: MapPin,
    title: 'Clinic Address',
    value: '63 Wellness Centre, Alkapuri',
    sub: 'Vadodara, Gujarat 390007',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon – Sat: 9am – 8pm',
    sub: 'Sunday: By appointment',
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative bg-muted/40 py-20 sm:py-28">
      <div className="container-px flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow="Get in Touch"
          title={
            <>
              We&apos;re here to{' '}
              <span className="text-gradient">help you</span>
            </>
          }
          description="Have a question before booking? Reach out directly — or drop by the clinic in Alkapuri."
        />

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map(({ icon: Icon, title, value, sub, href }, index) => {
            const content = (
              <div
                className="reveal flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {title}
                  </h3>
                  <p className="text-base font-semibold text-foreground">
                    {value}
                  </p>
                  <p className="text-sm text-muted-foreground">{sub}</p>
                </div>
              </div>
            );

            return href ? (
              <a
                key={title}
                href={href}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-2xl"
              >
                {content}
              </a>
            ) : (
              <div key={title} className="block">
                {content}
              </div>
            );
          })}
        </div>

        {/* Map */}
        <div className="reveal w-full overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Clinic location — 63 Wellness Centre, Alkapuri, Vadodara"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.1812%2C22.2984%2C73.2012%2C22.3184&layer=mapnik&marker=22.3084%2C73.1912"
            className="h-72 w-full sm:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
