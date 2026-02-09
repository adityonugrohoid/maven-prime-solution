# Maven Prime Solution - Interior Design Portfolio

A modern, production-ready portfolio website showcasing premium interior design services and 3D render projects. Built for Maven Prime Solution, an interior design studio based in Surabaya, Indonesia.


## Project Overview

This project is a professional portfolio website that showcases Maven Prime Solution's interior design expertise through a curated gallery of 3D render projects. The application features a clean, modern interface with a premium dark and gold color scheme, highlighting the studio's work across different space types.

**Client:** Maven Prime Solution  
**Developer:** Adityo Nugroho  
**Live Demo:** [View on Vercel](https://maven-prime-solution.vercel.app/)


## Key Features

### Portfolio Showcase
- Curated gallery of 3D render projects organized by space type
- Four categories: Living Rooms, Bedrooms, Bathrooms, and Outdoor Spaces
- Lightbox image viewer with zoom functionality
- Descriptive render terms for each project (Modern, Minimalist, Luxury, Cozy, etc.)

### Services Section
- Highlighted 3D Rendering service with hero image
- Commercial Spaces and Residential Design services
- Visual service cards with hero images

### Responsive Modern UI
- Dark and gold premium color scheme
- Fully responsive design optimized for mobile and desktop
- Smooth animations and transitions
- Performance-optimized with minimal dependencies
- Interactive lightbox for image viewing


## Technical Architecture

### Frontend Stack
- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first styling via CDN
- **Alpine.js** - Lightweight reactive framework
- **Vanilla JavaScript** - Core application logic

### Static Site Architecture
- Pure static HTML/CSS/JavaScript
- No backend services or API dependencies
- Fast loading times with CDN delivery


## Project Structure

```
maven-prime-solution/
├── assets/
│   ├── render_works/       # Portfolio render images
│   │   ├── hero_*.jpg/png  # Service hero images
│   │   └── render_*.png    # Portfolio render images
│   ├── favicon.png
│   └── apple-touch-icon.png
├── css/
│   └── styles.css          # Custom styles and animations
├── js/
│   └── app.js              # Alpine.js application logic (lightbox, mobile menu)
├── index.html              # Main application entry point
├── vercel.json             # Vercel deployment configuration
├── robots.txt              # SEO configuration
├── sitemap.xml             # SEO sitemap
└── README.md               # Project documentation
```


## Deployment

### Prerequisites
- Vercel account (free tier) or any static hosting service

### Vercel Deployment Steps

1. **Fork or Clone Repository**
   ```bash
   git clone https://github.com/your-username/maven-prime-solution.git
   cd maven-prime-solution
   ```

2. **Deploy to Vercel**
   - Import project in Vercel dashboard
   - Connect your GitHub repository
   - Deploy automatically on every push to main branch
   - No environment variables or configuration needed

The `vercel.json` configuration includes:
- Clean URLs (no .html extension)
- Trailing slash handling

### Alternative Hosting Options

This is a pure static site and can be deployed to:
- **Vercel** (recommended)
- **GitHub Pages**
- **Netlify**
- **Cloudflare Pages**
- Any static hosting service

### Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```




## Performance Optimization

- CDN-hosted libraries (Tailwind CSS, Alpine.js) for faster load times
- Lazy loading for all portfolio images
- Minimal JavaScript bundle size
- Optimized image assets
- Static site generation for fast page loads


## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Credits

**Developer:** Adityo Nugroho  
**Client:** Maven Prime Solution  
**Assets:** All render images are property of Maven Prime Solution


## License

This project is proprietary software developed for Maven Prime Solution.


## Contact

For inquiries about this project or collaboration opportunities:

- **Developer**: Adityo Nugroho  
- **Email**: adityo.nugroho.id@gmail.com  
- **GitHub**: https://github.com/adityonugrohoid  
- **LinkedIn**: https://linkedin.com/in/adityonugrohoid
