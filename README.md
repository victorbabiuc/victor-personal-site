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

## 🏗️ Build & Deploy

### Build Instructions
```bash
# Build the static site
npm run build

# Fix static routing (automatically runs after build)
npm run fix-blog-routes

# Serve locally for testing
cd out && python3 -m http.server 8000
```

The static site will be output to the `out` directory.

### Static Routing Fix
After each build, the blog routes need to be fixed for static servers:
- **Blog listing**: Creates `out/blog/index.html` from `out/blog.html`
- **Blog posts**: Creates `out/blog/[slug]/index.html` for each post

This is handled automatically by the `postbuild` script in `package.json`.

### Manual Fix (if needed)
```bash
# Run the automated fix script
./fix-static-routes.sh

# Or run the npm script directly
npm run fix-blog-routes
```

### Available Scripts
- `npm run build` - Build the site and automatically fix routing
- `npm run fix-blog-routes` - Manually fix blog routing
- `./fix-static-routes.sh` - Robust script that handles all blog posts automatically

---

## 🚢 Deployment (Static Hosting & Hostgator)

### Deployment Steps
1. **Build the site** (includes automatic routing fix):
   ```bash
   npm run build
   ```

2. **Verify the build** (optional):
   ```bash
   cd out && python3 -m http.server 8000
   # Visit http://localhost:8000 to test
   ```

3. **Deploy to Hostgator**:
   - Zip the `out` folder
   - Upload the zip to Hostgator via cPanel
   - Extract into your `public_html` (or desired) directory
   - Ensure your domain points to the correct directory

### Blog Routing Solution
- **Local development:** Use `/blog` (Next.js routing works out of the box)
- **Static hosting:** `/blog` automatically resolves to `blog/index.html`
- **Automated fix:** The `postbuild` script handles all routing issues automatically

---

## 📝 Blog

The site includes a blog section with individual posts at `/blog/`. The blog features a custom image header with scattered text and a modern, SEO-friendly layout.

### Current Posts
- [Hello World! I'm Victor](https://victorbabiuc.com/blog/hello-world) - Introduction and background
- [The Uncomfortable Truth About Your Black Belt](https://victorbabiuc.com/blog/bjj-black-belt-truth) - BJJ thoughts and insights

### Adding New Blog Posts
1. **Add post metadata** to `app/blog/page.js` in the posts array:
   ```javascript
   {
     slug: 'your-post-slug',
     title: 'Your Post Title',
     date: 'Month Year',
     excerpt: 'Brief description of the post...'
   }
   ```

2. **Add post content** to `app/blog/[slug]/page.js` in the posts object:
   ```javascript
   'your-post-slug': {
     title: 'Your Post Title',
     date: 'Month Year',
     content: [
       'First paragraph...',
       'Second paragraph...',
       'Header text (auto-detected as h2)',
       '• Bullet point (auto-detected)',
       'More content...'
     ]
   }
   ```

3. **Add to generateStaticParams** in `app/blog/[slug]/page.js`:
   ```javascript
   export async function generateStaticParams() {
     return [
       { slug: 'your-post-slug' },
       // ... existing slugs
     ];
   }
   ```

4. **Rebuild the site** (see build instructions below)

### Blog Content Formatting
- **Headers**: Auto-detected by length < 100 chars, no periods, not bullet points
- **Bullet points**: Use `•` prefix for automatic list formatting
- **Paragraphs**: Regular text with automatic spacing
- **Spacing**: Consistent 16px margins, 1.6 line height for readability

---

## 📋 Roadmap
See [`ROADMAP.md`](./ROADMAP.md) for planned features, priorities, and ideas.

---

## 👤 About Me
Hi, I'm Victor. I run [Bold Profiles](https://boldprofiles.com/) (helping startups find tomorrow's leaders), invest small checks as an angel in tech companies, and have a wide range of interests — from jiujitsu to plant care. Always staying curious!

---

© 2024 Victor Babiuc. All rights reserved.

