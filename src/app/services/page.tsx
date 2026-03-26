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
    Smartphone,
    BookOpen,
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
                            From high-converting landing pages to full-scale native mobile apps, coaching ERPs, and custom SaaS platforms — we handle the entire stack so you can focus on growing your business.
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
        subtitle: 'Beautiful, fast websites that turn visitors into customers.',
        problem: 'Most small businesses in Tier-2 and Tier-3 cities either have no online presence or rely on an outdated template site that doesn\'t rank on Google and fails to build trust with customers.',
        solution: 'We design and develop custom websites from scratch using Next.js — engineered for speed, SEO dominance, and mobile-first responsiveness. Every page reflects your brand identity and is structured to convert.',
        result: 'A professional, fast-loading website that ranks high on Google, builds credibility, and consistently drives inquiries and leads for your business.',
        features: [
            'Custom UI/UX design from scratch',
            'Mobile-first responsive development',
            'On-page SEO & meta optimization',
            'Performance tuning (90+ Lighthouse score)',
            'Google Analytics & conversion tracking',
            'CMS / blog integration',
        ],
    },
    {
        id: 'mobile-app-development',
        icon: Smartphone,
        number: '02',
        title: 'Mobile App Development',
        subtitle: 'Native and cross-platform apps that live on your customers\' screens.',
        problem: 'Businesses lose customers when they have no dedicated mobile presence. Generic mobile sites don\'t deliver the premium, fast experience that users expect from an app.',
        solution: 'We build hybrid apps with React Native/Flutter and native apps with Swift & Kotlin — giving your brand a permanent, always-accessible home on iOS and Android. Full support for push notifications, offline mode, and deep OS integration.',
        result: 'A high-performance mobile application that drives engagement, builds retention, and puts your business in the pocket of every customer.',
        features: [
            'iOS & Android (cross-platform or native)',
            'Custom UI with smooth 60fps animations',
            'Push notifications & in-app messaging',
            'Offline database sync',
            'Payment gateway (Razorpay, Stripe)',
            'App Store & Play Store submission',
        ],
        reversed: true,
    },
    {
        id: 'coaching-erp',
        icon: BookOpen,
        number: '03',
        title: 'Coaching & School ERP',
        subtitle: 'End-to-end digital management for coaching institutes and schools.',
        problem: 'Coaching institutes and schools run on WhatsApp groups, paper registers, and manual fee receipts. This leads to payment delays, missed attendance, and zero visibility into operations.',
        solution: 'We build a dedicated Coaching Management Platform — with an Anti-Piracy video streaming wall, Smart ID card generation, automated fee collection, attendance tracking, and a parent-facing mobile app, all in one system.',
        result: 'A fully automated institute that retains more students, reduces administrative overhead, and operates at the level of top-tier educational brands.',
        features: [
            'Anti-Piracy DRM video streaming wall',
            'Smart ID card generation',
            'Automated online fee collection (UPI/cards)',
            'Student & staff attendance tracking',
            'Test & result management',
            'Parent portal & mobile app',
        ],
    },
    {
        id: 'web-applications',
        icon: Layers,
        number: '04',
        title: 'Custom Web Applications & SaaS',
        subtitle: 'Complex business problems solved with clean, scalable software.',
        problem: 'Growing businesses depend on spreadsheets, WhatsApp, and disconnected tools that break under pressure. Off-the-shelf SaaS tools are expensive and never perfectly fit your workflows.',
        solution: 'We architect custom web applications — dashboards, internal tools, booking systems, and full SaaS platforms — tailored exactly to your business logic using React, Node.js, and scalable cloud infrastructure.',
        result: 'A robust digital platform that automates your core operations, eliminates manual work, and is built to handle thousands of users from day one.',
        features: [
            'Custom dashboards & admin panels',
            'User authentication & role management',
            'Database architecture & REST/GraphQL APIs',
            'Real-time data & WebSocket notifications',
            'Cloud hosting & auto-scaling',
            'Third-party integrations (payments, SMS, email)',
        ],
        reversed: true,
    },
    {
        id: 'ecommerce',
        icon: ShoppingCart,
        number: '05',
        title: 'E-commerce Platforms',
        subtitle: 'Online stores built to sell — not just to display products.',
        problem: 'Indian small businesses are either priced out of Shopify or stuck on slow, generic WordPress templates. Both result in low conversions and frustrated customers.',
        solution: 'We build custom e-commerce experiences optimized for the Indian market — with UPI/Razorpay integration, WhatsApp order updates, lightning-fast mobile checkout, and a clean admin panel for easy stock management.',
        result: 'A premium, high-converting online store that feels as polished as the big brands, loads in under 2 seconds, and makes buying effortless.',
        features: [
            'Custom storefront & product catalog',
            'Inventory & order management',
            'Razorpay / UPI payment integration',
            'WhatsApp order & shipment updates',
            'SEO-optimized product pages',
            'Admin panel for easy management',
        ],
    },
    {
        id: 'landing-pages',
        icon: Zap,
        number: '06',
        title: 'High-Conversion Landing Pages',
        subtitle: 'Single-purpose pages engineered to maximize your ad ROI.',
        problem: 'Running Google or Meta ads without a dedicated landing page is like filling a leaking bucket. Generic homepages don\'t convert paid traffic — they bleed your ad budget.',
        solution: 'We design laser-focused landing pages with persuasive copy, a single clear CTA, built-in lead capture, and analytics tracking — so every rupee you spend on ads has a fighting chance of converting.',
        result: 'A conversion-optimized page that significantly lowers your Cost Per Lead and dramatically increases returns from every paid campaign you run.',
        features: [
            'Conversion-optimized layout & copy',
            'A/B testing ready architecture',
            'Lead capture forms & CRM integration',
            'Google Tag Manager & Meta Pixel setup',
            'Sub-2-second load times',
            'Mobile-first design',
        ],
        reversed: true,
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
        { label: 'Mobile Apps', href: '#mobile-app-development' },
        { label: 'Coaching ERP', href: '#coaching-erp' },
        { label: 'Web Apps / SaaS', href: '#web-applications' },
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
