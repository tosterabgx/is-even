import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Is It Even Number?',
  description: 'Check if something is an even number or not!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  );
}
