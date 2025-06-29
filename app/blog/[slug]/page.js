import Link from 'next/link';

export async function generateStaticParams() {
  return [
    { slug: 'hello-world' }
  ];
}

const posts = {
  'hello-world': {
    title: `Hello World! I'm Victor`,
    date: `June 2025`,
    content: [
      `I built this website and blog with AI specifically Claude and Cursor. I've been deep diving into "vibe coding" (coding by feel/intuition with AI assistance) and have managed to get two small apps in the app store. This is a pure passion project and I'm having a lot of fun learning how to interact with LLMs. I'm excited to see how much more they can improve and what we could build.`,
      `During the day, I'm a technology recruiter, partnering with startups and cutting-edge companies to build winning teams that will transform the world. I love connecting with entrepreneurs and have written small checks for a few startups. For the right seed-stage startup, I'm always excited to learn more and potentially invest.`,
      `I hope to periodically contribute to this blog and describe what passion projects I'm working on.`,
      `Aside from 'vibe coding' I'm also interested in plants, with my prized possession being a variegated albo monstera, but recently I've been getting into succulents and cacti.`,
      `In addition, I'm practicing JiuJitsu, continually trying to teach my dog Ruby new tricks, and soaking up as much Florida sunshine as possible.`,
      `I'm always on the lookout for new travel destinations. Fun fact: I've circled the globe once. If you have any recommendations of places that have a rich history and incredible food - drop me a line.`,
      `Staying curious! Always learning, always building, always exploring.`,
      `#vibecodig #jiujitsu #recruiting #dogtraining #plants #travel #angelinvesting`
    ]
  }
};

export default function BlogPost({ params }) {
  const post = posts[params.slug];

  if (!post) {
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
        <div style={{ maxWidth: '650px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center' }}>
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
          <h2 style={{ color: '#1a1a1a', fontWeight: 700 }}>Post not found</h2>
        </div>
      </main>
    );
  }

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
        {/* Content */}
        {post.content.map((para, idx) => (
          <p key={idx} style={{
            fontSize: '19px',
            color: '#444',
            lineHeight: 1.8,
            marginBottom: '22px',
            fontWeight: 300,
          }}>{para}</p>
        ))}
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