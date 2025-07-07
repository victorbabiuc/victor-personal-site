#!/bin/bash

echo "🔧 Fixing static routes for blog pages..."

# Fix blog listing page
if [ -f "out/blog.html" ]; then
    mkdir -p out/blog
    cp out/blog.html out/blog/index.html
    echo "✅ Fixed blog listing page"
else
    echo "❌ Blog listing page not found"
fi

# Fix individual blog posts
for post in out/blog/*.html; do
    if [ -f "$post" ] && [ "$(basename "$post")" != "index.html" ]; then
        basename=$(basename "$post" .html)
        mkdir -p "out/blog/$basename"
        cp "$post" "out/blog/$basename/index.html"
        echo "✅ Fixed blog post: $basename"
    fi
done

echo "🎉 Static routes fixed successfully!"
echo ""
echo "Available URLs:"
echo "  • Blog listing: http://localhost:8000/blog/"
echo "  • BJJ post: http://localhost:8000/blog/bjj-black-belt-truth/"
echo "  • Hello world: http://localhost:8000/blog/hello-world/" 