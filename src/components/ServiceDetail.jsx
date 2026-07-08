import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Code2, Globe, Smartphone, Layout, Cloud, ShieldCheck, ArrowRight } from 'lucide-react';

const serviceData = {
  'custom-software-development': {
    title: 'Custom Software Development',
    icon: <Code2 size={32} />,
    description: "Building tailored applications—like CRM systems or inventory platforms—from scratch to meet specific business requirements and automate workflows.",
    workflow: [
      {
        title: 'Requirements Gathering',
        desc: 'We start by deeply understanding your operational needs, target audience, and the problem the software must solve.'
      },
      {
        title: 'System Architecture Design',
        desc: 'Our architects map out the most efficient, scalable, and secure structural foundation for your custom application.'
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
  'web-application-development': {
    title: 'Web Application Development',
    icon: <Globe size={32} />,
    description: "Creating secure, cross-platform, browser-based applications. This includes creating robust back-ends and interactive front-ends to deliver seamless online services.",
    workflow: [
      {
        title: 'Project Scoping & Strategy',
        desc: 'We align on the business logic, user roles, and data flow to build a clear roadmap for the web application.'
      },
      {
        title: 'UI/UX Design',
        desc: 'Our design team creates intuitive wireframes and interactive prototypes so you can visualize the product before coding begins.'
      },
      {
        title: 'Full-Stack Development',
        desc: 'We develop a responsive front-end coupled with a secure, high-performance back-end architecture.'
      },
      {
        title: 'Testing & Launch',
        desc: 'Following extensive cross-browser and security testing, we launch your application with zero downtime.'
      }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile App Development',
    icon: <Smartphone size={32} />,
    description: "Designing and programming native or cross-platform mobile apps for iOS and Android devices to reach consumers on the go.",
    workflow: [
      {
        title: 'Concept & Feasibility',
        desc: 'We refine your app idea, select the best tech stack (native vs cross-platform), and outline the core feature set.'
      },
      {
        title: 'Mobile UI/UX Design',
        desc: 'We design touch-friendly, intuitive interfaces tailored to both iOS and Android design guidelines.'
      },
      {
        title: 'App Development',
        desc: 'Our mobile developers write clean, efficient code to bring your application to life with smooth animations and transitions.'
      },
      {
        title: 'App Store Deployment',
        desc: 'We handle the entire submission process for the Apple App Store and Google Play Store to ensure smooth approval.'
      }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    icon: <Layout size={32} />,
    description: "Crafting intuitive user interfaces (UI) and user experiences (UX). This involves user research, wireframing, and visual design to ensure the software is user-friendly and visually appealing.",
    workflow: [
      {
        title: 'User Research & Analysis',
        desc: 'We study your target demographic to understand their behaviors, pain points, and expectations.'
      },
      {
        title: 'Wireframing & Prototyping',
        desc: 'We create low-fidelity wireframes to map out user journeys, followed by interactive prototypes to test usability.'
      },
      {
        title: 'Visual Design',
        desc: 'We apply typography, color palettes, and brand guidelines to create a stunning, cohesive interface.'
      },
      {
        title: 'Usability Testing',
        desc: 'We validate the designs with real users to ensure the interface is frictionless, intuitive, and conversion-optimized.'
      }
    ]
  },
  'cloud-devops': {
    title: 'Cloud & DevOps Services',
    icon: <Cloud size={32} />,
    description: "Assisting with cloud migration (AWS, Azure, GCP) and automating deployment and infrastructure. This service ensures systems scale dynamically, securely, and handle high traffic seamlessly.",
    workflow: [
      {
        title: 'Infrastructure Assessment',
        desc: 'We evaluate your current setup to determine the most cost-effective and scalable cloud migration strategy.'
      },
      {
        title: 'Architecture & Provisioning',
        desc: 'We design a scalable cloud architecture and automatically provision resources using Infrastructure as Code (IaC).'
      },
      {
        title: 'CI/CD Pipeline Setup',
        desc: 'We build robust Continuous Integration and Continuous Deployment pipelines to automate testing and releases.'
      },
      {
        title: 'Monitoring & Optimization',
        desc: 'We implement 24/7 monitoring and continuously optimize your cloud resources for performance and cost efficiency.'
      }
    ]
  },
  'qa-testing': {
    title: 'Software Testing & QA',
    icon: <ShieldCheck size={32} />,
    description: "Conducting rigorous functional, performance, and security testing to identify bugs and ensure the software is stable and reliable before, during, and after deployment.",
    workflow: [
      {
        title: 'Test Planning',
        desc: 'We define the testing scope, strategies, and success criteria based on your software requirements.'
      },
      {
        title: 'Test Case Development',
        desc: 'We create detailed manual and automated test cases covering functional, regression, and edge-case scenarios.'
      },
      {
        title: 'Test Execution',
        desc: 'We execute the test cases, meticulously logging any defects or bottlenecks in performance.'
      },
      {
        title: 'Reporting & Sign-off',
        desc: 'We provide comprehensive quality reports and work with developers to ensure all critical issues are resolved before launch.'
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
          style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontFamily: "'Inter', sans-serif" }}
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
        <div className="service-detail-header">
          <div style={{ 
            background: 'rgba(37, 99, 235, 0.1)', 
            color: '#2563eb', 
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
                    background: '#2563eb', 
                    border: '3px solid #ffffff',
                    borderRadius: '50%', 
                    boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.15)',
                    zIndex: 2
                  }}></div>

                  {/* Step Content */}
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.35rem', fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ color: '#2563eb', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.05em' }}>STEP {index + 1}</span>
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
              background: '#2563eb',
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
              e.target.style.background = '#0369a1';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#2563eb';
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
