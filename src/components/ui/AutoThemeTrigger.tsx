'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, X } from 'lucide-react';

export function AutoThemeTrigger() {
    const [mounted, setMounted] = useState(false);
    const [dimOpacity, setDimOpacity] = useState(0);
    const [showDimOverlay, setShowDimOverlay] = useState(false);
    const [flashMessage, setFlashMessage] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);

        // Check if we already did the auto-adjustment or manual toggle in this session
        if (
            sessionStorage.getItem('theme_auto_adjusted') === 'true' ||
            sessionStorage.getItem('theme_manually_set') === 'true'
        ) {
            return;
        }

        // Calculate current IST (Indian Standard Time: UTC + 5:30)
        const getISTHour = () => {
            const now = new Date();
            const utcTime = now.getTime();
            const istTime = new Date(utcTime + (5.5 * 60 * 60 * 1000));
            return istTime.getUTCHours();
        };

        const hours = getISTHour();
        // Evening to morning: 18:00 (6 PM) to 06:00 (6 AM) IST
        const shouldBeDark = hours >= 18 || hours < 6;

        // Current actual theme class on HTML element
        const isCurrentDark = document.documentElement.classList.contains('dark');

        if (shouldBeDark && !isCurrentDark) {
            // Trigger evening change (to Dark mode)
            runThemeTransition('dark', 'Site has turned dark. You may toggle it from the top header showing the button.');
        } else if (!shouldBeDark && isCurrentDark) {
            // Trigger morning change (to Light mode)
            runThemeTransition('light', 'Site has turned light. You may toggle it from the top header showing the button.');
        } else {
            // Even if the theme is already correct, mark session as checked
            sessionStorage.setItem('theme_auto_adjusted', 'true');
        }

        function runThemeTransition(targetTheme: 'dark' | 'light', message: string) {
            // 1. Show overlay and start dimming
            setShowDimOverlay(true);
            setDimOpacity(0);
            
            // Fade in dim overlay (takes 500ms)
            setTimeout(() => {
                setDimOpacity(1);
            }, 50);

            // 2. Change the theme while dimmed (at 800ms)
            setTimeout(() => {
                if (targetTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                }
            }, 800);

            // 3. Fade out the dim overlay (starts at 1200ms)
            setTimeout(() => {
                setDimOpacity(0);
            }, 1200);

            // 4. Hide overlay container and trigger flash message (at 1700ms)
            setTimeout(() => {
                setShowDimOverlay(false);
                setFlashMessage(message);
                sessionStorage.setItem('theme_auto_adjusted', 'true');
            }, 1700);
        }
    }, []);

    // Auto-dismiss the flash message after 10 seconds
    useEffect(() => {
        if (flashMessage) {
            const timer = setTimeout(() => {
                setFlashMessage(null);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [flashMessage]);

    if (!mounted) return null;

    return (
        <>
            {/* Dimming overlay */}
            {showDimOverlay && (
                <div
                    className="fixed inset-0 z-[9999] transition-opacity duration-700 ease-in-out pointer-events-none"
                    style={{
                        opacity: dimOpacity,
                        backgroundColor: 'rgba(9, 9, 11, 0.98)',
                    }}
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80 gap-3">
                        <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                        <p className="text-sm font-medium tracking-wide">Adjusting ambient light...</p>
                    </div>
                </div>
            )}

            {/* Flash message notification toast */}
            {flashMessage && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-md transition-all duration-300">
                    <div className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-neutral-200 dark:border-zinc-800 p-4 rounded-2xl shadow-2xl flex items-start gap-3 text-left">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                            {flashMessage.includes('dark') ? (
                                <Moon className="w-4 h-4" />
                            ) : (
                                <Sun className="w-4 h-4" />
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-foreground tracking-wide uppercase">
                                Theme Adjusted
                            </h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-1">
                                {flashMessage}
                            </p>
                        </div>
                        <button
                            onClick={() => setFlashMessage(null)}
                            className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 shrink-0 cursor-pointer p-0.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
