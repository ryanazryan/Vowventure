import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vowventure — Virtual Weddings, Reimagined.",
  description:
    "Create a beautiful virtual wedding where guests can meet, celebrate, play, and make memories together in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
