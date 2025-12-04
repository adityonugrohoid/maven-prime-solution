# Maven Prime Solution - AI-Enhanced Interior Design Portfolio

A modern, production-ready portfolio website showcasing AI-powered interior design services. Built for Maven Prime Solution, an interior design studio based in Surabaya, Indonesia.


## Project Overview

This project demonstrates advanced web development capabilities through the integration of Google Gemini AI for intelligent prompt enhancement and real-time image generation. The application serves as both a marketing platform and an interactive showcase of AI-assisted design workflows.

**Client:** Maven Prime Solution  
**Developer:** Adityo Nugroho  
**Live Demo:** [View on Vercel](https://maven-prime-solution.vercel.app/)


## Key Features

### AI Design Agent
An intelligent chat assistant powered by Google Gemini 2.5 Flash Lite that provides:
- Contextual interior design consultations
- Real-time prompt enhancement for better image generation
- Dual-format output generating both sketch and photorealistic renders
- Smart conversation flow with quick-reply suggestions

### Interactive Sketch-to-Render Playground
A dedicated workspace where users can:
- Input natural language descriptions of interior spaces
- Receive AI-enhanced, professional-grade prompts
- Preview both conceptual sketches and photorealistic renders side-by-side
- See how AI interprets and improves their creative vision

### Responsive Modern UI
- Dark and gold premium color scheme
- Fully responsive design optimized for mobile and desktop
- Smooth animations and transitions
- Performance-optimized with minimal dependencies


## Technical Architecture

### Frontend Stack
- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first styling via CDN
- **Alpine.js** - Lightweight reactive framework
- **Vanilla JavaScript** - Core application logic

### Backend Services
- **Vercel Serverless Functions** - Secure API key management
- **Google Gemini API** (gemini-2.5-flash-lite) - Prompt enhancement
- **Pollinations.ai** - Image generation service

### Security Implementation
- API keys stored securely in Vercel environment variables
- Serverless function proxy prevents client-side key exposure
- CORS properly configured for secure cross-origin requests


## Project Structure

```
maven-prime-solution/
├── api/
│   └── enhance.js          # Serverless function for Gemini API calls
├── assets/                 # Images and static resources
├── css/
│   └── styles.css          # Custom styles and animations
├── js/
│   └── app.js              # Alpine.js application logic
├── index.html              # Main application entry point
├── vercel.json             # Vercel deployment configuration
├── robots.txt              # SEO configuration
├── sitemap.xml             # SEO sitemap
└── README.md               # Project documentation
```


## Deployment

### Prerequisites
- Node.js (for local development)
- Vercel account (free tier)
- Google Gemini API key

### Vercel Deployment Steps

1. **Fork or Clone Repository**
   ```bash
   git clone https://github.com/your-username/maven-prime-solution.git
   cd maven-prime-solution
   ```

2. **Install Vercel CLI** (optional for local testing)
   ```bash
   npm install -g vercel
   ```

3. **Deploy to Vercel**
   - Import project in Vercel dashboard
   - Connect your GitHub repository
   - Configure environment variable: `GEMINI_API_KEY=your_api_key_here`
   - Deploy automatically on every push to main branch

### Local Development

```bash
# Install dependencies
npm install

# Set up environment variable
# Create .env file with: GEMINI_API_KEY=your_key

# Run Vercel development server
vercel dev
```


## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key for prompt enhancement | Yes |


## API Endpoints

### POST /api/enhance
Enhances user-provided prompts using Google Gemini AI.

**Request Body:**
```json
{
  "prompt": "modern living room"
}
```

**Response:**
```json
{
  "enhancedPrompt": "A contemporary living room featuring sleek furniture..."
}
```


## Performance Optimization

- CDN-hosted libraries for faster load times
- Lazy loading for images
- Minimal JavaScript bundle size
- Serverless architecture for scalability


## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Credits

**Developer & AI Architect:** Adityo Nugroho  
**Client:** Maven Prime Solution  
**AI Services:** Google Gemini 2.5 Flash Lite, Pollinations.ai  
**Assets:** Unsplash (placeholder images), Heroicons (SVG icons)


## License

This project is proprietary software developed for Maven Prime Solution.


## Contact

For inquiries about this project or collaboration opportunities:

- **Developer**: Adityo Nugroho  
- **Email**: adityo.nugroho.id@gmail.com  
- **GitHub**: https://github.com/adityonugrohoid  
- **LinkedIn**: https://linkedin.com/in/adityonugrohoid
