'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Check, Send, CheckCircle2, Info, FastForward, Sparkles } from 'lucide-react';
import { SubmitSuccess } from '@/components/ui/submit-success';
import CountUp from 'react-countup';

/* --- Data Models & Pricing Logic --- */
type ProjectType = 'Business Website' | 'E-Commerce' | 'Web App / Portal' | 'School ERP';
type DesignStyle = 'Template-Based' | 'Premium Custom' | 'Award-Winning UI/UX';
type Feature = 'SEO Setup' | 'CMS (Blog)' | 'Payment Gateway' | 'User Logins' | 'Advanced Animations';
type Timeline = 'Relaxed (1+ Month)' | 'Standard (2-4 Weeks)' | 'Rush (< 2 Weeks)';

interface EstimateState {
    projectType: ProjectType | null;
    pages: number;
    design: DesignStyle | null;
    features: Feature[];
    timeline: Timeline | null;
}

const PROJECT_BASES: Record<ProjectType, number> = {
    'Business Website': 15000,
    'E-Commerce': 35000,
    'Web App / Portal': 50000,
    'School ERP': 60000,
};

const DESIGN_MULTI: Record<DesignStyle, number> = {
    'Template-Based': 1.0,
    'Premium Custom': 1.5,
    'Award-Winning UI/UX': 2.0,
};

const FEATURE_PRICE: Record<Feature, number> = {
    'SEO Setup': 5000,
    'CMS (Blog)': 8000,
    'Payment Gateway': 5000,
    'User Logins': 10000,
    'Advanced Animations': 8000,
};

const TIMELINE_MULTI: Record<Timeline, number> = {
    'Relaxed (1+ Month)': 0.9,
    'Standard (2-4 Weeks)': 1.0,
    'Rush (< 2 Weeks)': 1.5,
};

function calculateEstimate(state: EstimateState): [number, number] {
    if (!state.projectType || !state.design || !state.timeline) return [0, 0];

    let base = PROJECT_BASES[state.projectType];

    // Add cost for pages (assuming first 5 pages are included)
    if (state.pages > 5) {
        base += (state.pages - 5) * 2000;
    }

    let subtotal = base * DESIGN_MULTI[state.design];

    state.features.forEach((f) => {
        subtotal += FEATURE_PRICE[f];
    });

    const total = subtotal * TIMELINE_MULTI[state.timeline];

    // Return a range (-10% to +15%) and round to nearest 500
    const rawMin = total * 0.9;
    const rawMax = total * 1.15;

    return [
        Math.round(rawMin / 500) * 500,
        Math.round(rawMax / 500) * 500
    ];
}

/* --- Components --- */
export default function CalculatorClient() {
    const [step, setStep] = useState(1);
    const [state, setState] = useState<EstimateState>({
        projectType: null,
        pages: 5,
        design: null,
        features: [],
        timeline: null,
    });
    const [contact, setContact] = useState({ name: '', email: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const toggleFeature = (f: Feature) => {
        setState((prev) => ({
            ...prev,
            features: prev.features.includes(f)
                ? prev.features.filter((item) => item !== f)
                : [...prev.features, f],
        }));
    };

    const nextStep = () => setStep((s) => Math.min(s + 1, 6));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));
    const skipToContact = () => setStep(6);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const [min, max] = calculateEstimate(state);
        const formatCurrency = (n: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumSignificantDigits: 3 }).format(n);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    Name: contact.name,
                    Email: contact.email,
                    PhoneNumber: contact.phone,
                    Message: `New Estimate Request!\n\nType: ${state.projectType || 'Skipped'}\nPages: ${state.pages}\nDesign: ${state.design || 'Skipped'}\nFeatures: ${state.features.length ? state.features.join(', ') : 'None'}\nTimeline: ${state.timeline || 'Skipped'}\nEstimated Range: ${min > 0 ? `${formatCurrency(min)} - ${formatCurrency(max)}` : 'Not computed'}`,
                }),
            });

            if (!res.ok) throw new Error('Submission failed');
            setSubmitted(true);
        } catch (err: unknown) {
            console.error(err);
            setError('Failed to send request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isStepValid = () => {
        switch (step) {
            case 1: return !!state.projectType;
            case 2: return true;
            case 3: return !!state.design;
            case 4: return true;
            case 5: return !!state.timeline;
            case 6: return contact.name.trim() !== '' && contact.email.trim() !== '';
            default: return false;
        }
    };

    const slideVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
    };

    const Tooltip = ({ text }: { text: string }) => (
        <div className="group relative inline-flex items-center justify-center ml-2">
            <Info className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            <div className="absolute bottom-full mb-2 hidden w-48 p-2 text-xs text-white bg-slate-800 rounded-lg shadow-xl group-hover:block z-50 animate-in fade-in zoom-in-95 left-1/2 -translate-x-1/2 pointer-events-none">
                {text}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
            </div>
        </div>
    );

    const Badge = ({ text, glow = false }: { text: string; glow?: boolean }) => (
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ml-auto ${glow ? 'bg-[var(--accent)] text-white shadow-[0_0_10px_var(--accent-glow)]' : 'bg-neutral-100 dark:bg-neutral-800 text-muted-foreground'
            }`}>
            {text}
        </span>
    );

    if (submitted) {
        return (
            <div className="max-w-2xl mx-auto px-6 py-12 text-center">
                <SubmitSuccess message="We've received your estimate request. Our team will review your selections and email you a detailed proposal shortly." />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
            {/* Ambient Background Glow for the Page */}
            <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-[var(--accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none" />

            <div className="text-center mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
                >
                    Project Estimator
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-muted text-lg max-w-xl mx-auto"
                >
                    Answer a few quick questions to instantly calculate a realistic price range for your next big idea.
                </motion.p>
            </div>

            {/* Progress Steps Indicator */}
            <div className="flex justify-between items-center mb-8 relative max-w-2xl mx-auto px-4">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-default -z-10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-[var(--accent)]"
                        initial={{ width: `${((step - 1) / 5) * 100}%` }}
                        animate={{ width: `${(step / 6) * 100}%` }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                </div>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                        key={num}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${step >= num ? 'bg-[var(--accent)] text-white shadow-[0_0_15px_var(--accent-glow)]' : 'bg-card border-2 border-default text-muted'
                            }`}
                    >
                        {step > num ? <Check className="w-4 h-4" /> : num}
                    </div>
                ))}
            </div>

            <div className="bg-card/80 backdrop-blur-xl border border-default/80 rounded-[2rem] p-6 md:p-12 shadow-2xl relative min-h-[460px] flex flex-col ring-1 ring-white/10">
                {/* Fallback button absolutely positioned inside the card */}
                {step < 6 && (
                    <button
                        onClick={skipToContact}
                        className="absolute top-6 right-6 text-xs font-medium text-muted hover:text-foreground flex items-center gap-1 transition-colors"
                    >
                        Skip to Contact <FastForward className="w-3 h-3" />
                    </button>
                )}

                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex-1 flex flex-col justify-center"
                    >
                        {/* STEP 1: Type */}
                        {step === 1 && (
                            <div className="max-w-2xl mx-auto w-full">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">What do you want to build?</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {(['Business Website', 'E-Commerce', 'Web App / Portal', 'School ERP'] as ProjectType[]).map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => setState({ ...state, projectType: type })}
                                            className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:-translate-y-1 relative overflow-hidden group ${state.projectType === type
                                                    ? 'border-[var(--accent)] bg-[var(--accent)]/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-[var(--accent-glow)]/20'
                                                    : 'border-default/50 bg-background hover:border-[var(--muted)]'
                                                }`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-semibold text-foreground text-lg">{type}</span>
                                                {state.projectType === type && <CheckCircle2 className="w-6 h-6 text-[var(--accent)]" />}
                                            </div>
                                            <p className="text-sm text-muted">
                                                {type === 'Business Website' && 'A professional online presence to showcase services and capture leads.'}
                                                {type === 'E-Commerce' && 'A robust online store with shopping carts and inventory management.'}
                                                {type === 'Web App / Portal' && 'A complex dashboard or custom software accessed via browser.'}
                                                {type === 'School ERP' && 'A complete management system for students, fees, and attendance.'}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Size */}
                        {step === 2 && (
                            <div className="max-w-xl mx-auto w-full text-center">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-3">How large is the project?</h2>
                                <p className="text-muted mb-12">Estimate the number of unique pages or distinct views.</p>

                                <div className="bg-background rounded-3xl p-8 border border-default shadow-sm">
                                    <div className="flex items-baseline justify-center gap-2 mb-8">
                                        <span className="text-6xl font-bold tracking-tighter text-foreground">{state.pages}</span>
                                        <span className="text-xl font-medium text-muted uppercase tracking-widest">Pages</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="50"
                                        value={state.pages}
                                        onChange={(e) => setState({ ...state, pages: parseInt(e.target.value) })}
                                        className="w-full h-3 bg-default rounded-full appearance-none cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors accent-[var(--accent)]"
                                    />
                                    <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-muted mt-6 px-2">
                                        <span>Landing Page (1)</span>
                                        <span>Large Corporate (50+)</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: Design */}
                        {step === 3 && (
                            <div className="max-w-2xl mx-auto w-full">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">What is your design expectation?</h2>
                                <div className="flex flex-col gap-4">
                                    {(['Template-Based', 'Premium Custom', 'Award-Winning UI/UX'] as DesignStyle[]).map((design) => (
                                        <button
                                            key={design}
                                            onClick={() => setState({ ...state, design })}
                                            className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:-translate-y-1 relative group flex items-center gap-6 ${state.design === design
                                                    ? 'border-[var(--accent)] bg-[var(--accent)]/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-[var(--accent-glow)]/20'
                                                    : 'border-default/50 bg-background hover:border-[var(--muted)]'
                                                }`}
                                        >
                                            <div className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${state.design === design ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-muted'}`}>
                                                {state.design === design && <div className="w-2 h-2 rounded-full bg-white" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center mb-1">
                                                    <span className="font-semibold text-foreground text-lg">{design}</span>
                                                    {design === 'Premium Custom' && <Badge text="Most Popular" glow={true} />}
                                                </div>
                                                <p className="text-sm text-muted pr-8">
                                                    {design === 'Template-Based' && 'Fastest delivery using highly-customized modern structural templates.'}
                                                    {design === 'Premium Custom' && 'Designed entirely from scratch in Figma to perfectly match your brand identity.'}
                                                    {design === 'Award-Winning UI/UX' && 'Bespoke micro-interactions, 3D elements, and extreme polish to wow users.'}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 4: Features */}
                        {step === 4 && (
                            <div className="max-w-2xl mx-auto w-full">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">Select additional features</h2>
                                <p className="text-muted mb-8 text-center">Choose any extra functionality your project requires to operate.</p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {(['SEO Setup', 'CMS (Blog)', 'Payment Gateway', 'User Logins', 'Advanced Animations'] as Feature[]).map((feature) => {
                                        const isSelected = state.features.includes(feature);
                                        return (
                                            <button
                                                key={feature}
                                                onClick={() => toggleFeature(feature)}
                                                className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all duration-200 hover:-translate-y-1 ${isSelected
                                                        ? 'border-[var(--accent)] bg-[var(--accent)]/5 shadow-[0_4px_20px_rgb(0,0,0,0.08)] shadow-[var(--accent-glow)]/20'
                                                        : 'border-default/50 bg-background hover:border-muted'
                                                    }`}
                                            >
                                                <div className={`w-6 h-6 shrink-0 rounded-lg border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-[var(--accent)] border-[var(--accent)]' : 'border-neutral-300 dark:border-neutral-600'}`}>
                                                    {isSelected && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
                                                </div>
                                                <div className="flex items-center flex-1">
                                                    <span className="font-semibold text-foreground">{feature}</span>
                                                    {feature === 'CMS (Blog)' && <Tooltip text="Content Management System lets you edit text & add blogs yourself." />}
                                                    {feature === 'SEO Setup' && <Tooltip text="On-page search engine optimization to help Google index you." />}
                                                    {feature === 'User Logins' && <Tooltip text="Authentication system for diverse user roles and protected pages." />}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* STEP 5: Timeline */}
                        {step === 5 && (
                            <div className="max-w-2xl mx-auto w-full">
                                <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">How quickly do you need it?</h2>
                                <div className="flex flex-col gap-4">
                                    {(['Relaxed (1+ Month)', 'Standard (2-4 Weeks)', 'Rush (< 2 Weeks)'] as Timeline[]).map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setState({ ...state, timeline: time })}
                                            className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:-translate-y-1 relative group flex items-center gap-6 ${state.timeline === time
                                                    ? 'border-[var(--accent)] bg-[var(--accent)]/5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-[var(--accent-glow)]/20'
                                                    : 'border-default/50 bg-background hover:border-[var(--muted)]'
                                                }`}
                                        >
                                            <div className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${state.timeline === time ? 'border-[var(--accent)] bg-[var(--accent)]' : 'border-muted'}`}>
                                                {state.timeline === time && <div className="w-2 h-2 rounded-full bg-white" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center mb-1">
                                                    <span className="font-semibold text-foreground text-lg">{time}</span>
                                                    {time === 'Standard (2-4 Weeks)' && <Badge text="Recommended" />}
                                                </div>
                                                <p className="text-sm text-muted">
                                                    {time === 'Relaxed (1+ Month)' && 'Great for lowering costs with a 10% discount if you are not in a hurry.'}
                                                    {time === 'Standard (2-4 Weeks)' && 'Our typical delivery schedule ensures optimal quality and pacing.'}
                                                    {time === 'Rush (< 2 Weeks)' && 'Prioritized top-tier development, subject to a 50% rush acceleration fee.'}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* STEP 6: Result & Contact */}
                        {step === 6 && (
                            <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto w-full items-start">
                                {/* Left Side: Deliverables Recap & Price */}
                                <div className="flex-1 w-full bg-background rounded-3xl p-8 border border-default shadow-lg text-center md:text-left h-full flex flex-col justify-center">
                                    <div className="mb-6">
                                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-3 flex items-center justify-center md:justify-start gap-2">
                                            <Sparkles className="w-4 h-4" /> Estimated Investment
                                        </h3>
                                        {(() => {
                                            const [min, max] = calculateEstimate(state);
                                            // Handle skip case roughly
                                            if (min === 0) return (
                                                <div className="text-3xl font-bold text-foreground py-4">
                                                    Let&apos;s discuss!
                                                </div>
                                            );

                                            return (
                                                <div className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight py-2">
                                                    ₹<CountUp end={min} duration={1.5} separator="," /> - ₹<CountUp end={max} duration={1.5} separator="," />
                                                </div>
                                            );
                                        })()}
                                    </div>

                                    <div className="h-px w-full bg-default/50 my-6" />

                                    <h4 className="text-sm font-semibold mb-4 text-foreground/80">Included in this estimate:</h4>
                                    <ul className="space-y-3 text-sm text-muted text-left">
                                        <li className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                                            <span className="font-medium text-foreground">{state.projectType || 'Custom Project'}</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                                            <span>Up to <strong className="text-foreground">{state.pages} unique pages/views</strong></span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                                            <span>{state.design || 'High-Quality'} UI/UX Design</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                                            <span>{state.timeline || 'Agreed'} Timeline</span>
                                        </li>
                                        {state.features.map(f => (
                                            <li key={f} className="flex items-start gap-3">
                                                <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" strokeWidth={3} />
                                                <span>{f} Integration</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side: Contact Form */}
                                <div className="flex-1 w-full bg-transparent flex flex-col justify-center">
                                    <div className="mb-6 text-center md:text-left">
                                        <h3 className="text-2xl font-semibold mb-2">Send me my proposal</h3>
                                        <p className="text-sm text-muted">Enter your details to lock in this estimate range and schedule a free strategy call.</p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1.5 focus-within:text-[var(--accent)] text-muted transition-colors">
                                                <label className="text-xs font-semibold uppercase tracking-wider">Name <span className="text-red-500">*</span></label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={contact.name}
                                                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                                                    className="w-full px-4 py-3 border-b-2 border-default bg-transparent focus:outline-none focus:border-[var(--accent)] transition-colors text-base text-foreground"
                                                />
                                            </div>
                                            <div className="space-y-1.5 focus-within:text-[var(--accent)] text-muted transition-colors">
                                                <label className="text-xs font-semibold uppercase tracking-wider">Phone</label>
                                                <input
                                                    type="tel"
                                                    value={contact.phone}
                                                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                                                    className="w-full px-4 py-3 border-b-2 border-default bg-transparent focus:outline-none focus:border-[var(--accent)] transition-colors text-base text-foreground"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5 focus-within:text-[var(--accent)] text-muted transition-colors">
                                            <label className="text-xs font-semibold uppercase tracking-wider">Email Address <span className="text-red-500">*</span></label>
                                            <input
                                                required
                                                type="email"
                                                value={contact.email}
                                                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                                className="w-full px-4 py-3 border-b-2 border-default bg-transparent focus:outline-none focus:border-[var(--accent)] transition-colors text-base text-foreground"
                                            />
                                        </div>

                                        {error && <p className="text-sm text-red-500 font-medium bg-red-500/10 p-3 rounded-lg">{error}</p>}

                                        <div className="pt-4">
                                            <Button type="submit" size="lg" className="w-full h-14 text-base group shadow-xl shadow-[var(--accent-glow)]/20" disabled={!isStepValid() || isSubmitting}>
                                                {isSubmitting ? 'Sending...' : 'Get My Detailed Proposal'}
                                                {!isSubmitting && <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Bottom Navigation Navbar */}
                {step < 6 && (
                    <div className="mt-8 pt-6 flex items-center justify-between border-t border-default/50">
                        <Button
                            variant="ghost"
                            onClick={prevStep}
                            disabled={step === 1 || isSubmitting}
                            className={`text-muted hover:text-foreground ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back
                        </Button>

                        <Button
                            onClick={nextStep}
                            disabled={!isStepValid()}
                            size="lg"
                            className="bg-foreground text-background hover:bg-neutral-800 dark:bg-foreground dark:hover:bg-neutral-200 px-8 disabled:opacity-30"
                        >
                            Continue
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
