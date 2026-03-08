'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';

export function SubmitSuccess({
    onReset,
    title = "Message sent successfully!",
    message = "We've received your details and will get back to you within 24 hours."
}: {
    onReset?: () => void;
    title?: string;
    message?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center text-center py-12 px-6"
        >
            {/* Animated particles */}
            <div className="relative mb-6">
                {/* Glow ring */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute inset-0 w-20 h-20 rounded-full bg-[var(--accent)] opacity-10 blur-xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />

                {/* Orbiting sparkles */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: [0, Math.cos((i * 60 * Math.PI) / 180) * 50],
                            y: [0, Math.sin((i * 60 * Math.PI) / 180) * 50],
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.3 + i * 0.08,
                            ease: 'easeOut',
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                        <Sparkles className="w-3 h-3 text-[var(--accent)]" />
                    </motion.div>
                ))}

                {/* Main checkmark */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.15 }}
                >
                    <div className="w-16 h-16 rounded-full bg-[var(--accent)] flex items-center justify-center shadow-lg shadow-[var(--accent-glow)]">
                        <motion.div
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <CheckCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Text */}
            <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl font-semibold text-foreground mb-2"
            >
                {title}
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-sm text-muted max-w-sm leading-relaxed mb-6"
            >
                {message}
            </motion.p>

            {/* Accent bar */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-12 h-1 rounded-full bg-[var(--accent)] mb-6 origin-center"
            />

            {onReset && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    onClick={onReset}
                    className="text-xs text-muted hover:text-foreground transition-colors underline underline-offset-4 cursor-pointer"
                >
                    Send another message
                </motion.button>
            )}
        </motion.div>
    );
}
