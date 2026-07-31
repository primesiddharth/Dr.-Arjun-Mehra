'use client';

import { useState } from 'react';
import {
  CalendarCheck,
  Loader2,
  CheckCircle2,
  AlertCircle,
  CalendarDays,
  User,
  Phone,
  Mail,
  MessageSquare,
  Stethoscope,
} from 'lucide-react';


const SERVICES = [
  'General Physician Consultation',
  'Chronic Disease Management',
  'Preventive Health Checkup',
  'Cardiac Risk Assessment',
  'Lifestyle & Wellness Counselling',
  'Vaccination & Immunity Care',
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferred_date: string;
  message: string;
};

const INITIAL: FormState = {
  name: '',
  phone: '',
  email: '',
  service: SERVICES[0],
  preferred_date: '',
  message: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function AppointmentForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setStatus('submitting');
  setErrorMsg('');

  try {
    // Simulate request
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus('success');
    setForm(INITIAL);
  } catch (error) {
    setStatus('error');
    setErrorMsg(
      'Something went wrong while submitting your request. Please try again or call us directly.'
    );
  }
}

  const today = new Date().toISOString().split('T')[0];

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-success/30 bg-success/5 p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-bold text-foreground">
            Request received!
          </h3>
          <p className="max-w-sm text-sm text-muted-foreground">
            Thank you. Our team will call you shortly to confirm your
            appointment. For urgent queries, please call{' '}
            <a
              href="tel:+919788901235"
              className="font-semibold text-primary"
            >
              +91 97889 01235
            </a>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      aria-label="Appointment request form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          icon={User}
          htmlFor="name"
          required
        >
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </Field>

        <Field
          label="Phone Number"
          icon={Phone}
          htmlFor="phone"
          required
        >
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+91 90000 00000"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email (optional)" icon={Mail} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </Field>

        <Field
          label="Preferred Date"
          icon={CalendarDays}
          htmlFor="preferred_date"
          required
        >
          <input
            id="preferred_date"
            name="preferred_date"
            type="date"
            required
            min={today}
            value={form.preferred_date}
            onChange={(e) => update('preferred_date', e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      <Field
        label="Service Required"
        icon={Stethoscope}
        htmlFor="service"
        required
      >
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={(e) => update('service', e.target.value)}
          className={inputClass}
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Message (optional)"
        icon={MessageSquare}
        htmlFor="message"
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Briefly describe your symptoms or reason for visit"
          className={`${inputClass} resize-none`}
        />
      </Field>

      {status === 'error' && (
        <div className="flex items-start gap-2.5 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <CalendarCheck className="h-4 w-4" />
            Request Appointment
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Your information is kept private and used only to schedule your visit.
      </p>
    </form>
  );
}

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

function Field({
  label,
  icon: Icon,
  htmlFor,
  required,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-2 text-sm font-semibold text-foreground"
      >
        <Icon className="h-4 w-4 text-primary" />
        {label}
        {required ? <span className="text-destructive">*</span> : null}
      </label>
      {children}
    </div>
  );
}
