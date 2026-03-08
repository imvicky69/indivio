import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Custom websites, web applications, school management systems, e-commerce, and landing pages — built from scratch with modern technology.",
    keywords: ["website development India", "custom web app", "school ERP India", "e-commerce development", "landing page design", "Next.js development"],
    alternates: {
        canonical: "https://indivio.in/services",
    },
    openGraph: {
        title: "Our Services | Indivio",
        description: "Website development, custom web apps, school ERP solutions, e-commerce platforms, and high-converting landing pages.",
        images: [{ url: "/images/indivio.png", width: 1200, height: 630, alt: "Indivio Services" }],
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
