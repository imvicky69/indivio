import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Indivio's privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
    return (
        <section className="pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <Reveal>
                    <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 tracking-tight">
                        Privacy Policy
                    </h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-sm text-muted mb-12">Last updated: March 2026</p>
                </Reveal>

                <div className="space-y-10 text-sm text-muted leading-relaxed">
                    <Reveal delay={0.15}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h2>
                            <p className="mb-3">When you contact us through our website form or WhatsApp, we may collect:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Your name and email address</li>
                                <li>Phone number (if provided)</li>
                                <li>Project details and requirements</li>
                                <li>Budget range (if selected)</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
                            <p>We use your information solely to:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                                <li>Respond to your inquiry</li>
                                <li>Provide project quotes and proposals</li>
                                <li>Communicate about ongoing projects</li>
                                <li>Send relevant updates (only if you opt in)</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">3. Data Protection</h2>
                            <p>We do not sell, trade, or share your personal information with third parties. Your data is stored securely and accessed only by authorized team members for business purposes.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">4. Cookies</h2>
                            <p>Our website may use basic analytics cookies to understand how visitors use the site. These cookies do not collect personally identifiable information. You can disable cookies in your browser settings.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">5. Third-Party Services</h2>
                            <p>We may use third-party services like Google Analytics and WhatsApp for communication. These services have their own privacy policies that govern how they handle your data.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
                            <p>You have the right to request access to, correction of, or deletion of your personal data at any time. Contact us at hello@indivio.in to exercise these rights.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">7. Contact</h2>
                            <p>For any privacy-related questions, contact us at <a href="mailto:hello@indivio.in" className="text-[var(--accent)] hover:underline">hello@indivio.in</a>.</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
