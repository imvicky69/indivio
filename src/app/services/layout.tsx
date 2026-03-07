import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Custom websites, web applications, school management systems, e-commerce, and landing pages — built from scratch with modern technology.",
    openGraph: {
        title: "Our Services | Indivio",
        description: "Website development, custom web apps, school ERP solutions, e-commerce platforms, and high-converting landing pages.",
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
