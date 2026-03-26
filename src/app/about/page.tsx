'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Rocket, Target, Users, Heart, Cloud, Smartphone, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/* ── Hero ─────────────────────────────────────────────── */
function AboutHero() {
    return (
        <section className="pt-32 pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)] rounded-full blur-[150px] animate-glow-pulse opacity-10" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="text-sm text-[var(--accent)] tracking-wide uppercase mb-6 font-semibold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                            Behind Indivio
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                            Building the digital backbone for <span className="gradient-text">ambitious businesses</span>.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-muted leading-relaxed max-w-2xl">
                            We exist to bridge the technology gap. From custom software to mobile apps and intelligent school ERPs, we bring world-class digital infrastructure to Tier-2 and Tier-3 cities across India.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Founder Profile ──────────────────────────────────── */
function FounderProfile() {
    return (
        <section className="py-24 bg-card border-y border-default">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Founder Image */}
                    <Reveal delay={0.2} className="relative flex flex-col items-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--background)] to-[var(--accent)]/10 rounded-full scale-105 opacity-50 blur-xl max-w-sm mx-auto aspect-square" />
                        <div className="relative aspect-square w-full max-w-sm rounded-full overflow-hidden border-4 border-default shadow-2xl group mb-6 z-10">
                            <Image
                                src="/images/vikky-raja.jpg"
                                alt="Vikky Raja - Founder of Indivio | Student Pilot and Software Engineer"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="text-center relative z-20">
                            <h3 className="text-2xl font-bold text-foreground mb-1">Vikky Raja</h3>
                            <p className="text-[var(--accent)] font-medium flex items-center justify-center gap-2">
                                <Cloud className="w-4 h-4" /> Founder & Student Pilot
                            </p>
                        </div>
                    </Reveal>

                    {/* Right: Story */}
                    <div>
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
                                The Pilot Who Codes.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <div className="space-y-6 text-muted leading-relaxed">
                                <p>
                                    My journey didn't start in a massive corporate tech hub—it started as a freelance developer balancing code with aviation. As a Student Pilot, I learned the importance of precision, architecture, and flawless execution. I bring that exact same discipline to software development.
                                </p>
                                <p>
                                    What began as building small websites for local shops in Bihar quickly scaled into **Indivio**. I realized that passionate business owners and coaching institutes in growing cities were being left behind by expensive, gatekept technology.
                                </p>
                                <p>
                                    Today, I personally oversee the architecture of our elite **Mobile Apps**, highly scalable **Web Platforms**, and our flagship **Indivio Campus ERP** systems.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="mt-10 grid grid-cols-2 gap-6">
                                <div className="p-4 rounded-2xl bg-[var(--background)] border border-default">
                                    <div className="text-3xl font-bold text-foreground mb-1">30+</div>
                                    <div className="text-sm text-muted">Successful Projects Delivered</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-[var(--background)] border border-default">
                                    <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                                    <div className="text-sm text-muted">In-House Engineering</div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* ── Core Services Ecosystem ──────────────────────────── */
const coreExpertise = [
    {
        icon: Smartphone,
        title: 'Native Mobile Apps',
        description: 'Blazing fast iOS and Android apps that give your brand a permanent place on your customers\' screens.',
    },
    {
        icon: Code2,
        title: 'Custom Web Platforms',
        description: 'From high-conversion landing pages to complex SaaS architectures built on React and Next.js.',
    },
    {
        icon: BookOpen,
        title: 'Coaching & School ERP',
        description: 'Complete digital infrastructure for education—featuring automated fee collection, anti-piracy video walls, and smart IDs.',
    },
];

function Expertise() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16 text-center mx-auto">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Our Digital Ecosystem
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            We don't just build websites; we build the digital infrastructure that lets your business operate at scale without friction.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {coreExpertise.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="p-8 rounded-2xl border border-default bg-card hover:border-[var(--accent)]/50 transition-colors h-full flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--background)] border border-default flex items-center justify-center mb-6">
                                    <item.icon className="w-8 h-8 text-[var(--accent)]" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

/* ── Working Style ────────────────────────────────────── */
const workingStyles = [
    {
        icon: Users,
        title: 'Founder-Led Communication',
        description: 'When you work with Indivio, you speak directly with the engineering lead. No generic project managers or lost-in-translation delays.',
    },
    {
        icon: Target,
        title: 'Precision Execution',
        description: 'Like a pre-flight checklist, every line of code goes through rigorous QA to ensure absolute reliability when deployed.',
    },
    {
        icon: Rocket,
        title: 'Built for Scale',
        description: 'We use the exact same technology stack (React, Next.js, Cloud architectures) that Silicon Valley startups use to handle millions of users.',
    },
    {
        icon: Heart,
        title: 'Uncompromising Quality',
        description: 'We refuse to ship templates. Every pixel is customized for your specific brand identity and business constraints.',
    },
];

function WorkingStyle() {
    return (
        <section className="py-24 bg-card border-t border-default">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            The Indivio Standard
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            The culture of precision engineering baked into every project.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                    {workingStyles.map((style) => (
                        <StaggerItem key={style.title}>
                            <div className="group p-6 rounded-2xl border border-default bg-[var(--background)] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1">
                                <style.icon className="w-5 h-5 text-[var(--accent)] mb-4" strokeWidth={1.5} />
                                <h3 className="text-base font-semibold text-foreground mb-2">
                                    {style.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {style.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

/* ── Vision ───────────────────────────────────────────── */
function Vision() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-[var(--accent)] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-8 tracking-tight leading-tight">
                            Ready to upgrade your digital infrastructure?
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                            Whether you need a custom SaaS platform, a mobile application, or a complete school management ERP — we have the expertise to launch it flawlessly.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="xl" className="group" asChild>
                                <Link href="/contact">
                                    Discuss Your Project
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Page Export ───────────────────────────────────────── */
export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <FounderProfile />
            <Expertise />
            <WorkingStyle />
            <Vision />
        </>
    );
}
