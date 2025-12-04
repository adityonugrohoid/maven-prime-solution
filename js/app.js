document.addEventListener('alpine:init', () => {
    Alpine.data('designAgent', () => ({
        isOpen: false,
        isLoading: false,
        apiKey: 'AIzaSyCcJ5djo-PHzNQanb5QOJU4nOkgT21APTY', // User to replace this
        userInput: '',
        messages: [
            {
                role: 'agent',
                type: 'text',
                content: 'Hello! I\'m your AI Design Assistant. Tell me about your dream space (e.g., "modern minimalist living room in Surabaya"), and I\'ll generate a sketch and a realistic render for you.'
            }
        ],

        toggleChat() {
            this.isOpen = !this.isOpen;
        },

        async sendMessage() {
            if (!this.userInput.trim()) return;

            const prompt = this.userInput;
            this.addMessage('user', 'text', prompt);
            this.userInput = '';
            this.isLoading = true;

            try {
                // Step 1: Generate Sketch
                await this.generateImage(prompt, 'sketch');

                // Step 2: Generate Photorealistic Render
                await this.generateImage(prompt, 'photorealistic');

            } catch (error) {
                console.error('Generation failed:', error);
                this.addMessage('agent', 'text', 'Sorry, I encountered an error generating your design. Please check your API key and try again.');
            } finally {
                this.isLoading = false;
            }
        },

        addMessage(role, type, content) {
            this.messages.push({ role, type, content });
            // Scroll to bottom
            this.$nextTick(() => {
                const chatBody = document.getElementById('chat-body');
                if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
            });
        },

        async generateImage(prompt, style) {
            const imagePrompt = style === 'sketch'
                ? `A simple black and white architectural line sketch of ${prompt}, white background, high contrast`
                : `A photorealistic 8k architectural render of ${prompt}, interior design, cinematic lighting, highly detailed`;

            try {
                // PRODUCTION MODE: Call Google Gemini API
                // Using the model requested: gemini-2.0-flash-exp
                // Note: If this model returns text instead of images, we might need to parse it or use a specific image model.
                // For this implementation, we'll attempt to generate content and handle the response.

                const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${this.apiKey}`;

                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: `Generate an image of: ${imagePrompt}` }]
                        }],
                        // Add generation config if needed for specific image output formats
                        generationConfig: {
                            temperature: 0.4,
                        }
                    })
                });

                if (!response.ok) {
                    throw new Error(`API Error: ${response.statusText}`);
                }

                const data = await response.json();

                // Check if we got a valid response
                // Note: Gemini 2.0 Flash returns text by default. If it returns an image, it would be in inlineData.
                // If the model refuses or returns text, we'll display the text.

                const candidate = data.candidates?.[0]?.content?.parts?.[0];

                if (candidate?.inlineData) {
                    // Image response
                    const imageUrl = `data:${candidate.inlineData.mimeType};base64,${candidate.inlineData.data}`;
                    this.addMessage('agent', 'image', imageUrl);
                    this.addMessage('agent', 'text', `Here is the ${style} version.`);
                } else if (candidate?.text) {
                    // Text response (fallback if model describes image instead of generating it)
                    // In a real production app with a dedicated Image model, this wouldn't happen.
                    // For now, if we get text, we'll show it, but we'll ALSO trigger the fallback generator 
                    // so the user sees an image (Hybrid approach for Portfolio robustness).

                    console.log('Model returned text:', candidate.text);

                    // Fallback to Pollinations for the visual (since we want to show off the UI)
                    // This ensures the "Portfolio" aspect remains impressive even if the specific API model is text-only.
                    const encodedPrompt = encodeURIComponent(imagePrompt);
                    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${style === 'sketch' ? 512 : 1024}&height=${style === 'sketch' ? 512 : 1024}&nologo=true`;

                    this.addMessage('agent', 'image', imageUrl);
                    this.addMessage('agent', 'text', `(Generated via fallback): Here is the ${style} version.`);
                } else {
                    throw new Error('No valid content in response');
                }

            } catch (error) {
                console.error('Gemini API failed, using fallback:', error);
                // Fallback to Pollinations.ai so the user experience doesn't break
                const encodedPrompt = encodeURIComponent(imagePrompt);
                const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${style === 'sketch' ? 512 : 1024}&height=${style === 'sketch' ? 512 : 1024}&nologo=true`;

                this.addMessage('agent', 'image', imageUrl);
                this.addMessage('agent', 'text', `(Offline/Fallback): Here is the ${style} version.`);
            }
        }
    }));
});
