'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import {
    Send,
    MessageCircle,
    Mail,
    MapPin,
    Clock,
    Loader2,
} from 'lucide-react';
import Link from 'next/link';

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? '';

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

/* ── Animated success confirmation ────────────────────── */
function SuccessConfirmation({ onReset }: { onReset: () => void }) {
    return (
        <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="flex flex-col items-center justify-center py-16 text-center gap-5"
        >
            {/* Animated checkmark circle */}
            <div className="relative flex items-center justify-center">
                {/* Outer glow ring */}
                <motion.div
                    className="absolute w-32 h-32 rounded-full bg-emerald-500/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.5, 1] }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                />
                {/* Middle ring */}
                <motion.div
                    className="absolute w-24 h-24 rounded-full border-2 border-emerald-400/30"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                {/* Circle with checkmark */}
                <motion.div
                    className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center shadow-xl shadow-emerald-500/30"
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.15 }}
                >
                    <motion.svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-10"
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.path
                            d="M4.5 12.5l5 5 10-10"
                            variants={{
                                hidden: { pathLength: 0, opacity: 0 },
                                visible: { pathLength: 1, opacity: 1 },
                            }}
                            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                        />
                    </motion.svg>
                </motion.div>

                {/* Floating sparkle dots */}
                {[
                    { css: { top: '-16px', left: '8px' }, delay: 0.55 },
                    { css: { top: '-10px', right: '6px' }, delay: 0.65 },
                    { css: { bottom: '-14px', left: '12px' }, delay: 0.6 },
                    { css: { bottom: '-8px', right: '10px' }, delay: 0.7 },
                    { css: { top: '6px', left: '-18px' }, delay: 0.58 },
                    { css: { top: '6px', right: '-16px' }, delay: 0.68 },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-emerald-400"
                        style={item.css}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.9, delay: item.delay, ease: 'easeOut' }}
                    />
                ))}
            </div>

            <motion.h2
                className="text-3xl font-semibold text-foreground"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                Message sent!
            </motion.h2>
            <motion.p
                className="text-base text-muted max-w-sm leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
            >
                Thanks for reaching out. We&apos;ll review your message and get back to you within 24 hours. You can also email us at{' '}
                <Link href="mailto:hello@indivio.in" className="text-foreground underline underline-offset-2">
                    hello@indivio.in
                </Link>
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <Button size="lg" onClick={onReset}>
                    Send Another Message
                </Button>
            </motion.div>
        </motion.div>
    );
}

/* ── Contact Form ─────────────────────────────────────── */
function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (GOOGLE_SCRIPT_URL) {
            try {
                const params = new URLSearchParams({
                    Name: formData.name,
                    Email: formData.email,
                    PhoneNumber: formData.phone,
                    Message: formData.message,
                });
                await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
                    method: 'POST',
                    mode: 'no-cors',
                });
            } catch (err) {
                if (process.env.NODE_ENV === 'development') console.error('Google Script submission error:', err);
            }
        }

        setIsSubmitting(false);
        setSubmitted(true);
    };

    const handleReset = () => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <AnimatePresence mode="wait">
                    {submitted ? (
                        <SuccessConfirmation key="success" onReset={handleReset} />
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="grid md:grid-cols-2 gap-16"
                        >
                            {/* Left — Context */}
                            <div>
                                <Reveal>
                                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">
                                        Tell us about your project
                                    </h2>
                                </Reveal>
                                <Reveal delay={0.1}>
                                    <p className="text-muted text-base mb-8 leading-relaxed">
                                        Fill out the form and we&apos;ll get back to you within 24 hours.
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

                                    <div>
                                        <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                                            Phone Number
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

                                    <Button type="submit" size="xl" className="w-full group" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </>
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
                        </motion.div>
                    )}
                </AnimatePresence>
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


