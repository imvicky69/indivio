'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { LayoutTemplate, MonitorSmartphone, GraduationCap, HardDrive } from 'lucide-react';

const services = [
    {
        icon: LayoutTemplate,
        title: 'Custom Websites',
        description: 'Marketing websites tailored to your brand and optimized for performance and conversions.',
    },
    {
        icon: MonitorSmartphone,
        title: 'Web Apps & Portals',
        description: 'Complex applications, customer portals, and internal tools built with modern technologies.',
    },
    {
        icon: GraduationCap,
        title: 'School Management',
        description: 'Student records, attendance, parent communication, fee management — all in one platform.',
    },
    {
        icon: HardDrive,
        title: 'Maintenance & Hosting',
        description: 'Reliable hosting, security updates, and ongoing support to keep everything running smoothly.',
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                    <div className="md:w-1/3">
                        <div className="sticky top-24">
                            <Reveal>
                                <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                                    Software & Web Development Services
                                </h2>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p className="text-muted text-base leading-relaxed">
                                    End-to-end digital solutions for businesses in Bihar and across India, from design to deployment.
                                </p>
                            </Reveal>
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
                            {services.map((service) => (
                                <StaggerItem key={service.title}>
                                    <div className="group bg-[var(--background)] p-6 rounded-2xl border border-default card-hover h-full">
                                        <service.icon className="w-5 h-5 text-muted mb-4 group-hover:text-[var(--accent)] transition-colors" strokeWidth={1.5} />
                                        <h3 className="text-base font-semibold text-foreground mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted text-sm leading-relaxed">
                                            {service.description}
                                        </p>
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
