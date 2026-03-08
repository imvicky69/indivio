import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Indivio. Free consultation for your web project — reach us via form, email, or WhatsApp.",
    keywords: ["contact Indivio", "free website consultation", "web development inquiry India", "get a quote website"],
    alternates: {
        canonical: "https://indivio.in/contact",
    },
    openGraph: {
        title: "Contact Indivio | Free Consultation",
        description: "Discuss your project with us. Free consultation, no commitments. Reach us via form, email, or WhatsApp.",
        images: [{ url: "/images/indivio.png", width: 1200, height: 630, alt: "Contact Indivio" }],
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
