export interface TargetLocation {
    slug: string;
    name: string;
    region: string;
    focus: 'Small Businesses' | 'Schools & Coaching' | 'Healthcare & Clinics' | 'Startups & Retail';
    shortDescription: string;
}

export const locations: TargetLocation[] = [
    // Bihar
    {
        slug: 'patna',
        name: 'Patna',
        region: 'Bihar',
        focus: 'Startups & Retail',
        shortDescription: 'Patna is the bustling capital of Bihar, rapidly embracing digital transformation for retail and tech startups.',
    },
    {
        slug: 'gaya',
        name: 'Gaya',
        region: 'Bihar',
        focus: 'Schools & Coaching',
        shortDescription: 'As a major educational and cultural hub, Gaya requires robust digital solutions for schools and coaching institutes.',
    },
    {
        slug: 'darbhanga',
        name: 'Darbhanga',
        region: 'Bihar',
        focus: 'Healthcare & Clinics',
        shortDescription: 'Darbhanga is the medical hub of North Bihar, needing reliable appointment and clinic management websites.',
    },
    {
        slug: 'nirmali',
        name: 'Nirmali',
        region: 'Bihar',
        focus: 'Small Businesses',
        shortDescription: 'Our roots are in Nirmali. We proudly help local shops and businesses establish a powerful digital presence.',
    },
    {
        slug: 'bhagalpur',
        name: 'Bhagalpur',
        region: 'Bihar',
        focus: 'Schools & Coaching',
        shortDescription: 'The Silk City is growing digitally. We provide complete school ERPs and business websites for Bhagalpur.',
    },
    {
        slug: 'muzaffarpur',
        name: 'Muzaffarpur',
        region: 'Bihar',
        focus: 'Small Businesses',
        shortDescription: 'A crucial commercial hub where tailored business websites and robust digital strategy create massive advantages.',
    },
    {
        slug: 'purnia',
        name: 'Purnia',
        region: 'Bihar',
        focus: 'Schools & Coaching',
        shortDescription: 'As Purnia expands, its dedicated coaching centers and growing local businesses require modern websites to thrive.',
    },
    // Jharkhand
    {
        slug: 'ranchi',
        name: 'Ranchi',
        region: 'Jharkhand',
        focus: 'Startups & Retail',
        shortDescription: 'The capital of Jharkhand is ripe for custom software development, from startups to established retail brands.',
    },
    {
        slug: 'jamshedpur',
        name: 'Jamshedpur',
        region: 'Jharkhand',
        focus: 'Small Businesses',
        shortDescription: 'The Steel City holds massive potential for dedicated web solutions that help small businesses scale.',
    },
    {
        slug: 'dhbad',
        name: 'Dhanbad',
        region: 'Jharkhand',
        focus: 'Schools & Coaching',
        shortDescription: 'The Coal Capital of India requires digital transformation in its education sector through smart ERP and school apps.',
    },
    // UP East (Expanding Tier 2)
    {
        slug: 'varanasi',
        name: 'Varanasi',
        region: 'Uttar Pradesh',
        focus: 'Healthcare & Clinics',
        shortDescription: 'From tourism to healthcare, Varanasi businesses need fast, reliable web applications to match global standards.',
    },
    {
        slug: 'gorakhpur',
        name: 'Gorakhpur',
        region: 'Uttar Pradesh',
        focus: 'Schools & Coaching',
        shortDescription: 'A fast-growing tier 2 city where modern coaching institutes and local businesses are moving operations online.',
    },
    // More Bihar Hubs
    {
        slug: 'saharsa',
        name: 'Saharsa',
        region: 'Bihar',
        focus: 'Small Businesses',
        shortDescription: 'As a key hub in the Kosi region, Saharsa businesses are perfectly positioned to grow with modern digital tools.',
    },
    {
        slug: 'supaul',
        name: 'Supaul',
        region: 'Bihar',
        focus: 'Schools & Coaching',
        shortDescription: 'Neighboring our home base, Supaul’s educational institutions are rapidly adopting our school ERP solutions.',
    },
    {
        slug: 'madhubani',
        name: 'Madhubani',
        region: 'Bihar',
        focus: 'Small Businesses',
        shortDescription: 'Known for its art, Madhubani is taking its local businesses and coaching centers to the next level digitally.',
    },
    {
        slug: 'begusarai',
        name: 'Begusarai',
        region: 'Bihar',
        focus: 'Startups & Retail',
        shortDescription: 'The industrial capital of Bihar needs strong web applications and digital platforms to streamline its operations.',
    },
    // More Jharkhand Hubs
    {
        slug: 'bokaro',
        name: 'Bokaro',
        region: 'Jharkhand',
        focus: 'Schools & Coaching',
        shortDescription: 'A prominent educational center where competitive coaching institutes need robust web portals.',
    },
    {
        slug: 'hazaribagh',
        name: 'Hazaribagh',
        region: 'Jharkhand',
        focus: 'Healthcare & Clinics',
        shortDescription: 'Hazaribagh is modernizing its healthcare infrastructure with digital appointment systems and clinic websites.',
    },
    // UP East Extensions
    {
        slug: 'prayagraj',
        name: 'Prayagraj',
        region: 'Uttar Pradesh',
        focus: 'Schools & Coaching',
        shortDescription: 'A major coaching hub where educational institutes require massive digital infrastructure and portals to manage students.',
    },
    {
        slug: 'lucknow',
        name: 'Lucknow',
        region: 'Uttar Pradesh',
        focus: 'Startups & Retail',
        shortDescription: 'The tech and business ecosystem in Lucknow is booming. We provide the custom software needed to scale.',
    }
];
