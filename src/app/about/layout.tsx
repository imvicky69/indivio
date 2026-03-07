import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Meet the team behind Indivio — a web development studio from India building custom websites, web apps, and school management systems.",
    openGraph: {
        title: "About Indivio | Our Story & Mission",
        description: "From a passion for technology to a full-service web development studio. Learn about our mission, values, and approach.",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
