// Vercel Serverless Function - Prompt Enhancement
// This keeps your API key secure on the server

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request for CORS
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt } = req.body;

    // Validate input
    if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: 'Invalid prompt' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error('GEMINI_API_KEY environment variable not set');
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Enhance this interior design prompt for image generation. Make it more detailed and vivid, but keep it concise (max 50 words): "${prompt}"`
                        }]
                    }]
                })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API error:', response.status, errorText);
            return res.status(500).json({
                error: 'Gemini API error',
                details: errorText.substring(0, 200)
            });
        }

        const data = await response.json();

        if (data.candidates && data.candidates[0]) {
            let enhancedPrompt = data.candidates[0].content.parts[0].text;

            // Clean up markdown formatting
            enhancedPrompt = enhancedPrompt
                .replace(/\*\*Prompt:\*\*\s*/gi, '')
                .replace(/\*\*/g, '')
                .replace(/^["']|["']$/g, '')
                .trim();

            return res.status(200).json({ enhancedPrompt });
        }

        console.error('No candidates in Gemini response:', JSON.stringify(data));
        return res.status(500).json({ error: 'No response from Gemini' });
    } catch (error) {
        console.error('Enhancement failed:', error.message);
        return res.status(500).json({
            error: 'Enhancement failed',
            details: error.message
        });
    }
}
