'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        title: 'School Management Portal',
        category: 'Web Application',
        description: 'A full-featured portal for managing student records, attendance, fee collection, and parent communication — built for educational institutions.',
    },
    {
        title: 'E-Commerce Storefront',
        category: 'E-commerce',
        description: 'A fast, mobile-first online store with Razorpay integration, real-time inventory management, and WhatsApp order notifications.',
    },
    {
        title: 'Business Dashboard',
        category: 'Custom Web App',
        description: 'A clean analytics dashboard for tracking key business metrics, managing leads, and generating automated reports.',
    },
];

export function FeaturedProjects() {
    return (
        <section id="work" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            What we build
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            Here&apos;s a look at the kind of projects we specialize in.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className="divide-y divide-[var(--border)]">
                    {projects.map((project) => (
                        <StaggerItem key={project.title}>
                            <Link
                                href="/#contact"
                                className="group flex flex-col md:flex-row md:items-center justify-between py-8 gap-4"
                            >
                                <div className="flex-1">
                                    <span className="text-xs text-muted uppercase tracking-wider">{project.category}</span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-1 group-hover:opacity-60 transition-opacity">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-muted text-sm max-w-md leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
