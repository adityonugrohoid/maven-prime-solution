<div align="center">

# Maven Prime Solution

[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CDN-38bdf8.svg)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-lightgrey.svg)](#license)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black.svg)](https://maven-prime-solution.vercel.app/)

**Portfolio website for Maven Prime Solution, an interior design studio based in Surabaya**

[Getting Started](#getting-started) | [Usage](#usage) | [Demo](#demo)

</div>

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Architectural Decisions](#architectural-decisions)
- [Project Structure](#project-structure)
- [License](#license)
- [Author](#author)

## Features

- **Portfolio gallery** - 16 3D renders across four space categories: living rooms, bedrooms, bathrooms, and outdoor spaces
- **Lightbox viewer** - click-to-zoom image viewer with keyboard-dismissible overlay, powered by Alpine.js
- **Services showcase** - dedicated cards for 3D Rendering, Commercial Spaces, and Residential Design with hero imagery
- **Responsive dark/gold UI** - premium color scheme optimized for mobile and desktop with smooth CSS transitions
- **SEO ready** - `robots.txt` and `sitemap.xml` included; clean URLs via Vercel config

## Tech Stack

| Component | Technology |
|-----------|------------|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN), custom `css/styles.css` |
| Interactivity | Alpine.js (CDN), vanilla JS (`js/app.js`) |
| Hosting | Vercel (static, auto-deploy from `main`) |

## Demo

Live site: [maven-prime-solution.vercel.app](https://maven-prime-solution.vercel.app/)

**Client:** Maven Prime Solution, Surabaya, Indonesia

## Getting Started

### Prerequisites

- A modern browser (Chrome, Firefox, Safari, or Edge)
- No build tools, package managers, or environment variables required

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adityonugrohoid/maven-prime-solution.git
   cd maven-prime-solution
   ```

2. Open locally in a browser:
   ```bash
   # Option A: direct file open
   open index.html

   # Option B: local HTTP server (avoids any file:// quirks)
   python -m http.server 8000
   # then visit http://localhost:8000
   ```

## Usage

The site is a fully static deliverable. No runtime commands are needed.

- Visit [maven-prime-solution.vercel.app](https://maven-prime-solution.vercel.app/) for the live version
- Click any render image to open the lightbox viewer; press Escape or click outside to close
- The mobile hamburger menu collapses the navigation on small viewports

To update portfolio images, replace files under `assets/render_works/` following the existing naming convention (`render_<space>_<nn>.png`) and push to `main`. Vercel redeploys automatically.

## Architectural Decisions

### 1. Vanilla HTML + Tailwind CDN over a JavaScript framework

**Decision:** Use plain HTML with Tailwind CSS and Alpine.js loaded from CDN instead of a React/Vue/Next.js scaffold.

**Reasoning:** The deliverable is a client portfolio with a fixed content set and no dynamic data requirements. A JS framework would add a build pipeline, node_modules, and deployment complexity with zero benefit for the use case. CDN delivery of Tailwind and Alpine.js keeps the repo a single `index.html` with no local tooling and immediate Vercel deployability.

### 2. Alpine.js for lightbox and mobile menu state

**Decision:** Use Alpine.js (`x-data`, `x-show`, `@click`) rather than vanilla JS class toggles.

**Reasoning:** The lightbox and mobile menu are the only interactive components. Alpine.js handles this reactive state in ~25 lines (`js/app.js`) without a bundler, staying consistent with the CDN-only approach.

## Project Structure

```
maven-prime-solution/
├── assets/
│   ├── render_works/           # 16 portfolio renders + 3 service hero images
│   │   ├── hero_*.png/jpg      # Service section hero images
│   │   └── render_*.png        # Portfolio gallery images
│   ├── logo.png
│   ├── favicon.png
│   └── apple-touch-icon.png
├── css/
│   └── styles.css              # Custom animations and color overrides
├── js/
│   └── app.js                  # Alpine.js data (lightbox + mobile menu state)
├── index.html                  # Single-page entry point
├── vercel.json                 # Clean URLs, no trailing slash
├── robots.txt
└── sitemap.xml
```

## License

Proprietary - all rights reserved. Developed exclusively for Maven Prime Solution. Assets (render images) are property of Maven Prime Solution.

## Author

**Adityo Nugroho** ([@adityonugrohoid](https://github.com/adityonugrohoid))
