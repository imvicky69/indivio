import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center">
            <div className="max-w-lg mx-auto px-6 text-center">
                <div className="text-8xl md:text-9xl font-semibold text-foreground mb-2 tracking-tighter">
                    404
                </div>
                <h1 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                    Page not found
                </h1>
                <p className="text-muted text-sm leading-relaxed mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button size="lg" className="group" asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
