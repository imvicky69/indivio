'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';

const pledges = [
    {
        name: 'Our Commitment',
        role: '',
        content: 'Every project is built from scratch — no templates, no shortcuts. We treat your business like our own, delivering work we\'d be proud to put our name on.',
    },
    {
        name: 'Built to Last',
        role: '',
        content: 'We use clean, well-documented code and modern architecture. When your business grows, your website or app scales with you seamlessly.',
    },
    {
        name: 'Always Available',
        role: '',
        content: 'We don\'t disappear after delivery. Questions, bugs, updates — reach us anytime via WhatsApp or email. Your success is our success.',
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Our promises to you
                        </h2>
                    </Reveal>
                </div>

                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {pledges.map((pledge) => (
                        <StaggerItem key={pledge.name}>
                            <div className="border border-default rounded-2xl p-6 bg-[var(--background)] h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                                    {pledge.content}
                                </p>
                                <footer>
                                    <div className="text-sm font-semibold text-foreground">{pledge.name}</div>
                                </footer>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
