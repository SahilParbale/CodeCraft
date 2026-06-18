import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      stars: 5,
      text: '"CodeCraft has completely transformed our business operations. The team delivered a top-tier digital solution that exceeded all our expectations."',
      name: 'Ralph Edwards',
      role: 'CEO, CodeCraft',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces'
    },
    {
      stars: 5,
      text: '"Working with CodeCraft was a seamless experience. Their attention to detail and innovative approach helped us launch our platform ahead of schedule."',
      name: 'Jenna Smith',
      role: 'CTO, Tech Innovations',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces'
    },
    {
      stars: 5,
      text: '"The level of expertise and professionalism at CodeCraft is unmatched. They truly understand what it takes to build a scalable and robust product."',
      name: 'Marcus Lee',
      role: 'CFO, FinTech Solutions',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces'
    }
  ];

  return (
    <section id="testimonials" className="section testimonials-section" style={{ background: '#ffffff', paddingTop: '3rem' }}>
      {/* Background Grid Lines */}
      <div className="bg-grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3.5rem' }}>
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif", fontWeight: '600', fontSize: '2.8rem' }}>
            Our Happy Customers
          </h2>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="testimonials-grid" style={{ width: '100%' }}>
          {reviews.map((rev, index) => (
            <div key={index} className="testimonial-card-light">
              {/* Stars */}
              <div className="testimonial-stars">
                {Array.from({ length: rev.stars }).map((_, i) => (
                  <span key={i} style={{ fontSize: '1.25rem' }}>★</span>
                ))}
              </div>
              
              {/* Quote Text */}
              <p className="testimonial-text">{rev.text}</p>
              
              {/* Profile Details */}
              <div className="testimonial-author">
                <img src={rev.avatarUrl} alt={rev.name} className="author-avatar" />
                <div className="author-info">
                  <span className="author-name">{rev.name}</span>
                  <span className="author-role">{rev.role}</span>
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
