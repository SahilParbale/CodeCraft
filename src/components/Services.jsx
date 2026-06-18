import React from 'react';
import { Headphones, ClipboardList, Code2, Server, PhoneCall, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      id: 'it-support',
      icon: <Headphones size={22} />,
      title: 'IT support',
      description: "Whether it's servers, networks, desktops, IP phone systems, or mobile devices."
    },
    {
      id: 'planning-consulting',
      icon: <ClipboardList size={22} />,
      title: 'Planning & Consulting',
      description: "What can IT do and what are your requirements? We'll find the right solutions."
    },
    {
      id: 'software-development',
      icon: <Code2 size={22} />,
      title: 'Software development',
      description: 'Customized software solutions for your company, whether in the cloud.'
    },
    {
      id: 'it-infrastructure',
      icon: <Server size={22} />,
      title: 'IT infrastructure',
      description: 'We plan and manage your IT infrastructure and adapt it to your needs.'
    },
    {
      id: 'communication-solutions',
      icon: <PhoneCall size={22} />,
      title: 'Communication solutions',
      description: 'VoIP telephony with Swyx and CentralLink. Unified communication in the office.'
    },
    {
      id: 'web-hosting',
      icon: <Globe size={22} />,
      title: 'Web hosting',
      description: 'Modern servers, SSL certificates, domains. We support you from planning.'
    }
  ];

  return (
    <section id="services" className="section services-section" style={{ paddingBottom: '2.5rem' }}>
      {/* Background Grid Lines inside section */}
      <div className="bg-grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif", fontWeight: '600', fontSize: '2.8rem' }}>Our Services</h2>
        </div>

        {/* 6 Services Grid */}
        <div className="services-grid-six" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          width: '100%',
          marginBottom: '3.5rem'
        }}>
          {servicesData.map((service, index) => (
            <div key={index} className="service-card-light">
              <div className="service-icon-wrapper-orange">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-text">{service.description}</p>
              <a 
                href={`/service/${service.id}`} 
                className="service-card-link" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/service/${service.id}`);
                }}
              >
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Start Your Project Button */}
        <button 
          className="btn btn-primary" 
          style={{ padding: '0.8rem 2.25rem', fontSize: '0.95rem' }}
          onClick={() => navigate('/get-started')}
        >
          Start Your Project &rarr;
        </button>
      </div>
    </section>
  );
};

export default Services;
