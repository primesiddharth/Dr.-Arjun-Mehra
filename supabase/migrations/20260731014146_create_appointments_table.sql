/*
# Create appointments table for Dr. Arjun Mehra's clinic website

## Overview
This is a single-tenant personal-brand doctor website with NO sign-in flow.
Patients fill out a public appointment-request form, so the anon-key frontend
must be able to insert rows. Reads/updates/deletes are NOT exposed to the
public — only INSERT (and SELECT of one's own row by phone/email is NOT
required for this site; the doctor manages requests out-of-band).

## New Table: appointments
- id            uuid, primary key, defaults to gen_random_uuid()
- name          text, not null — patient's full name
- phone         text, not null — contact number
- email         text, nullable — optional contact email
- service       text, not null — requested service (e.g. "General Consultation")
- preferred_date date, not null — requested appointment date
- message       text, nullable — optional notes from patient
- status        text, not null, defaults to 'pending' — request lifecycle
- created_at    timestamptz, defaults to now()

## Security
- RLS enabled on appointments.
- INSERT allowed for anon + authenticated (public form submissions).
- SELECT / UPDATE / DELETE are intentionally NOT granted to anon/authenticated;
  requests are managed by the clinic via privileged tooling, not the site.
  This keeps patient data private from the public.

## Notes
1. The website has no login, so the public anon key must be able to INSERT.
2. No SELECT policy is created for anon — patient requests are never read
   back or listed on the public site.
3. status is a free-text field defaulting to 'pending'; future states could
   include 'confirmed', 'completed', 'cancelled'.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  preferred_date date NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Allow public (anon) appointment submissions from the website form.
DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments"
ON appointments FOR INSERT
TO anon, authenticated
WITH CHECK (true);
