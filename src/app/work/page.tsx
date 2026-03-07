'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    Globe,
    Layers,
    GraduationCap,
    ShoppingCart,
    Zap,
    Monitor,
} from 'lucide-react';
import Link from 'next/link';

/* ── Hero ─────────────────────────────────────────────── */
function WorkHero() {
    return (
        <section className="pt-32 pb-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="text-sm text-muted tracking-wide uppercase mb-4 font-medium">
                            Our Work
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                            What we can build for you.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-muted leading-relaxed max-w-2xl">
                            We specialize in building digital products that are fast, functional, and beautiful. Here are the types of projects we excel at.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Showcase Cards ───────────────────────────────────── */
interface ShowcaseItem {
    icon: React.ElementType;
    category: string;
    title: string;
    description: string;
    features: string[];
    color: string;
}

const showcaseItems: ShowcaseItem[] = [
    {
        icon: Globe,
        category: 'Business Website',
        title: 'Professional websites that build trust and convert visitors',
        description: 'Multi-page responsive sites for businesses, professionals, and organizations. SEO-optimized, lightning fast, and designed to make a lasting impression.',
        features: ['5-15 pages', 'Contact forms', 'Google Maps', 'SEO ready', 'Mobile-first'],
        color: 'border-l-neutral-400',
    },
    {
        icon: GraduationCap,
        category: 'School Management System',
        title: 'Complete digital infrastructure for educational institutions',
        description: 'Student records, attendance tracking, fee management with online payments, report card generation, and parent communication portals — all in one system.',
        features: ['Student database', 'Fee collection (UPI)', 'Attendance & reports', 'Parent portal', 'SMS/WhatsApp alerts'],
        color: 'border-l-neutral-500',
    },
    {
        icon: Layers,
        category: 'Custom Web Application',
        title: 'Tailored software for unique business workflows',
        description: 'When off-the-shelf SaaS doesn\'t fit, we build custom dashboards, internal tools, booking systems, and customer portals tailored to your exact business logic.',
        features: ['Admin dashboards', 'User authentication', 'API integrations', 'Real-time data', 'Cloud hosting'],
        color: 'border-l-neutral-600',
    },
    {
        icon: ShoppingCart,
        category: 'E-Commerce Store',
        title: 'Online stores designed to sell — not just display',
        description: 'Custom storefronts with Razorpay/UPI integration, inventory management, order tracking, and WhatsApp order updates. Built for the Indian market.',
        features: ['Product catalog', 'Razorpay + UPI', 'Order tracking', 'Inventory mgmt', 'WhatsApp updates'],
        color: 'border-l-neutral-700',
    },
    {
        icon: Zap,
        category: 'Landing Page',
        title: 'Conversion-focused pages for campaigns and launches',
        description: 'Single-page sites optimized for one goal — getting leads, signups, or sales. Fast, focused, and designed with conversion copywriting principles.',
        features: ['A/B test ready', 'Lead capture', 'Analytics', 'Fast (<2s)', 'Mobile-optimized'],
        color: 'border-l-neutral-800',
    },
    {
        icon: Monitor,
        category: 'Website Redesign',
        title: 'Modernize your existing site for better performance',
        description: 'If your current website feels outdated, slow, or isn\'t bringing results — we audit, redesign, and rebuild it with modern tech for a dramatic improvement.',
        features: ['Performance audit', 'Modern redesign', 'SEO migration', 'Speed optimization', 'Analytics setup'],
        color: 'border-l-neutral-900 dark:border-l-neutral-100',
    },
];

function ShowcaseGrid() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6">
                <StaggerContainer className="space-y-6">
                    {showcaseItems.map((item) => (
                        <StaggerItem key={item.category}>
                            <div className={`group rounded-2xl border border-default bg-card p-8 hover:-translate-y-1 transition-all duration-300 border-l-4 ${item.color}`}>
                                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <item.icon className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                                            <span className="text-xs text-muted uppercase tracking-wider font-medium">
                                                {item.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted text-sm leading-relaxed mb-5 max-w-2xl">
                                            {item.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-3 py-1 rounded-full border border-default text-xs text-muted"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <Button variant="outline" size="default" className="group/btn" asChild>
                                            <Link href="/contact">
                                                Discuss
                                                <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

/* ── Our Approach ─────────────────────────────────────── */
function OurApproach() {
    return (
        <section className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                            Every project follows the same philosophy
                        </h2>
                    </Reveal>

                    <StaggerContainer className="grid sm:grid-cols-3 gap-8 mt-12 text-left">
                        {[
                            {
                                num: '01',
                                title: 'No Templates',
                                desc: 'Every pixel is designed for your brand. We never use pre-built templates or themes.',
                            },
                            {
                                num: '02',
                                title: 'Speed First',
                                desc: 'Our sites load in under 2 seconds. We optimize images, code, and delivery for maximum speed.',
                            },
                            {
                                num: '03',
                                title: 'Built to Grow',
                                desc: 'Clean architecture means your site or app can scale as your business grows — no rewrites needed.',
                            },
                        ].map((item) => (
                            <StaggerItem key={item.num}>
                                <div>
                                    <span className="text-xs font-mono text-muted">{item.num}</span>
                                    <h3 className="text-base font-semibold text-foreground mt-1 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}

/* ── CTA ──────────────────────────────────────────────── */
function WorkCTA() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight max-w-2xl mx-auto">
                        Have a project in mind?
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-muted text-base mb-10 max-w-lg mx-auto">
                        Tell us what you need and we&apos;ll show you exactly how we&apos;d build it — free consultation, no commitment.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="xl" className="group" asChild>
                            <Link href="/contact">
                                Start a Conversation
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="xl" variant="outline" asChild>
                            <Link href="/pricing">View Pricing</Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ── Page Export ───────────────────────────────────────── */
export default function WorkPage() {
    return (
        <>
            <WorkHero />
            <ShowcaseGrid />
            <OurApproach />
            <WorkCTA />
        </>
    );
}
