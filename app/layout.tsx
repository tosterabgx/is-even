import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Is even?",
  description: "Check if the number is even",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
