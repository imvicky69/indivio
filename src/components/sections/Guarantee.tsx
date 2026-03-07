'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Shield, RefreshCcw, Handshake } from 'lucide-react';

const guarantees = [
    {
        icon: Shield,
        title: '100% Satisfaction Guarantee',
        description: 'Not happy with our work? We\'ll revise it until you are — or refund your advance. No questions asked.',
    },
    {
        icon: RefreshCcw,
        title: 'Free Revisions Until You\'re Happy',
        description: 'Every project includes revision rounds. We don\'t consider it done until you sign off on every detail.',
    },
    {
        icon: Handshake,
        title: 'Transparent, Honest Pricing',
        description: 'The quote we give you is the price you pay. No hidden charges, no surprise invoices, no scope creep fees.',
    },
];

export function Guarantee() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Our guarantee to every client
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base max-w-lg mx-auto">
                            We stand behind every project we deliver. These aren&apos;t marketing promises — they&apos;re how we do business.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {guarantees.map((guarantee) => (
                        <StaggerItem key={guarantee.title}>
                            <div className="rounded-2xl border border-default p-6 text-center card-hover group h-full">
                                <div className="w-10 h-10 rounded-full border-2 border-default mx-auto mb-4 flex items-center justify-center group-hover:border-[var(--accent)] transition-colors">
                                    <guarantee.icon className="w-5 h-5 text-muted group-hover:text-[var(--accent)] transition-colors" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-base font-semibold text-foreground mb-2">
                                    {guarantee.title}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    {guarantee.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
