# Maven Prime Solution - Portfolio Website

A production-ready portfolio website for **Maven Prime Solution**, an interior design studio in Surabaya, Indonesia. Built with HTML5, Tailwind CSS, and Alpine.js.

## Features

- **Modern Minimalist Design**: Soft beige and teal color palette (`#F4F1DE`, `#2A9D8F`).
- **Fully Responsive**: Mobile-first approach using Tailwind CSS.
- **AI Design Agent**: Integrated floating chat bubble powered by Google Gemini (simulated/ready for API key) that generates architectural sketches and photorealistic renders.
- **SEO Optimized**:
    - Meta tags for social media (Open Graph, Twitter Cards).
    - JSON-LD LocalBusiness Schema for rich search results.
    - Semantic HTML5 structure.
- **Performance**:
    - Lazy loading for images.
    - Minimal dependencies (Alpine.js + Tailwind CDN).
    - No build step required.

## Project Structure

```
maven-prime-solution/
├── assets/             # Images and icons
├── css/
│   └── styles.css      # Custom styles and animations
├── js/
│   └── app.js          # Application logic (Alpine.js)
├── index.html          # Main entry point
├── .github/workflows/  # GitHub Actions for Pages
├── robots.txt          # SEO configuration
├── sitemap.xml         # SEO configuration
└── README.md           # This file
```

## Setup & Deployment

### Local Development
1. Clone the repository or download the ZIP.
2. Open `index.html` in your browser.
3. For the best experience, use a local server (e.g., Live Server in VS Code).

### GitHub Pages Deployment
1. Push the code to a GitHub repository.
2. Go to **Settings > Secrets and variables > Actions**.
3. Create a new repository secret named `GEMINI_API_KEY` with your Google Gemini API key.
4. The included GitHub Action (`.github/workflows/deploy.yml`) will automatically build and deploy the site to GitHub Pages on every push to `main`.
5. **Note**: You will need to sign up for [Formspree](https://formspree.io/) and replace `YOUR_FORMSPREE_ID` in `index.html` to make the contact form work.

## AI Agent Configuration

The AI Agent is located in `js/app.js`. 

- **Production Mode**: The GitHub Action automatically injects your `GEMINI_API_KEY` secret into the code during deployment.
- **Local Development**: You can manually replace `YOUR_GEMINI_API_KEY` in `js/app.js` for testing, but **do not commit it**.

## Credits

- **Design & Code**: Built by Antigravity (Google DeepMind).
- **Images**: Unsplash (Placeholders).
- **Icons**: Heroicons (SVG).
