'use client';

import { Reveal, StaggerContainer, StaggerItem } from '../ui/reveal';
import { Smartphone, Zap, BellRing, RefreshCw } from 'lucide-react';

const features = [
    {
        title: 'Native Performance',
        description: 'Blazing fast iOS & Android apps built natively or cross-platform to ensure buttery smooth performance.',
        icon: Zap,
    },
    {
        title: 'Smart Push Notifications',
        description: 'Re-engage users instantly with targeted, rich-media push notifications that cut through the noise.',
        icon: BellRing,
    },
    {
        title: 'Offline Capabilities',
        description: 'Keep your users connected even without internet. Intelligent caching ensures zero downtime usability.',
        icon: RefreshCw,
    },
];

export default function AppExperience() {
    return (
        <section className="py-24 bg-card border-y border-default overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left: Phone Mockups Visual Grid */}
                    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] max-h-[400px] bg-[var(--accent)] rounded-full blur-[100px] opacity-[0.1]" />
                        
                        <div className="relative w-full max-w-[500px] aspect-[4/5] flex gap-6 items-center justify-center">
                            {/* Phone 1 (Left, Lower) */}
                            <Reveal delay={0.2} className="w-[45%] aspect-[9/19] rounded-[2rem] border-[6px] border-default/70 bg-[var(--background)] shadow-2xl overflow-hidden relative translate-y-8">
                                {/* Notch */}
                                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                                    <div className="w-1/3 h-4 bg-default/70 rounded-b-[10px]" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] to-card p-4 pt-10 flex flex-col gap-4">
                                    <div className="w-full h-32 bg-[var(--accent)]/10 rounded-xl" />
                                    <div className="flex gap-2">
                                        <div className="flex-1 h-20 bg-card border border-default rounded-xl" />
                                        <div className="flex-1 h-20 bg-card border border-default rounded-xl" />
                                    </div>
                                    <div className="w-full flex-1 bg-card border border-default rounded-xl p-3 flex flex-col gap-3">
                                        <div className="h-3 w-1/2 bg-default rounded" />
                                        <div className="h-10 w-full bg-[var(--background)] rounded-lg" />
                                        <div className="h-10 w-full bg-[var(--background)] rounded-lg" />
                                        <div className="h-10 w-full bg-[var(--background)] rounded-lg" />
                                    </div>
                                </div>
                            </Reveal>

                            {/* Phone 2 (Right, Higher) */}
                            <Reveal delay={0.4} className="w-[45%] aspect-[9/19] rounded-[2rem] border-[6px] border-[var(--accent)]/40 bg-[var(--background)] shadow-2xl shadow-[var(--accent)]/10 overflow-hidden relative -translate-y-8">
                                {/* Notch */}
                                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                                    <div className="w-1/3 h-4 bg-[var(--accent)]/40 rounded-b-[10px]" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] to-card p-4 pt-10 flex flex-col gap-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="w-10 h-10 rounded-full bg-default" />
                                        <div className="w-20 h-6 bg-[var(--accent)]/20 rounded-full" />
                                    </div>
                                    <div className="w-full h-40 bg-[var(--accent)] rounded-xl relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end">
                                            <div className="h-4 w-3/4 bg-white/80 rounded mb-2" />
                                            <div className="h-2 w-1/2 bg-white/50 rounded" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-default rounded-lg" />
                                            <div className="space-y-1.5 flex-1">
                                                <div className="h-3 w-3/4 bg-default rounded" />
                                                <div className="h-2 w-1/2 bg-default rounded" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-default rounded-lg" />
                                            <div className="space-y-1.5 flex-1">
                                                <div className="h-3 w-3/4 bg-default rounded" />
                                                <div className="h-2 w-1/2 bg-default rounded" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* App bottom nav */}
                                    <div className="absolute bottom-0 inset-x-0 h-16 bg-card border-t border-default flex items-center justify-around px-2 z-10">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-default" />
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right: Text & Features */}
                    <div>
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 mb-6">
                                <Smartphone className="w-4 h-4 text-[var(--accent)]" />
                                <span className="text-sm font-medium text-[var(--accent)]">
                                    Mobile App Experience
                                </span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                                Native Apps That <span className="gradient-text">Drive Loyalty</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-lg text-muted mb-10">
                                Give your brand a permanent place on your customers' screens. We build high-performance mobile applications that convert casual users into lifelong customers through immersive, frictionless experiences.
                            </p>
                        </Reveal>

                        <StaggerContainer className="flex flex-col gap-8">
                            {features.map((feature, i) => (
                                <StaggerItem key={i}>
                                    <div className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center shrink-0 border border-[var(--accent)]/20 group-hover:bg-[var(--accent)]/20 transition-colors">
                                            <feature.icon className="w-6 h-6 text-[var(--accent)]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-[var(--accent)] transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                </div>
            </div>
        </section>
    );
}
