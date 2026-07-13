'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trash2, Edit, Plus, Check, AlertCircle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

interface Project {
    slug: string;
    title: string;
    subtitle: string;
    category: 'Mobile App' | 'Web App' | 'Software System';
    shortDescription: string;
    longDescription: string;
    techStack: string[];
    logoUrl: string;
    playstoreUrl?: string;
    webUrl?: string;
    features: string[];
    challenge: string;
    solution: string;
    results: string;
    testimonial?: Testimonial;
    year: string;
    client: string;
}

export default function ShowcaseAdmin() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    // Form state
    const [isEditing, setIsEditing] = useState(false);
    const [formSlug, setFormSlug] = useState('');
    const [formTitle, setFormTitle] = useState('');
    const [formSubtitle, setFormSubtitle] = useState('');
    const [formCategory, setFormCategory] = useState<'Mobile App' | 'Web App' | 'Software System'>('Mobile App');
    const [formShortDesc, setFormShortDesc] = useState('');
    const [formLongDesc, setFormLongDesc] = useState('');
    const [formTechStack, setFormTechStack] = useState('');
    const [formLogoUrl, setFormLogoUrl] = useState('');
    const [formPlaystoreUrl, setFormPlaystoreUrl] = useState('');
    const [formWebUrl, setFormWebUrl] = useState('');
    const [formFeatures, setFormFeatures] = useState('');
    const [formChallenge, setFormChallenge] = useState('');
    const [formSolution, setFormSolution] = useState('');
    const [formResults, setFormResults] = useState('');
    
    // Testimonial subform
    const [formQuote, setFormQuote] = useState('');
    const [formAuthor, setFormAuthor] = useState('');
    const [formRole, setFormRole] = useState('');

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/showcase');
            if (!res.ok) throw new Error('Failed to load projects');
            const data = await res.json();
            setProjects(data);
            setError(null);
        } catch (err: any) {
            setError(err.message || 'Error fetching projects.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const resetForm = () => {
        setIsEditing(false);
        setFormSlug('');
        setFormTitle('');
        setFormSubtitle('');
        setFormCategory('Mobile App');
        setFormShortDesc('');
        setFormLongDesc('');
        setFormTechStack('');
        setFormLogoUrl('');
        setFormPlaystoreUrl('');
        setFormWebUrl('');
        setFormFeatures('');
        setFormChallenge('');
        setFormSolution('');
        setFormResults('');
        setFormQuote('');
        setFormAuthor('');
        setFormRole('');
    };

    const handleEdit = (project: Project) => {
        setIsEditing(true);
        setFormSlug(project.slug);
        setFormTitle(project.title);
        setFormSubtitle(project.subtitle);
        setFormCategory(project.category);
        setFormShortDesc(project.shortDescription);
        setFormLongDesc(project.longDescription);
        setFormTechStack(project.techStack.join(', '));
        setFormLogoUrl(project.logoUrl || '');
        setFormPlaystoreUrl(project.playstoreUrl || '');
        setFormWebUrl(project.webUrl || '');
        setFormFeatures(project.features.join('\n'));
        setFormChallenge(project.challenge);
        setFormSolution(project.solution);
        setFormResults(project.results);
        
        if (project.testimonial) {
            setFormQuote(project.testimonial.quote);
            setFormAuthor(project.testimonial.author);
            setFormRole(project.testimonial.role);
        } else {
            setFormQuote('');
            setFormAuthor('');
            setFormRole('');
        }
    };

    const handleDelete = async (slug: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;
        try {
            const res = await fetch(`/api/showcase?slug=${slug}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete project');
            setSuccessMsg('Project deleted successfully.');
            fetchProjects();
            resetForm();
        } catch (err: any) {
            setError(err.message || 'Error deleting project.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formTitle || !formShortDesc || !formLongDesc || !formChallenge || !formSolution || !formResults) {
            setError('Please fill in all required fields.');
            return;
        }

        // Generate slug from title if not editing and empty
        let slug = formSlug;
        if (!slug) {
            slug = formTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        }

        const projectData: Project = {
            slug,
            title: formTitle,
            subtitle: formSubtitle,
            category: formCategory,
            shortDescription: formShortDesc,
            longDescription: formLongDesc,
            techStack: formTechStack.split(',').map(s => s.trim()).filter(Boolean),
            logoUrl: formLogoUrl || '/images/logo.png',
            playstoreUrl: formPlaystoreUrl || undefined,
            webUrl: formWebUrl || undefined,
            features: formFeatures.split('\n').map(s => s.trim()).filter(Boolean),
            challenge: formChallenge,
            solution: formSolution,
            results: formResults,
            year: new Date().getFullYear().toString(),
            client: formTitle.split(' ')[0], // Default client name to first word of title
        };

        if (formQuote && formAuthor) {
            projectData.testimonial = {
                quote: formQuote,
                author: formAuthor,
                role: formRole
            };
        }

        try {
            const res = await fetch('/api/showcase', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(projectData),
            });

            if (!res.ok) throw new Error('Failed to save project');
            
            setSuccessMsg(isEditing ? 'Project updated successfully.' : 'Project created successfully.');
            resetForm();
            fetchProjects();
        } catch (err: any) {
            setError(err.message || 'Error saving project.');
        }
    };

    // Auto clear success/error messages
    useEffect(() => {
        if (successMsg) {
            const t = setTimeout(() => setSuccessMsg(null), 5000);
            return () => clearTimeout(t);
        }
    }, [successMsg]);

    return (
        <div className="pt-28 pb-24 min-h-screen relative font-sans">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 pb-6 border-b border-default">
                    <div>
                        <Link href="/showcase" className="inline-flex items-center gap-1 text-xs text-muted hover:text-foreground mb-3 transition-colors">
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Back to Showcase
                        </Link>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">
                            Showcase Admin Portal
                        </h1>
                        <p className="text-sm text-muted mt-1">
                            Easily CRUD (Create, Read, Update, Delete) case studies in the project database.
                        </p>
                    </div>
                    <Button onClick={resetForm} className="gap-2 self-start md:self-auto">
                        <Plus className="w-4 h-4" />
                        New Project
                    </Button>
                </div>

                {/* Notifications */}
                {successMsg && (
                    <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 flex items-center gap-2.5 text-sm animate-in fade-in">
                        <Check className="w-4 h-4 shrink-0" />
                        {successMsg}
                    </div>
                )}
                {error && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400 flex items-center gap-2.5 text-sm animate-in fade-in">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                    </div>
                )}

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    
                    {/* Projects List Panel (1/3 width) */}
                    <div className="lg:col-span-1 space-y-4">
                        <h2 className="text-lg font-semibold text-foreground flex items-center justify-between">
                            Active Showcase
                            {loading && <RefreshCw className="w-4 h-4 animate-spin text-muted" />}
                        </h2>

                        {projects.length === 0 && !loading ? (
                            <p className="text-sm text-muted">No projects found. Add one on the right.</p>
                        ) : (
                            <div className="space-y-3">
                                {projects.map((proj) => (
                                    <div 
                                        key={proj.slug} 
                                        className={`p-4 rounded-2xl border flex items-center justify-between gap-3 bg-card transition-all ${
                                            formSlug === proj.slug && isEditing
                                                ? 'border-accent shadow-md shadow-accent-glow'
                                                : 'border-default'
                                        }`}
                                    >
                                        <div className="min-w-0">
                                            <h3 className="text-sm font-semibold text-foreground truncate">
                                                {proj.title}
                                            </h3>
                                            <span className="text-[10px] font-mono text-muted uppercase tracking-wider block mt-0.5">
                                                {proj.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 shrink-0">
                                            <button 
                                                onClick={() => handleEdit(proj)}
                                                className="p-1.5 rounded-lg text-muted hover:text-accent hover:bg-accent/10 transition-colors cursor-pointer"
                                                title="Edit Project"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(proj.slug)}
                                                className="p-1.5 rounded-lg text-muted hover:text-red-500 hover:bg-red-500/10 transition-colors cursor-pointer"
                                                title="Delete Project"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Manage Form Panel (2/3 width) */}
                    <div className="lg:col-span-2 bg-card border border-default p-8 rounded-3xl">
                        <h2 className="text-xl font-semibold text-foreground mb-6">
                            {isEditing ? `Edit: ${formTitle}` : 'Create Case Study'}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Grid fields */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Project Title *
                                    </label>
                                    <input 
                                        type="text" 
                                        value={formTitle}
                                        onChange={(e) => setFormTitle(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none"
                                        placeholder="e.g. Lele Delivery App"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Subtitle / Caption *
                                    </label>
                                    <input 
                                        type="text" 
                                        value={formSubtitle}
                                        onChange={(e) => setFormSubtitle(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none"
                                        placeholder="e.g. Food Delivery App"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Category *
                                    </label>
                                    <select 
                                        value={formCategory}
                                        onChange={(e) => setFormCategory(e.target.value as any)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none"
                                    >
                                        <option value="Mobile App">Mobile App</option>
                                        <option value="Web App">Web App</option>
                                        <option value="Software System">Software System</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Logo Image URL *
                                    </label>
                                    <input 
                                        type="text" 
                                        value={formLogoUrl}
                                        onChange={(e) => setFormLogoUrl(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none"
                                        placeholder="e.g. /images/logo.png"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div>
                                <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                    Short Description (Listing card) *
                                </label>
                                <textarea 
                                    rows={2}
                                    value={formShortDesc}
                                    onChange={(e) => setFormShortDesc(e.target.value)}
                                    className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none font-sans"
                                    placeholder="Brief summary..."
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                    Long Description (Overview) *
                                </label>
                                <textarea 
                                    rows={4}
                                    value={formLongDesc}
                                    onChange={(e) => setFormLongDesc(e.target.value)}
                                    className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none font-sans"
                                    placeholder="Detailed overview about scope, target market..."
                                    required
                                />
                            </div>

                            {/* Tech Stack & Features */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Tech Stack (Comma-separated)
                                    </label>
                                    <input 
                                        type="text" 
                                        value={formTechStack}
                                        onChange={(e) => setFormTechStack(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none"
                                        placeholder="Kotlin, React, Firebase"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Features (1 per line)
                                    </label>
                                    <textarea 
                                        rows={2}
                                        value={formFeatures}
                                        onChange={(e) => setFormFeatures(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none font-sans"
                                        placeholder="Feature 1&#10;Feature 2"
                                    />
                                </div>
                            </div>

                            {/* Links */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Play Store Link
                                    </label>
                                    <input 
                                        type="url" 
                                        value={formPlaystoreUrl}
                                        onChange={(e) => setFormPlaystoreUrl(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none"
                                        placeholder="https://play.google.com/..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Web URL
                                    </label>
                                    <input 
                                        type="url" 
                                        value={formWebUrl}
                                        onChange={(e) => setFormWebUrl(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none"
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>

                            {/* Challenge / Solution / Results */}
                            <div className="space-y-4 border-t border-default pt-6">
                                <h3 className="text-sm font-bold uppercase text-foreground">
                                    Case Study Detailed Story
                                </h3>
                                
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        The Challenge *
                                    </label>
                                    <textarea 
                                        rows={3}
                                        value={formChallenge}
                                        onChange={(e) => setFormChallenge(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none font-sans"
                                        placeholder="What were the blockages or problems faced?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Our Solution *
                                    </label>
                                    <textarea 
                                        rows={3}
                                        value={formSolution}
                                        onChange={(e) => setFormSolution(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none font-sans"
                                        placeholder="How did we address it?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Results & Outcome *
                                    </label>
                                    <textarea 
                                        rows={3}
                                        value={formResults}
                                        onChange={(e) => setFormResults(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none font-sans"
                                        placeholder="Metrics, performance boosts, launch successes..."
                                        required
                                    />
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div className="space-y-4 border-t border-default pt-6">
                                <h3 className="text-sm font-bold uppercase text-foreground">
                                    Client Testimonial (Optional)
                                </h3>
                                
                                <div>
                                    <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                        Quote
                                    </label>
                                    <textarea 
                                        rows={2}
                                        value={formQuote}
                                        onChange={(e) => setFormQuote(e.target.value)}
                                        className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none font-sans"
                                        placeholder="Quote quote..."
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                            Author Name
                                        </label>
                                        <input 
                                            type="text" 
                                            value={formAuthor}
                                            onChange={(e) => setFormAuthor(e.target.value)}
                                            className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none"
                                            placeholder="e.g. John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-muted uppercase mb-1.5">
                                            Author Role
                                        </label>
                                        <input 
                                            type="text" 
                                            value={formRole}
                                            onChange={(e) => setFormRole(e.target.value)}
                                            className="w-full bg-default border border-default p-2.5 rounded-xl text-sm focus:border-accent focus:outline-none"
                                            placeholder="e.g. CEO, Founder"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="flex items-center gap-3 pt-6 border-t border-default justify-end">
                                {isEditing && (
                                    <Button type="button" variant="outline" onClick={resetForm}>
                                        Cancel Edit
                                    </Button>
                                )}
                                <Button type="submit">
                                    {isEditing ? 'Save Changes' : 'Create Case Study'}
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
