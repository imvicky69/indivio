'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const slideLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
};

const slideRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
};

const variants = { fadeUp, scaleUp, slideLeft, slideRight };

interface RevealProps {
    children: ReactNode;
    animation?: keyof typeof variants;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

export function Reveal({
    children,
    animation = 'fadeUp',
    delay = 0,
    duration = 0.6,
    className,
    once = true,
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            variants={variants[animation]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for child elements
export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.08,
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: staggerDelay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger item used inside StaggerContainer
export function StaggerItem({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
