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
} from 'lucide-react';
import Link from 'next/link';
import { SubmitSuccess } from '@/components/ui/submit-success';

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
            if (!scriptUrl) throw new Error('Form endpoint not configured');

            const res = await fetch(scriptUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Name: formData.name,
                    Email: formData.email,
                    Message: formData.message,
                }),
            });

            const data = await res.json();

            if (data.result === 'success') {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch {
            setError('Something went wrong. Please try WhatsApp or email instead.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <section className="py-24 bg-card">
                <div className="max-w-2xl mx-auto px-6">
                    <SubmitSuccess onReset={() => setSubmitted(false)} />
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
                                Fill out the form and we&apos;ll get back to you within 24 hours with a free estimate. No obligations.
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
                                    className="w-full px-4 py-3 rounded-xl border border-default bg-[var(--background)] text-foreground text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow"
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
                                    className="w-full px-4 py-3 rounded-xl border border-default bg-[var(--background)] text-foreground text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                                    Your Message *
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="Tell us about your project — what you're building, who it's for, and any features in mind."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-default bg-[var(--background)] text-foreground text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow resize-none"
                                />
                            </div>

                            {error && (
                                <div className="text-center py-2 text-sm text-red-500 font-medium">
                                    {error}
                                </div>
                            )}

                            <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && (
                                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                )}
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
