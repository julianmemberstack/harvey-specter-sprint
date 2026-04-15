import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import ContactModalProvider from "./components/ContactModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Harvey Specter | H.Studio",
  description: "Creative Director & Photographer based in Chicago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContactModalProvider>
          {children}
        </ContactModalProvider>
        <SanityLive />
      </body>
    </html>
  );
}
