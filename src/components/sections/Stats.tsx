'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';

const commitments = [
    { value: '100%', label: 'Custom Code' },
    { value: '<2s', label: 'Load Time Target' },
    { value: '90+', label: 'Lighthouse Score' },
    { value: '24hr', label: 'Response Time' },
];

export function Stats() {
    return (
        <section className="py-16 border-y border-default">
            <div className="max-w-6xl mx-auto px-6">
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {commitments.map((stat) => (
                        <StaggerItem key={stat.label}>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-semibold text-foreground mb-1 tabular-nums">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-muted uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
