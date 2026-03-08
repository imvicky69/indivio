export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
}

// Dates in ISO format for proper SEO signals
export const blogPosts: BlogPost[] = [
    {
        slug: 'react-nextjs-vs-wordpress-india',
        title: 'React & Next.js vs WordPress: Why Modern Tech Wins for Indian Businesses',
        excerpt: 'WordPress was great 10 years ago. Today, businesses need fast, secure, and purely custom web experiences. Discover why React and Next.js are the superior choice.',
        category: 'Technical',
        readTime: '6 min read',
        date: '2026-03-01',
    },
    {
        slug: 'web-development-bihar-for-india',
        title: 'Built in Bihar, Serving India: How Indivio Delivers Premium Web Solutions',
        excerpt: 'You don\'t need an agency in Bangalore to get a world-class website. How our Bihar-based team is delivering premium, custom digital solutions to businesses across India.',
        category: 'Business',
        readTime: '5 min read',
        date: '2026-03-02',
    },
    {
        slug: 'gym-fitness-center-website-benefits',
        title: 'How Gyms Can Multiply Memberships With a Custom Website',
        excerpt: 'Relying solely on local footfall limits your gym\'s growth. See how a professional website with online lead capture and schedules can double your daily fitness inquiries.',
        category: 'Industry Guide',
        readTime: '7 min read',
        date: '2026-03-03',
    },
    {
        slug: 'doctor-clinic-website-appointment-booking',
        title: 'Why Every Clinic and Doctor Needs a Patient-First Website',
        excerpt: 'Patients search Google before visiting a doctor. A website builds trust, showcases your expertise, and allows seamless appointment booking for your clinic.',
        category: 'Healthcare',
        readTime: '6 min read',
        date: '2026-03-04',
    },
    {
        slug: 'library-coaching-institute-digital-transformation',
        title: 'Digital Transformation for Libraries and Coaching Institutes',
        excerpt: 'Students expect digital access. Learn how a custom portal can help libraries manage memberships and how coaching centers can sell courses online.',
        category: 'Education',
        readTime: '8 min read',
        date: '2026-03-05',
    },
    {
        slug: 'local-ecommerce-website-for-indian-shops',
        title: 'From Local Shop to E-Commerce Brand: A Guide for Indian Retailers',
        excerpt: 'Stop giving 30% margins to aggregators. Here’s how building an independent e-commerce website can skyrocket your retail shop’s profitability.',
        category: 'E-Commerce',
        readTime: '7 min read',
        date: '2026-03-05',
    },
    {
        slug: 'real-estate-website-lead-generation',
        title: 'Real Estate Websites: Generating High-Quality Property Leads',
        excerpt: 'Property buyers browse online for months. If your agency doesn’t have a fast, mobile-friendly project showcase, you’re losing massive commissions.',
        category: 'Real Estate',
        readTime: '6 min read',
        date: '2026-03-06',
    },
    {
        slug: 'salon-spa-booking-website',
        title: 'Salon & Spa Websites: Turning Clicks Into Confirmed Appointments',
        excerpt: 'A beautiful website with a direct booking system can reduce no-shows and keep your salon chairs full all week long. Here is the blueprint.',
        category: 'Beauty & Wellness',
        readTime: '5 min read',
        date: '2026-03-06',
    },
    {
        slug: 'restaurant-cafe-website-india',
        title: 'Why Restaurants and Cafes Should Own Their Digital Menu',
        excerpt: 'Zomato and Swiggy take massive cuts. Discover how having your own restaurant website and direct ordering system puts profits back in your pocket.',
        category: 'Food & Beverage',
        readTime: '5 min read',
        date: '2026-03-07',
    },
    {
        slug: 'seo-basics-for-indian-small-businesses',
        title: 'SEO Basics: How to Get Your Small Business to Rank on Page 1',
        excerpt: 'Having a website isn’t enough if no one can find it. A breakdown of local SEO strategies that actually work for small businesses in the Indian market.',
        category: 'Marketing',
        readTime: '8 min read',
        date: '2026-03-07',
    },
    {
        slug: 'how-much-does-website-cost-india-2026',
        title: 'How Much Does a Website Cost in India in 2026? Complete Breakdown',
        excerpt: 'From \u20B95,000 templates to \u20B95,00,000 custom builds \u2014 understand what drives website pricing in India and how to get the best value for your budget.',
        category: 'Business',
        readTime: '9 min read',
        date: '2026-03-08',
    },
    {
        slug: 'ca-accountant-website-get-more-clients',
        title: 'CA & Accountant Website: How to Get More Clients Online',
        excerpt: 'Most chartered accountants rely solely on referrals. A professional website with SEO can bring a steady stream of new clients searching for tax, audit, and compliance services.',
        category: 'Professional Services',
        readTime: '6 min read',
        date: '2026-03-08',
    },
    {
        slug: 'hotel-resort-website-direct-bookings',
        title: 'Hotel & Resort Website: Get Direct Bookings Instead of Paying OTA Commissions',
        excerpt: 'OTAs like MakeMyTrip and Booking.com charge 15-25% commission. Learn how a custom hotel website with a direct booking engine saves you lakhs every year.',
        category: 'Hospitality',
        readTime: '7 min read',
        date: '2026-03-08',
    },
    {
        slug: 'ngo-trust-website-credibility-donations',
        title: 'NGO & Trust Website: Build Credibility and Attract Donors Online',
        excerpt: 'Donors and grant agencies research online before contributing. A transparent, well-designed website with impact reports builds the trust your NGO needs to grow.',
        category: 'Non-Profit',
        readTime: '6 min read',
        date: '2026-03-08',
    },
    {
        slug: 'travel-agency-website-beat-aggregators',
        title: 'Travel Agency Website: Compete With MakeMyTrip Using Your Own Platform',
        excerpt: 'Aggregators commoditize your travel packages. Build a custom website to showcase curated itineraries, collect leads directly, and retain your brand identity.',
        category: 'Travel',
        readTime: '7 min read',
        date: '2026-03-08',
    },
    {
        slug: 'why-business-needs-website-not-just-social-media',
        title: 'Why Your Business Needs a Website in 2026 \u2014 Not Just Social Media',
        excerpt: 'Instagram and Facebook are rented land. Algorithm changes can destroy your reach overnight. A website is digital property you own and control forever.',
        category: 'Marketing',
        readTime: '6 min read',
        date: '2026-03-08',
    },
    {
        slug: 'website-maintenance-cost-india-why-you-need-it',
        title: 'Website Maintenance: What It Costs and Why Every Business Needs It',
        excerpt: 'A website without maintenance is like a car without servicing. Learn what website maintenance includes, what it costs in India, and why skipping it is risky.',
        category: 'Technical',
        readTime: '5 min read',
        date: '2026-03-08',
    },
];
