import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Indivio's terms of service — project terms, payments, intellectual property, and client responsibilities.",
};

export default function TermsOfService() {
    return (
        <section className="pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                <Reveal>
                    <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2 tracking-tight">
                        Terms of Service
                    </h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-sm text-muted mb-12">Last updated: March 2026</p>
                </Reveal>

                <div className="space-y-10 text-sm text-muted leading-relaxed">
                    <Reveal delay={0.15}>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">1. Services</h2>
                            <p>Indivio provides custom web development services including website design, web application development, school management systems, and related digital services. The specific scope of each project is defined in the project proposal shared before work begins.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">2. Project Process</h2>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>All projects begin with a discussion and a written proposal</li>
                                <li>Work starts only after mutual agreement on scope and pricing</li>
                                <li>We provide regular updates and seek feedback at each milestone</li>
                                <li>Revision rounds are included as specified in your plan</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">3. Payment Terms</h2>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>50% advance payment to begin work</li>
                                <li>50% upon project completion and approval</li>
                                <li>For larger projects, payments may be split into 3 milestones</li>
                                <li>All prices are in INR; GST is applicable where required</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">4. Intellectual Property</h2>
                            <p className="mb-2">Upon full payment:</p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>You own 100% of the custom code written for your project</li>
                                <li>You own all design assets created specifically for you</li>
                                <li>Third-party libraries and tools remain under their respective licenses</li>
                                <li>We reserve the right to showcase the project in our portfolio (unless agreed otherwise)</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">5. Client Responsibilities</h2>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Provide content, images, and branding materials in a timely manner</li>
                                <li>Review and provide feedback within reasonable timeframes</li>
                                <li>Ensure that all content provided is owned by you or properly licensed</li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">6. Revisions & Scope Changes</h2>
                            <p>Each plan includes a defined number of revision rounds. Requests that exceed the agreed scope will be quoted separately and require written approval before implementation.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">7. Cancellation & Refunds</h2>
                            <p>If you cancel a project before completion, you will be billed for the work completed to date. If we fail to deliver on the agreed scope, you are entitled to a proportional refund.</p>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact</h2>
                            <p>For questions about these terms, contact us at <a href="mailto:hello@indivio.in" className="text-[var(--accent)] hover:underline">hello@indivio.in</a>.</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
