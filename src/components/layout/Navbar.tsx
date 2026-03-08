'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Calculator', href: '/estimate' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[var(--background)]/90 backdrop-blur-md border-b border-default'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="relative h-8 w-28 group">
                    <Image
                        src="/images/logo.png"
                        alt="Indivio"
                        fill
                        className="object-contain group-hover:opacity-80 transition-opacity"
                        priority
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm text-muted hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Button size="sm" asChild>
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                </nav>

                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-[var(--background)] border-b border-default px-6 py-4 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm py-2 text-muted hover:text-foreground transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="sm" className="mt-2 w-full" asChild>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
