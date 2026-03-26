import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations } from '@/data/locations';
import Link from 'next/link';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export async function generateStaticParams() {
    return locations.map((loc) => ({
        city: loc.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const p = await params;
    const location = locations.find((l) => l.slug === p.city);

    if (!location) {
        return { title: 'Location Not Found' };
    }

    const title = `Software & Web Development Company in ${location.name}, ${location.region} | Indivio`;
    const description = `Looking for the best web development and ${location.focus.toLowerCase()} software in ${location.name}? Indivio provides premium digital solutions. ${location.shortDescription}`;
    const url = `https://indivio.in/locations/${location.slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: 'website',
            images: [{ url: '/images/indivio.png', width: 1200, height: 630, alt: title }],
        },
    };
}

export default async function LocationPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const p = await params;
    const location = locations.find((l) => l.slug === p.city);

    if (!location) notFound();

    const features = [
        `Custom Website Design for ${location.name} businesses`,
        `${location.focus} management systems & ERPs`,
        `Local SEO optimization for the ${location.region} market`,
        `Fast, secure, and mobile-friendly web applications`
    ];

    // Schema for SEO Local targeting
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `Web Development Services in ${location.name}`,
        description: location.shortDescription,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Indivio',
            image: 'https://indivio.in/images/logo.png',
            areaServed: {
                '@type': 'City',
                name: location.name,
                containedInPlace: {
                    '@type': 'State',
                    name: location.region
                }
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] rounded-full blur-[200px] opacity-[0.05]" />
                
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 mb-6">
                            <MapPin className="w-4 h-4 text-[var(--accent)]" />
                            <span className="text-sm font-medium text-[var(--accent)]">
                                Serving {location.name}, {location.region}
                            </span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                            Premium Digital Solutions for <span className="gradient-text">{location.name}</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
                            Empowering {location.focus.toLowerCase()} and local enterprises from our roots in Bihar all the way to {location.name}. {location.shortDescription}
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="xl" asChild>
                                <Link href="/contact">Get a Free Consultation</Link>
                            </Button>
                            <Button size="xl" variant="outline" asChild>
                                <Link href="/services">Explore Our Services</Link>
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Value Prop Section */}
            <section className="py-24 bg-card border-y border-default">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <Reveal>
                                <h2 className="text-3xl font-semibold mb-6">Built for the {location.name} Market</h2>
                                <p className="text-muted leading-relaxed mb-8">
                                    You don't need to hire agencies in expensive metro cities to get world-class software. 
                                    Indivio brings premium web development, SaaS platforms, and digital transformation directly to {location.name}. 
                                    We deeply understand the needs of {location.focus.toLowerCase()} operating in {location.region}.
                                </p>
                            </Reveal>
                            <StaggerContainer className="flex flex-col gap-4">
                                {features.map((feature, i) => (
                                    <StaggerItem key={i}>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                                            <span className="text-foreground">{feature}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-[var(--background)] border border-default p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                                <div className="absolute inset-0 bg-grid opacity-20" />
                                <div className="relative z-10">
                                    <MapPin className="w-16 h-16 text-[var(--accent)] mb-6 mx-auto opacity-80" />
                                    <h3 className="text-2xl font-bold mb-2">Ready to scale in {location.name}?</h3>
                                    <p className="text-muted text-sm max-w-xs mx-auto mb-6">Join organizations across India who trust Indivio for their technology needs.</p>
                                    <Button asChild>
                                        <Link href="/contact">
                                            Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
