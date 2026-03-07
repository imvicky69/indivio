import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Insights on web development, digital strategy, and growing your business online — practical advice for Indian business owners.",
    openGraph: {
        title: "Blog | Indivio",
        description: "Practical insights on websites, web apps, and digital strategy for Indian businesses.",
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
