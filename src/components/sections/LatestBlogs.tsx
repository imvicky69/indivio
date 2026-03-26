'use client';

import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';

export function LatestBlogs() {
    // Show only the 3 latest blogs on the homepage
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-24 border-t border-default bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-xl">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
                                Web & Business Insights
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-lg text-muted">
                                Strategies and guides for scaling local businesses, coaching centers, and schools online in India.
                            </p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2} className="shrink-0">
                        <Button variant="outline" size="lg" className="group" asChild>
                            <Link href="/blog">
                                View all articles
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </Reveal>
                </div>

                <StaggerContainer className="grid md:grid-cols-3 gap-6">
                    {recentPosts.map((post) => (
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

                                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-[var(--accent-light)] transition-colors leading-snug line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm text-muted leading-relaxed mb-6 flex-1 line-clamp-3">
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
