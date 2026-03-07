import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { StructuredData } from "@/components/seo/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Indivio | Premium Websites & Web Apps — India",
    template: "%s | Indivio",
  },
  description: "Custom websites, web apps, and school management systems built for performance. Based in India.",
  keywords: ["web development", "website design", "web apps", "school management", "India", "Next.js", "React"],
  authors: [{ name: "Indivio" }],
  creator: "Indivio",
  metadataBase: new URL("https://indivio.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://indivio.in",
    siteName: "Indivio",
    title: "Indivio | Premium Websites & Web Apps — India",
    description: "Custom websites, web apps, and school management systems built for performance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indivio | Premium Websites & Web Apps — India",
    description: "Custom websites, web apps, and school management systems built for performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <StructuredData />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

