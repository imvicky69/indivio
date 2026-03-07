import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Indivio. Free consultation for your web project — reach us via form, email, or WhatsApp.",
    openGraph: {
        title: "Contact Indivio | Free Consultation",
        description: "Discuss your project with us. Free consultation, no commitments. Reach us via form, email, or WhatsApp.",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
