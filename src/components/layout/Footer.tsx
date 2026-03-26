import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-default py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="inline-block mb-3">
                            <Image
                                src="/images/logo.png"
                                alt="Indivio - Web Development Company in India"
                                width={100}
                                height={28}
                                className="dark:invert"
                            />
                        </Link>
                        <p className="text-sm text-muted leading-relaxed">
                            Custom digital solutions for businesses and schools in India.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-medium text-foreground uppercase tracking-wider mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Custom Websites', href: '/services#website-development' },
                                { name: 'Web Apps', href: '/services#web-applications' },
                                { name: 'School Systems', href: '/services#school-erp' },
                                { name: 'E-Commerce', href: '/services#ecommerce' },
                                { name: 'Landing Pages', href: '/services#landing-pages' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-medium text-foreground uppercase tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'About', href: '/about' },
                                { name: 'Pricing', href: '/pricing' },
                                { name: 'Calculator', href: '/estimate' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-medium text-foreground uppercase tracking-wider mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="mailto:hello@indivio.in" className="text-sm text-muted hover:text-foreground transition-colors">
                                    hello@indivio.in
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://wa.me/919798836199"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    className="text-sm text-muted hover:text-foreground transition-colors"
                                >
                                    WhatsApp
                                </Link>
                            </li>
                            <li className="text-sm text-muted">Based in India</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-default pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                        © {currentYear} Indivio. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-xs text-muted hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-xs text-muted hover:text-foreground transition-colors">
                            Terms
                        </Link>
                        <Link href="/contact" className="text-xs text-muted hover:text-foreground transition-colors">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
