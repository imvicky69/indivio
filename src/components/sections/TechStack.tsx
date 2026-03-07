'use client';

import { useState } from 'react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/ui/reveal';

interface TechItem {
    name: string;
    icon: string;
    description: string;
}

const cdnBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const techStack: TechItem[] = [
    {
        name: 'React',
        icon: `${cdnBase}/react/react-original.svg`,
        description: 'Component-based UI library for fast, interactive interfaces.',
    },
    {
        name: 'Next.js',
        icon: `${cdnBase}/nextjs/nextjs-original.svg`,
        description: 'Full-stack React framework with SSR, routing, and APIs.',
    },
    {
        name: 'TypeScript',
        icon: `${cdnBase}/typescript/typescript-original.svg`,
        description: 'Type-safe JavaScript — catches bugs before production.',
    },
    {
        name: 'Tailwind CSS',
        icon: `${cdnBase}/tailwindcss/tailwindcss-original.svg`,
        description: 'Utility-first CSS for rapid, pixel-perfect styling.',
    },
    {
        name: 'Node.js',
        icon: `${cdnBase}/nodejs/nodejs-original.svg`,
        description: 'Server-side JavaScript for scalable backend services.',
    },
    {
        name: 'Firebase',
        icon: `${cdnBase}/firebase/firebase-plain.svg`,
        description: 'Auth, real-time database, storage & push notifications.',
    },
    {
        name: 'Google Cloud',
        icon: `${cdnBase}/googlecloud/googlecloud-original.svg`,
        description: 'Enterprise hosting, storage, and serverless functions.',
    },
    {
        name: 'Firestore',
        icon: `${cdnBase}/firebase/firebase-original.svg`,
        description: 'NoSQL cloud database with real-time sync & offline support.',
    },
    {
        name: 'MongoDB',
        icon: `${cdnBase}/mongodb/mongodb-original.svg`,
        description: 'Flexible NoSQL database for rapid development.',
    },
    {
        name: 'PostgreSQL',
        icon: `${cdnBase}/postgresql/postgresql-original.svg`,
        description: 'Powerful relational database for complex data.',
    },
    {
        name: 'Vercel',
        icon: `${cdnBase}/vercel/vercel-original.svg`,
        description: 'Zero-config deployment with edge network speed.',
    },
    {
        name: 'Figma',
        icon: `${cdnBase}/figma/figma-original.svg`,
        description: 'Collaborative design — every screen designed first.',
    },
    {
        name: 'Git',
        icon: `${cdnBase}/git/git-original.svg`,
        description: 'Version control — every change tracked, nothing lost.',
    },
    {
        name: 'Docker',
        icon: `${cdnBase}/docker/docker-original.svg`,
        description: 'Containerized deployments for consistent environments.',
    },
];

function TechCard({ tech }: { tech: TechItem }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-default bg-card cursor-default transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent-glow)] hover:-translate-y-1 h-full">
                {/* Real Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={tech.icon}
                        alt={tech.name}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="w-10 h-10 object-contain"
                    />
                </div>

                {/* Name */}
                <span className="text-xs font-medium text-foreground text-center leading-tight">
                    {tech.name}
                </span>
            </div>

            {/* Tooltip on hover */}
            <div
                className={`absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-3 rounded-xl border border-default bg-card shadow-xl w-52 transition-all duration-200 pointer-events-none ${isHovered
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}
            >
                <p className="text-xs font-semibold text-foreground mb-1">{tech.name}</p>
                <p className="text-xs text-muted leading-relaxed">{tech.description}</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2.5 h-2.5 border-r border-b border-default bg-card" />
            </div>
        </div>
    );
}

export function TechStack() {
    return (
        <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-12">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                            Built with modern tools
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-muted text-base">
                            Industry-standard technology that powers millions of apps. Hover to learn more.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4"
                    staggerDelay={0.04}
                >
                    {techStack.map((tech) => (
                        <StaggerItem key={tech.name}>
                            <TechCard tech={tech} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
