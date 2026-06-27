import React from 'react';
import { Code2, Globe, Smartphone, Layout, Cloud, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const servicesData = [
    {
      id: 'custom-software-development',
      icon: <Code2 size={22} />,
      title: 'Custom Software Development',
      description: "Building tailored applications—like CRM systems or inventory platforms—from scratch to meet specific business requirements and automate workflows."
    },
    {
      id: 'web-application-development',
      icon: <Globe size={22} />,
      title: 'Web Application Development',
      description: "Creating secure, cross-platform, browser-based applications. This includes creating robust back-ends and interactive front-ends to deliver seamless online services."
    },
    {
      id: 'mobile-app-development',
      icon: <Smartphone size={22} />,
      title: 'Mobile App Development',
      description: "Designing and programming native or cross-platform mobile apps for iOS and Android devices to reach consumers on the go."
    },
    {
      id: 'ui-ux-design',
      icon: <Layout size={22} />,
      title: 'UI/UX Design',
      description: "Crafting intuitive user interfaces (UI) and user experiences (UX). This involves user research, wireframing, and visual design to ensure the software is user-friendly and visually appealing."
    },
    {
      id: 'cloud-devops',
      icon: <Cloud size={22} />,
      title: 'Cloud & DevOps Services',
      description: "Assisting with cloud migration (AWS, Azure, GCP) and automating deployment and infrastructure. This service ensures systems scale dynamically, securely, and handle high traffic seamlessly."
    },
    {
      id: 'qa-testing',
      icon: <ShieldCheck size={22} />,
      title: 'Software Testing & Quality Assurance (QA)',
      description: "Conducting rigorous functional, performance, and security testing to identify bugs and ensure the software is stable and reliable before, during, and after deployment."
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
