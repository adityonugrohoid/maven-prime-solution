# Maven Prime Solution - AI-Powered Interior Design Portfolio

Welcome to the repository for **Maven Prime Solution's** official website. This project was developed by **Adityo Nugroho** as a comprehensive portfolio showcase, demonstrating advanced web development capabilities including a custom **AI Design Agent** and an interactive **Sketch-to-Render Playground**.

**Client**: Maven Prime Solution (Interior Design Studio, Surabaya)
**Developer**: Adityo Nugroho

## 🚀 Key Features

### 1. **AI Design Agent (Chat)**
A floating AI assistant powered by **Google Gemini 2.0 Flash** that helps visitors brainstorm design ideas.
- **Contextual Understanding**: Discusses interior styles, color palettes, and layouts.
- **Image Generation**: Generates conceptual sketches and photorealistic renders directly in the chat.
- **Smart Suggestions**: Offers quick reply chips to guide the conversation.

### 2. **AI Sketch-to-Render Playground**
An interactive section where users can describe their dream space and instantly visualize it.
- **Dual Output**: Generates a **conceptual sketch** (line art) and a **photorealistic render** side-by-side.
- **AI Prompt Enhancement**: Uses Google Gemini to automatically refine and expand user prompts for better image results.
- **Visual Feedback**: Displays the enhanced prompt to show users how AI interprets their ideas.

### 3. **Modern & Responsive UI**
- **Dark & Gold Theme**: A premium, elegant aesthetic reflecting luxury design.
- **Masonry Gallery**: A dynamic, responsive grid layout for showcasing portfolio projects.
- **Performance Optimized**: Built with lightweight Alpine.js and Tailwind CSS (via CDN) for fast load times.

## 🛠️ Tech Stack

- **Frontend**: HTML5, Tailwind CSS (CDN), Alpine.js
- **AI Integration**: 
  - **Google Gemini API** (Text & Prompt Enhancement)
  - **Pollinations.ai** (Image Generation)
- **Deployment**: GitHub Pages (Automated via GitHub Actions)

## 📂 Project Structure

```
maven-prime-solution/
├── assets/             # Images and icons
├── css/
│   └── styles.css      # Custom styles and animations
├── js/
│   └── app.js          # Application logic (AI Agent + Playground)
├── index.html          # Main entry point
├── .github/workflows/  # GitHub Actions for Pages
├── robots.txt          # SEO configuration
├── sitemap.xml         # SEO configuration
└── README.md           # This file
```

## 🚀 Setup & Deployment

### Local Development
1. Clone the repository.
2. Open `index.html` in your browser.
3. For the best experience, use a local server (e.g., Live Server in VS Code).

### GitHub Pages Deployment
1. Push the code to a GitHub repository.
2. Go to **Settings > Secrets and variables > Actions**.
3. Create a new repository secret named `GEMINI_API_KEY` with your Google Gemini API key.
4. The included GitHub Action (`.github/workflows/deploy.yml`) will automatically build and deploy the site to GitHub Pages on every push to `main`.
5. **Note**: Sign up for [Formspree](https://formspree.io/) and replace `YOUR_FORMSPREE_ID` in `index.html` to enable the contact form.

## 🤖 AI Configuration

The AI logic is centralized in `js/app.js`.

- **Prompt Enhancement**: The system uses Gemini to rewrite simple user inputs (e.g., "living room") into detailed, descriptive prompts for better image generation.
- **Security**: The API key is injected securely during the build process via GitHub Secrets. Never commit your real API key to the repository.

## 👥 Credits

- **Developer & AI Architect**: Adityo Nugroho
- **Client**: Maven Prime Solution
- **AI Architecture & Development**: Antigravity (Google DeepMind)
- **AI Models**: Google Gemini 2.0 Flash, Pollinations.ai
- **Assets**: Unsplash (Images), Heroicons (Icons)
