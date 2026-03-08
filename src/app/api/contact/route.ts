import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

        if (!scriptUrl) {
            console.error('GOOGLE_SCRIPT_URL not set in .env.local');
            return NextResponse.json({ result: 'error', message: 'Endpoint not configured' }, { status: 500 });
        }

        console.log('--- API CONTACT DEBUG ---');
        console.log('Sending JSON to Google Apps Script...');

        // Use redirect: 'follow' so node handles the 302 location hop automatically.
        const res = await fetch(scriptUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            // The Next.js server acts as the client, avoiding browser CORS preflight blocks.
            // Google Apps script requires text/plain for POSTs avoiding Preflight OPTIONS requests 
            // even if the payload is JSON stringified.
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            redirect: 'follow',
        });

        console.log('Got response back. Status:', res.status, res.statusText);

        const text = await res.text();
        console.log('Raw response text:', text.substring(0, 100));

        try {
            const json = JSON.parse(text);

            // If google apps script returns its own error JSON (e.g. {status: "error"})
            if (json.status === 'error') {
                console.error("Google script returned error JSON:", json);
                return NextResponse.json(json, { status: 500 });
            }

            return NextResponse.json(json);
        } catch (parseError) {
            console.log('Failed to parse JSON, falling back. OK status?', res.ok);
            if (res.ok) {
                return NextResponse.json({ result: 'success', message: 'Email sent!' });
            }
            console.error('Returning 500 because it was not OK and not JSON');
            return NextResponse.json({ result: 'error', message: 'Unexpected response format' }, { status: 500 });
        }

    } catch (err) {
        console.error('Contact API error:', err);
        return NextResponse.json({ result: 'error', message: 'Failed to send message' }, { status: 500 });
    }
}
