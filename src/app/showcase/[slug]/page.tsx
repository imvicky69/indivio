import { Metadata } from 'next';
import { notFound } from 'next/navigation'; // Next.js dynamic routing fallback
import Link from 'next/link';
import { showcaseProjects, ShowcaseProject } from '@/data/showcase';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Smartphone, Globe, Check, Award, Calendar, User, Code2 } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';

// Next.js dynamic route compatibility helper
interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return showcaseProjects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = showcaseProjects.find((p) => p.slug === slug);
    
    if (!project) {
        return {
            title: 'Project Not Found | Indivio',
        };
    }

    return {
        title: `${project.title} - Case Study | Indivio`,
        description: project.shortDescription,
        openGraph: {
            title: `${project.title} - Case Study | Indivio`,
            description: project.shortDescription,
            type: 'article',
        }
    };
}

export default async function ShowcaseDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = showcaseProjects.find((p) => p.slug === slug);

    if (!project) {
        // Next.js standard not-found page trigger
        notFound();
    }

    // Find next and previous projects for bottom navigation
    const currentIndex = showcaseProjects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? showcaseProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < showcaseProjects.length - 1 ? showcaseProjects[currentIndex + 1] : null;

    // Structured JSON-LD Data for local SEO
    const schemaMarkup = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': project.title,
        'operatingSystem': project.category === 'Mobile App' ? 'Android' : 'All',
        'applicationCategory': project.category === 'Mobile App' ? 'BusinessApplication, FoodOrdering' : 'WebApplication',
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'INR'
        },
        'author': {
            '@type': 'Organization',
            'name': 'Indivio'
        }
    };

    return (
        <article className="pt-24 pb-24 min-h-screen relative overflow-hidden font-sans">
            {/* SEO Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
            />

            {/* Background Blur Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Back button */}
                <div className="mb-12">
                    <Link 
                        href="/showcase" 
                        className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        Back to Showcase
                    </Link>
                </div>

                {/* Hero Header */}
                <header className="mb-16 border-b border-default pb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-default/50 border border-default text-foreground flex items-center justify-center overflow-hidden shadow-sm">
                            {project.logoUrl ? (
                                <img 
                                    src={project.logoUrl} 
                                    alt={`${project.title} logo`} 
                                    className="w-full h-full object-contain p-1.5"
                                />
                            ) : (
                                <span className="font-bold text-sm">
                                    {project.title.charAt(0)}
                                </span>
                            )}
                        </div>
                        <div>
                            <span className="text-xs font-mono text-accent uppercase tracking-wider font-bold">
                                Case Study
                            </span>
                            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mt-1">
                                {project.title}
                            </h1>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8 items-end">
                        <div className="md:col-span-2">
                            <p className="text-lg text-muted leading-relaxed font-sans max-w-3xl">
                                {project.subtitle}
                            </p>
                        </div>
                        <div className="flex md:justify-end gap-3">
                            {project.playstoreUrl && (
                                <Button className="group/btn" asChild>
                                    <a href={project.playstoreUrl} target="_blank" rel="noopener noreferrer">
                                        Download App
                                        <ExternalLink className="ml-1.5 w-4 h-4" />
                                    </a>
                                </Button>
                            )}
                            {project.webUrl && (
                                <Button variant="outline" className="group/btn" asChild>
                                    <a href={project.webUrl} target="_blank" rel="noopener noreferrer">
                                        Visit Website
                                        <ExternalLink className="ml-1.5 w-4 h-4" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </header>

                {/* Main Content Layout */}
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    
                    {/* Left Column: Challenge, Solution, Features */}
                    <div className="lg:col-span-2 space-y-12">
                        <Reveal>
                            <section>
                                <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">
                                    Project Overview
                                </h2>
                                <p className="text-muted leading-relaxed text-base font-sans">
                                    {project.longDescription}
                                </p>
                            </section>
                        </Reveal>

                        <Reveal delay={0.05}>
                            <section className="bg-card/50 border border-default p-8 rounded-3xl">
                                <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3">
                                    The Challenge
                                </h3>
                                <p className="text-muted leading-relaxed text-sm font-sans">
                                    {project.challenge}
                                </p>
                            </section>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <section>
                                <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3">
                                    Our Engineering Approach
                                </h3>
                                <p className="text-muted leading-relaxed text-sm font-sans">
                                    {project.solution}
                                </p>
                            </section>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <section>
                                <h3 className="text-xl font-semibold tracking-tight text-foreground mb-4">
                                    Key Capabilities
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex gap-3 items-start text-sm text-muted">
                                            <div className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="font-sans leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </Reveal>
                    </div>

                    {/* Right Column: Project Meta & Testimonial */}
                    <aside className="space-y-8">
                        {/* Meta Box */}
                        <Reveal delay={0.2}>
                            <div className="bg-card border border-default p-6 rounded-3xl space-y-4">
                                <h3 className="text-sm font-bold tracking-wider uppercase text-foreground border-b border-default pb-3">
                                    Project Metrics
                                </h3>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted flex items-center gap-2">
                                            <User className="w-4 h-4 text-accent" />
                                            Client
                                        </span>
                                        <span className="font-medium text-foreground">{project.client}</span>
                                    </div>
                                    
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted flex items-center gap-2">
                                            <Award className="w-4 h-4 text-accent" />
                                            Category
                                        </span>
                                        <span className="font-medium text-foreground">{project.category}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-accent" />
                                            Year
                                        </span>
                                        <span className="font-medium text-foreground">{project.year}</span>
                                    </div>

                                    <div className="pt-2">
                                        <span className="text-xs text-muted flex items-center gap-2 mb-2">
                                            <Code2 className="w-4 h-4 text-accent" />
                                            Technologies Deployed
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.techStack.map((tech) => (
                                                <span 
                                                    key={tech} 
                                                    className="px-2 py-0.5 rounded-md bg-default border border-default text-[10px] font-mono text-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Testimonial Box */}
                        {project.testimonial && (
                            <Reveal delay={0.25}>
                                <div className="bg-gradient-to-tr from-accent/5 to-blue-500/5 border border-accent/20 p-6 rounded-3xl relative">
                                    <span className="absolute top-3 right-4 text-5xl font-serif text-accent/15 leading-none select-none pointer-events-none">
                                        “
                                    </span>
                                    <p className="text-sm italic text-muted leading-relaxed relative z-10 font-sans">
                                        &ldquo;{project.testimonial.quote}&rdquo;
                                    </p>
                                    <div className="mt-4 pt-3 border-t border-accent/10 flex flex-col">
                                        <span className="text-xs font-semibold text-foreground">
                                            {project.testimonial.author}
                                        </span>
                                        <span className="text-[10px] text-muted font-medium">
                                            {project.testimonial.role}
                                        </span>
                                    </div>
                                </div>
                            </Reveal>
                        )}
                    </aside>
                </div>

                {/* Bottom Navigation (Prev/Next Case Study) */}
                <footer className="mt-20 pt-8 border-t border-default flex items-center justify-between gap-4">
                    {prevProject ? (
                        <Link 
                            href={`/showcase/${prevProject.slug}`}
                            className="group flex flex-col text-left"
                        >
                            <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                                Previous Case Study
                            </span>
                            <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors mt-1">
                                &larr; {prevProject.title}
                            </span>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextProject ? (
                        <Link 
                            href={`/showcase/${nextProject.slug}`}
                            className="group flex flex-col text-right"
                        >
                            <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
                                Next Case Study
                            </span>
                            <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors mt-1">
                                {nextProject.title} &rarr;
                            </span>
                        </Link>
                    ) : (
                        <div />
                    )}
                </footer>
            </div>
        </article>
    );
}
