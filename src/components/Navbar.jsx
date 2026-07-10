import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [btnHovered, setBtnHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Mount entry animation trigger
    setIsMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (location.pathname.startsWith('/service/')) {
        setActiveSection('services');
        return;
      }
      if (location.pathname === '/get-started') {
        setActiveSection('');
        return;
      }
      
      if (location.pathname !== '/') return;
      
      const sections = ['home', 'products', 'services', 'about', 'contact'];
      let currentSection = 'home';
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }
      
      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50) {
        currentSection = 'contact';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <>
    <header className="header" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '90px',
      background: scrolled ? 'rgba(255, 255, 255, 0.92)' : '#ffffff',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(15, 23, 42, 0.06)' : '1px solid transparent',
      boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.02)' : 'none',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      opacity: isMounted ? 1 : 0,
      transform: isMounted ? 'translateY(0)' : 'translateY(-20px)',
      transition: 'background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        
        {/* Animated Brand Logo */}
        <div 
          onClick={() => scrollToSection('home')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Logo scale={0.9} horizontal={true} />
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-only">
          <nav style={{ display: 'flex', gap: '2.2rem' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredLink === link.id;
              
              return (
                <span 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ 
                    fontSize: '0.92rem', 
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? 'var(--accent-primary)' : isHovered ? 'var(--accent-primary)' : 'var(--text-primary)',
                    cursor: 'pointer', 
                    fontFamily: "'Inter', sans-serif",
                    position: 'relative',
                    transition: 'color 0.25s ease',
                    padding: '8px 2px',
                    display: 'inline-block'
                  }}
                >
                  {link.label}
                  {/* Sliding Underline Animation */}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: isActive || isHovered ? '100%' : '0%',
                    height: '2px',
                    background: 'var(--accent-primary)',
                    borderRadius: '4px',
                    transition: 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }} />
                </span>
              );
            })}
          </nav>
          
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              borderRadius: '999px',
              padding: '0.7rem 1.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: btnHovered ? '0 8px 20px rgba(37, 99, 235, 0.25)' : 'none',
              transform: btnHovered ? 'translateY(-1px)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            Let's Talk 
            <ArrowRight size={16} style={{ 
              transform: btnHovered ? 'translateX(3px)' : 'translateX(0)', 
              transition: 'transform 0.25s ease' 
            }} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-only"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-primary)', 
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            transition: 'background-color 0.2s'
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: scrolled ? '80px' : '100px',
            left: 0,
            width: '100%',
            background: '#ffffff',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            animation: 'slideDownMenu 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }} className="mobile-only">
            {navLinks.map((link) => (
              <span 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{ 
                  fontSize: '1.05rem',
                  fontWeight: activeSection === link.id ? '700' : '500',
                  color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                  padding: '8px 0',
                  borderBottom: '1px solid #f8fafc'
                }}
              >
                {link.label}
              </span>
            ))}
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
              style={{ width: '100%', borderRadius: '999px', padding: '0.8rem' }}
            >
              Let's Talk <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes slideDownMenu {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
    {/* Spacer to maintain document flow behind fixed navbar */}
    <div style={{ height: '90px', width: '100%', flexShrink: 0 }}></div>
    </>
  );
};

export default Navbar;
