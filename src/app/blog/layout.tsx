import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Insights on web development, digital strategy, and growing your business online — practical advice for Indian business owners.",
    keywords: ["web development blog", "website tips India", "digital marketing India", "business website guide", "SEO tips small business"],
    alternates: {
        canonical: "https://indivio.in/blog",
    },
    openGraph: {
        title: "Blog | Indivio",
        description: "Practical insights on websites, web apps, and digital strategy for Indian businesses.",
        images: [{ url: "/images/indivio.png", width: 1200, height: 630, alt: "Indivio Blog" }],
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
