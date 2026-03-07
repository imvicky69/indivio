'use client';

import { Reveal } from '@/components/ui/reveal';
import { Check } from 'lucide-react';

const reasons = [
    'Every project is designed and built from scratch — no templates.',
    'Built with Next.js, React, and modern tech for speed and SEO.',
    'Transparent pricing that works for Indian businesses of all sizes.',
    'Ongoing support, updates, and maintenance after every launch.',
];

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                                Why choose us
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-muted text-base mb-8">
                                We&apos;re not just developers — we&apos;re partners invested in your success.
                            </p>
                        </Reveal>

                        <div className="space-y-4">
                            {reasons.map((reason, index) => (
                                <Reveal key={index} delay={0.1 + index * 0.08}>
                                    <div className="flex gap-3 items-start group">
                                        <div className="mt-1 w-5 h-5 rounded-full border-2 border-default group-hover:border-[var(--accent)] flex items-center justify-center transition-colors flex-shrink-0">
                                            <Check className="w-3 h-3 text-muted group-hover:text-[var(--accent)] transition-colors" strokeWidth={2.5} />
                                        </div>
                                        <p className="text-sm text-muted leading-relaxed">{reason}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <Reveal animation="slideRight" delay={0.2}>
                        <div className="rounded-2xl border border-default bg-[var(--background)] p-8">
                            <div className="space-y-6">
                                <div>
                                    <div className="text-3xl font-semibold text-foreground">100%</div>
                                    <div className="text-xs text-muted uppercase tracking-wider mt-1">Custom Built</div>
                                </div>
                                <div className="border-t border-default" />
                                <div>
                                    <div className="text-3xl font-semibold text-foreground">2–4 weeks</div>
                                    <div className="text-xs text-muted uppercase tracking-wider mt-1">Avg. Delivery Time</div>
                                </div>
                                <div className="border-t border-default" />
                                <div>
                                    <div className="text-3xl font-semibold text-foreground">₹15K+</div>
                                    <div className="text-xs text-muted uppercase tracking-wider mt-1">Starting Price</div>
                                </div>
                                <div className="border-t border-default" />
                                <div>
                                    <div className="text-3xl font-semibold text-foreground">24/7</div>
                                    <div className="text-xs text-muted uppercase tracking-wider mt-1">Support Available</div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
