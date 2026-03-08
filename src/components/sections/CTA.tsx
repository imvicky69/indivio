'use client';

import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)] rounded-full blur-[200px] opacity-[0.08]" />

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight max-w-2xl mx-auto">
                        Ready to start your project?
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-muted text-base mb-10 max-w-lg mx-auto">
                        Tell us about your idea and we&apos;ll get back to you within 24 hours.
                    </p>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="xl" className="group" asChild>
                            <Link href="/contact">
                                Get in Touch
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="xl" variant="outline" className="group" asChild>
                            <Link href="https://wa.me/919798836199" target="_blank">
                                <MessageCircle className="mr-2 w-4 h-4" />
                                WhatsApp Us
                            </Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
