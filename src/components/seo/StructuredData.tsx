export function StructuredData() {
    const localBusiness = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Indivio',
        description: 'Custom websites, web apps, and school management systems built for performance.',
        url: 'https://indivio.in',
        email: 'hello@indivio.in',
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        serviceType: [
            'Web Development',
            'Web Application Development',
            'School Management Software',
            'E-Commerce Development',
            'Landing Page Design',
        ],
        priceRange: '₹15,000 - ₹2,00,000+',
        knowsLanguage: ['English', 'Hindi'],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How much does a website cost?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A basic business website starts from ₹15,000. Custom web applications with advanced features are quoted individually based on scope. We always provide a transparent estimate before starting.',
                },
            },
            {
                '@type': 'Question',
                name: 'How long does it take?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A typical business website takes 2-4 weeks. More complex projects like web apps or school management systems can take 4-8 weeks.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you provide hosting and maintenance?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We offer affordable monthly plans that include hosting, security updates, backups, and technical support.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can you redesign my existing website?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Absolutely. We frequently modernize existing sites. We'll audit your current site, understand your goals, and deliver a fresh, high-performing redesign.",
                },
            },
            {
                '@type': 'Question',
                name: 'Do you work with clients outside India?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Yes. While we're based in India, we work with clients globally. Our structured process makes remote collaboration seamless across time zones.",
                },
            },
            {
                '@type': 'Question',
                name: 'What if I need changes after delivery?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We include a revision period with every project. After launch, you can request changes through our maintenance plans or reach out for one-time updates.',
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
