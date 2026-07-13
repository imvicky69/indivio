'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { showcaseProjects } from '@/data/showcase';
import { Button } from '@/components/ui/button';

export function FeaturedProjects() {
    // Show top 3 projects on the home page
    const homeProjects = showcaseProjects.slice(0, 3);

    return (
        <section id="work" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                                What we build
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-muted text-base">
                                Here&apos;s a look at the production-ready systems and applications we have designed and deployed.
                            </p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <Link 
                            href="/showcase" 
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-light transition-colors group shrink-0"
                        >
                            View All Showcase
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </Reveal>
                </div>

                <StaggerContainer className="divide-y divide-[var(--border)]">
                    {homeProjects.map((project) => (
                        <StaggerItem key={project.slug}>
                            <Link
                                href={`/showcase/${project.slug}`}
                                className="group flex flex-col md:flex-row md:items-center justify-between py-8 gap-4"
                            >
                                <div className="flex-1">
                                    <span className="text-xs text-accent font-semibold uppercase tracking-wider">{project.category}</span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-1 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-muted text-sm max-w-md leading-relaxed flex-1 font-sans">
                                    {project.shortDescription}
                                </p>
                                <div className="flex items-center gap-2 text-muted group-hover:text-foreground transition-colors">
                                    <span className="text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity hidden md:inline">
                                        Case Study
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <Reveal delay={0.3}>
                    <div className="mt-16 text-center border-t border-default pt-12">
                        <Button size="xl" className="group" asChild>
                            <Link href="/showcase">
                                Explore All Case Studies
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
