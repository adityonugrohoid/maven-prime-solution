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
├── _redirects          # Netlify configuration
├── robots.txt          # SEO configuration
├── sitemap.xml         # SEO configuration
└── README.md           # This file
```

## Setup & Deployment

### Local Development
1. Clone the repository or download the ZIP.
2. Open `index.html` in your browser.
3. For the best experience, use a local server (e.g., Live Server in VS Code).

### Netlify Deployment
1. Drag and drop the `maven-prime-solution` folder into Netlify Drop.
2. The `_redirects` file ensures clean URLs.
3. Netlify Forms are automatically detected from the `data-netlify="true"` attribute in the contact form.

## AI Agent Configuration

The AI Agent is located in `js/app.js`. 

- **Demo Mode**: By default, it uses a placeholder logic to demonstrate functionality without an API key.
- **Production Mode**:
    1. Open `js/app.js`.
    2. Replace `'YOUR_GEMINI_API_KEY'` with your actual Google Gemini API key.
    3. Uncomment the API call logic to switch from the demo provider to direct Gemini/Imagen API calls.

## Credits

- **Design & Code**: Built by Antigravity (Google DeepMind).
- **Images**: Unsplash (Placeholders).
- **Icons**: Heroicons (SVG).
