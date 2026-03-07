'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);
    const phoneNumber = '919999999999'; // Replace with actual number
    const message = encodeURIComponent('Hi! I\'m interested in building a website with Indivio.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Chat on WhatsApp"
        >
            {/* Tooltip */}
            <div
                className={`absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-medium whitespace-nowrap transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    }`}
            >
                Chat with us
            </div>

            {/* Button */}
            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300">
                <MessageCircle className="w-6 h-6 text-white" fill="white" strokeWidth={0} />
            </div>

            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </a>
    );
}
