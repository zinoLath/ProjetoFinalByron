import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import localFont from 'next/font/local';
import {Providers} from "./providers";

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
    <html lang="en" className="dark">
      <body className={nexa.className}>
        <Providers>
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
