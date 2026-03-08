'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';

/* ── Blog Hero ────────────────────────────────────────── */
function BlogHero() {
    return (
        <section className="pt-32 pb-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="text-sm text-muted tracking-wide uppercase mb-4 font-medium">
                            Blog & Insights
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
                            Insights & resources for growing online.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-muted leading-relaxed max-w-2xl">
                            Practical advice on websites, web apps, and digital strategy — written for Indian business owners who want results, not jargon.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ── Blog Cards ───────────────────────────────────────── */
function BlogGrid() {
    return (
        <section className="py-12 pb-24">
            <div className="max-w-6xl mx-auto px-6">
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <StaggerItem key={post.slug}>
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <article className="border border-default rounded-2xl p-6 bg-card h-full flex flex-col hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent-glow)] transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-2.5 py-0.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 text-xs text-foreground font-medium">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-muted">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-[var(--accent-light)] transition-colors leading-snug">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-1 text-sm font-medium text-[var(--accent)] group-hover:gap-2 transition-all">
                                        Read article
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                </article>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

/* ── Newsletter CTA ───────────────────────────────────── */
function BlogCTA() {
    return (
        <section className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                        Ready to level up your business?
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-muted text-base mb-8 max-w-md mx-auto">
                        Whether you are a doctor, run a gym, or own a retail shop, a premium website is your ultimate growth engine.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <Button size="xl" className="group" asChild>
                        <Link href="/contact">
                            Let&apos;s Discuss Your Project
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}

/* ── Page Export ───────────────────────────────────────── */
export default function BlogPage() {
    return (
        <>
            <BlogHero />
            <BlogGrid />
            <BlogCTA />
        </>
    );
}
