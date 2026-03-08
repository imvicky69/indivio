import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

        if (!scriptUrl) {
            console.error('GOOGLE_SCRIPT_URL not set in .env.local');
            return NextResponse.json({ result: 'error', message: 'Endpoint not configured' }, { status: 500 });
        }

        // Google Apps Script redirects POST → GET on a new URL.
        // We disable auto-redirect and manually follow with GET to get the JSON response.
        const res = await fetch(scriptUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            redirect: 'manual',
        });

        // Google Script returns 302 redirect — follow it with GET
        if (res.status === 302 || res.status === 301) {
            const redirectUrl = res.headers.get('location');
            if (redirectUrl) {
                const redirectRes = await fetch(redirectUrl);
                const text = await redirectRes.text();

                try {
                    return NextResponse.json(JSON.parse(text));
                } catch {
                    // Script ran but returned non-JSON — treat as success
                    return NextResponse.json({ result: 'success', message: 'Email sent!' });
                }
            }
        }

        // If no redirect (direct response), try to parse
        const text = await res.text();

        try {
            return NextResponse.json(JSON.parse(text));
        } catch {
            if (res.ok) {
                return NextResponse.json({ result: 'success', message: 'Email sent!' });
            }
            return NextResponse.json({ result: 'error', message: 'Unexpected response' }, { status: 500 });
        }
    } catch (err) {
        console.error('Contact API error:', err);
        return NextResponse.json({ result: 'error', message: 'Failed to send message' }, { status: 500 });
    }
}
