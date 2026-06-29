import React from 'react';
import { Zap, Layers, Shield, Headphones, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Zap size={24} style={{ color: '#ff5a00' }} />,
    title: 'Lightning-Fast Development',
    desc: 'Agile processes and modern tools to deliver results — faster.'
  },
  {
    icon: <Layers size={24} style={{ color: '#ff5a00' }} />,
    title: 'Scalable Architecture',
    desc: 'Future-ready solutions designed to grow with your business.'
  },
  {
    icon: <Shield size={24} style={{ color: '#ff5a00' }} />,
    title: 'Secure & Reliable',
    desc: 'We follow best practices to ensure security, performance and reliability.'
  },
  {
    icon: <Headphones size={24} style={{ color: '#ff5a00' }} />,
    title: '24/7 Expert Support',
    desc: 'Our expert team is always here to support your success.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-dark)', color: 'white', overflow: 'hidden' }}>
      
      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'rgba(255, 90, 0, 0.05)',
        filter: 'blur(80px)',
        borderRadius: '50%'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '2.5rem', alignItems: 'center' }}>
          
          {/* Left Side */}
          <div style={{ flex: '1 1 400px' }} className="animate-fade-right">
            <span className="section-tag" style={{ color: '#ff5a00', background: 'rgba(255, 90, 0, 0.1)', border: '1px solid rgba(255, 90, 0, 0.2)' }}>WHY CHOOSE US</span>
            <h2 className="section-title" style={{ color: 'white', fontSize: '3rem', marginTop: '0.5rem' }}>
              Engineering You Can Depend On
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.1rem', marginTop: '1.5rem', maxWidth: '400px' }}>
              We combine technology, creativity and strategy to build solutions that drive real business impact.
            </p>
          </div>
          
          {/* Right Side (Grid) */}
          <div style={{ flex: '1 1 500px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }} className="animate-fade-up">
            {features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255, 90, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 90, 0, 0.2)'
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{feature.title}</h4>
                  <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.5' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
        {/* CTA Box */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '2.5rem 3rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem'
        }}>
          <div style={{ flex: '1 1 400px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
              <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: '800', margin: 0 }}>Ready to transform your business?</h3>
              <span style={{ 
                background: '#ff5a00', 
                color: 'white', 
                fontSize: '0.75rem', 
                fontWeight: '700', 
                padding: '0.2rem 0.6rem', 
                borderRadius: '999px',
                letterSpacing: '0.02em'
              }}>Let's chat</span>
            </div>
            <p style={{ color: '#94a3b8', margin: 0 }}>Let's build something exceptional together.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Get Started Now <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }} onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
