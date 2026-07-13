import { Metadata } from 'next';
import { showcaseProjects } from '@/data/showcase';
import { ShowcaseClient } from '@/app/showcase/ShowcaseClient';

export const metadata: Metadata = {
    title: 'Our Showcase | Featured Projects & Mobile Apps',
    description: 'Explore the portfolio of Indivio. Detailed case studies of custom mobile apps (like Lele Delivery on Play Store) and high-performance websites built for Indian businesses.',
    keywords: [
        'indivio showcase',
        'indivio portfolio',
        'lele delivery app play store',
        'lele india web store',
        'software development bihar',
        'mobile app developers bihar',
        'website portfolio india'
    ]
};

export default function ShowcasePage() {
    return (
        <div className="pt-24 min-h-screen">
            <ShowcaseClient projects={showcaseProjects} />
        </div>
    );
}
