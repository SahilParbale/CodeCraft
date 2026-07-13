import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import socialhubImg from '../assets/socialhub_cover.png';
import voterImg from '../assets/voter_dashboard.png';
import nagarsevakImg from '../assets/nagarsevak_dashboard.png';

const blogData = {
  '1': {
    title: 'The Future of AI in Enterprise Software',
    category: 'AI & Automation',
    date: 'Oct 12, 2025',
    author: 'Alex Carter',
    readTime: '5 min read',
    image: socialhubImg,
    content: [
      "Artificial Intelligence is no longer just a buzzword; it's a fundamental architectural shift. In modern enterprise software, the expectation has moved from 'recording data' to 'predicting outcomes'.",
      "Traditional systems required users to manually parse through dashboards to find actionable insights. Today, AI-driven platforms act as proactive agents. They analyze patterns in background processes, flag anomalies before they become critical issues, and autonomously optimize resource allocation.",
      "At CodeCraft, we approach AI integration with a focus on strict utility. We don't bolt on language models for the sake of it. Instead, we train focused, specialized models that understand your specific operational domain—whether that's intelligent routing in an ERP system or demographic predictive modeling in election software.",
      "The next five years will see a massive divide between companies running static legacy systems and those leveraging dynamic, learning architectures. The true power of enterprise AI lies in its ability to operate silently, making complex operations feel effortlessly simple to the end-user."
    ]
  },
  '2': {
    title: 'Scaling Data Architecture for Elections',
    category: 'System Architecture',
    date: 'Sep 28, 2025',
    author: 'Sarah Chen',
    readTime: '8 min read',
    image: voterImg,
    content: [
      "Election management presents one of the most rigorous stress tests for any data architecture. The system must handle immense, sudden spikes in concurrent traffic while maintaining absolute data integrity and zero latency in voter verification.",
      "Our approach relies on heavily distributed, horizontally scalable microservices. We utilize sharded databases geographically distributed close to polling stations to ensure that a massive surge in read/write operations during voting day doesn't bottleneck the central servers.",
      "Furthermore, real-time analytics require a dual-pipeline setup. While transactional data (like voter check-ins) flows through high-consistency relational databases, telemetry and demographic analytics are streamed asynchronously into analytical data stores. This ensures the dashboard always shows live metrics without impacting the performance of the frontline application.",
      "Building for this scale requires paranoid engineering—assuming every component will eventually fail under load and building automatic failovers at every layer."
    ]
  },
  '3': {
    title: 'Why Custom ERPs Outperform Off-the-Shelf Solutions',
    category: 'Enterprise Tech',
    date: 'Sep 15, 2025',
    author: 'Marcus Johnson',
    readTime: '6 min read',
    image: nagarsevakImg,
    content: [
      "Off-the-shelf ERP systems are built to be 'good enough' for everybody, which means they are rarely perfect for anybody. They force your company to adapt its unique workflows to match the software, rather than the software adapting to you.",
      "A custom-built ERP flips this dynamic. By engineering the system around your specific operational bottlenecks, you eliminate bloated features and confusing interfaces. Every button, every report, and every automated trigger is designed exactly for your use case.",
      "Cost is often cited as the barrier to custom development, but this is a short-term view. The licensing fees, expensive mandatory training, and integration headaches of enterprise SaaS platforms rapidly compound. A bespoke system is a capital asset you own, free from recurring seat-licenses.",
      "More importantly, a custom ERP provides a massive competitive advantage. When your software flawlessly aligns with your secret sauce, your operational efficiency becomes impossible for competitors to replicate using generic tools."
    ]
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div style={{ paddingTop: '120px', minHeight: '60vh', textAlign: 'center' }}>
        <h2>Article not found</h2>
        <button onClick={() => navigate('/blog')} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Back to Blog</button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '90px', background: '#ffffff', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Article Hero */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <button 
          onClick={() => navigate('/blog')}
          style={{ background: 'transparent', border: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600', marginBottom: '2rem' }}
          className="back-btn"
        >
          <ArrowLeft size={16} /> Back to Blog
        </button>

        <div style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', padding: '0.35rem 1rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-block', marginBottom: '1.5rem' }}>
          {post.category}
        </div>

        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem' }}>
          {post.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
              <User size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#334155' }}>{post.author}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>CodeCraft Engineering</div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', color: '#64748b', fontSize: '0.85rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={14} /> {post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>

        <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
          {post.content.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
          ))}
        </div>
      </div>
      <style>{`
        .back-btn:hover {
          color: #2563eb !important;
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;
