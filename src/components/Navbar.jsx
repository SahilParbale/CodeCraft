import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Set active section based on subpages
      if (location.pathname.startsWith('/service/')) {
        setActiveSection('services');
        return;
      }
      if (location.pathname === '/get-started') {
        setActiveSection('');
        return;
      }
      
      // Only track scroll on home page
      if (location.pathname !== '/') return;
      
      const sections = ['home', 'products', 'services', 'projects', 'contact'];
      let currentSection = 'home';
      
      // Use 1/3 of the window height as the scroll detection line
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }
      
      // Handle the bottom of the page
      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50) {
        currentSection = 'contact';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for page transition then scroll
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
      // Offset by navbar height (80px)
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
    { id: 'projects', label: 'Our Work' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header className="header" style={{
      position: 'sticky',
      top: 0,
      width: '100%',
      height: '80px',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="nav-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'between',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        
        {/* Logo (CodeCraft Solutions) */}
        <div 
          onClick={() => scrollToSection('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', cursor: 'pointer' }}>
          <div style={{
            background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '1rem',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '-0.05em'
          }}>CC</div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1.05' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1e293b', letterSpacing: '0.03em', fontFamily: "'Inter', sans-serif" }}>CODECRAFT</span>
            <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#ea580c', letterSpacing: '0.03em', fontFamily: "'Inter', sans-serif" }}>SOLUTIONS</span>
          </div>
        </div>

        {/* Navigation Items (Desktop) */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <span 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
              style={{ 
                fontSize: '0.9rem', 
                cursor: 'pointer', 
                fontFamily: "'Inter', sans-serif",
                position: 'relative',
                transition: 'all 0.2s ease',
                paddingBottom: '4px'
              }}
            >
              {link.label}
            </span>
          ))}
          
          <button className="btn-get-started"
          onClick={() => navigate('/get-started')}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Drawer */}
        <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <span 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="mobile-nav-link"
                style={{ 
                  color: activeSection === link.id ? '#ea580c' : '#475569'
                }}
              >
                {link.label}
              </span>
            ))}
          </div>
          <button 
            style={{
              background: '#111827',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '1rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              width: '100%'
            }}
            onClick={() => {
              navigate('/get-started');
              setIsMobileMenuOpen(false);
            }}
          >
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
