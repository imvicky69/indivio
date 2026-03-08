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
  keywords: ["web development", "website design", "web apps", "school management", "India", "Next.js", "React", "web development company India", "custom website India", "affordable web development"],
  authors: [{ name: "Indivio" }],
  creator: "Indivio",
  metadataBase: new URL("https://indivio.in"),
  alternates: {
    canonical: "https://indivio.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://indivio.in",
    siteName: "Indivio",
    title: "Indivio | Premium Websites & Web Apps — India",
    description: "Custom websites, web apps, and school management systems built for performance.",
    images: [
      {
        url: "/images/indivio.png",
        width: 1200,
        height: 630,
        alt: "Indivio — Premium Websites & Web Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indivio | Premium Websites & Web Apps — India",
    description: "Custom websites, web apps, and school management systems built for performance.",
    images: ["/images/indivio.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
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

