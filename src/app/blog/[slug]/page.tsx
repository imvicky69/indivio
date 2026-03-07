'use client';

import { Reveal } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '../page';
import { notFound } from 'next/navigation';
import { use } from 'react';

/* ── Article content stored by slug ───────────────────── */
const articleContent: Record<string, { sections: { heading: string; paragraphs: string[] }[] }> = {
    'why-every-small-business-needs-a-website': {
        sections: [
            {
                heading: 'The Digital Shift Is Already Here',
                paragraphs: [
                    'India has over 800 million internet users. Your customers are searching online before they walk into your shop, call your clinic, or join your school. If you don\'t have a website, you\'re invisible to them.',
                    'A WhatsApp Business profile and an Instagram page are great — but they\'re rented space. You don\'t control the algorithm, the design, or the experience. A website is your own digital storefront — open 24/7, working for you even while you sleep.',
                ],
            },
            {
                heading: 'It Builds Trust Instantly',
                paragraphs: [
                    'When a potential customer searches for your business and finds a professional website with clear services, pricing, contact info, and real photos — they trust you more. Period.',
                    'Compare that to a competitor with no website, just a Facebook page with 40 followers. Who would you choose? Your website is your first impression, and in business, first impressions close deals.',
                ],
            },
            {
                heading: 'It\'s More Affordable Than You Think',
                paragraphs: [
                    'A professionally built website can cost less than a month\'s rent for a small shop. And unlike rent, a website reaches thousands of people, not just foot traffic.',
                    'With modern tools like Next.js and cloud hosting, a small business website can be built in 2-3 weeks and hosted for as little as ₹500/month. The ROI is unmatched.',
                ],
            },
            {
                heading: 'It Pays for Itself',
                paragraphs: [
                    'Imagine getting just 5 extra inquiries per month from Google. If even 2 convert, that\'s 2 new customers you wouldn\'t have had. Over a year, that adds up to significant revenue — all from a one-time website investment.',
                    'Add a contact form, a WhatsApp button, Google Maps, and reviews — and your website becomes your best salesperson. It never takes a day off.',
                ],
            },
            {
                heading: 'What Should a Small Business Website Include?',
                paragraphs: [
                    'At minimum: a clean homepage, an about page, your services or products, a contact page with a form and WhatsApp link, and basic SEO so Google can find you.',
                    'Bonus: testimonials (even 2-3 make a difference), a FAQ section to reduce repetitive questions, and a blog to show expertise and improve search rankings over time.',
                ],
            },
        ],
    },
    'template-vs-custom-built-website': {
        sections: [
            {
                heading: 'The Template Trap',
                paragraphs: [
                    'Platforms like Wix, Squarespace, and WordPress themes promise a website in hours. And they deliver — sort of. You get a generic layout that looks like thousands of other sites, with limited customization and hidden costs.',
                    'Monthly fees add up quickly: ₹500/month for the platform, ₹300 for a plugin, ₹200 for a custom domain, ₹400 for removing the "Made with Wix" badge. In 2 years, you\'ve spent more than a custom site would have cost.',
                ],
            },
            {
                heading: 'What "Custom-Built" Actually Means',
                paragraphs: [
                    'A custom website isn\'t about being expensive — it\'s about being intentional. Every page, every button, every animation is designed for YOUR business, YOUR customers, YOUR goals.',
                    'We write clean code using Next.js and React. This means your site loads fast (under 2 seconds), ranks better on Google, and can be modified or scaled anytime without being locked into a platform.',
                ],
            },
            {
                heading: 'The Real Cost Comparison',
                paragraphs: [
                    'Template site: ₹0 upfront + ₹1,000-2,000/month in subscriptions + ₹5,000-15,000 for a developer when things break = ₹30,000-50,000 over 2 years for a mediocre result.',
                    'Custom site: ₹15,000-40,000 one-time + ₹500-2,000/month hosting = ₹27,000-88,000 over 2 years for a site that\'s truly yours, performs better, and grows with you.',
                ],
            },
            {
                heading: 'When Templates Make Sense',
                paragraphs: [
                    'If you\'re testing an idea, need something up in 48 hours, or have zero budget — a template is fine as a starting point. No shame in it.',
                    'But the moment you\'re serious about your business, investing in a custom website pays off. It\'s the difference between renting a room and owning your house.',
                ],
            },
        ],
    },
    'what-makes-a-website-fast': {
        sections: [
            {
                heading: 'Why Speed Matters More Than You Think',
                paragraphs: [
                    'Google has confirmed that page speed is a ranking factor. A site that loads in 1.5 seconds will rank higher than an identical site that loads in 4 seconds. More visitors, more business.',
                    '53% of mobile users abandon a site that takes longer than 3 seconds to load. In India, where many users are on 4G connections, this is critical. Every second of delay costs you customers.',
                ],
            },
            {
                heading: 'The Biggest Speed Killers',
                paragraphs: [
                    'Unoptimized images are the #1 culprit. A single 5MB hero image can make your entire site feel sluggish. Modern formats like WebP reduce file size by 80% with no visible quality loss.',
                    'Third-party scripts (analytics, chat widgets, social embeds) are the silent killers. Each one adds 200-500ms of load time. We carefully audit which scripts are essential and load non-critical ones after the page renders.',
                ],
            },
            {
                heading: 'What We Optimize',
                paragraphs: [
                    'Image compression and lazy loading — images only load when they\'re about to enter the viewport.',
                    'Code splitting — the browser downloads only the code needed for the current page, not the entire site.',
                    'CDN delivery — your site is served from the nearest server to the user (Mumbai, Delhi, Chennai — not California).',
                    'Font optimization — we preload critical fonts and use font-display: swap to prevent invisible text during loading.',
                ],
            },
            {
                heading: 'How We Measure It',
                paragraphs: [
                    'Every site we deliver targets a 90+ Lighthouse score — Google\'s official performance benchmark. This covers Performance, Accessibility, Best Practices, and SEO.',
                    'We don\'t just run the test once and call it done. We test on real 4G connections, on mobile devices, and from multiple Indian cities to ensure your site is fast for your actual users.',
                ],
            },
        ],
    },
};

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = blogPosts.find((p) => p.slug === slug);
    const content = articleContent[slug];

    if (!post || !content) {
        notFound();
    }

    // Find next/prev articles
    const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
    const nextPost = blogPosts[currentIndex + 1] || null;
    const prevPost = blogPosts[currentIndex - 1] || null;

    return (
        <>
            {/* Article Header */}
            <section className="pt-32 pb-12">
                <div className="max-w-3xl mx-auto px-6">
                    <Reveal>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Back to Blog
                        </Link>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2.5 py-0.5 rounded-full border border-default text-xs text-muted">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-muted">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                            </span>
                            <span className="text-xs text-muted">{post.date}</span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15] mb-6">
                            {post.title}
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-muted leading-relaxed">
                            {post.excerpt}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Article Body */}
            <section className="pb-24">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="space-y-12">
                        {content.sections.map((section, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div>
                                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4 tracking-tight">
                                        {section.heading}
                                    </h2>
                                    <div className="space-y-4">
                                        {section.paragraphs.map((para, j) => (
                                            <p key={j} className="text-base text-muted leading-relaxed">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-default my-16" />

                    {/* CTA */}
                    <Reveal>
                        <div className="rounded-2xl border border-default bg-card p-8 text-center">
                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                Ready to get started?
                            </h3>
                            <p className="text-sm text-muted mb-6 max-w-md mx-auto">
                                Let&apos;s discuss your project. Free consultation, no commitments.
                            </p>
                            <Button size="lg" className="group" asChild>
                                <Link href="/contact">
                                    Get a Free Quote
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </Reveal>

                    {/* Prev / Next Navigation */}
                    <div className="grid grid-cols-2 gap-4 mt-12">
                        {prevPost ? (
                            <Link
                                href={`/blog/${prevPost.slug}`}
                                className="group border border-default rounded-xl p-4 hover:-translate-y-0.5 transition-all"
                            >
                                <span className="text-xs text-muted">← Previous</span>
                                <p className="text-sm font-medium text-foreground mt-1 group-hover:opacity-70 transition-opacity leading-snug">
                                    {prevPost.title}
                                </p>
                            </Link>
                        ) : (
                            <div />
                        )}
                        {nextPost ? (
                            <Link
                                href={`/blog/${nextPost.slug}`}
                                className="group border border-default rounded-xl p-4 hover:-translate-y-0.5 transition-all text-right"
                            >
                                <span className="text-xs text-muted">Next →</span>
                                <p className="text-sm font-medium text-foreground mt-1 group-hover:opacity-70 transition-opacity leading-snug">
                                    {nextPost.title}
                                </p>
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
