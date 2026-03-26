'use client';

import { Reveal, StaggerContainer, StaggerItem } from '../ui/reveal';
import { Button } from '../ui/button';
import { ArrowRight, BookOpen, ShieldCheck, CreditCard, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        title: 'Student & Batch Management',
        description: 'Organize thousands of students effortlessly across classes and custom batches.',
        icon: GraduationCap,
    },
    {
        title: 'Automated Fee Collection',
        description: 'Reduce manual accounting. Auto-generate invoices and accept digital payments directly.',
        icon: CreditCard,
    },
    {
        title: 'Smart ID Generation',
        description: 'Instantly generate QR-coded Smart IDs for attendance tracking and campus security.',
        icon: BookOpen,
    },
    {
        title: 'Bank-Grade Anti-Piracy',
        description: 'Protect your video lectures and course material with DRM-level encryption and watermarking.',
        icon: ShieldCheck,
    },
];

export default function CoachingManagement() {
    return (
        <section className="py-24 bg-[var(--background)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Text & Features */}
                    <div>
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                                <span className="text-sm font-medium text-[var(--accent)]">
                                    Indivio Campus Solution
                                </span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                                The Ultimate <span className="gradient-text">Coaching Management</span> System
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-lg text-muted mb-10">
                                Built specifically for modern educational institutes. Transition from messy spreadsheets to a unified, secure dashboard that handles everything from fee collection to anti-piracy video hosting.
                            </p>
                        </Reveal>

                        <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-10">
                            {features.map((feature, i) => (
                                <StaggerItem key={i}>
                                    <div className="p-6 rounded-2xl bg-card border border-default hover:border-[var(--accent)]/50 transition-colors h-full group">
                                        <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <feature.icon className="w-6 h-6 text-[var(--accent)]" />
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                        <p className="text-sm text-muted">{feature.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <Reveal delay={0.4}>
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Request Campus Demo <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </Reveal>
                    </div>

                    {/* Right: Dashboard Preview Mockup */}
                    <Reveal delay={0.2} className="relative z-10 w-full h-full min-h-[500px] flex items-center justify-center">
                        {/* Decorative Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-[var(--accent)] rounded-full blur-[120px] opacity-[0.15]" />
                        
                        {/* Mockup Container */}
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl border border-default/50 bg-card/60 backdrop-blur-xl shadow-2xl p-6 flex flex-col overflow-hidden">
                            {/* Browser Header */}
                            <div className="flex items-center gap-2 mb-6 border-b border-default pb-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="mx-auto w-1/2 h-6 bg-[var(--background)] rounded-md border border-default flex items-center justify-center">
                                    <span className="text-[10px] text-muted font-mono">campus.indivio.in</span>
                                </div>
                            </div>

                            {/* Dashboard Content Mockup */}
                            <div className="flex-1 flex gap-6">
                                {/* Sidebar */}
                                <div className="w-16 md:w-48 shrink-0 flex flex-col gap-3">
                                    <div className="h-4 w-full md:w-2/3 bg-default rounded mb-4" />
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="h-8 w-full bg-[var(--background)] rounded-lg flex items-center px-3">
                                            <div className="w-4 h-4 rounded-full bg-default/60" />
                                            <div className="hidden md:block h-2 w-16 bg-default ml-3 rounded" />
                                        </div>
                                    ))}
                                </div>
                                {/* Main Content */}
                                <div className="flex-1 flex flex-col gap-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="h-5 w-32 bg-foreground/20 rounded mb-2" />
                                            <div className="h-3 w-24 bg-default rounded" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)]/50" />
                                    </div>
                                    
                                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="h-24 rounded-xl bg-[var(--background)] border border-default p-4 flex flex-col justify-between">
                                                <div className="w-6 h-6 rounded-md bg-default" />
                                                <div>
                                                    <div className="h-4 w-12 bg-foreground flex-1 mb-2 rounded" />
                                                    <div className="h-2 w-16 bg-default rounded" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex-1 rounded-xl border border-default bg-[var(--background)] p-4">
                                        <div className="h-4 w-32 bg-default rounded mb-6" />
                                        <div className="space-y-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-full h-12 rounded-lg bg-card border border-default flex items-center px-4 justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-6 h-6 rounded-full bg-default" />
                                                        <div className="h-2 w-20 bg-default rounded" />
                                                    </div>
                                                    <div className="h-2 w-12 bg-default rounded" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}
