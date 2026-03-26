import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Insights on web development, digital strategy, and school management software — practical advice for businesses in Bihar and across India.",
    keywords: ["web development blog", "website tips India", "digital marketing Bihar", "school ERP guide", "SEO tips small business tier 2 cities", "software company Nirmali", "custom web apps India"],
    alternates: {
        canonical: "https://indivio.in/blog",
    },
    openGraph: {
        title: "Blog | Indivio",
        description: "Practical insights on websites, school ERP, and digital strategy for Indian businesses.",
        images: [{ url: "/images/indivio.png", width: 1200, height: 630, alt: "Indivio Blog" }],
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
