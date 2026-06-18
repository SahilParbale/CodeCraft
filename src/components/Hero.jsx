import React from 'react';
import developerImg from '../assets/developer_workspace.png';
import { Clock, Users, Briefcase, Award } from 'lucide-react';

const Hero = ({ onNavigate }) => {
  const handleActionClick = (target) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      const element = document.getElementById(target);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Grid Lines */}
      <div className="bg-grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', position: 'relative', zIndex: 1 }}>
        
        {/* Top Centered Text Section */}
        <div className="hero-content">
          <div className="hero-badge-pill">
            <span className="hero-badge-dot"></span>
            <span>CodeCraft Solutions</span>
          </div>

          <h1 className="hero-title">
            We Build Software That Moves Your <em>Business Forward.</em>
          </h1>

          <div className="hero-actions">
            <button onClick={() => handleActionClick('contact')} className="btn btn-primary">
              Start Your Project &rarr;
            </button>
            <button onClick={() => handleActionClick('projects')} className="btn btn-secondary">
              See Our Work
            </button>
          </div>

          <ul className="hero-checkmarks">
            <li className="hero-checkmark-item">
              <span className="checkmark-icon" style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> Based in Pune, India
            </li>
            <li className="hero-checkmark-item">
              <span className="checkmark-icon" style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> ISO 27001 Certified
            </li>
            <li className="hero-checkmark-item">
              <span className="checkmark-icon" style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> Agile & Scalable Delivery
            </li>
          </ul>
        </div>

        {/* Horizontal Stats Section */}
        <div className="hero-stats-horizontal" style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #f8fafc',
          boxShadow: '0 20px 40px rgba(234, 88, 12, 0.06), 0 4px 6px rgba(0,0,0,0.02)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginTop: '4rem'
        }}>
          
          {/* Stat 1: Projects */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ background: '#fff7ed', color: '#ea580c', padding: '16px', borderRadius: '16px', display: 'flex', flexShrink: 0 }}>
              <Briefcase size={28} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', lineHeight: '1.1', fontFamily: "'Inter', sans-serif" }}>4+</span>
              <span style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: '600', fontFamily: "'Inter', sans-serif", marginTop: '0.25rem' }}>Projects Delivered</span>
            </div>
          </div>

          {/* Stat 2: Happy Clients */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ background: '#ecfdf5', color: '#10b981', padding: '16px', borderRadius: '16px', display: 'flex', flexShrink: 0 }}>
              <Users size={28} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', lineHeight: '1.1', fontFamily: "'Inter', sans-serif" }}>3</span>
              <span style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: '600', fontFamily: "'Inter', sans-serif", marginTop: '0.25rem' }}>Happy Clients</span>
            </div>
          </div>

          {/* Stat 3: Years Experience */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ background: '#eff6ff', color: '#3b82f6', padding: '16px', borderRadius: '16px', display: 'flex', flexShrink: 0 }}>
              <Award size={28} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', lineHeight: '1.1', fontFamily: "'Inter', sans-serif" }}>4+</span>
              <span style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: '600', fontFamily: "'Inter', sans-serif", marginTop: '0.25rem' }}>Years Experience</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
