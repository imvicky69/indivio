import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work",
    description: "See what we build — business websites, school management portals, custom web applications, e-commerce platforms, and more.",
    openGraph: {
        title: "Our Work | Indivio",
        description: "Explore the types of projects we build — from business websites to complex web applications.",
    },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    return children;
}
