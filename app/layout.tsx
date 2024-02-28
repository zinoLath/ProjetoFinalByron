import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import localFont from 'next/font/local'

const nexa = localFont({
  src: "../assets/Nexa-Heavy.ttf"
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xerth Elojobs",
  description: "A melhor maneira de elevar a sua experiencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nexa.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
