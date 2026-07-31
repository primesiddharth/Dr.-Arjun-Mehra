import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://drarjunmehra.in'),
  title: {
    default: 'Dr. Arjun Mehra — Consultant Physician & Internal Medicine, Vadodara',
    template: '%s | Dr. Arjun Mehra',
  },
  description:
    'Dr. Arjun Mehra is a trusted consultant physician in Alkapuri, Vadodara, offering expert care in internal medicine, preventive health, chronic disease management, and lifestyle wellness. Book your appointment today.',
  keywords: [
    'Dr. Arjun Mehra',
    'physician Vadodara',
    'internal medicine Vadodara',
    'doctor Alkapuri',
    'consultant physician Gujarat',
    'preventive health checkup Vadodara',
    'chronic disease management',
  ],
  authors: [{ name: 'Dr. Arjun Mehra' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://drarjunmehra.in',
    siteName: 'Dr. Arjun Mehra',
    title: 'Dr. Arjun Mehra — Consultant Physician & Internal Medicine, Vadodara',
    description:
      'Trusted consultant physician in Alkapuri, Vadodara. Expert care in internal medicine, preventive health, and chronic disease management.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Arjun Mehra — Consultant Physician',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Arjun Mehra — Consultant Physician, Vadodara',
    description:
      'Trusted consultant physician in Alkapuri, Vadodara. Expert care in internal medicine and preventive health.',
    images: ['https://bolt.new/static/og_default.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://drarjunmehra.in' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
