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
    default: "Indivio | Software & Web Solutions for Schools & Small Businesses in India",
    template: "%s | Indivio",
  },
  description: "Indivio specializes in custom software development, school management systems (ERP), and web apps for small businesses. Based in Nirmali, Bihar, serving all over India.",
  keywords: [
    "app development company in Nirmali Bihar",
    "software company in Nirmali Bihar",
    "web development company in Bihar",
    "IT services for small business Bihar",
    "website design services Nirmali",
    "custom software development India tier 2 cities",
    "school management software Bihar",
    "affordable school ERP India",
    "coaching management app developers",
    "school website design services",
    "custom web app development India",
    "small business website packages",
    "best software company in Nirmali Bihar",
    "best web development company in Nirmali Bihar",
    "best IT services for small business in Nirmali Bihar",
    "best website design services in Nirmali Bihar",
    "best custom software development in Nirmali Bihar",
    "best school management software in Nirmali Bihar",
    "best affordable school ERP in Nirmali Bihar",
    "best coaching management app developers in Nirmali Bihar",
    "best school website design services in Nirmali Bihar",
    "best custom web app development in Nirmali Bihar",
    "best small business website packages in Nirmali Bihar",
    "software development company in India",
    "web development company in India",
    "IT services for small business in India",
    "website design services in India",
    "custom software development in India",
    "school management software in India",
    "affordable school ERP in India",
    "coaching management app developers in India",
    "school website design services in India",
    "custom web app development in India",
    "small business website packages in India",
    "best software company in India",
    "best web development company in India",
    "best IT services for small business in India",
    "best website design services in India",
    "best custom software development in India",
    "best school management software in India",
    "best affordable school ERP in India",
    "best coaching management app developers in India",
    "best school website design services in India",
    "best custom web app development in India",
    "best small business website packages in India",
    "software development company in Bihar",
    "web development company in Bihar",
    "IT services for small business in Bihar",
    "website design services in Bihar",
    "custom software development in Bihar",
    "school management software in Bihar",
    "affordable school ERP in Bihar",
    "coaching management app developers in Bihar",
    "school website design services in Bihar",
    "custom web app development in Bihar",
    "small business website packages in Bihar",
    "best software company in Bihar",
    "best web development company in Bihar",
    "best IT services for small business in Bihar",
    "best website design services in Bihar",
    "best custom software development in Bihar",
    "best school management software in Bihar",
    "best affordable school ERP in Bihar",
    "best coaching management app developers in Bihar",
    "best school website design services in Bihar",
    "best custom web app development in Bihar",
    "best small business website packages in Bihar",
    "software development company in Nirmali",
    "web development company in Nirmali",
    "IT services for small business in Nirmali",
    "website design services in Nirmali",
    "custom software development in Nirmali",
    "school management software in Nirmali",
    "affordable school ERP in Nirmali",
    "coaching management app developers in Nirmali",
    "school website design services in Nirmali",
    "custom web app development in Nirmali",
    "small business website packages in Nirmali",
    "best software company in Nirmali",
    "best web development company in Nirmali",
    "best IT services for small business in Nirmali",
    "best website design services in Nirmali",
    "best custom software development in Nirmali",
    "best school management software in Nirmali",
    "best affordable school ERP in Nirmali",
    "best coaching management app developers in Nirmali",
    "best school website design services in Nirmali",
    "best custom web app development in Nirmali",
    "best small business website packages in Nirmali"
  ],
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
    title: "Indivio | Software & Web Solutions for Schools & Small Businesses in India",
    description: "Indivio specializes in custom software development, school management systems (ERP), and web apps for small businesses. Based in Nirmali, Bihar, serving all over India.",
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
    title: "Indivio | Software & Web Solutions for Schools & Small Businesses in India",
    description: "Indivio specializes in custom software development, school management systems (ERP), and web apps for small businesses. Based in Nirmali, Bihar, serving all over India.",
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

