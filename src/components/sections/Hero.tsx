'use client';

import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative min-h-[92vh] flex items-center justify-center pt-16 overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />

            {/* Animated glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-[120px] animate-glow-pulse opacity-20" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400 rounded-full blur-[100px] animate-glow-pulse-slow opacity-15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] rounded-full blur-[200px] opacity-[0.07]" />

            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent z-10" />

            <div className="max-w-6xl mx-auto px-6 relative z-20 text-center flex flex-col items-center">
                <Reveal delay={0}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 mb-8">
                        <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                        <span className="text-xs text-[var(--accent)] font-medium tracking-wide uppercase">
                            Now Accepting Projects
                        </span>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl leading-[1.08] mb-8">
                        We design & build
                        <span className="gradient-text"> websites that grow </span>
                        your business.
                    </h1>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="text-base md:text-lg text-muted max-w-lg mx-auto mb-10 leading-relaxed">
                        Custom websites, web apps, and school management platforms — crafted for businesses across India.
                    </p>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button size="xl" className="group" asChild>
                            <Link href="/work">
                                View Our Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="xl" variant="outline" asChild>
                            <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
