const scriptUrl = 'https://script.google.com/macros/s/AKfycbwu5hIAnKx_E-m9KF1hH9naz8-syaqoL_wV-FEbrVGPzzb8IM9lLq_QAr3NE_1H0G0W/exec';

async function testFetch() {
    console.log('Sending JSON to Google Apps Script...');
    const payload = {
        Name: 'Test Name',
        Email: 'test@test.com',
        PhoneNumber: '9999999999',
        Message: 'Test Message from Node'
    };

    try {
        const res = await fetch(scriptUrl, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            redirect: 'follow', // Follow the 302 hop
        });

        console.log('Status:', res.status, res.statusText);
        const text = await res.text();
        console.log('Text length:', text.length);
        console.log('First 200 chars:', text.substring(0, 200));

        try {
            const json = JSON.parse(text);
            console.log('Parsed JSON successfully:', json);
        } catch (e) {
            console.error('Failed to parse JSON.');
        }

    } catch (err) {
        console.error('Fetch threw an error:', err);
    }
}

testFetch();
