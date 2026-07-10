import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer style={{ background: '#090d16', color: '#f8fafc', borderTop: '1px solid rgba(255,255,255,0.05)', fontFamily: "'Inter', sans-serif" }}>
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        
        <div className="footer-main-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Logo scale={0.75} dark={true} />
            </div>
            
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.6', maxWidth: '280px', margin: 0 }}>
              We build smart, scalable and result-driven software solutions that help businesses grow and succeed.
            </p>

            <div style={{ display: 'flex', gap: '0.85rem', marginTop: '0.5rem' }}>
              {/* LinkedIn */}
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Instagram */}
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Twitter */}
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.46 8.59.46 8.59.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.29 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              {/* Facebook */}
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* GitHub */}
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}>
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: '#f1f5f9' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><a href="#products" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>GovTech ERP System</a></li>
              <li><a href="#products" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Election Management System</a></li>
              <li><a href="#products" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Build Division AI</a></li>
              <li><a href="#products" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>GimBooks</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: '#f1f5f9' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li>
                <a 
                  href="/service/custom-software-development" 
                  onClick={(e) => { e.preventDefault(); navigate('/service/custom-software-development'); }}
                  style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} 
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} 
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Custom Software
                </a>
              </li>
              <li>
                <a 
                  href="/service/web-application-development" 
                  onClick={(e) => { e.preventDefault(); navigate('/service/web-application-development'); }}
                  style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} 
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} 
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Web Application
                </a>
              </li>
              <li>
                <a 
                  href="/service/mobile-app-development" 
                  onClick={(e) => { e.preventDefault(); navigate('/service/mobile-app-development'); }}
                  style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} 
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} 
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Mobile App Dev
                </a>
              </li>
              <li>
                <a 
                  href="/service/ai-automation" 
                  onClick={(e) => { e.preventDefault(); navigate('/service/ai-automation'); }}
                  style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} 
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} 
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  AI Automation Services
                </a>
              </li>
              <li>
                <a 
                  href="/service/cloud-devops" 
                  onClick={(e) => { e.preventDefault(); navigate('/service/cloud-devops'); }}
                  style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} 
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} 
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  Cloud & DevOps
                </a>
              </li>
              <li>
                <a 
                  href="/service/qa-testing" 
                  onClick={(e) => { e.preventDefault(); navigate('/service/qa-testing'); }}
                  style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} 
                  onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} 
                  onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                >
                  QA & Testing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: '#f1f5f9' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>About Us</a></li>
              <li><a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Our Process</a></li>
              <li><a href="#about" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.8rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>Blog</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="footer-contact-col">
            <h4 style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: '#f1f5f9' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                <Phone size={14} style={{ color: '#94a3b8', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: '1.4' }}>
                  <a href="tel:+917058731515" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>+91 7058731515</a><br/>
                  <a href="tel:+918788114603" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>+91 8788114603</a>
                </span>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                <Mail size={14} style={{ color: '#94a3b8', flexShrink: 0 }} />
                <a href="mailto:info@codecraft.net.in" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.target.style.color = '#94a3b8'}>info@codecraft.net.in</a>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                <MapPin size={14} style={{ color: '#94a3b8', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: '1.4' }}>
                  Building: Vinayak<br/>
                  Flt No: 1/13 Ground floor<br/>
                  Prabhat Road Lane No 10<br/>
                  Swaroop Hotel Lane.<br/>
                  Near Sanjeevan Ayurved<br/>
                  Deccan Pune 411004
                </span>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '0.75rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#64748b', fontSize: '0.78rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} CodeCraft Technologies. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.78rem' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#2563eb'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Privacy Policy</a>
            <span style={{ color: 'rgba(255, 255, 255, 0.05)' }}>|</span>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#2563eb'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Terms & Conditions</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
