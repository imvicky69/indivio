import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogs';
import ArticleClient from './ArticleClient';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const p = await params;
    const post = blogPosts.find((post) => post.slug === p.slug);

    if (!post) {
        return {
            title: 'Not Found',
        };
    }

    const baseUrl = 'https://indivio.in';
    const url = `${baseUrl}/blog/${post.slug}`;

    return {
        title: `${post.title} | Indivio Blog`,
        description: post.excerpt,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            type: 'article',
            publishedTime: post.date,
            authors: ['Indivio'],
            siteName: 'Indivio',
            images: [{ url: '/images/indivio.png', width: 1200, height: 630, alt: post.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: ['/images/indivio.png'],
        },
    };
}

export default async function BlogArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const p = await params;
    const post = blogPosts.find((post) => post.slug === p.slug);

    if (!post) {
        notFound();
    }

    const baseUrl = 'https://indivio.in';
    const url = `${baseUrl}/blog/${post.slug}`;

    // Article schema for rich results
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
        headline: post.title,
        description: post.excerpt,
        image: 'https://indivio.in/images/indivio.png',
        author: {
            '@type': 'Organization',
            name: 'Indivio',
            url: baseUrl,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Indivio',
            logo: {
                '@type': 'ImageObject',
                url: 'https://indivio.in/images/logo.png',
            },
        },
        datePublished: post.date,
        dateModified: post.date,
        url: url,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ArticleClient slug={p.slug} />
        </>
    );
}
