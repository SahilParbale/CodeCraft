import React from 'react';
import { GitBranch, Globe, Smartphone, Layout, Cloud, Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      id: 'custom-software-development',
      icon: <GitBranch size={22} />,
      title: 'Custom Software Development',
      description: 'Scalable, secure and high-performance software built to streamline processes and accelerate growth.'
    },
    {
      id: 'web-application-development',
      icon: <Globe size={22} />,
      title: 'Web Application Development',
      description: 'Modern, responsive and feature-rich web applications that deliver exceptional user experiences.'
    },
    {
      id: 'mobile-app-development',
      icon: <Smartphone size={22} />,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps for iOS and Android that engage users and drive business results.'
    },
    {
      id: 'ui-ux-design',
      icon: <Layout size={22} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive and user-centered designs that enhance engagement and create lasting impressions.'
    },
    {
      id: 'cloud-devops',
      icon: <Cloud size={22} />,
      title: 'Cloud & DevOps Services',
      description: 'Cloud migration, CI/CD, monitoring and infrastructure management to ensure performance, reliability and scalability.'
    },
    {
      id: 'qa-testing',
      icon: <Search size={22} />,
      title: 'QA & Testing Services',
      description: 'Comprehensive testing services to ensure security, quality, reliability and a bug-free experience.'
    }
  ];

  return (
    <section id="services" className="section" style={{ background: '#ffffff', padding: '4.5rem 0' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <span className="section-tag" style={{ color: 'var(--accent-primary)', background: '#f0f5ff', border: '1px solid rgba(37, 99, 235, 0.15)' }}>OUR SERVICES</span>
          <h2 className="section-title" style={{ marginTop: '1rem', color: '#0f172a' }}>End-to-End Solutions for Every Business Need</h2>
        </div>

        {/* 2x3 Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          width: '100%'
        }}>
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="glass-card animate-fade-up" 
              style={{
                background: '#ffffff',
                border: '1.5px solid #f1f5f9',
                padding: '1.25rem 1.25rem',
                borderRadius: '12px',
                animationDelay: `${index * 0.1}s`,
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.2)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#f1f5f9';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.01)';
              }}
            >
              
              {/* Icon Box */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(37, 99, 235, 0.08) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                marginBottom: '0.75rem',
                border: '1px solid rgba(37, 99, 235, 0.15)'
              }}>
                {service.icon}
              </div>
              
              <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>
                {service.title}
              </h3>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', flex: 1, marginBottom: '0.85rem' }}>
                {service.description}
              </p>
              
              <a 
                href={`/service/${service.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/service/${service.id}`);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-primary)',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  marginTop: 'auto'
                }}
                onMouseEnter={(e) => e.currentTarget.style.gap = '0.75rem'}
                onMouseLeave={(e) => e.currentTarget.style.gap = '0.5rem'}
                className="transition-all"
              >
                Learn More <ArrowRight size={14} />
              </a>
              
            </div>
          ))}
        </div>

        {/* CTA Button at Bottom */}
        <button 
          onClick={() => navigate('/get-started')} 
          className="btn btn-primary animate-fade-up" 
          style={{ 
            marginTop: '2.5rem', 
            borderRadius: '999px', 
            padding: '0.9rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          Start Your Project <span style={{ fontSize: '1.1rem' }}>➔</span>
        </button>
        
      </div>
    </section>
  );
};

export default Services;
