document.addEventListener('alpine:init', () => {
    Alpine.data('designAgent', () => ({
        // UI State
        mobileMenuOpen: false,

        // Chat Bubble State
        isOpen: false,
        isLoading: false,
        userInput: '',
        messages: [
            {
                role: 'agent',
                type: 'text',
                content: 'Hello! I\'m your AI Design Assistant. Describe your dream space and I\'ll create designs for you.'
            }
        ],

        // Playground State
        playgroundInput: '',
        playgroundLoading: false,
        playgroundSketch: null,
        playgroundRender: null,
        playgroundEnhancedPrompt: null,

        toggleChat() {
            this.isOpen = !this.isOpen;
        },

        // Chat bubble message handler
        async sendMessage() {
            if (!this.userInput.trim()) return;

            const prompt = this.userInput;
            this.addMessage('user', 'text', prompt);
            this.userInput = '';
            this.isLoading = true;

            try {
                // Enhance prompt with Gemini
                const enhancedPrompt = await this.enhancePromptWithGemini(prompt);

                // Show enhanced prompt if it was actually enhanced
                if (enhancedPrompt !== prompt) {
                    this.addMessage('agent', 'text', `✨ Enhanced: "${enhancedPrompt}"`);
                }

                // Generate images with enhanced prompt
                await this.generateImage(enhancedPrompt, 'sketch');
                await this.generateImage(enhancedPrompt, 'photorealistic');
            } catch (error) {
                console.error('Generation failed:', error);
                this.addMessage('agent', 'text', 'Sorry, I encountered an error generating your design. Please check your API key and try again.');
            } finally {
                this.isLoading = false;
            }
        },

        // Playground generation handler
        async generatePlaygroundDesign() {
            if (!this.playgroundInput.trim()) return;

            const prompt = this.playgroundInput;
            this.playgroundLoading = true;
            this.playgroundSketch = null;
            this.playgroundRender = null;
            this.playgroundEnhancedPrompt = null;

            try {
                // Enhance prompt with Gemini
                const enhancedPrompt = await this.enhancePromptWithGemini(prompt);
                this.playgroundEnhancedPrompt = enhancedPrompt;

                // Generate sketch with enhanced prompt
                const sketchUrl = await this.generateImageUrl(enhancedPrompt, 'sketch');
                this.playgroundSketch = sketchUrl;

                // Generate render with enhanced prompt
                const renderUrl = await this.generateImageUrl(enhancedPrompt, 'photorealistic');
                this.playgroundRender = renderUrl;
            } catch (error) {
                console.error('Playground generation failed:', error);
                alert('Sorry, image generation failed. Please try again.');
            } finally {
                this.playgroundLoading = false;
            }
        },

        // Enhance prompt using Vercel serverless function (secure)
        async enhancePromptWithGemini(prompt) {
            try {
                console.log('🤖 Using Gemini to enhance prompt...');

                // Call Vercel serverless function instead of direct API call
                const response = await fetch('/api/enhance', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt })
                });

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                const data = await response.json();

                if (data.enhancedPrompt) {
                    console.log('✨ Enhanced prompt:', data.enhancedPrompt);
                    return data.enhancedPrompt;
                }

                throw new Error('No enhanced prompt in response');
            } catch (error) {
                console.log('⚠️ Prompt enhancement failed, using original:', error);
                return prompt;
            }
        },

        // Generate image using Pollinations.ai (free, no rate limits)
        async generateImageUrl(prompt, style) {
            const imagePrompt = style === 'sketch'
                ? `A simple black and white architectural line sketch of ${prompt}, white background, high contrast, minimal details`
                : `A photorealistic 8k architectural render of ${prompt}, interior design, cinematic lighting, highly detailed, professional photography`;

            console.log(`🎨 Generating ${style} with Pollinations.ai...`);

            // Small delay for better UX
            await new Promise(resolve => setTimeout(resolve, 1000));

            const encodedPrompt = encodeURIComponent(imagePrompt);
            return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${style === 'sketch' ? 512 : 1024}&height=${style === 'sketch' ? 512 : 1024}&nologo=true`;
        },

        // Generate image for chat (adds to messages)
        async generateImage(prompt, style) {
            const imageUrl = await this.generateImageUrl(prompt, style);
            this.addMessage('agent', 'image', imageUrl);
            this.addMessage('agent', 'text', `Here is the ${style} version.`);
        },

        addMessage(role, type, content) {
            this.messages.push({ role, type, content });
            this.$nextTick(() => {
                const chatBody = document.getElementById('chat-body');
                if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
            });
        }
    }));
});
