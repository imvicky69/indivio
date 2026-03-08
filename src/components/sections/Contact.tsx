'use client';

import { useState } from 'react';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { Send, MessageCircle } from 'lucide-react';
import { SubmitSuccess } from '@/components/ui/submit-success';

const WHATSAPP_NUMBER = '919798836199';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    Name: formData.name,
                    Email: formData.email,
                    PhoneNumber: formData.phone,
                    Message: formData.message,
                }),
            });

            // If the API responded with OK status, treat as success
            if (res.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                // Try to read error message
                try {
                    const data = await res.json();
                    throw new Error(data.message || 'Submission failed');
                } catch {
                    throw new Error('Submission failed');
                }
            }
        } catch (err) {
            console.error('Form error:', err);
            setError('Something went wrong. Please try WhatsApp or email instead.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const openWhatsApp = () => {
        const text = encodeURIComponent(
            `Hi Indivio! I'm interested in your services.\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nMessage: ${formData.message || 'I would like to discuss a project.'}`
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
                                    <span className="text-muted">Free consultation & project estimate</span>
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
                                <a href="mailto:hello@indivio.in" className="text-foreground hover:underline">
                                    hello@indivio.in
                                </a>
                            </p>
                        </Reveal>
                    </div>

                    {/* Right - Form or Success */}
                    <Reveal animation="slideRight" delay={0.1}>
                        {submitted ? (
                            <div className="rounded-2xl border border-default bg-card">
                                <SubmitSuccess onReset={() => setSubmitted(false)} />
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-2xl border border-default bg-card p-8 space-y-5"
                            >
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[var(--background)] border border-default rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[var(--background)] border border-default rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-[var(--background)] border border-default rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-medium text-muted uppercase tracking-wider mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[var(--background)] border border-default rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow resize-none"
                                        placeholder="Tell us about your project..."
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
                                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    )}
                                </Button>
                            </form>
                        )}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
