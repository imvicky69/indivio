'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

/* ── Hero ─────────────────────────────────────────────── */
function PricingHero() {
    return (
        <section className="pt-32 pb-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <Reveal>
                    <p className="text-sm text-muted tracking-wide uppercase mb-4 font-medium">
                        Pricing
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6 max-w-3xl mx-auto">
                        Transparent, flexible pricing for every stage.
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-lg text-muted leading-relaxed max-w-xl mx-auto">
                        Every project is unique. Pick a plan that fits — or let us build a custom quote based on exactly what you need.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

/* ── Pricing Tiers ────────────────────────────────────── */
interface PricingTier {
    name: string;
    price: string;
    priceSuffix?: string;
    description: string;
    features: string[];
    cta: string;
    highlighted?: boolean;
}

const tiers: PricingTier[] = [
    {
        name: 'Starter',
        price: '₹15,000',
        priceSuffix: 'onwards',
        description: 'Perfect for small businesses, local shops, and professionals who need a polished online presence fast.',
        features: [
            'Up to 5 pages',
            'Mobile responsive design',
            'Contact form integration',
            'Basic SEO setup',
            'WhatsApp button',
            '1 month free support',
        ],
        cta: 'Get Started',
    },
    {
        name: 'Growth',
        price: '₹35,000',
        priceSuffix: 'onwards',
        description: 'For businesses ready to scale — with custom features, integrations, and a more powerful digital presence.',
        features: [
            'Up to 15 pages',
            'Custom UI/UX design',
            'CMS or admin panel',
            'Payment gateway integration',
            'Advanced SEO & analytics',
            'Social media integration',
            '3 months free support',
            'Performance optimization',
        ],
        cta: 'Choose Growth',
        highlighted: true,
    },
    {
        name: 'Custom',
        price: 'Let\'s Talk',
        description: 'For complex projects — web apps, school ERPs, e-commerce platforms, and everything that needs a tailored approach.',
        features: [
            'Unlimited pages & features',
            'Custom web application',
            'Database & API design',
            'Third-party integrations',
            'User roles & authentication',
            'Ongoing maintenance plans',
            'Priority support',
            'Dedicated project manager',
        ],
        cta: 'Request a Quote',
    },
];

function PricingCards() {
    return (
        <section className="pb-24">
            <div className="max-w-6xl mx-auto px-6">
                <StaggerContainer className="grid md:grid-cols-3 gap-6 items-start">
                    {tiers.map((tier) => (
                        <StaggerItem key={tier.name}>
                            <div
                                className={`rounded-2xl border p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${tier.highlighted
                                    ? 'border-foreground bg-[var(--background)] shadow-lg relative'
                                    : 'border-default bg-card'
                                    }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-foreground text-[var(--background)] text-xs font-medium px-3 py-1 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-3">
                                        <span className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                                            {tier.price}
                                        </span>
                                        {tier.priceSuffix && (
                                            <span className="text-sm text-muted">{tier.priceSuffix}</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted leading-relaxed">
                                        {tier.description}
                                    </p>
                                </div>

                                <div className="space-y-3 mb-8 flex-1">
                                    {tier.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" strokeWidth={2} />
                                            <span className="text-sm text-muted">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    size="lg"
                                    variant={tier.highlighted ? 'default' : 'outline'}
                                    className="w-full group"
                                    asChild
                                >
                                    <Link href="/#contact">
                                        {tier.cta}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <Reveal delay={0.3}>
                    <p className="text-center text-sm text-muted mt-8">
                        All prices are in INR. GST extra where applicable. Custom pricing based on requirements.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

/* ── App Development Pricing ──────────────────────────── */
const appTiers: PricingTier[] = [
    {
        name: 'Hybrid App (React Native/Flutter)',
        price: '₹45,000',
        priceSuffix: 'onwards',
        description: 'Perfect for startups and businesses needing an app on both iOS and Android instantly using a single codebase.',
        features: [
            'Cross-platform iOS & Android',
            'Standard UI/UX components',
            'REST API & database integration',
            'Push notification setup',
            'App Store & Play Store publication',
            '2 months free support',
        ],
        cta: 'Start Cross-Platform',
        highlighted: true,
    },
    {
        name: 'Native App Development',
        price: '₹85,000',
        priceSuffix: 'onwards',
        description: 'For businesses requiring peak performance, complex animations, or deep hardware integrations using Swift and Kotlin.',
        features: [
            'Dedicated iOS and Android codebases',
            'Custom high-performance UI/UX',
            'Deep hardware/OS integration',
            'Advanced offline database sync',
            'Complex background processing',
            '3 months free support',
        ],
        cta: 'Choose Native',
    },
    {
        name: 'Enterprise / Super App',
        price: 'Let\'s Talk',
        description: 'For complex ecosystems — telemedicine, ride-sharing, coaching ERPs, or apps requiring heavy custom backend architecture.',
        features: [
            'End-to-end system architecture',
            'Custom microservices backend',
            'Advanced user roles & web admin panels',
            'Third-party & payment integrations',
            'Bank-grade security & Video DRM',
            'Dedicated ongoing maintenance team',
        ],
        cta: 'Request a Quote',
    },
];

function AppPricingCards() {
    return (
        <section className="pb-24">
            <div className="max-w-6xl mx-auto px-6">
                <StaggerContainer className="grid md:grid-cols-3 gap-6 items-start">
                    {appTiers.map((tier) => (
                        <StaggerItem key={tier.name}>
                            <div
                                className={`rounded-2xl border p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 ${tier.highlighted
                                    ? 'border-foreground bg-[var(--background)] shadow-lg relative'
                                    : 'border-default bg-[var(--background)]'
                                    }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-foreground text-[var(--background)] text-xs font-medium px-3 py-1 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-3">
                                        <span className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
                                            {tier.price}
                                        </span>
                                        {tier.priceSuffix && (
                                            <span className="text-sm text-muted">{tier.priceSuffix}</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted leading-relaxed">
                                        {tier.description}
                                    </p>
                                </div>

                                <div className="space-y-3 mb-8 flex-1">
                                    {tier.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" strokeWidth={2} />
                                            <span className="text-sm text-muted">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    size="lg"
                                    variant={tier.highlighted ? 'default' : 'outline'}
                                    className="w-full group"
                                    asChild
                                >
                                    <Link href="/#contact">
                                        {tier.cta}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

/* ── Optional Add-ons ─────────────────────────────────── */
const addons = [
    { name: 'Logo & Branding', price: '₹4,999+', desc: 'Professional logo design and brand guidelines tailored to your vision.' },
    { name: 'Copywriting', price: '₹1,499 / page', desc: 'SEO-optimized, conversion-focused content written by experts.' },
    { name: 'Advanced SEO', price: '₹9,999+', desc: 'Deep keyword research, schema markup, and advanced speed tuning.' },
    { name: 'E-commerce Setup', price: '₹14,999+', desc: 'Product uploads, payment gateways, and complex shipping rules.' },
];

function OptionalAddons() {
    return (
        <section className="py-24 border-t border-default">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Optional Add-ons
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base max-w-2xl mx-auto">
                            Need a little extra? Add strictly what you need. No bundled fluff.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {addons.map((addon) => (
                        <StaggerItem key={addon.name}>
                            <div className="p-6 rounded-2xl border border-default bg-[var(--background)] h-full flex flex-col hover:-translate-y-1 transition-transform">
                                <h3 className="text-lg font-semibold text-foreground mb-1">{addon.name}</h3>
                                <div className="text-xl font-medium text-foreground mb-3">{addon.price}</div>
                                <p className="text-sm text-muted leading-relaxed flex-1">{addon.desc}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

/* ── Cost Drivers ─────────────────────────────────────── */
function CostDrivers() {
    return (
        <section className="py-16 bg-card border-t border-default">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                            What drives the cost?
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            Why our pricing starts at "onwards". Transparency is our policy.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Reveal delay={0.1}>
                        <div className="p-6 rounded-2xl border border-default bg-[var(--background)]">
                            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-3">
                                <span className="bg-foreground text-[var(--background)] w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">1</span>
                                Complexity & Features
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                Custom animations, user portals, and complex databases take more engineering time to build securely and robustly.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="p-6 rounded-2xl border border-default bg-[var(--background)]">
                            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-3">
                                <span className="bg-foreground text-[var(--background)] w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">2</span>
                                Content Volume
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                A 5-page landing site is much faster to design, test, and launch compared to a 30-page corporate hub.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="p-6 rounded-2xl border border-default bg-[var(--background)]">
                            <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-3">
                                <span className="bg-foreground text-[var(--background)] w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">3</span>
                                Third-Party Integrations
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                Connecting custom CRMs, specific payment gateways, or ERPs often requires specialized API work.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── What's Included in Every Plan ────────────────────── */
const baseFeatures = [
    { label: 'Fully responsive design', desc: 'Looks perfect on mobile, tablet, and desktop.' },
    { label: 'Source code ownership', desc: 'You own 100% of the code we write for you.' },
    { label: 'Free deployment', desc: 'We handle hosting setup at no extra cost.' },
    { label: 'Post-launch support', desc: 'Every plan includes free support after delivery.' },
    { label: 'Modern tech stack', desc: 'Built with Next.js, React, and battle-tested tools.' },
    { label: 'Revision rounds', desc: 'We iterate until you\'re happy with the result.' },
];

function EveryPlanIncludes() {
    return (
        <section className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-12">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Every plan includes
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            No hidden fees. No tricks. Every project we deliver comes with these guarantees.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {baseFeatures.map((feature) => (
                        <StaggerItem key={feature.label}>
                            <div className="group">
                                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:opacity-70 transition-opacity">
                                    {feature.label}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

/* ── Hosting Info ─────────────────────────────────────── */
function HostingInfo() {
    return (
        <section className="py-24 border-t border-b border-default">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                        Worry-Free Hosting Included
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto mb-10">
                        We don't just build your website, we keep it online fast and secure. We offer an industry-first <strong>8 Months of FREE hosting</strong> across all builds.
                    </p>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="p-6 rounded-2xl border border-default bg-[var(--background)] relative overflow-hidden">
                            <span className="absolute -right-6 top-3 bg-foreground text-[var(--background)] px-8 py-1 rotate-45 text-xs font-semibold">Starter</span>
                            <div className="text-2xl font-semibold text-foreground mb-1">₹299<span className="text-sm text-muted font-normal">/mo</span></div>
                            <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-2">Basic Sites</h3>
                            <p className="text-sm text-muted">Perfect for portfolios, local business landing pages, and small static websites.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-foreground bg-[var(--background)] shadow-sm relative overflow-hidden relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-[var(--background)] px-3 py-1 rounded-full text-xs font-medium">Most Normal</div>
                            <div className="text-2xl font-semibold text-foreground mb-1 mt-2">₹399<span className="text-sm text-muted font-normal">/mo</span></div>
                            <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-2">Standard Sites</h3>
                            <p className="text-sm text-muted">Ideal for multi-page blogs, company portals, and small stores.</p>
                        </div>
                        <div className="p-6 rounded-2xl border border-default bg-[var(--background)] relative">
                            <div className="text-2xl font-semibold text-foreground mb-1">₹499+<span className="text-sm text-muted font-normal">/mo</span></div>
                            <h3 className="text-sm font-medium text-muted uppercase tracking-wider mb-2">Complex Platforms</h3>
                            <p className="text-sm text-muted">Designed for dynamic web applications, heavy e-commerce, and high-traffic needs.</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="mt-8 inline-flex items-center gap-2 bg-green-500/10 text-green-700 dark:text-green-400 px-6 py-3 rounded-full text-sm font-medium border border-green-500/20">
                        <span className="flex-1">Take 1-year hosting to grab <strong>30-40% OFF</strong>!</span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ── Maintenance Plans ────────────────────────────────── */
function MaintenancePlans() {
    return (
        <section className="py-24 border-b border-default bg-card">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Optional Maintenance Plans
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base max-w-2xl mx-auto">
                            Don't want to manage updates, security patches, or content changes yourself? Let us handle it to keep your site fresh.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <Reveal delay={0.2}>
                        <div className="p-8 rounded-2xl border border-default bg-[var(--background)] h-full flex flex-col">
                            <h3 className="text-xl font-semibold text-foreground mb-2">Pay-As-You-Go</h3>
                            <div className="text-3xl font-semibold text-foreground mb-4">₹499<span className="text-sm text-muted font-normal">/hour</span></div>
                            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                                Perfect if you rarely need updates. Reach out whenever you need images swapped, text changed, or minimal tweaks.
                            </p>
                            <ul className="space-y-3 pt-6 border-t border-default">
                                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" /> <span className="text-sm text-muted">No monthly commitment</span></li>
                                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" /> <span className="text-sm text-muted">Billed only for the hours worked</span></li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="p-8 rounded-2xl border border-foreground bg-[var(--background)] relative h-full shadow-lg flex flex-col">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-[var(--background)] px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                                Best Value
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">Annual Care</h3>
                            <div className="text-3xl font-semibold text-foreground mb-4">₹999<span className="text-sm text-muted font-normal">/mo</span></div>
                            <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                                Billed automatically every year (₹11,988/yr). You get absolute peace of mind knowing your site is continuously monitored.
                            </p>
                            <ul className="space-y-3 pt-6 border-t border-default">
                                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" /> <span className="text-sm text-muted">A dedicated support channel</span></li>
                                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" /> <span className="text-sm text-muted">Monthly routine technical updates</span></li>
                                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" /> <span className="text-sm text-muted">Uptime & active security monitoring</span></li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Payment Process ──────────────────────────────────── */
function PaymentProcess() {
    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Simple, Transparent Payment
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base max-w-2xl mx-auto">
                            We believe in shared risk and shared success. That's why we don't ask for 100% upfront.
                        </p>
                    </Reveal>
                </div>

                <div className="relative">
                    <div className="hidden md:block absolute top-[40%] left-0 w-full h-px bg-default border-t border-dashed -translate-y-1/2 z-0"></div>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        <Reveal delay={0.2}>
                            <div className="bg-[var(--background)] p-6 rounded-2xl border border-default text-center h-full flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-foreground text-[var(--background)] flex items-center justify-center font-bold mb-6 text-lg">1</div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">50% Deposit</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    Paid upfront to lock in the timeline and officially kick off UI/UX design and development.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="bg-[var(--background)] p-6 rounded-2xl border border-default text-center h-full flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-foreground text-[var(--background)] flex items-center justify-center font-bold mb-6 text-lg">2</div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Review & Refine</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    We share a live staging link. You click around, test features, and request revisions.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="bg-[var(--background)] p-6 rounded-2xl border border-default text-center h-full flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-foreground text-[var(--background)] flex items-center justify-center font-bold mb-6 text-lg">3</div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">50% Final Payment</h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    Paid only when you are completely satisfied. Then, we transfer ownership and launch!
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Pricing FAQ / Clarifications ─────────────────────── */
const pricingNotes = [
    {
        question: 'Why "onwards" and not a fixed price?',
        answer: 'Every project is different. A 3-page restaurant website costs less than a 10-page school site with forms and galleries. We give you an exact quote after understanding your needs — no surprises.',
    },
    {
        question: 'Do I have to pay everything upfront?',
        answer: 'No. We work with a 50/50 model — 50% to start, 50% on delivery. For larger projects, we can split it into 3 milestones.',
    },
    {
        question: 'What about ongoing costs?',
        answer: 'We provide 8 months of free hosting with every build! After that, hosting starts at ₹299/month for basic sites, scaling to ₹399 or ₹499/month depending on your website size. Plus, if you opt for a 1-year annual plan, you will get 30-40% off the total.',
    },
    {
        question: 'Can I upgrade my plan later?',
        answer: 'Absolutely. Many clients start with a Starter site and grow into a full web application. We build with scalability in mind from day one.',
    },
];

function PricingFAQ() {
    return (
        <section className="py-24">
            <div className="max-w-2xl mx-auto px-6">
                <div className="mb-12">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Common pricing questions
                        </h2>
                    </Reveal>
                </div>

                <div className="space-y-8">
                    {pricingNotes.map((note, index) => (
                        <Reveal key={note.question} delay={index * 0.08}>
                            <div>
                                <h3 className="text-base font-semibold text-foreground mb-2">
                                    {note.question}
                                </h3>
                                <p className="text-sm text-muted leading-relaxed">
                                    {note.answer}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Comparison Table ─────────────────────────────────── */
const comparisonRows = [
    { label: 'Custom Design', indivio: '✓', freelancer: 'Sometimes', agency: '✓' },
    { label: 'Delivery Speed', indivio: '2–4 weeks', freelancer: '1–6 weeks', agency: '4–12 weeks' },
    { label: 'Price Range', indivio: '₹15K–₹1L', freelancer: '₹5K–₹50K', agency: '₹1L–₹10L+' },
    { label: 'Code Quality', indivio: 'Production-grade', freelancer: 'Varies widely', agency: 'Production-grade' },
    { label: 'Post-Launch Support', indivio: 'Included', freelancer: 'Rare', agency: 'Extra cost' },
    { label: 'Direct Communication', indivio: '✓', freelancer: '✓', agency: 'Via manager' },
    { label: 'Scalable Architecture', indivio: '✓', freelancer: 'Rare', agency: '✓' },
];

function PricingComparison() {
    return (
        <section className="py-24 bg-card">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-12">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            How we compare
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            The quality of an agency, the speed of a freelancer, the transparency of neither.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.15}>
                    <div className="border border-default rounded-2xl overflow-hidden bg-[var(--background)]">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-default">
                                        <th className="px-6 py-4 text-xs font-medium text-muted uppercase tracking-wider"></th>
                                        <th className="px-6 py-4 text-xs font-semibold text-foreground uppercase tracking-wider">Indivio</th>
                                        <th className="px-6 py-4 text-xs font-medium text-muted uppercase tracking-wider">Freelancer</th>
                                        <th className="px-6 py-4 text-xs font-medium text-muted uppercase tracking-wider">Agency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonRows.map((row, i) => (
                                        <tr key={row.label} className={i < comparisonRows.length - 1 ? 'border-b border-default' : ''}>
                                            <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">{row.label}</td>
                                            <td className="px-6 py-4 text-foreground font-medium">{row.indivio}</td>
                                            <td className="px-6 py-4 text-muted">{row.freelancer}</td>
                                            <td className="px-6 py-4 text-muted">{row.agency}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ── Bottom CTA ───────────────────────────────────────── */
function PricingCTA() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight max-w-2xl mx-auto">
                        Still have questions? Let&apos;s talk.
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-muted text-base mb-10 max-w-lg mx-auto">
                        We&apos;ll discuss your project, give you a clear timeline and an honest quote — completely free, no strings attached.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="xl" className="group" asChild>
                            <Link href="/contact">
                                Get a Free Quote
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="xl" variant="outline" className="group" asChild>
                            <Link href="https://wa.me/919798836199" target="_blank" rel="noopener noreferrer nofollow">
                                <MessageCircle className="mr-2 w-4 h-4" />
                                WhatsApp Us
                            </Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ── Page Export ───────────────────────────────────────── */
export default function PricingPage() {
    const [view, setView] = useState<'web' | 'app'>('web');

    return (
        <>
            <PricingHero />
            
            {/* View Toggle */}
            <section className="pb-16 -mt-8 relative z-20">
                <Reveal delay={0.3}>
                    <div className="flex justify-center max-w-6xl mx-auto px-6">
                        <div className="bg-[var(--background)] border border-default p-1.5 rounded-full inline-flex shadow-sm">
                            <button
                                onClick={() => setView('web')}
                                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    view === 'web' 
                                        ? 'bg-foreground text-[var(--background)] shadow-md translate-x-0' 
                                        : 'text-muted hover:text-foreground'
                                }`}
                            >
                                Web Development
                            </button>
                            <button
                                onClick={() => setView('app')}
                                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    view === 'app' 
                                        ? 'bg-foreground text-[var(--background)] shadow-md translate-x-0' 
                                        : 'text-muted hover:text-foreground'
                                }`}
                            >
                                App Development
                            </button>
                        </div>
                    </div>
                </Reveal>
            </section>

            {view === 'web' ? <PricingCards /> : <AppPricingCards />}
            
            {view === 'web' && <OptionalAddons />}
            
            <CostDrivers />
            <EveryPlanIncludes />
            
            {view === 'web' && (
                <>
                    <HostingInfo />
                    <MaintenancePlans />
                </>
            )}
            
            <PaymentProcess />
            <PricingComparison />
            <PricingFAQ />
            <PricingCTA />
        </>
    );
}

