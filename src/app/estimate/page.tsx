import { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
    title: 'Website Estimate Calculator | Indivio',
    description: 'Get an instant price estimate for your custom website, web app, or e-commerce store with our interactive calculator.',
    keywords: ["website cost calculator", "website price estimator India", "web development cost", "how much does a website cost"],
    alternates: {
        canonical: "https://indivio.in/estimate",
    },
    openGraph: {
        title: 'Website Estimate Calculator | Indivio',
        description: 'Get an instant price estimate for your custom website, web app, or e-commerce store.',
        images: [{ url: "/images/indivio.png", width: 1200, height: 630, alt: "Indivio Estimate Calculator" }],
    },
};

export default function EstimatePage() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-[var(--background)] flex flex-col justify-center">
            <CalculatorClient />
        </main>
    );
}
