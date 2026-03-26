'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

const faqs = [
    {
        question: 'How much does a website cost?',
        answer: 'A basic business website starts from ₹15,000. Custom web applications with advanced features are quoted individually based on scope. We always provide a transparent estimate before starting.',
    },
    {
        question: 'How long does it take?',
        answer: 'A typical business website takes 2-4 weeks. More complex projects like web apps or school management systems can take 4-8 weeks. We set clear timelines and keep you updated.',
    },
    {
        question: 'Do you provide hosting and maintenance?',
        answer: 'Yes. We offer affordable monthly plans that include hosting, security updates, backups, and technical support. You focus on your business — we handle the tech.',
    },
    {
        question: 'Can you redesign my existing website?',
        answer: 'Absolutely. We frequently modernize existing sites. We\'ll audit your current site, understand your goals, and deliver a fresh, high-performing redesign.',
    },
    {
        question: 'Do you offer services outside Nirmali, Bihar?',
        answer: 'Yes! While Indivio started in Nirmali, Bihar, we proudly serve small businesses, schools, and coaching centers across tier 2 and tier 3 cities all over India.',
    },
    {
        question: 'What if I need changes after delivery?',
        answer: 'We include a revision period with every project. After launch, you can request changes through our maintenance plans or reach out for one-time updates.',
    },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Reveal delay={index * 0.05}>
            <div className="border-b border-default">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
                >
                    <span className="text-sm font-medium text-foreground group-hover:opacity-60 transition-opacity pr-8">
                        {faq.question}
                    </span>
                    {isOpen ? (
                        <Minus className="w-4 h-4 text-muted flex-shrink-0" />
                    ) : (
                        <Plus className="w-4 h-4 text-muted flex-shrink-0" />
                    )}
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <p className="pb-5 text-sm text-muted leading-relaxed pr-12">
                                {faq.answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Reveal>
    );
}

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-12">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                                Questions & answers
                            </h2>
                        </Reveal>
                    </div>

                    <div className="border-t border-default">
                        {faqs.map((faq, index) => (
                            <FAQItem key={faq.question} faq={faq} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
