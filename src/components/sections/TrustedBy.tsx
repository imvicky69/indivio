'use client';

import { Reveal } from '@/components/ui/reveal';

const techLogos = [
    'Next.js', 'React', 'TypeScript', 'Node.js',
    'Firebase', 'Tailwind CSS', 'Google Cloud', 'Razorpay',
];

export function TrustedBy() {
    return (
        <section className="py-10 border-y border-default overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-4">
                <Reveal>
                    <p className="text-center text-xs text-muted uppercase tracking-widest">
                        Built with industry-leading technology
                    </p>
                </Reveal>
            </div>

            <div className="relative">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...techLogos, ...techLogos].map((logo, index) => (
                        <div key={`${logo}-${index}`} className="mx-10 flex-shrink-0">
                            <span className="text-base font-medium text-neutral-300 dark:text-neutral-700 select-none">
                                {logo}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
