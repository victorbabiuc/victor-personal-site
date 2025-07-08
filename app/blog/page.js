import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

const posts = getAllPosts();

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

        {/* Image Header */}
        <div style={{
          position: 'relative',
          height: '300px',
          backgroundImage: 'url(/blog-header.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '24px',
          marginBottom: '48px',
          overflow: 'hidden',
        }}>
          {/* Dark Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.4)',
          }}></div>
          
          {/* Scattered Header Content */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            width: '100%',
          }}>
            {/* Flow Rolls - Upper Left */}
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
              lineHeight: 1.1,
            }}>
              Flow Rolls
            </div>

            {/* Vibe Coding - Upper Right */}
            <div style={{
              position: 'absolute',
              top: '15%',
              right: '15%',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 600,
              color: 'white',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
              lineHeight: 1.1,
            }}>
              Vibe Coding
            </div>

            {/* Exploring - Lower Left */}
            <div style={{
              position: 'absolute',
              bottom: '25%',
              left: '15%',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: 500,
              color: 'white',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
              lineHeight: 1.1,
            }}>
              Exploring
            </div>

            {/* Subtitle - Bottom Center */}
            <div style={{
              position: 'absolute',
              bottom: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 300,
              lineHeight: 1.5,
              maxWidth: '650px',
              textAlign: 'center',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.6)',
            }}>
              Thoughts on tech, recruiting, travel, and adventures
            </div>
          </div>
        </div>

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