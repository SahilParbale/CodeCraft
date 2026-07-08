import React from 'react';
import { Zap, Layers, Shield, Headphones, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Zap size={24} style={{ color: '#2563eb' }} />,
    title: 'Lightning-Fast Development',
    desc: 'Agile processes and modern tools to deliver results — faster.'
  },
  {
    icon: <Layers size={24} style={{ color: '#2563eb' }} />,
    title: 'Scalable Architecture',
    desc: 'Future-ready solutions designed to grow with your business.'
  },
  {
    icon: <Shield size={24} style={{ color: '#2563eb' }} />,
    title: 'Secure & Reliable',
    desc: 'We follow best practices to ensure security, performance and reliability.'
  },
  {
    icon: <Headphones size={24} style={{ color: '#2563eb' }} />,
    title: '24/7 Expert Support',
    desc: 'Our expert team is always here to support your success.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section" style={{ background: '#f9fafb', color: '#0f172a', overflow: 'hidden' }}>
      
      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, rgba(37, 99, 235, 0.03) 70%)',
        filter: 'blur(80px)',
        borderRadius: '50%'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '2.5rem', alignItems: 'center' }}>
          
          {/* Left Side */}
          <div style={{ flex: '1 1 min(100%, 400px)' }} className="animate-fade-right">
            <span className="section-tag" style={{ color: '#2563eb', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)' }}>WHY CHOOSE US</span>
            <h2 className="section-title" style={{ color: '#0f172a', fontSize: '3rem', marginTop: '0.5rem' }}>
              Engineering You Can Depend On
            </h2>
            <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '1.5rem', maxWidth: '400px' }}>
              We combine technology, creativity and strategy to build solutions that drive real business impact.
            </p>
          </div>
          
          {/* Right Side (Grid) */}
          <div style={{ flex: '1 1 min(100%, 500px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }} className="animate-fade-up">
            {features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(37, 99, 235, 0.08) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(37, 99, 235, 0.15)'
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h4 style={{ color: '#0f172a', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{feature.title}</h4>
                  <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        

        
      </div>
    </section>
  );
};

export default WhyChooseUs;
