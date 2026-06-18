import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Headphones, ClipboardList, Code2, Server, PhoneCall, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceData = {
  'it-support': {
    title: 'IT Support',
    icon: <Headphones size={32} />,
    description: "Comprehensive support for servers, networks, desktops, IP phone systems, and mobile devices.",
    workflow: [
      {
        title: 'Initial Assessment',
        desc: 'We analyze your current IT infrastructure and identify key areas requiring immediate support or long-term improvement.'
      },
      {
        title: 'Custom Support Plan',
        desc: 'Based on your needs, we tailor a dedicated Service Level Agreement (SLA) to guarantee response times and continuous monitoring.'
      },
      {
        title: 'Active Monitoring & Maintenance',
        desc: 'Our team proactively monitors your systems 24/7 to prevent downtime, deploying patches and updates behind the scenes.'
      },
      {
        title: 'Rapid Resolution',
        desc: 'When issues arise, our helpdesk provides instant remote support or on-site visits to resolve them quickly and efficiently.'
      }
    ]
  },
  'planning-consulting': {
    title: 'Planning & Consulting',
    icon: <ClipboardList size={32} />,
    description: "Strategic guidance to align your IT capabilities with your business goals.",
    workflow: [
      {
        title: 'Discovery & Audit',
        desc: 'We conduct a deep dive into your existing processes, software, and hardware to understand your business objectives.'
      },
      {
        title: 'Gap Analysis',
        desc: 'We identify technical bottlenecks and operational gaps holding back your productivity or scaling potential.'
      },
      {
        title: 'Strategic Roadmap Design',
        desc: 'We architect a step-by-step digital transformation roadmap, prioritizing cost-effective and high-impact IT investments.'
      },
      {
        title: 'Implementation Oversight',
        desc: 'Our consultants work alongside your team to ensure the new strategies are executed seamlessly and correctly.'
      }
    ]
  },
  'software-development': {
    title: 'Software Development',
    icon: <Code2 size={32} />,
    description: "Customized software solutions tailored specifically for your company's workflows.",
    workflow: [
      {
        title: 'Requirements Gathering',
        desc: 'We start by deeply understanding your operational needs, target audience, and the problem the software must solve.'
      },
      {
        title: 'UI/UX Design & Prototyping',
        desc: 'Our design team creates intuitive wireframes and interactive prototypes so you can visualize the product before coding begins.'
      },
      {
        title: 'Agile Development',
        desc: 'Using an agile methodology, our engineers build the software in iterative sprints, ensuring flexibility and transparency.'
      },
      {
        title: 'Rigorous QA & Deployment',
        desc: 'We conduct exhaustive automated and manual testing before securely deploying the application to your production environment.'
      }
    ]
  },
  'it-infrastructure': {
    title: 'IT Infrastructure',
    icon: <Server size={32} />,
    description: "Robust, scalable, and secure infrastructure planning and management.",
    workflow: [
      {
        title: 'Infrastructure Audit',
        desc: 'We evaluate your current network architecture, server capacity, and security posture to establish a baseline.'
      },
      {
        title: 'Architecture Design',
        desc: 'We design a scalable network and server architecture (cloud, on-premise, or hybrid) tailored to your specific load requirements.'
      },
      {
        title: 'Hardware & Software Provisioning',
        desc: 'We procure, configure, and install the necessary enterprise-grade routers, switches, firewalls, and servers.'
      },
      {
        title: 'Ongoing Management',
        desc: 'We continuously optimize performance, manage backups, and ensure your infrastructure remains resilient against cyber threats.'
      }
    ]
  },
  'communication-solutions': {
    title: 'Communication Solutions',
    icon: <PhoneCall size={32} />,
    description: "Unified communication strategies including VoIP telephony and secure messaging.",
    workflow: [
      {
        title: 'Needs Assessment',
        desc: 'We assess your team\'s communication needs, analyzing call volumes, remote work requirements, and current telephony costs.'
      },
      {
        title: 'System Selection',
        desc: 'We recommend the best Unified Communications as a Service (UCaaS) platforms, such as Swyx or CentralLink, for your exact needs.'
      },
      {
        title: 'Seamless Migration',
        desc: 'We port your existing numbers and configure the new VoIP systems with zero downtime or disruption to your business.'
      },
      {
        title: 'Training & Support',
        desc: 'We train your staff on using the new communication tools effectively and provide ongoing technical support.'
      }
    ]
  },
  'web-hosting': {
    title: 'Web Hosting',
    icon: <Globe size={32} />,
    description: "High-performance, secure servers with SSL certificates and domain management.",
    workflow: [
      {
        title: 'Resource Planning',
        desc: 'We analyze your website traffic, storage needs, and application requirements to select the perfect hosting environment.'
      },
      {
        title: 'Server Configuration',
        desc: 'We provision and configure high-performance modern servers, optimizing them for speed, caching, and security.'
      },
      {
        title: 'Migration & SSL Setup',
        desc: 'We securely migrate your existing data, configure your domains, and install robust SSL certificates to protect your users.'
      },
      {
        title: '24/7 Uptime Monitoring',
        desc: 'Our automated systems monitor your server health around the clock, ensuring 99.9% uptime and rapid response to any anomalies.'
      }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = serviceData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div style={{ padding: '5rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', color: '#0f172a', fontFamily: "'Playfair Display', serif" }}>Service not found</h2>
        <button 
          onClick={() => navigate('/')}
          style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', background: '#ea580c', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', paddingBottom: '3rem', paddingTop: '3.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div style={{ 
            background: 'rgba(234, 88, 12, 0.1)', 
            color: '#ea580c', 
            width: '64px', 
            height: '64px', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexShrink: 0
          }}>
            {service.icon}
          </div>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.25rem' }}>
              {service.title}
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#64748b', fontFamily: "'Inter', sans-serif", margin: 0 }}>
              {service.description}
            </p>
          </div>
        </div>

        {/* Workflow Timeline Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: '1.25rem', 
            color: '#0f172a', 
            fontWeight: '700', 
            marginBottom: '2.5rem', 
            borderBottom: '2px solid #f1f5f9', 
            paddingBottom: '0.75rem' 
          }}>
            Our Workflow
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', top: '8px', bottom: '8px', left: '7px', width: '2px', background: '#e2e8f0' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {service.workflow.map((step, index) => (
                <div key={index} style={{ position: 'relative', paddingLeft: '3rem' }}>
                  
                  {/* Step Dot */}
                  <div style={{ 
                    position: 'absolute',
                    left: '0',
                    top: '5px',
                    width: '16px', 
                    height: '16px', 
                    background: '#ea580c', 
                    border: '3px solid #ffffff',
                    borderRadius: '50%', 
                    boxShadow: '0 0 0 3px rgba(234, 88, 12, 0.15)',
                    zIndex: 2
                  }}></div>

                  {/* Step Content */}
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.35rem', fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ color: '#ea580c', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.05em' }}>STEP {index + 1}</span>
                      {step.title}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', fontFamily: "'Inter', sans-serif", margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: '#0f172a', marginBottom: '0.75rem', fontWeight: '700' }}>
            Ready to get started?
          </h3>
          <p style={{ color: '#64748b', fontFamily: "'Inter', sans-serif", marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Let's discuss how our {service.title} services can accelerate your business.
          </p>
          <button 
            onClick={() => navigate('/get-started')}
            style={{
              background: '#ea580c',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '0.85rem 2rem',
              fontSize: '0.95rem',
              fontWeight: '600',
              fontFamily: "'Inter', sans-serif",
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#c2410c';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#ea580c';
            }}
          >
            Start Your Project <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServiceDetail;
