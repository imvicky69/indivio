'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import Link from 'next/link';

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
        price: '₹40,000',
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
        <section className="py-12">
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
        answer: 'Hosting starts from ₹500/month for basic sites. Maintenance plans with updates and support start from ₹2,000/month. Both are optional.',
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
                            <Link href="https://wa.me/919798836199" target="_blank">
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
    return (
        <>
            <PricingHero />
            <PricingCards />
            <EveryPlanIncludes />
            <PricingComparison />
            <PricingFAQ />
            <PricingCTA />
        </>
    );
}

