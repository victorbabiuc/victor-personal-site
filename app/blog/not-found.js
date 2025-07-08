import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h2>Blog post not found</h2>
      <p>Could not find the requested blog post.</p>
      <Link 
        href="/blog"
        style={{
          marginTop: '1rem',
          color: '#0070f3',
          textDecoration: 'underline'
        }}
      >
        Back to blog
      </Link>
    </div>
  );
} 