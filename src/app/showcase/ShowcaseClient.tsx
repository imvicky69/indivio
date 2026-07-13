'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShowcaseProject } from '@/data/showcase';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Globe, ExternalLink, Play } from 'lucide-react';
import Link from 'next/link';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';

interface ShowcaseClientProps {
    projects: ShowcaseProject[];
}

export function ShowcaseClient({ projects }: ShowcaseClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<'All' | 'Mobile App' | 'Web App'>('All');

    const categories: ('All' | 'Mobile App' | 'Web App')[] = ['All', 'Mobile App', 'Web App'];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section className="pb-24">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <Reveal>
                        <p className="text-sm text-accent tracking-wide uppercase mb-4 font-semibold">
                            Our Works & Systems
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                            Showcasing Products That Drive Growth.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-muted leading-relaxed max-w-2xl">
                            From production-ready native apps featured on the Play Store to lightweight, high-performance PWAs and custom administrative ERPs. We build software that scales businesses.
                        </p>
                    </Reveal>
                </div>

                {/* Category Filters */}
                <Reveal delay={0.3}>
                    <div className="flex flex-wrap gap-2.5 mb-12 border-b border-default pb-6">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                                    selectedCategory === category
                                        ? 'bg-accent text-white shadow-lg shadow-accent/20'
                                        : 'bg-card border border-default text-muted hover:text-foreground hover:border-accent/40'
                                }`}
                            >
                                {category === 'All' ? 'All Work' : category === 'Mobile App' ? 'Mobile Apps' : 'Web Platforms'}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                key={project.slug}
                                className="group relative bg-card border border-default rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-sm transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent-glow"
                            >
                                {/* Background glow decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors pointer-events-none" />

                                <div>
                                    {/* Card Header: Icon & Category */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-default/50 border border-default text-foreground flex items-center justify-center overflow-hidden shadow-sm">
                                            {project.logoUrl ? (
                                                <img 
                                                    src={project.logoUrl} 
                                                    alt={`${project.title} logo`} 
                                                    className="w-full h-full object-contain p-2"
                                                />
                                            ) : (
                                                <span className="font-bold text-lg">
                                                    {project.title.charAt(0)}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-default bg-default/40">
                                            {project.category === 'Mobile App' ? (
                                                <Smartphone className="w-3.5 h-3.5 text-accent" />
                                            ) : (
                                                <Globe className="w-3.5 h-3.5 text-accent" />
                                            )}
                                            <span className="text-[10px] font-bold tracking-wide uppercase text-muted">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title & Subtitle */}
                                    <h3 className="text-2xl font-semibold text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-mono text-muted uppercase tracking-wider mb-4">
                                        {project.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-muted leading-relaxed mb-6 font-sans">
                                        {project.shortDescription}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-8">
                                        {project.techStack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-md bg-default/50 border border-default/50 text-[10px] font-medium text-muted"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-2.5 py-1 rounded-md bg-default/50 border border-default/50 text-[10px] font-medium text-muted">
                                                +{project.techStack.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-default mt-auto">
                                    <Button size="sm" className="group/btn text-xs font-semibold" asChild>
                                        <Link href={`/showcase/${project.slug}`}>
                                            Case Study
                                            <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </Button>

                                    {project.playstoreUrl && (
                                        <Button size="sm" variant="outline" className="text-xs font-semibold gap-1.5" asChild>
                                            <a href={project.playstoreUrl} target="_blank" rel="noopener noreferrer">
                                                Play Store
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </Button>
                                    )}

                                    {project.webUrl && !project.playstoreUrl && (
                                        <Button size="sm" variant="outline" className="text-xs font-semibold gap-1.5" asChild>
                                            <a href={project.webUrl} target="_blank" rel="noopener noreferrer">
                                                Live Site
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
