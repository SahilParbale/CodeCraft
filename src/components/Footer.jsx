import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: '#121214',
      color: '#ffffff',
      padding: '5rem 0 4rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1.2fr',
        gap: '4rem',
        textAlign: 'left'
      }}>
        
        {/* Column 1: Brand Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '0.9rem',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.05em'
            }}>CC</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#ffffff', letterSpacing: '0.03em', fontFamily: "'Inter', sans-serif" }}>CODECRAFT</span>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#ea580c', letterSpacing: '0.03em', fontFamily: "'Inter', sans-serif" }}>SOLUTIONS</span>
            </div>
          </div>
          
          {/* Text */}
          <p style={{
            fontSize: '0.85rem',
            color: '#94a3b8',
            lineHeight: '1.6',
            maxWidth: '300px'
          }}>
            Your IT service provider for system administration, IT and network consulting,
          </p>

          {/* Social Icons Outlines */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.29 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            {/* X */}
            <a href="https://x.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#ffffff'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Legal Links */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem', fontFamily: "'Inter', sans-serif" }}>Legal</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
            <li><a href="#support" onClick={(e) => e.preventDefault()} className="footer-link">Support</a></li>
            <li><a href="#work" onClick={(e) => e.preventDefault()} className="footer-link">Our work</a></li>
            <li><a href="#service" onClick={(e) => e.preventDefault()} className="footer-link">Service</a></li>
            <li><a href="#industries" onClick={(e) => e.preventDefault()} className="footer-link">Industries</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem', fontFamily: "'Inter', sans-serif" }}>Services</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
            <li><a href="#infrastructure" onClick={(e) => e.preventDefault()} className="footer-link">Infrastructure</a></li>
            <li><a href="#cloud" onClick={(e) => e.preventDefault()} className="footer-link">Cloud Solutions</a></li>
            <li><a href="#voip" onClick={(e) => e.preventDefault()} className="footer-link">VoIP Telephony</a></li>
            <li><a href="#itservice" onClick={(e) => e.preventDefault()} className="footer-link">IT Service</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.5rem', fontFamily: "'Inter', sans-serif" }}>Contact</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <Phone size={14} style={{ color: '#94a3b8' }} />
              <span>+91 7058731515</span>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <Mail size={14} style={{ color: '#94a3b8' }} />
              <span>support@codecraft.in</span>
            </div>

            {/* Address */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.25rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffffff' }}>Address:</span>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                <MapPin size={14} style={{ color: '#94a3b8', flexShrink: 0, marginTop: '2px' }} />
                <span>404 Tech Park, Sector 62, Noida, UP 201309</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
