import type { Metadata } from 'next';
import { NTR } from 'next/font/google';
import './globals.css';

const ntr = NTR({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ntr',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jeshaiah | UI/UX Designer & Full-Stack Developer',
  description:
    'Portfolio of Jeshaiah, a CS student at Pamantasan ng Lungsod ng Maynila. Showcasing projects in TypeScript, React, Next.js, Python, and game development.',
  keywords: [
    'Jeshaiah',
    'Portfolio',
    'Full-Stack Developer',
    'UI/UX Designer',
    'Frontend Engineer',
    'TypeScript',
    'React',
    'Next.js',
    'Python',
  ],
  authors: [{ name: 'Jeshaiah' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ntr.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
