import { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
    title: 'Website Estimate Calculator | Indivio',
    description: 'Get an instant price estimate for your custom website, web app, or e-commerce store with our interactive calculator.',
    openGraph: {
        title: 'Website Estimate Calculator | Indivio',
        description: 'Get an instant price estimate for your custom website, web app, or e-commerce store.',
    },
};

export default function EstimatePage() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-[var(--background)] flex flex-col justify-center">
            <CalculatorClient />
        </main>
    );
}
