'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';

const steps = [
    { step: '01', title: 'Discovery', description: 'We understand your business, goals, and audience through detailed conversations.' },
    { step: '02', title: 'Design', description: 'We create mockups and prototypes so you can see your vision before development.' },
    { step: '03', title: 'Develop', description: 'We build with modern, scalable tech — with regular updates and feedback loops.' },
    { step: '04', title: 'Launch', description: 'We deploy, test, and launch. Then we stay for ongoing support and maintenance.' },
];

export function Process() {
    return (
        <section id="process" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            How we work
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            A clear, structured process so you always know what to expect.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className="grid md:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <StaggerItem key={step.title}>
                            <div className="group">
                                <span className="text-xs text-muted font-mono tracking-wider">{step.step}</span>
                                <div className="h-px w-full bg-[var(--border)] my-3 group-hover:bg-foreground transition-colors" />
                                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
