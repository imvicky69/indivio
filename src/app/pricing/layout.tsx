import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "Transparent, flexible pricing for websites and web apps. Starter from ₹15,000, Growth from ₹40,000, or custom quotes for complex projects.",
    openGraph: {
        title: "Pricing | Indivio",
        description: "Affordable website development packages starting from ₹15,000. Transparent pricing, no hidden fees.",
    },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return children;
}
