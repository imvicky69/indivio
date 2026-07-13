import projectsData from './showcase.json';

export interface ShowcaseProject {
    slug: string;
    title: string;
    subtitle: string;
    category: 'Mobile App' | 'Web App' | 'Software System';
    shortDescription: string;
    longDescription: string;
    techStack: string[];
    logoUrl: string;
    playstoreUrl?: string;
    webUrl?: string;
    features: string[];
    challenge: string;
    solution: string;
    results: string;
    testimonial?: {
        quote: string;
        author: string;
        role: string;
    };
    year: string;
    client: string;
}

export const showcaseProjects: ShowcaseProject[] = projectsData as ShowcaseProject[];
