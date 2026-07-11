import React, { useState, useEffect } from 'react';
import { Shield, Zap, Code, Users } from 'lucide-react';
import timeline2002Img from '../assets/timeline_2002.jpeg';
import timeline2004Img from '../assets/timeline_2004.jpeg';
import timeline2004Img2 from '../assets/timeline_2004_2.jpeg';
import voterImg from '../assets/voter_dashboard.png';
import nagarsevakImg from '../assets/nagarsevak_dashboard.png';

const TimelineCarousel = ({ images, rotation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds auto-scroll
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="timeline-image-wrapper" style={{ transform: `rotate(${rotation})` }}>
      {images.map((img, idx) => (
        <img 
          key={idx} 
          src={img} 
          alt={`Timeline view ${idx + 1}`} 
          className="timeline-image" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            backgroundColor: '#ffffff',
            opacity: idx === currentIndex ? 1 : 0, 
            transition: 'opacity 1s ease-in-out',
            zIndex: idx === currentIndex ? 2 : 1
          }} 
        />
      ))}
    </div>
  );
};

const About = () => {
  const milestones = [
    {
      year: '2002',
      title: 'ERP System Designed',
      desc: 'Our foundational ERP system was conceptualized and deployed, setting the standard for enterprise resource planning in local markets.',
      images: [timeline2002Img]
    },
    {
      year: '2004',
      title: 'Autodial Software',
      desc: 'Launched an innovative Autodial software revolutionizing political and enterprise communication through automated voice broadcasting.',
      images: [timeline2004Img, timeline2004Img2]
    },
    {
      year: '2025',
      title: 'Election Management App',
      desc: 'Released our comprehensive Election Management System featuring advanced demographic analytics, booth mapping, and seamless voter verification.',
      images: [voterImg]
    },
    {
      year: '2026',
      title: 'Krishnaniti ERP System',
      desc: 'Launched our flagship Krishnaniti ERP system, revolutionizing political office operations with smart complaint management and budget tracking.',
      images: [nagarsevakImg]
    }
  ];

  const values = [
    {
      icon: <Zap size={18} style={{ color: '#2563eb' }} />,
      title: 'Performance First',
      desc: 'We treat loading speed and compute optimization as absolute features, not minor afterthoughts.'
    },
    {
      icon: <Shield size={18} style={{ color: '#2563eb' }} />,
      title: 'Security by Design',
      desc: 'Adhering to strict Zero Trust specifications, secure data hashing, and credential isolation patterns.'
    },
    {
      icon: <Code size={18} style={{ color: '#2563eb' }} />,
      title: 'Clean Architecture',
      desc: 'Source code engineered to be modular, typed, and documented, allowing your internal teams to scale seamlessly.'
    },
    {
      icon: <Users size={18} style={{ color: '#2563eb' }} />,
      title: 'Transparent Collaboration',
      desc: 'Direct channels with engineers, frequent milestones, and atomic git check-ins keep you aligned.'
    }
  ];

  return (
    <section id="about" className="section" style={{ background: '#f8fafc', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Background decor */}
      <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, rgba(248, 250, 252, 0) 70%)', filter: 'blur(60px)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(147, 51, 234, 0.04) 0%, rgba(248, 250, 252, 0) 70%)', filter: 'blur(60px)', borderRadius: '50%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <span className="section-tag" style={{ background: '#f0f5ff', color: 'var(--accent-primary)', border: '1px solid rgba(37, 99, 235, 0.15)' }}>ABOUT US</span>
          <h2 className="section-title" style={{ color: '#111827' }}>Who We Are</h2>
          <p className="section-subtitle" style={{ color: '#475569' }}>
            We are a squad of senior engineers, UX strategists, and cloud architects who build software systems that scale.
          </p>
        </div>

        {/* Info & Values */}
        <div style={{ marginBottom: '5rem' }}>
          <h3 className="about-intro-title" style={{ color: '#111827', fontSize: '1.75rem', marginBottom: '1rem', textAlign: 'center' }}>
            Crafting solutions for complex technological challenges.
          </h3>
          <p className="about-desc" style={{ color: '#475569', maxWidth: '800px', margin: '0 auto 3rem auto', textAlign: 'center', fontSize: '1.05rem', lineHeight: '1.6' }}>
            We skip generic templates and bloated abstractions. Instead, we write focused, robust code specifically tailored to solve your operational bottlenecks, transaction traffic, and UI/UX challenges.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {values.map((val, index) => (
              <div key={index} className="tech-value-card">
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#111827', marginBottom: '0.75rem' }}>
                  <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                    {val.icon}
                  </div>
                  {val.title}
                </h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Timeline Section */}
        <div>
          <h3 style={{ color: '#111827', fontSize: '2rem', textAlign: 'center', marginBottom: '4rem', fontWeight: '800' }}>Our Journey</h3>
          
          <div className="horizontal-timeline-wrapper">
            <div className="timeline-center-line"></div>
            
            <div className="timeline-grid">
              {milestones.map((ms, index) => {
                // Add a slight alternating rotation for the newspaper cutout effect
                const rotation = index % 2 === 0 ? '-2deg' : '2deg';
                return (
                  <div key={index} className="timeline-column">
                    
                    {/* TOP Section: Image Carousel (Newspaper Cutout Style) */}
                    <div className="timeline-slot top-slot">
                      <TimelineCarousel images={ms.images} rotation={rotation} />
                    </div>

                    {/* Timeline Node with Year */}
                    <div className="timeline-node">
                      <div className="timeline-year-bubble">{ms.year}</div>
                    </div>

                    {/* BOTTOM Section: Info Card */}
                    <div className="timeline-slot bottom-slot">
                      <div className="timeline-card">
                        <h4>{ms.title}</h4>
                        <p>{ms.desc}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Values Grid Style */
        .tech-value-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tech-value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.08);
          border-color: rgba(37, 99, 235, 0.2);
        }

        /* Horizontal Timeline Styles */
        .horizontal-timeline-wrapper {
          position: relative;
          width: 100%;
          padding: 2rem 0;
        }

        .timeline-center-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #2563eb 15%, #00d2ff 50%, #2563eb 85%, transparent 100%);
          transform: translateY(-50%);
          z-index: 1;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
          z-index: 2;
        }

        .timeline-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .timeline-slot {
          min-height: 280px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
        }
        
        .top-slot {
          justify-content: flex-end;
          padding-bottom: 2rem;
        }

        .bottom-slot {
          justify-content: flex-start;
          padding-top: 2rem;
        }

        .timeline-node {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 0;
          position: relative;
        }

        .timeline-year-bubble {
          background: #ffffff;
          color: #2563eb;
          border: 2px solid #2563eb;
          font-weight: 800;
          font-size: 1.1rem;
          padding: 0.4rem 1.2rem;
          border-radius: 999px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
          z-index: 10;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.05em;
        }

        .timeline-image-wrapper {
          width: 100%;
          max-width: 260px;
          height: 220px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          border: 6px solid #ffffff;
          background: #fff;
          transition: transform 0.3s ease, z-index 0s;
          position: relative;
        }

        .timeline-image-wrapper:hover {
          transform: rotate(0) scale(1.15) !important;
          z-index: 30;
          box-shadow: 0 15px 30px rgba(0,0,0,0.25);
        }

        .timeline-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .timeline-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.25rem;
          width: 100%;
          max-width: 280px;
          text-align: center;
          position: relative;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-3px);
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 12px 25px rgba(37, 99, 235, 0.1);
        }

        .timeline-card h4 {
          color: #111827;
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .timeline-card p {
          color: #475569;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        /* Responsive Mobile Layout */
        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 4rem;
          }
          
          .timeline-center-line {
            display: none;
          }
          
          .timeline-column::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, rgba(37,99,235,0.1) 0%, #2563eb 50%, rgba(37,99,235,0.1) 100%);
            transform: translateY(-50%);
            z-index: 1;
          }
          
          .timeline-year-bubble {
            z-index: 2;
          }
        }

        @media (max-width: 768px) {
          .timeline-grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            position: relative;
            padding-left: 2rem;
          }

          .timeline-center-line {
            display: block;
            width: 2px;
            height: 100%;
            left: 10px;
            top: 0;
            transform: none;
            background: linear-gradient(180deg, transparent 0%, #2563eb 15%, #00d2ff 50%, #2563eb 85%, transparent 100%);
          }

          .timeline-column {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            height: auto;
            margin-bottom: 2rem;
            padding-left: 2rem;
          }
          
          .timeline-column::after {
            display: none;
          }

          .timeline-slot {
            height: auto;
            width: 100%;
            padding: 0;
            align-items: flex-start;
          }

          .top-slot {
            padding-bottom: 1rem;
            justify-content: flex-start;
          }

          .bottom-slot {
            padding-top: 1rem;
            justify-content: flex-start;
          }

          .timeline-node {
            position: absolute;
            left: -32px;
            top: 60px; /* Align with the gap between image and text */
            width: auto;
            height: auto;
          }

          .timeline-year-bubble {
            position: static;
            transform: none;
            font-size: 0.9rem;
            padding: 0.25rem 0.75rem;
          }

          .timeline-card {
            max-width: 100%;
            text-align: left;
            background: transparent;
            border: none;
            padding: 0;
            box-shadow: none;
          }
          
          .timeline-card:hover {
            transform: none;
            box-shadow: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
