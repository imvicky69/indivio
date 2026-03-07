'use client';

import { useState } from 'react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import {
    Send,
    MessageCircle,
    Mail,
    MapPin,
    Clock,
    ArrowRight,
    CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

/* ── Hero ─────────────────────────────────────────────── */
function ContactHero() {
    return (
        <section className="pt-32 pb-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="text-sm text-muted tracking-wide uppercase mb-4 font-medium">
                            Contact Us
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                            Let&apos;s build something great together.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-muted leading-relaxed max-w-2xl">
                            Have a project in mind? Reach out and we&apos;ll get back to you within 24 hours. No obligations, just an honest conversation.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Contact Info Cards ───────────────────────────────── */
const contactMethods = [
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        value: 'Chat with us',
        href: 'https://wa.me/919999999999?text=Hi%20Indivio%2C%20I%27m%20interested%20in%20your%20services.',
        accent: true,
    },
    {
        icon: Mail,
        title: 'Email',
        value: 'hello@indivio.in',
        href: 'mailto:hello@indivio.in',
    },
    {
        icon: MapPin,
        title: 'Location',
        value: 'India (Remote-first)',
        href: '#',
    },
    {
        icon: Clock,
        title: 'Response Time',
        value: 'Within 24 hours',
        href: '#',
    },
];

function ContactInfo() {
    return (
        <section className="pb-12">
            <div className="max-w-6xl mx-auto px-6">
                <StaggerContainer className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {contactMethods.map((method) => (
                        <StaggerItem key={method.title}>
                            <Link
                                href={method.href}
                                target={method.href.startsWith('http') ? '_blank' : undefined}
                                className={`group block rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${method.accent
                                        ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30'
                                        : 'border-default bg-card'
                                    }`}
                            >
                                <method.icon
                                    className={`w-5 h-5 mb-3 ${method.accent
                                            ? 'text-emerald-600 dark:text-emerald-400'
                                            : 'text-muted group-hover:text-foreground transition-colors'
                                        }`}
                                    strokeWidth={1.5}
                                />
                                <div className="text-xs text-muted uppercase tracking-wider mb-1">
                                    {method.title}
                                </div>
                                <div className="text-sm font-medium text-foreground">
                                    {method.value}
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

/* ── Contact Form ─────────────────────────────────────── */
function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        budget: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Build WhatsApp message with form data
        const text = `Hi Indivio! I'm ${formData.name}.%0A%0AEmail: ${formData.email}%0APhone: ${formData.phone || 'Not provided'}%0ABudget: ${formData.budget || 'Not specified'}%0A%0AProject Details:%0A${formData.message}`;
        window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <section className="py-24 bg-card">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <Reveal>
                        <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-foreground mb-3">
                            Message sent!
                        </h2>
                        <p className="text-muted text-base mb-8">
                            We&apos;ve opened WhatsApp with your details. If WhatsApp didn&apos;t open, you can also email us at{' '}
                            <Link href="mailto:hello@indivio.in" className="text-foreground underline underline-offset-2">
                                hello@indivio.in
                            </Link>
                        </p>
                        <Button size="lg" onClick={() => setSubmitted(false)}>
                            Send Another Message
                        </Button>
                    </Reveal>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Left — Context */}
                    <div>
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                                Tell us about your project
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-muted text-base mb-8 leading-relaxed">
                                Fill out the form and we&apos;ll send your details directly to our WhatsApp for a faster response. Or email us if you prefer.
                            </p>
                        </Reveal>

                        <div className="space-y-4">
                            {[
                                'Free consultation — no strings attached',
                                'Clear timeline and quote within 48 hours',
                                'We sign an NDA if needed',
                                'Flexible payment — 50/50 or milestone-based',
                            ].map((item, i) => (
                                <Reveal key={i} delay={0.15 + i * 0.05}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                        <span className="text-sm text-muted">{item}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Right — Form */}
                    <Reveal animation="slideRight" delay={0.1}>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-default bg-[var(--background)] text-foreground text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-default bg-[var(--background)] text-foreground text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                                        Phone (optional)
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-default bg-[var(--background)] text-foreground text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                                        Budget Range
                                    </label>
                                    <select
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-default bg-[var(--background)] text-foreground text-sm focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                                    >
                                        <option value="">Select a range</option>
                                        <option value="₹15K - ₹30K">₹15K – ₹30K</option>
                                        <option value="₹30K - ₹60K">₹30K – ₹60K</option>
                                        <option value="₹60K - ₹1L">₹60K – ₹1L</option>
                                        <option value="₹1L+">₹1L+</option>
                                        <option value="Not sure">Not sure yet</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                                    Tell us about your project *
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="What are you building? Who is it for? Any specific features in mind?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-default bg-[var(--background)] text-foreground text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors resize-none"
                                />
                            </div>

                            <Button type="submit" size="xl" className="w-full group">
                                Send via WhatsApp
                                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <p className="text-xs text-muted text-center">
                                Or email us directly at{' '}
                                <Link href="mailto:hello@indivio.in" className="text-foreground underline underline-offset-2">
                                    hello@indivio.in
                                </Link>
                            </p>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Page Export ───────────────────────────────────────── */
export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </>
    );
}
