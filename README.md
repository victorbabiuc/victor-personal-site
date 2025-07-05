# Victor Babiuc - Personal Website

A personal website for Victor Babiuc — wannabe entrepreneur & tech enthusiast. The site is now **LIVE** with real content!

🌐 **Live Website:** [https://victorbabiuc.com](https://victorbabiuc.com)

---

## 🚦 Status
- Site is **LIVE** at [https://victorbabiuc.com](https://victorbabiuc.com)
- Blog routing issue is solved for both local development and static hosting
- Both development and production builds tested and working
- **Latest:** Custom image-based blog header with scattered text layout and subtitle, modern X (Twitter) sharing button, and underlined external link for Ruby on the homepage

---

## ✨ Features
- Responsive, clean design
- Custom image-based blog header with scattered, artistic text layout
- Subtitle: "Thoughts on tech, recruiting, travel, and adventures" (centered, single line)
- Social media links with custom SVG icons
- Modern X (Twitter) sharing button with official branding
- Underlined external link for "Ruby" (homepage)
- Fast loading, minimal dependencies
- Static export for easy deployment

---

## 🛠️ Tech Stack
- **Framework:** Next.js 15
- **Styling:** No CSS frameworks, custom CSS only
- **Icons:** Custom SVGs
- **Hosting:** Hostgator (static export)

---

## 🚀 Getting Started

Clone the repository:
```bash
git clone https://github.com/victorbabiuc/victor-personal-site.git
cd victor-personal-site
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

---

## 🏗️ Build Instructions

To generate a static build:
```bash
npm run build
```
The static site will be output to the `out` directory.

---

## 🚢 Deployment (Static Hosting & Hostgator)

### Blog Routing Solution
- **Local development:** Use `/blog` (Next.js routing works out of the box)
- **Static hosting:** `/blog` needs to resolve to `blog/index.html` (not just `blog.html`)
- **After build:**
  - Copy `blog.html` to `blog/index.html`:
    ```bash
    cp out/blog.html out/blog/index.html
    ```
  - This allows both local and production to use `/blog` links

### Deployment Steps
1. Build the site:
   ```bash
   npm run build
   ```
2. Copy blog.html to blog/index.html:
   ```bash
   cp out/blog.html out/blog/index.html
   ```
3. Zip the `out` folder
4. Upload the zip to Hostgator via cPanel
5. Extract into your `public_html` (or desired) directory
6. Ensure your domain points to the correct directory

---

## 📝 Blog
The blog is now live! Check out the first post: [Hello World! I'm Victor](https://victorbabiuc.com/blog/hello-world)
- Features a custom image header with scattered text and a modern, SEO-friendly layout.

---

## 📋 Roadmap
See [`ROADMAP.md`](./ROADMAP.md) for planned features, priorities, and ideas.

---

## 👤 About Me
Hi, I'm Victor. I run [Bold Profiles](https://boldprofiles.com/) (helping startups find tomorrow's leaders), invest small checks as an angel in tech companies, and have a wide range of interests — from jiujitsu to plant care. Always staying curious!

---

© 2024 Victor Babiuc. All rights reserved.

