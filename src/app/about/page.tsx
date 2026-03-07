'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Code2, Rocket, Target, Lightbulb, Users, Heart } from 'lucide-react';
import Link from 'next/link';

/* ── Hero ─────────────────────────────────────────────── */
function AboutHero() {
    return (
        <section className="pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="text-sm text-muted tracking-wide uppercase mb-4 font-medium">
                            About Indivio
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                            From a student&apos;s laptop to building digital futures.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-muted leading-relaxed max-w-2xl">
                            We started with one belief — every business, no matter how small, deserves a world-class digital presence. That conviction still drives everything we build today.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Journey / Story ──────────────────────────────────── */
const milestones = [
    {
        year: '2021',
        icon: GraduationCap,
        title: 'The Student Days',
        description: 'It started in a hostel room — building small websites for local shops and coaching centres while still in college. Every project was a lesson, every client a teacher.',
    },
    {
        year: '2022',
        icon: Code2,
        title: 'The Tech Builder',
        description: 'Freelancing turned serious. We mastered React, Next.js, and modern cloud infrastructure. Word spread — businesses started asking for more than just websites.',
    },
    {
        year: '2023',
        icon: Rocket,
        title: 'Indivio Was Born',
        description: 'What started as freelance projects became a proper studio. Indivio was founded to serve schools, local businesses, and startups with premium digital solutions at honest prices.',
    },
    {
        year: 'Now',
        icon: Target,
        title: 'Growing Every Day',
        description: 'Today we work with 30+ clients across India — from coaching academies in small towns to fast-growing tech startups. Every project makes us better.',
    },
];

function Story() {
    return (
        <section className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Our journey
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            Four years, four chapters. Here&apos;s how we got here.
                        </p>
                    </Reveal>
                </div>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-[var(--border)]" />

                    <div className="space-y-12 md:space-y-16">
                        {milestones.map((milestone, index) => (
                            <Reveal
                                key={milestone.year}
                                animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
                                delay={index * 0.1}
                            >
                                <div className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Content */}
                                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        <span className="text-xs font-mono text-muted tracking-wider">{milestone.year}</span>
                                        <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-muted text-sm leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:relative md:left-auto flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-[var(--background)] border-2 border-default flex items-center justify-center hover:border-foreground transition-colors">
                                            <milestone.icon className="w-4 h-4 text-muted" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Spacer on the other side */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Mission ──────────────────────────────────────────── */
function Mission() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                                Our mission
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-muted text-base leading-relaxed mb-4">
                                We believe that great technology shouldn&apos;t be a luxury available only to big corporations.
                            </p>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className="text-muted text-base leading-relaxed mb-4">
                                Every school in a small town, every local business in a busy market, every startup in a co-working space — they all deserve websites and applications that are fast, beautiful, and built to last.
                            </p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-foreground text-base leading-relaxed font-medium">
                                Our mission is to make premium digital solutions accessible and affordable for businesses across India.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal animation="scaleUp" delay={0.2}>
                        <div className="border border-default rounded-2xl bg-card p-8 space-y-6">
                            <blockquote className="text-lg text-foreground font-medium leading-relaxed italic">
                                &ldquo;We don&apos;t just write code. We build the digital foundation that our clients&apos; businesses grow on.&rdquo;
                            </blockquote>
                            <div className="h-px bg-[var(--border)]" />
                            <p className="text-sm text-muted">
                                — The Indivio Team
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Working Style ────────────────────────────────────── */
const workingStyles = [
    {
        icon: Users,
        title: 'Collaborative',
        description: 'We work alongside you, not in isolation. Regular calls, shared boards, and transparent progress keep you in the loop at every step.',
    },
    {
        icon: Lightbulb,
        title: 'Solution-First',
        description: 'We don\'t just take orders — we think alongside you. If there\'s a better way to solve your problem, we\'ll tell you.',
    },
    {
        icon: Target,
        title: 'Detail-Obsessed',
        description: 'Pixel-perfect designs, clean code, fast load times. We sweat the small stuff so your users don\'t have to.',
    },
    {
        icon: Heart,
        title: 'Honest & Direct',
        description: 'No jargon, no surprises. We give realistic timelines, transparent pricing, and straight answers.',
    },
];

function WorkingStyle() {
    return (
        <section className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-16">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            How we like to work
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            Our culture is baked into every client interaction.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                    {workingStyles.map((style) => (
                        <StaggerItem key={style.title}>
                            <div className="group p-6 rounded-2xl border border-default bg-[var(--background)] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:-translate-y-1">
                                <style.icon className="w-5 h-5 text-muted mb-4 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
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
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <Reveal>
                        <p className="text-sm text-muted tracking-wide uppercase mb-4 font-medium">
                            Our Vision
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-8 tracking-tight leading-tight">
                            To become India&apos;s most trusted partner for small-business digital transformation.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-muted text-base leading-relaxed mb-10 max-w-xl mx-auto">
                            We envision a future where every ambitious business owner in India — from a school principal in a tier-3 city to a startup founder in Bangalore — has access to technology that helps them compete at the highest level.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="xl" className="group" asChild>
                                <Link href="/#contact">
                                    Start a Project
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button size="xl" variant="outline" asChild>
                                <Link href="/#work">See Our Work</Link>
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
            <Story />
            <Mission />
            <WorkingStyle />
            <Vision />
        </>
    );
}
