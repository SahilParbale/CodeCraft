import React, { useEffect } from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import socialhubImg from '../assets/socialhub_cover.png';
import voterImg from '../assets/voter_dashboard.png';
import nagarsevakImg from '../assets/nagarsevak_dashboard.png';

const Blog = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise Software',
      excerpt: 'Discover how artificial intelligence is reshaping enterprise workflows, automating engagement, and driving unprecedented scale.',
      category: 'AI & Automation',
      date: 'Oct 12, 2025',
      author: 'Alex Carter',
      readTime: '5 min read',
      image: socialhubImg
    },
    {
      id: 2,
      title: 'Scaling Data Architecture for Elections',
      excerpt: 'A deep dive into the engineering behind secure, high-volume voter verification systems and demographic mapping.',
      category: 'System Architecture',
      date: 'Sep 28, 2025',
      author: 'Sarah Chen',
      readTime: '8 min read',
      image: voterImg
    },
    {
      id: 3,
      title: 'Why Custom ERPs Outperform Off-the-Shelf Solutions',
      excerpt: 'An analysis of how tailored resource planning systems provide better security, integration, and long-term cost efficiency.',
      category: 'Enterprise Tech',
      date: 'Sep 15, 2025',
      author: 'Marcus Johnson',
      readTime: '6 min read',
      image: nagarsevakImg
    }
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Header Section */}
      <section className="section" style={{ paddingTop: 'calc(90px + 1.5rem)', paddingBottom: '2rem', background: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <span className="section-tag" style={{ background: '#f0f5ff', color: '#2563eb', border: '1px solid rgba(37, 99, 235, 0.15)' }}>OUR BLOG</span>
            <h1 className="section-title" style={{ fontSize: '2.5rem', color: '#111827' }}>Insights & Engineering Updates</h1>
            <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto', color: '#475569' }}>
              Deep dives into software architecture, enterprise tech trends, and stories from the engineering frontlines at CodeCraft.
            </p>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="section" style={{ padding: '4rem 0 6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="blog-list-item"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                {/* Image Side */}
                <div className="blog-item-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-item-image" />
                  <div className="blog-item-category">
                    {post.category}
                  </div>
                </div>
                
                {/* Content Side */}
                <div className="blog-item-content">
                  <div className="blog-meta">
                    <span className="blog-meta-item"><Calendar size={14} /> {post.date}</span>
                    <span className="blog-meta-item"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  
                  <h3 className="blog-item-title">
                    {post.title}
                  </h3>
                  
                  <p className="blog-item-excerpt">
                    {post.excerpt}
                  </p>
                  
                  <div className="blog-item-footer">
                    <div className="blog-author">
                      <div className="blog-author-avatar">
                        <User size={14} />
                      </div>
                      <span className="blog-author-name">{post.author}</span>
                    </div>
                    
                    <button className="read-more-btn">
                      Read Article <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .blog-list-item {
          display: flex;
          align-items: flex-start;
          gap: 2.5rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid #e2e8f0;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .blog-list-item:last-child {
          border-bottom: none;
        }

        .blog-list-item:hover .blog-item-title {
          color: #2563eb;
        }

        .blog-list-item:hover .blog-item-image {
          transform: scale(1.05);
        }

        .blog-item-image-wrapper {
          width: 400px;
          height: 260px;
          flex-shrink: 0;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .blog-item-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-item-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(4px);
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #2563eb;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .blog-item-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding-top: 0.5rem;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.85rem;
          color: #64748b;
          margin-bottom: 0.75rem;
        }

        .blog-meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .blog-item-title {
          font-size: 1.6rem;
          color: #0f172a;
          font-weight: 800;
          margin-bottom: 0.75rem;
          line-height: 1.3;
          transition: color 0.2s ease;
        }

        .blog-item-excerpt {
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .blog-item-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .blog-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .blog-author-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }

        .blog-author-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #334155;
        }

        .read-more-btn {
          background: transparent;
          border: none;
          color: #2563eb;
          font-size: 0.9rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .read-more-btn:hover {
          color: #1d4ed8;
        }

        @media (max-width: 768px) {
          .blog-list-item {
            flex-direction: column;
            gap: 1.5rem;
          }
          .blog-item-image-wrapper {
            width: 100%;
            height: 220px;
          }
          .blog-item-title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
