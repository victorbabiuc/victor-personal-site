import Link from 'next/link';
import styles from '../blog.module.css';

export async function generateStaticParams() {
  return [
    { slug: 'bjj-black-belt-truth' },
    { slug: 'hello-world' }
  ];
}

const posts = {
  'bjj-black-belt-truth': {
    title: 'The Uncomfortable Truth About Your Black Belt: Why It\'s Okay to Say No',
    date: 'July 2025',
    content: [
      '8 minute read',
      'What This Is Really About (TLDR for the Impatient)',
      '• Maybe we should think twice about attendance-based belts or choreographed test promotions',
      '• Obsessing over your next belt (unless you compete professionally) might be holding you back',
      '• Leaving a school just because you didn\'t get promoted? You\'re missing the point',
      '• But staying at a school that promotes everyone with zero standards? That\'s a problem too',
      '• What if it was okay to say "thanks, but I\'m not ready" to a black belt?',
      '• Students who accept belts they know they didn\'t earn are part of the problem',
      '• Your last belt should be different—maybe you should have a say in it',
      'The Second Most Important Belt',
      'So here\'s something I\'ve been thinking about lately. We all know the white belt is the most important one—it\'s the one that gets you started, right? But what about the black belt?',
      'I\'ve been watching how we hand these things out, and honestly, it\'s getting weird. Should everyone get one? Does everyone even want one? Let me share some thoughts that might ruffle a few feathers.',
      'Islam Makhachev dropped this gem a while back: ["Who give him black belt...We HAVE to CHECK this…we have to cancel many black belt…they make jiujitsu look bad."](https://www.youtube.com/shorts/Odvzm0WpWls)',
      'Now look, Makhachev loves stirring the pot for MMA drama. But between you and me? There\'s some truth hiding in that joke. Funny thing is, neither Makhachev nor I have a black belt, which maybe lets us see things differently. We\'re not defending our own territory here—just watching what\'s happening to the art.',
      'The Celebrity Thing (And That 3.5-Year Black Belt)',
      'Okay, so celebrities are everywhere on the mats now—Ashton Kutcher, Keanu Reeves, Demi Lovato, Joe Rogan, Ed O\'Neill, Tom Hardy, Guy Ritchie, Jason Statham, even Zuckerberg\'s out there competing. And hey, that\'s actually pretty cool for getting eyes on the sport!',
      'But then I see stuff like [this Instagram post](https://www.instagram.com/p/DLtc0mkRW09/?igsh=d2pweWk1Y3p4c2N1)—someone getting a black belt in 3.5 years. Come on now. Most of us are grinding for 10+ years, getting our egos crushed daily, learning the hard way. But I guess if you\'ve got the cash, they\'re for sale now?',
      'Is it just me, or are we watching the movie all over again? Movies made certain martial arts popular back in the day, money rolled in, and boom—strip mall black belts for everyone.',
      'The McDojos are coming, folks. Actually, they might already be here.',
      'Even the Big Names Are Calling BS',
      '[Craig Jones flat out said it on More Plates More Dates](https://www.youtube.com/watch?v=gT4g8VUsZmI&ab_channel=MorePlatesMoreDates): "It\'s a marketing trick."',
      'And [Danaher? Even more brutal on Lex Fridman](https://www.youtube.com/watch?v=ktuw6Ow4sd0&ab_channel=LexFridman): "No one cares if you got a black belt. Just show up, pay your fees. Don\'t set your goals low, okay? I know plenty of black belts that suck."',
      'When one of the best coaches in the game is basically saying your black belt might be worthless... maybe we should listen?',
      'So What\'s a Black Belt Supposed to Be?',
      'Look, a black belt means different things to different people. But anyone who trains knows the difference when they roll with a real one versus someone who just... has one. It\'s more art than science, you know?',
      'Sure, if you\'re winning at black belt competitions, case closed—you earned it. But what about the rest of us? The 90% who don\'t compete professionally, or compete but aren\'t exactly medaling?',
      'Here\'s what I think it comes down to: What do your training partners expect when they see that belt?',
      'It\'s not about memorizing every move on YouTube. It\'s not about perfect attendance. It\'s about what happens when you slap hands and bump fists. Can you flow? Do you understand pressure and timing? Can you keep people safe while still being effective?',
      'Okay, Here\'s Where It Gets Awkward',
      'We keep talking about gyms handing out belts like Halloween candy, but what about us? The students proudly tying on belts we know we didn\'t really earn?',
      'I know, I know—nobody wants to hear this. But if you can\'t perform at that level and you\'re still rocking that belt, aren\'t you part of the problem too?',
      'Think about it: You chose to buy that first white belt and start training. Shouldn\'t you have some say in whether you\'ve actually earned the last one?',
      'Now, I\'ll admit—"growing into your belt" is real. I got promoted to purple on my last day at my first school. First time rolling at my new gym as a fresh purple? Man, I felt like I was drowning. Everyone expected a certain level I just didn\'t have yet. Took me months to stop feeling like I was playing catch-up. Years later, going back as a brown belt? Totally different story. Felt great rolling with old training partners. But I won\'t lie—I had serious anxiety that whole time I was there as a purple belt.',
      'The thing is, the black belt should be different. That\'s the one where we maybe need to be honest with ourselves.',
      'The Good Rolls Test',
      'Ever notice what happens when someone legit visits your gym? We all scramble to introduce them to our best people, make sure they get good rolls. Iron sharpens iron, right?',
      'But flip it—when someone\'s wearing a belt they can\'t back up, what happens? They death grip, they stall, they spaz out, or (my personal favorite) they try to coach you mid-roll to protect their ego.',
      'We all know that person who smashes the new people and the smaller folks but suddenly has a bad back when it\'s time to roll with someone their own size and rank.',
      'Like Renzo said: "My opponent is my teacher, my ego is my enemy."',
      'Some Red Flags to Watch For',
      '• "You\'ve been here X months, time for your blue belt!" (Really? That\'s it?)',
      '• Everyone gets promoted (What are the odds everyone progressed equally?)',
      '• Nobody ever hears "not yet" (Come on, that can\'t be right)',
      '**"But I\'m wasting money if I don\'t get promoted!"**',
      'Hang on—why are you training? If you\'re counting dollars per belt, there are other martial arts where you can get a black belt in a few years. BJJ takes a decade for a reason (or at least it used to, unless you\'re a phenom like BJ Penn).',
      'Here\'s the thing: Get promoted too early and you\'ll hate training. Every roll becomes about surviving instead of learning. Every drop-in at another gym becomes an ego-crushing nightmare. Is that worth it?',
      '**Let\'s Not Forget the Sandbaggers**',
      'To be fair, it\'s not just about promoting too fast. Some coaches hold people back to win medals. You dominated Worlds at blue belt? Maybe, just maybe, it\'s time for purple? But nah, some coaches keep their killers at lower belts for the medal count.',
      'That\'s not protecting the art either. That\'s just gaming the system.',
      'The Conversations Nobody\'s Having',
      '**For Coaches:** What do you do with students who just... don\'t get it? The ones who can memorize techniques but can\'t feel the game? I get it—nobody wants to say "you\'ll probably never be a black belt." But maybe that conversation needs to happen sometimes?',
      '**For Students:** Your professor can offer you any belt, but remember—you bought that first white belt, and maybe you should have some say in the last one too.',
      'What if you said: "Coach, I appreciate it, but I\'m not ready. I don\'t want to teach or compete. I just love training. Can I stay at brown a bit longer?"',
      'Or even: "You know what? I\'m good without a black belt. I\'m here because it\'s fun!"',
      'Why would that be weird? Put your ego aside—if you\'re having fun and learning, who cares how long it takes? Even if your coach straight up says you might never get a black belt... so what? You\'re still training, still improving, still part of this thing we love.',
      'So What Now?',
      'Yeah, I know. Here I am writing a whole thing about colored belts like some wannabe bjj philosopher but Danaher said it best: "Build skills, focus on that." The belt should represent the skills, not replace them.',
      'Maybe start some conversations? With your coach, your training partners, but mostly with yourself. Look in the mirror and ask: "Did I really earn this?"',
      'Because if we keep taking belts we didn\'t earn, eventually the market\'s going to decide what they mean. And we\'ve all seen that movie before—it doesn\'t end well for the art.',
      'Sometimes the best thing you can do is say "Thanks, but not yet." Sometimes it\'s knowing where you honestly belong on this journey.',
      'What You Can Actually Do About It',
      '**If You\'re a Student:**',
      '• Ask for real feedback: "What specifically do I need to work on?"',
      '• Pick one weakness each month to focus on (instead of belt-watching)',
      '• If you genuinely don\'t feel ready for a promotion, say so',
      '**If You\'re a Coach:**',
      '• Maybe post what you\'re actually looking for in each belt level?',
      '• Have regular check-ins with students',
      '• Make "not yet" a normal part of the conversation, not a crushing blow',
      '• Be real with people about where they stand',
      '---',
      'So what do you think? Am I overthinking this whole belt thing? Should students have more say in their promotions? Are we letting the business side ruin what makes BJJ special?',
      'Let\'s talk about it.'
    ]
  },
  'hello-world': {
    title: `Hello World! I'm Victor`,
    date: `June 2025`,
    content: [
      `I built this website and blog with AI specifically [Claude](https://claude.ai) and [Cursor](https://cursor.sh). I've been deep diving into "vibe coding" (coding by feel/intuition with AI assistance) and have managed to get two small apps in the app store. This is a pure passion project and I'm having a lot of fun learning how to interact with LLMs. I'm excited to see how much more they can improve and what we could build.`,
      `During the day, I'm a technology recruiter, partnering with startups and cutting-edge companies to build winning teams that will transform the world. I love connecting with entrepreneurs and have written small checks for a few startups. For the right seed-stage startup, I'm always excited to learn more and potentially invest.`,
      `I hope to periodically contribute to this blog and describe what passion projects I'm working on.`,
      `Aside from 'vibe coding' I'm also interested in plants, with my prized possession being a variegated [albo monstera](https://en.wikipedia.org/wiki/Monstera_deliciosa), but recently I've been getting into succulents and cacti.`,
      `In addition, I'm practicing [JiuJitsu](https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu), continually trying to teach my dog Ruby new tricks, and soaking up as much Florida sunshine as possible.`,
      `I'm always on the lookout for new travel destinations. Fun fact: I've circled the globe once. If you have any recommendations of places that have a rich history and incredible food - [drop me a line](mailto:victor@victorbabiuc.com).`,
      `Staying curious! Always learning, always building, always exploring.`,
      `#vibecodig #jiujitsu #recruiting #dogtraining #plants #travel #angelinvesting`
    ]
  }
};

export default async function BlogPost({ params }) {
  const post = posts[await params.slug];

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

  const postUrl = `https://victorbabiuc.com/blog/${await params.slug}`;
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
        <article className={styles.blogPostContent}>
          {post.content.map((content, idx) => {
            // Handle horizontal rule
            if (content === '---') {
              return <hr key={idx} />;
            }
            
            // Check if content looks like a header (no period, shorter text, or specific known headers)
            const isHeader = (content.length < 100 && !content.includes('.') && !content.startsWith('•')) || 
                           content === 'The Celebrity Thing (And That 3.5-Year Black Belt)' ||
                           content === 'Even the Big Names Are Calling BS' ||
                           content === 'So What\'s a Black Belt Supposed to Be?' ||
                           content === 'Okay, Here\'s Where It Gets Awkward' ||
                           content === 'The Good Rolls Test' ||
                           content === 'Some Red Flags to Watch For' ||
                           content === 'Let\'s Not Forget the Sandbaggers' ||
                           content === 'The Conversations Nobody\'s Having' ||
                           content === 'So What Now?' ||
                           content === 'What You Can Actually Do About It';
            const isBulletPoint = content.startsWith('•');
            
            // Function to render content with links and bold text
            const renderContent = (text) => {
              // Convert [text](url) to <a href="url">text</a>
              const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
              const parts = text.split(linkRegex);
              const result = [];
              
              for (let i = 0; i < parts.length; i += 3) {
                if (parts[i]) {
                  // Process bold text in the regular text parts
                  const boldRegex = /\*\*([^*]+)\*\*/g;
                  const boldParts = parts[i].split(boldRegex);
                  const boldResult = [];
                  
                  for (let j = 0; j < boldParts.length; j += 2) {
                    if (boldParts[j]) boldResult.push(boldParts[j]); // Regular text
                    if (boldParts[j + 1]) { // Bold text
                      boldResult.push(
                        <strong key={`bold-${i}-${j}`}>
                          {boldParts[j + 1]}
                        </strong>
                      );
                    }
                  }
                  
                  result.push(...boldResult);
                }
                if (parts[i + 1] && parts[i + 2]) { // Link text and URL
                  result.push(
                    <a 
                      key={`link-${i}`}
                      href={parts[i + 2]} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {parts[i + 1]}
                    </a>
                  );
                }
              }
              
              return result.length > 0 ? result : text;
            };
            
            if (isHeader) {
              return (
                <h2 key={idx}>{renderContent(content)}</h2>
              );
            } else if (isBulletPoint) {
              return (
                <div key={idx} className={styles.bulletPoint}>{renderContent(content)}</div>
              );
            } else {
              return (
                <p key={idx}>{renderContent(content)}</p>
              );
            }
          })}
        </article>
        
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