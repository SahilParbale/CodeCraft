import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      stars: 5,
      text: '"CodeCraft Technologies delivered an outstanding solution that transformed our workflow. Their team is professional, responsive and truly dedicated."',
      name: 'Ismail Shaikh',
      role: 'CEO, Nagar Setu',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces'
    },
    {
      stars: 5,
      text: '"Working with CodeCraft was a seamless experience. Their expertise and attention to detail helped us achieve our goals faster than expected."',
      name: 'Pooja Patil',
      role: 'CEO, Patil Enterprises',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces'
    },
    {
      stars: 5,
      text: '"The team delivered beyond our expectations with a secure and scalable platform. Highly recommended for any digital transformation."',
      name: 'Amit Desai',
      role: 'CTO, Desai Constructions',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces'
    }
  ];

  return (
    <section id="testimonials" className="section" style={{ background: '#fcfaf8', padding: '4.5rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="section-tag" style={{ background: '#f0f5ff', color: 'var(--accent-primary)', border: '1px solid rgba(37, 99, 235, 0.15)' }}>TESTIMONIALS</span>
          <h2 className="section-title">Our Happy Customers</h2>
        </div>

        {/* 3-Column Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="glass-card animate-fade-up"
              style={{
                background: 'white',
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                border: '1.5px solid #f1f5f9',
                display: 'flex',
                flexDirection: 'column',
                animationDelay: `${index * 0.1}s`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.015)'
              }}
            >
              
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {Array.from({ length: rev.stars }).map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              
              {/* Quote Text */}
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.65',
                flex: 1,
                marginBottom: '2rem'
              }}>
                {rev.text}
              </p>
              
              {/* Profile Details */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2563eb, #00d2ff)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  letterSpacing: '1px'
                }}>
                  {rev.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#0f172a' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
