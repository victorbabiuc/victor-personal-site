import Link from 'next/link';
import styles from '../blog.module.css';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug, getAllPosts } from '@/lib/markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const postUrl = `https://victorbabiuc.com/blog/${params.slug}`;
  const encodedTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(postUrl);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodeURIComponent('Check out this post: ' + post.title)}&body=${encodeURIComponent('I thought you might find this interesting:\n\n' + post.title + '\n\n' + postUrl)}`
  };

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
        maxWidth: '650px',
        width: '100%',
        margin: '0 auto',
        background: 'white',
        borderRadius: '18px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        padding: '40px 32px',
        textAlign: 'left',
      }}>
        {/* Back Arrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '32px',
        }}>
          <Link
            href="/blog"
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
          </Link>
        </div>
        {/* Title */}
        <h1 style={{
          fontSize: '38px',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '8px',
          letterSpacing: '-0.01em',
        }}>{post.title}</h1>
        <div style={{
          fontSize: '16px',
          color: '#888',
          marginBottom: '32px',
          fontWeight: 400,
        }}>{post.date}</div>
        {/* Post Content */}
        <div className={styles.blogPostContent}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
        
        {/* Social Media Sharing Section */}
        <div style={{
          marginTop: '48px',
          marginBottom: '32px',
          paddingTop: '32px',
          borderTop: '1px solid #f0f0f0',
        }}>
          <div style={{
            fontSize: '16px',
            color: '#666',
            marginBottom: '16px',
            fontWeight: 500,
          }}>
            Share this post:
          </div>
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
          }}>
            {/* X (Twitter) */}
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: '#000000',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: '#0077B5',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 2px 4px rgba(0, 119, 181, 0.2)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: '#1877F2',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 2px 4px rgba(24, 119, 242, 0.2)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href={shareLinks.email}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: '#6B7280',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 2px 4px rgba(107, 114, 128, 0.2)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div style={{
          marginTop: '40px',
          fontSize: '17px',
          color: '#666',
          fontStyle: 'italic',
          textAlign: 'right',
        }}>
          - Victor
        </div>
      </div>
    </main>
  );
} 