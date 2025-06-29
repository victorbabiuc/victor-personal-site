import Link from 'next/link';

const posts = [
  {
    slug: 'hello-world',
    title: `Hello World! I'm Victor`,
    date: 'June 2025',
    excerpt: `I built this website and blog with AI specifically Claude and Cursor. I've been deep diving into "vibe coding" (coding by feel/intuition with AI assistance) and have managed to get two small apps in the app store...`
  }
];

export default function BlogPage() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'inherit'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* Back Arrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '32px',
        }}>
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#444',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 500,
              transition: 'color 0.2s',
              marginRight: 'auto',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back
          </a>
        </div>

        {/* Blog Title */}
        <h1 style={{
          fontSize: '56px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '12px',
          letterSpacing: '-0.02em',
        }}>
          My Blog
        </h1>
        <p style={{
          fontSize: '22px',
          color: '#666',
          marginBottom: '48px',
          fontWeight: 300,
        }}>
          Thoughts on tech, travel, and life
        </p>

        {/* Blog Posts List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}>
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: 'white',
                  borderRadius: '18px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  padding: '32px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  margin: '0 auto',
                  maxWidth: '700px',
                }}
              >
                <div style={{
                  fontSize: '15px',
                  color: '#888',
                  marginBottom: '8px',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}>{post.date}</div>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}>{post.title}</div>
                <div style={{
                  fontSize: '18px',
                  color: '#444',
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}>{post.excerpt}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 