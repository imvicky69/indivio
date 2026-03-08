import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "Transparent, flexible pricing for websites and web apps. Starter from ₹15,000, Growth from ₹40,000, or custom quotes for complex projects.",
    keywords: ["website cost India", "web development pricing", "affordable website India", "website price India", "custom website quote"],
    alternates: {
        canonical: "https://indivio.in/pricing",
    },
    openGraph: {
        title: "Pricing | Indivio",
        description: "Affordable website development packages starting from ₹15,000. Transparent pricing, no hidden fees.",
        images: [{ url: "/images/indivio.png", width: 1200, height: 630, alt: "Indivio Pricing" }],
    },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return children;
}
