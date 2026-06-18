import React from 'react';
import developerImg from '../assets/developer_workspace.png';
import { Clock, Users } from 'lucide-react';

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
              <span className="checkmark-icon" style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> Based in Aachen
            </li>
            <li className="hero-checkmark-item">
              <span className="checkmark-icon" style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> DSGVO-compliant
            </li>
            <li className="hero-checkmark-item">
              <span className="checkmark-icon" style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> Fixed-price projects available
            </li>
          </ul>
        </div>

        {/* Visual Split Image & Widgets Section */}
        <div className="hero-visual-split">
          {/* Left Side: Photo */}
          <div className="hero-developer-img-wrapper">
            <img src={developerImg} alt="Developer at desk" className="hero-developer-img" />
          </div>

          {/* Right Side: Stats Widget Cards Container */}
          <div className="hero-widgets-column" style={{
            background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.08) 0%, rgba(219, 39, 119, 0.08) 100%)',
            padding: '1.5rem',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.25rem'
          }}>
            
            {/* Completed Clients Card */}
            <div className="widget-card-hosting">
              <div className="widget-label">Completed Clients</div>
              <div className="widget-hosting-grid">
                <div className="widget-hosting-metric">
                  <span className="widget-metric-value">250+</span>
                  <span className="widget-metric-desc">Happy Clients</span>
                </div>
                <div className="widget-hosting-metric">
                  <span className="widget-metric-value">99%</span>
                  <span className="widget-metric-desc">Satisfaction Rate</span>
                </div>
                <div className="widget-hosting-metric">
                  <span className="widget-metric-value">15+</span>
                  <span className="widget-metric-desc">Countries Reached</span>
                </div>
              </div>
            </div>

            {/* Projects Done Card - Catchy White */}
            <div className="widget-card-sessions" style={{
              background: '#ffffff',
              color: '#0f172a',
              borderRadius: '24px',
              border: '1px solid #f8fafc',
              boxShadow: '0 20px 40px rgba(234, 88, 12, 0.08), 0 4px 6px rgba(0,0,0,0.02)',
              position: 'relative',
              overflow: 'hidden',
              padding: '1.5rem'
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="widget-label" style={{ color: '#64748b', borderBottom: '1px solid #f1f5f9', paddingBottom: '0.75rem', marginBottom: '1rem', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects Delivered</div>
                
                <div className="widget-sessions-content" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  {/* Catchy SVG Progress Circle */}
                  <div style={{ position: 'relative', width: '90px', height: '90px', flexShrink: 0 }}>
                    <div style={{
                      position: 'absolute',
                      inset: '8px',
                      borderRadius: '50%',
                      boxShadow: '0 0 20px rgba(234, 88, 12, 0.15)',
                      zIndex: -1
                    }}></div>
                    <svg className="circle-progress-svg" width="90" height="90" viewBox="0 0 90 90">
                      <circle cx="45" cy="45" r="38" fill="none" stroke="#f1f5f9" strokeWidth="6" />
                      <circle cx="45" cy="45" r="38" fill="none" stroke="#ea580c" strokeWidth="6" 
                              strokeLinecap="round"
                              style={{ 
                                strokeDasharray: 238, 
                                strokeDashoffset: 15,
                                transform: 'rotate(-90deg)',
                                transformOrigin: '50% 50%',
                                transition: 'stroke-dashoffset 1s ease-out'
                              }} />
                      <text x="45" y="41" fill="#0f172a" fontSize="20" fontWeight="800" textAnchor="middle" dominantBaseline="middle" fontFamily="'Inter', sans-serif">450+</text>
                      <text x="45" y="58" fill="#ea580c" fontSize="9" fontWeight="800" letterSpacing="1.5px" textAnchor="middle" dominantBaseline="middle" fontFamily="'Inter', sans-serif">PROJECTS</text>
                    </svg>
                  </div>

                  {/* Clean Details Rows */}
                  <div className="widget-sessions-details" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                    <div className="session-stat-row" style={{ color: '#475569', background: '#f8fafc', padding: '0.6rem 0.85rem', borderRadius: '10px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="session-stat-icon" style={{ color: '#10b981', background: '#ecfdf5', padding: '5px', borderRadius: '6px', display: 'flex' }}><Clock size={15} /></span>
                      <span style={{ fontSize: '0.85rem', fontFamily: "'Inter', sans-serif" }}><strong style={{ color: '#0f172a', fontWeight: '700' }}>100%</strong> On-time</span>
                    </div>
                    <div className="session-stat-row" style={{ color: '#475569', background: '#f8fafc', padding: '0.6rem 0.85rem', borderRadius: '10px', border: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="session-stat-icon" style={{ color: '#ea580c', background: '#fff7ed', padding: '5px', borderRadius: '6px', display: 'flex' }}><Users size={15} /></span>
                      <span style={{ fontSize: '0.85rem', fontFamily: "'Inter', sans-serif" }}><strong style={{ color: '#0f172a', fontWeight: '700' }}>50+</strong> Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
