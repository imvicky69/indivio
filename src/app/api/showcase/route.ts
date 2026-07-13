import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { showcaseProjects as initialProjects } from '@/data/showcase';

export const dynamic = 'force-static';

const dataFilePath = path.join(process.cwd(), 'src/data/showcase.json');

// Helper to read database file, creating it if it doesn't exist
async function readProjects() {
    try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        // If file doesn't exist, create it with initial projects
        await fs.writeFile(dataFilePath, JSON.stringify(initialProjects, null, 4), 'utf-8');
        return initialProjects;
    }
}

// Helper to write database file
async function writeProjects(projects: any[]) {
    await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 4), 'utf-8');
}

export async function GET() {
    try {
        const projects = await readProjects();
        return NextResponse.json(projects);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const projectData = await request.json();
        if (!projectData.slug || !projectData.title) {
            return NextResponse.json({ error: 'Slug and Title are required.' }, { status: 400 });
        }

        const projects = await readProjects();
        const existingIndex = projects.findIndex((p: any) => p.slug === projectData.slug);

        if (existingIndex > -1) {
            // Update existing project
            projects[existingIndex] = { ...projects[existingIndex], ...projectData };
        } else {
            // Create new project
            projects.push(projectData);
        }

        await writeProjects(projects);
        return NextResponse.json({ success: true, project: projectData });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const slug = searchParams.get('slug');
        if (!slug) {
            return NextResponse.json({ error: 'Slug parameter is required.' }, { status: 400 });
        }

        const projects = await readProjects();
        const updatedProjects = projects.filter((p: any) => p.slug !== slug);

        await writeProjects(updatedProjects);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
