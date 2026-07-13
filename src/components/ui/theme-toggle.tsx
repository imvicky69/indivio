
'use client';

import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        // Initial sync
        const saved = localStorage.getItem('theme');
        let initialDark = false;
        if (saved === 'dark') {
            initialDark = true;
            document.documentElement.classList.add('dark');
        } else if (saved === 'light') {
            initialDark = false;
            document.documentElement.classList.remove('dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            initialDark = prefersDark;
            if (prefersDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
        setIsDark(initialDark);

        // Sync with class changes on document.documentElement (e.g. from AutoThemeTrigger)
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);

        if (newDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        sessionStorage.setItem('theme_manually_set', 'true');
    };

    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                <Sun className="w-4 h-4" strokeWidth={1.5} />
            ) : (
                <Moon className="w-4 h-4" strokeWidth={1.5} />
            )}
        </button>
    );
}
