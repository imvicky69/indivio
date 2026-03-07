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
    Check,
} from 'lucide-react';
import Link from 'next/link';

/* ── Hero ─────────────────────────────────────────────── */
function ServicesHero() {
    return (
        <section className="pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="text-sm text-muted tracking-wide uppercase mb-4 font-medium">
                            Our Services
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                            Everything you need to go digital — and stay ahead.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-muted leading-relaxed max-w-2xl">
                            From single-page landing sites to full-scale web applications, we handle the entire stack so you can focus on running your business.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Service Detail Component ─────────────────────────── */
interface ServiceDetailProps {
    id: string;
    icon: React.ElementType;
    number: string;
    title: string;
    subtitle: string;
    problem: string;
    solution: string;
    result: string;
    features: string[];
    reversed?: boolean;
    altBg?: boolean;
}

function ServiceDetail({
    id,
    icon: Icon,
    number,
    title,
    subtitle,
    problem,
    solution,
    result,
    features,
    reversed = false,
    altBg = false,
}: ServiceDetailProps) {
    return (
        <section id={id} className={`py-24 ${altBg ? 'bg-card' : ''}`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className={`grid md:grid-cols-2 gap-16 items-start ${reversed ? 'md:direction-rtl' : ''}`}>
                    {/* Left — Info */}
                    <div className={reversed ? 'md:order-2' : ''}>
                        <Reveal animation={reversed ? 'slideRight' : 'slideLeft'}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl border border-default flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                                </div>
                                <span className="text-xs font-mono text-muted tracking-wider">{number}</span>
                            </div>
                        </Reveal>

                        <Reveal animation={reversed ? 'slideRight' : 'slideLeft'} delay={0.05}>
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
                                {title}
                            </h2>
                        </Reveal>
                        <Reveal animation={reversed ? 'slideRight' : 'slideLeft'} delay={0.1}>
                            <p className="text-muted text-base mb-8">
                                {subtitle}
                            </p>
                        </Reveal>

                        {/* Problem → Solution → Result */}
                        <div className="space-y-6">
                            <Reveal delay={0.15}>
                                <div>
                                    <span className="text-xs font-medium text-muted uppercase tracking-wider">The Problem</span>
                                    <p className="text-sm text-foreground leading-relaxed mt-1">{problem}</p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <div>
                                    <span className="text-xs font-medium text-muted uppercase tracking-wider">Our Solution</span>
                                    <p className="text-sm text-foreground leading-relaxed mt-1">{solution}</p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.25}>
                                <div>
                                    <span className="text-xs font-medium text-muted uppercase tracking-wider">The Result</span>
                                    <p className="text-sm text-foreground leading-relaxed mt-1">{result}</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right — Features Card */}
                    <div className={reversed ? 'md:order-1' : ''}>
                        <Reveal animation={reversed ? 'slideLeft' : 'slideRight'} delay={0.15}>
                            <div className="border border-default rounded-2xl bg-card p-8 sticky top-24">
                                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-6">
                                    What&apos;s Included
                                </h3>
                                <div className="space-y-4">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 group">
                                            <div className="mt-0.5 w-5 h-5 rounded-full border border-default group-hover:border-foreground flex items-center justify-center transition-colors flex-shrink-0">
                                                <Check className="w-3 h-3 text-muted group-hover:text-foreground transition-colors" strokeWidth={2.5} />
                                            </div>
                                            <p className="text-sm text-muted leading-relaxed">{feature}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-default">
                                    <Button size="lg" className="w-full group" asChild>
                                        <Link href="/#contact">
                                            Discuss This Service
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Service Data ─────────────────────────────────────── */
const services: ServiceDetailProps[] = [
    {
        id: 'website-development',
        icon: Globe,
        number: '01',
        title: 'Website Development',
        subtitle: 'Beautiful, fast websites that convert visitors into customers.',
        problem: 'Most small businesses either have no website, or have an outdated one built on generic templates. It doesn\'t reflect their brand, loads slowly, and doesn\'t rank on Google.',
        solution: 'We design and build custom websites from scratch using Next.js and modern frameworks. Every page is crafted for speed, SEO, and mobile responsiveness — with your brand at the center.',
        result: 'A professional, blazing-fast website that builds trust, ranks higher on search engines, and turns visitors into paying customers.',
        features: [
            'Custom UI/UX design from scratch',
            'Mobile-first responsive development',
            'SEO optimization & meta tags',
            'Performance tuning (90+ Lighthouse)',
            'Analytics & conversion tracking',
            'Content management integration',
        ],
    },
    {
        id: 'web-applications',
        icon: Layers,
        number: '02',
        title: 'Custom Web Applications',
        subtitle: 'Complex problems solved with clean, scalable software.',
        problem: 'Growing businesses often rely on spreadsheets, WhatsApp groups, and manual processes that break as they scale. Off-the-shelf SaaS tools are expensive and don\'t fit unique workflows.',
        solution: 'We build custom web applications — dashboards, internal tools, customer portals, booking systems — tailored exactly to your business logic. Built with React, Node.js, and cloud infrastructure that scales.',
        result: 'A robust digital platform that automates operations, saves hours of manual work, and grows with your business.',
        features: [
            'Custom dashboards & admin panels',
            'User authentication & role management',
            'Database design & API development',
            'Real-time data & notifications',
            'Cloud hosting & auto-scaling',
            'Third-party integrations (payments, email, SMS)',
        ],
        reversed: true,
    },
    {
        id: 'school-erp',
        icon: GraduationCap,
        number: '03',
        title: 'School ERP Solutions',
        subtitle: 'Complete digital management for educational institutions.',
        problem: 'Schools waste countless hours on manual attendance, fee collection, result sheets, and parent communication. Paper-based systems lead to errors, delays, and frustrated parents.',
        solution: 'We build comprehensive school management platforms — attendance tracking, grade management, fee collection with online payments, parent portals, and communication tools — all in one integrated system.',
        result: 'A streamlined school that runs efficiently, communicates clearly with parents, and saves administrative staff hours every single day.',
        features: [
            'Student & staff management',
            'Attendance tracking with reports',
            'Online fee collection (UPI, cards)',
            'Exam results & report cards',
            'Parent communication portal',
            'Timetable & event management',
        ],
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        number: '04',
        title: 'E-commerce',
        subtitle: 'Online stores that sell — not just display products.',
        problem: 'Most e-commerce setups for small businesses are either too expensive (Shopify monthly fees) or too generic (WordPress templates that all look the same). They don\'t convert because they\'re not designed to.',
        solution: 'We build custom e-commerce experiences optimized for the Indian market — with UPI/Razorpay integration, WhatsApp order updates, fast mobile checkout, and inventory management.',
        result: 'A high-converting online store that feels premium, loads fast on any device, and makes buying effortless.',
        features: [
            'Custom storefront design',
            'Product catalog & inventory management',
            'Razorpay / UPI payment integration',
            'Order tracking & notifications',
            'WhatsApp order updates',
            'Admin panel for easy management',
        ],
        reversed: true,
    },
    {
        id: 'landing-pages',
        icon: Zap,
        number: '05',
        title: 'Landing Pages',
        subtitle: 'High-impact single pages built for conversion.',
        problem: 'Businesses running ads or campaigns need dedicated landing pages — not their homepage. Without a focused page, ad spend is wasted on visitors who don\'t convert.',
        solution: 'We design conversion-focused landing pages with compelling copy, clear CTAs, fast load times, and built-in analytics so you know exactly what\'s working.',
        result: 'A laser-focused landing page that maximizes ROI on every rupee spent on advertising.',
        features: [
            'Conversion-optimized layout',
            'A/B testing ready',
            'Lead capture forms',
            'Analytics & tracking pixels',
            'Fast load times (<2s)',
            'Mobile-first design',
        ],
    },
];

/* ── Bottom CTA ───────────────────────────────────────── */
function ServicesCTA() {
    return (
        <section className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight max-w-2xl mx-auto">
                        Not sure which service you need?
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-muted text-base mb-10 max-w-lg mx-auto">
                        No worries — tell us your problem and we&apos;ll recommend the best approach. First consultation is always free.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="xl" className="group" asChild>
                            <Link href="/#contact">
                                Book a Free Call
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="xl" variant="outline" asChild>
                            <Link href="/#faq">View Pricing FAQ</Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ── Quick Nav ────────────────────────────────────────── */
function ServiceNav() {
    const items = [
        { label: 'Websites', href: '#website-development' },
        { label: 'Web Apps', href: '#web-applications' },
        { label: 'School ERP', href: '#school-erp' },
        { label: 'E-commerce', href: '#ecommerce' },
        { label: 'Landing Pages', href: '#landing-pages' },
    ];

    return (
        <section className="border-y border-default">
            <div className="max-w-6xl mx-auto px-6">
                <Reveal>
                    <StaggerContainer className="flex flex-wrap justify-center gap-2 py-5" staggerDelay={0.05}>
                        {items.map((item) => (
                            <StaggerItem key={item.label}>
                                <Link
                                    href={item.href}
                                    className="px-5 py-2.5 rounded-full border border-default text-sm text-muted hover:text-foreground hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200"
                                >
                                    {item.label}
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Reveal>
            </div>
        </section>
    );
}

/* ── Page Export ───────────────────────────────────────── */
export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServiceNav />
            {services.map((service, index) => (
                <ServiceDetail key={service.id} {...service} altBg={index % 2 === 0} />
            ))}
            <ServicesCTA />
        </>
    );
}
