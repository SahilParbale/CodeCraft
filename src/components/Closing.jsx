import React from 'react';
import { Code2, ClipboardList, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Closing = () => {
  const navigate = useNavigate();
  return (
    <section className="closing-dark-section">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        
        {/* Title */}
        <h2 className="section-title" style={{
          color: '#ffffff',
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.8rem',
          textAlign: 'center',
          marginBottom: '3.5rem',
          fontWeight: '500'
        }}>
          Engineering You Can Depend On?
        </h2>

        {/* 3 Columns Support Cards Grid */}
        <div className="closing-dark-grid-three" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          width: '100%',
          marginBottom: '4rem'
        }}>
          {/* Card 1: Lightning-Fast Development */}
          <div className="closing-support-card">
            <div className="closing-support-icon-wrapper">
              <Code2 size={20} />
            </div>
            <h3 className="closing-support-title">Lightning-Fast Development</h3>
            <p className="closing-support-text">
              Whether it's servers, networks, desktops, IP phone systems, or mobile devices.
            </p>
          </div>

          {/* Card 2: Scalable Architecture */}
          <div className="closing-support-card">
            <div className="closing-support-icon-wrapper">
              <ClipboardList size={20} />
            </div>
            <h3 className="closing-support-title">Scalable Architecture</h3>
            <p className="closing-support-text">
              What can IT do and what are your requirements? We'll find the right solutions.
            </p>
          </div>

          {/* Card 3: 24/7 Expert Support */}
          <div className="closing-support-card">
            <div className="closing-support-icon-wrapper">
              <Headphones size={20} />
            </div>
            <h3 className="closing-support-title">24/7 Expert Support</h3>
            <p className="closing-support-text">
              Customized software solutions for your company, whether in the cloud.
            </p>
          </div>
        </div>

        {/* Inner Dark CTA Card */}
        <div className="closing-cta-card">
          <h3 className="closing-cta-title" style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: '500',
            fontSize: '2.2rem',
            color: '#ffffff',
            marginBottom: '0.75rem'
          }}>
            Ready to transform your business?
          </h3>
          <p className="closing-cta-text" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            color: '#94a3b8',
            marginBottom: '2rem'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          
          <div className="closing-cta-actions">
            <button className="btn-cta-orange" onClick={() => navigate('/get-started')}>Get Started now</button>
            <button className="btn-cta-outline-white">Learn more</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Closing;
