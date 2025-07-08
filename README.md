# Victor's Personal Site

## Overview
Personal website and blog built with Next.js, featuring AI-assisted development using Claude and Cursor.

🌐 **Live Website:** [https://victorbabiuc.com](https://victorbabiuc.com)

## Tech Stack
- Next.js 15.3.4
- React
- CSS Modules
- Markdown-based blog system
- Deployed on Hostgator

## Setup
```bash
# Clone the repository
git clone https://github.com/victorbabiuc/victor-personal-site.git
cd victor-personal-site

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files for deployment
npm run export
```

## Blog System

This site uses a markdown-based blog system. Blog posts are automatically loaded from markdown files in the `public/blog-posts/` directory.

### How to Add a New Blog Post (Step-by-Step)

1. **Create a new markdown file**
   - Navigate to `public/blog-posts/`
   - Create a new file with the format: `your-post-slug.md`
   - Example: `my-awesome-post.md` will create a blog at `/blog/my-awesome-post`

2. **Add frontmatter** (required metadata at the top)
   ```markdown
   ---
   title: "Your Blog Post Title"
   date: "2025-01-15"
   excerpt: "A brief 1-2 sentence description that appears in the blog list"
   ---
   ```

3. **Write your content** using markdown
   ```markdown
   # Main Heading

   Your introduction paragraph goes here.

   ## Subheading

   More content with **bold text** and *italic text*.

   - Bullet point 1
   - Bullet point 2

   [Link text](https://example.com)

   > A blockquote for emphasis

   ---

   End with a call to action or summary.
   ```

4. **Save the file** and your post will automatically appear in the blog list

### Markdown Features Supported

- **Headers**: `# H1`, `## H2`, `### H3`, etc.
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[text](url)`
- **Lists**: `- item` or `1. item`
- **Blockquotes**: `> quote`
- **Code blocks**: ` ```code``` `
- **Horizontal rules**: `---`
- **Line breaks**: Two spaces at end of line or blank line between paragraphs

### Blog Post Best Practices

- Use descriptive slugs (filenames): `jiu-jitsu-belt-philosophy.md` instead of `post1.md`
- Keep excerpts under 160 characters for better display
- Use YYYY-MM-DD format for dates
- Add a reading time estimate at the start: `*8 minute read*`
- Include a call-to-action at the end
- Break up long posts with subheadings
- Use lists and formatting to improve readability

### Current Blog Posts

- `bjj-black-belt-truth.md` - Jiu Jitsu Belts: Who Are They Really For?
- `hello-world.md` - Hello World! I'm Victor

## Build & Deploy

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

## Deployment

The site is deployed on Hostgator. To deploy:

1. Build the static export: `npm run build && npm run export`
2. Upload the contents of the `out/` directory to your Hostgator public_html folder

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

## Roadmap

### Completed ✅
- [x] Basic website structure
- [x] Markdown-based blog system
- [x] Two initial blog posts
- [x] Responsive design
- [x] Custom styling
- [x] Social icons with interactive effects
- [x] Deployment to production
- [x] Blog live with "Hello World" post
- [x] Custom image-based blog header with scattered text layout
- [x] Modern X (Twitter) sharing button
- [x] Static routing solution for blog posts

### In Progress 🚧
- [ ] SEO optimization
- [ ] Social media meta tags
- [ ] Photo carousel for homepage
- [ ] Blog post featured images
- [ ] Contact form

### Planned Features 📋
- [ ] Tag/category system for blog posts
- [ ] Blog post search functionality
- [ ] Email newsletter signup
- [ ] Comments system
- [ ] Dark mode toggle
- [ ] Portfolio/projects section
- [ ] About page expansion
- [ ] RSS feed for blog
- [ ] Reading progress indicator
- [ ] Related posts suggestions
- [ ] Analytics integration (Google Analytics)
- [ ] Social sharing buttons for blog posts
- [ ] Reading time estimates
- [ ] Investment portfolio showcase page
- [ ] Travel photo galleries
- [ ] Guestbook or comments section
- [ ] Interactive resume/CV
- [ ] Custom 404 page
- [ ] Fun easter eggs
- [ ] Multi-language support
- [ ] Microblog or notes section

## Contributing

This is a personal project, but suggestions and feedback are welcome!

## Notes
- Maintain a clean, minimal, and accessible design
- Prioritize fast load times and performance
- Use semantic HTML and best practices
- Keep dependencies up to date
- Test on mobile and desktop

