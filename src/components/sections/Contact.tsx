'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { Send, MessageCircle, Loader2 } from 'lucide-react';

const WHATSAPP_NUMBER = '919999999999'; // Replace with actual WhatsApp number
const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? '';

/* ── Animated success overlay ─────────────────────────── */
function SuccessConfirmation({ onReset }: { onReset: () => void }) {
    return (
        <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="flex flex-col items-center justify-center py-10 text-center gap-4"
        >
            {/* Animated checkmark circle */}
            <div className="relative flex items-center justify-center">
                {/* Outer glow ring */}
                <motion.div
                    className="absolute w-24 h-24 rounded-full bg-emerald-500/15"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.4, 1] }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                {/* Circle */}
                <motion.div
                    className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30"
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                >
                    {/* SVG checkmark with draw animation */}
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
                            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
                        />
                    </motion.svg>
                </motion.div>
            </div>

            {/* Floating sparkle dots */}
            {[
                { css: { top: '-12px', left: '10px' }, delay: 0.5 },
                { css: { top: '-8px', right: '8px' }, delay: 0.6 },
                { css: { bottom: '-10px', left: '14px' }, delay: 0.55 },
                { css: { bottom: '-6px', right: '12px' }, delay: 0.65 },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400"
                    style={item.css}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.3, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, delay: item.delay, ease: 'easeOut' }}
                />
            ))}

            {/* Text */}
            <motion.h3
                className="text-xl font-semibold text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
            >
                Message sent!
            </motion.h3>
            <motion.p
                className="text-sm text-muted max-w-xs leading-relaxed"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
            >
                Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
            >
                <Button variant="outline" size="sm" onClick={onReset}>
                    Send another message
                </Button>
            </motion.div>
        </motion.div>
    );
}

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const openWhatsApp = () => {
        const text = encodeURIComponent(
            `Hi Indivio! I'm interested in your services.\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nMessage: ${formData.message || 'I would like to discuss a project.'}`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left - Info */}
                    <div>
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                                Let&apos;s work together
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-muted text-base mb-8 leading-relaxed">
                                Tell us about your project and we&apos;ll get back to you within 24 hours. Or reach out directly on WhatsApp for a faster response.
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="text-muted">Usually respond within a few hours</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="text-muted">Free consultation &amp; project estimate</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="text-muted">No commitment required</span>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={openWhatsApp}
                                className="border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white"
                            >
                                <MessageCircle className="mr-2 w-4 h-4" />
                                Chat on WhatsApp
                            </Button>
                        </Reveal>

                        <Reveal delay={0.35}>
                            <p className="text-xs text-muted mt-4">
                                Or email us at{' '}
                                <a href="mailto:hello@indivio.com" className="text-foreground hover:underline">
                                    hello@indivio.com
                                </a>
                            </p>
                        </Reveal>
                    </div>

                    {/* Right - Form */}
                    <Reveal animation="slideRight" delay={0.1}>
                        <div className="rounded-2xl border border-default bg-card p-8 min-h-[420px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <SuccessConfirmation key="success" onReset={handleReset} />
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <div>
                                            <label htmlFor="contact-name" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-[var(--background)] border border-default rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-shadow"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="contact-email" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-[var(--background)] border border-default rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-shadow"
                                                placeholder="you@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="contact-phone" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                id="contact-phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-[var(--background)] border border-default rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-shadow"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="contact-message" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                                                Your Message
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-[var(--background)] border border-default rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-shadow resize-none"
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>

                                        <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                                    Sending…
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                </>
                                            )}
                                        </Button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
