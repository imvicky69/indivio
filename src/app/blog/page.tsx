'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'why-every-small-business-needs-a-website',
        title: 'Why Every Small Business in India Needs a Website in 2026',
        excerpt: 'Still relying on Instagram and WhatsApp for your business? Here\'s why a professional website is no longer optional — and how it pays for itself.',
        category: 'Business',
        readTime: '5 min read',
        date: 'March 2026',
    },
    {
        slug: 'template-vs-custom-built-website',
        title: 'Template vs Custom-Built: What\'s the Real Cost?',
        excerpt: 'Wix, WordPress, or custom code? We break down the true cost of each approach — not just in money, but in time, flexibility, and growth potential.',
        category: 'Guide',
        readTime: '7 min read',
        date: 'March 2026',
    },
    {
        slug: 'what-makes-a-website-fast',
        title: 'What Actually Makes a Website Fast (And Why It Matters)',
        excerpt: 'Page speed directly affects your Google ranking, bounce rate, and sales. Here\'s exactly what we optimize and why it makes a measurable difference.',
        category: 'Technical',
        readTime: '6 min read',
        date: 'March 2026',
    },
];

/* ── Blog Hero ────────────────────────────────────────── */
function BlogHero() {
    return (
        <section className="pt-32 pb-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-3xl">
                    <Reveal>
                        <p className="text-sm text-muted tracking-wide uppercase mb-4 font-medium">
                            Blog
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
                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {blogPosts.map((post) => (
                        <StaggerItem key={post.slug}>
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <article className="border border-default rounded-2xl p-6 bg-card h-full flex flex-col hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-2.5 py-0.5 rounded-full border border-default text-xs text-muted">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-muted">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:opacity-70 transition-opacity leading-snug">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:gap-2 transition-all">
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
                        Want to stay updated?
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-muted text-base mb-8 max-w-md mx-auto">
                        We publish new insights every month. Follow us or reach out to discuss your project.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <Button size="xl" className="group" asChild>
                        <Link href="/contact">
                            Get in Touch
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
