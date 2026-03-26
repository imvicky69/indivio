'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { School, Building2, Rocket } from 'lucide-react';

const audiences = [
    {
        icon: School,
        title: 'Schools & Academies',
        description: 'Management systems, student portals, and websites that parents and students actually enjoy using.',
    },
    {
        icon: Building2,
        title: 'Local Businesses',
        description: 'High-converting websites and booking systems that turn online visitors into real customers.',
    },
    {
        icon: Rocket,
        title: 'Startups',
        description: 'MVPs, web applications, and scalable platforms to help you launch quickly and grow confidently.',
    },
];

export function WhoWeHelp() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Who we help in India
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base mt-2 leading-relaxed">
                            We partner with local businesses, coaching centers, and schools in tier 2 and tier 3 cities, delivering impact from Nirmali to all across India.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {audiences.map((audience) => (
                        <StaggerItem key={audience.title}>
                            <div className="group p-6 rounded-2xl border border-default bg-card card-hover">
                                <audience.icon className="w-5 h-5 text-muted mb-4 group-hover:text-[var(--accent)] transition-colors" strokeWidth={1.5} />
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {audience.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {audience.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
