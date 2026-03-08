'use client';

import { useState } from 'react';
import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react';
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

            if (res.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
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

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left - Info */}
                    <div>
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                                Let&apos;s build something incredible.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-muted text-lg mb-10 leading-relaxed max-w-md">
                                Tell us about your project and we&apos;ll get back to you within 24 hours. Or reach out directly on WhatsApp for an immediate response.
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="space-y-5 mb-10 border-l-2 border-[var(--accent)]/30 pl-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent-glow)]" />
                                    <span className="text-muted font-medium">Usually respond within a few hours</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent-glow)]" />
                                    <span className="text-muted font-medium">Free consultation & project estimate</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent-glow)]" />
                                    <span className="text-muted font-medium">No commitment required</span>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    onClick={openWhatsApp}
                                    className="bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20"
                                >
                                    <MessageCircle className="mr-2 w-5 h-5" />
                                    Chat on WhatsApp
                                </Button>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right - Form or Success */}
                    <Reveal animation="slideRight" delay={0.1}>
                        {submitted ? (
                            <div className="rounded-3xl border border-default/50 bg-card/80 backdrop-blur-xl p-8 shadow-2xl">
                                <SubmitSuccess onReset={() => setSubmitted(false)} />
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-3xl border border-default/50 bg-card/80 backdrop-blur-xl p-8 md:p-10 shadow-2xl space-y-6 relative group/form"
                            >
                                {/* Form Top Highlight */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--accent)] rounded-b-full shadow-[0_0_20px_var(--accent-glow)]" />

                                <div className="space-y-2 focus-within:text-[var(--accent)] text-muted transition-colors">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest ml-1">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[var(--background)] border-2 border-default rounded-xl px-5 py-3.5 text-base text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all shadow-sm"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2 focus-within:text-[var(--accent)] text-muted transition-colors relative">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest ml-1 flex justify-between items-center">
                                        <span>Email Address <span className="text-red-500">*</span></span>
                                        {isEmailValid && <span className="text-emerald-500 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Valid</span>}
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={`w-full bg-[var(--background)] border-2 rounded-xl px-5 py-3.5 text-base text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all shadow-sm ${isEmailValid ? 'border-emerald-500/50' : 'border-default'
                                            }`}
                                        placeholder="you@email.com"
                                    />
                                </div>

                                <div className="space-y-2 focus-within:text-[var(--accent)] text-muted transition-colors">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest ml-1">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-[var(--background)] border-2 border-default rounded-xl px-5 py-3.5 text-base text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all shadow-sm"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div className="space-y-2 focus-within:text-[var(--accent)] text-muted transition-colors">
                                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest ml-1">
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[var(--background)] border-2 border-default rounded-xl px-5 py-3.5 text-base text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent)]/10 transition-all shadow-sm resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                {error && (
                                    <div className="bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg p-3 text-sm font-medium text-center shadow-sm">
                                        {error}
                                    </div>
                                )}

                                <div className="pt-2">
                                    <Button type="submit" size="lg" className="w-full h-14 text-base group shadow-xl shadow-[var(--accent-glow)]/20" disabled={isSubmitting || !formData.name || !isEmailValid || !formData.message}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                        {!isSubmitting && (
                                            <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        )}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
