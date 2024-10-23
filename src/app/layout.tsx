import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import Navbar from "../ui/organisms/Navbar";
import Title from "@/ui/atoms/Title";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Atomic Desing",
  description: "learn atomic desing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <section className="general-container">
          <Title />
          <Navbar />
          {children}
        </section>
      </body>
    </html>
  );
}
