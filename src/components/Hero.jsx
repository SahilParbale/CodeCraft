import React, { useState } from 'react';
import { PlayCircle, ShieldCheck, Zap, Clock, Briefcase, Users, Award, Code, Smartphone, BarChart3, Cloud, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Hero = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25; 
    const y = -(e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x, y });
  };
  
  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleActionClick = (target) => {
    if (target.startsWith('/')) {
      navigate(target);
      return;
    }
    const element = document.getElementById(target);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section" style={{ padding: '3.5rem 0 4.5rem 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decor */}
      <div className="bg-wave-pattern"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem' }}>
          
          {/* Left Content */}
          <div style={{ flex: '1 1 500px' }} className="animate-fade-right">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 1.25rem',
              background: '#fcf8f5',
              border: '1px solid rgba(255, 90, 0, 0.15)',
              borderRadius: '999px',
              color: 'var(--accent-primary)',
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem'
            }}>
              <span style={{ color: 'var(--accent-primary)', fontSize: '0.7rem' }}>◀</span> WE ARE CODE CRAFT
            </div>
            
            <h1 className="section-title" style={{ fontSize: '3.6rem', fontWeight: '900', marginBottom: '1.25rem', lineHeight: '1.15', color: '#0f172a' }}>
              We Build Software That Moves Your <br/>
              <span style={{ color: '#ff5a00' }}>Business Forward.</span>
            </h1>
            
            <p className="section-subtitle" style={{ fontSize: '1.05rem', marginBottom: '2rem', maxWidth: '520px', color: 'var(--text-secondary)' }}>
              Custom digital solutions that help startups and enterprises streamline operations, accelerate growth and stay ahead in a competitive world.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <button onClick={() => handleActionClick('contact')} className="btn btn-primary" style={{ borderRadius: '999px', padding: '0.8rem 2.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Start Your Project <span style={{ fontSize: '1.1rem' }}>➔</span>
              </button>
              <button 
                onClick={() => handleActionClick('products')} 
                className="btn btn-secondary" 
                style={{ 
                  borderRadius: '999px', 
                  border: '1px solid #e2e8f0', 
                  background: 'white', 
                  boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 2.2rem'
                }}
              >
                See Our Work 
                <span style={{ 
                  border: '1px solid #94a3b8', 
                  borderRadius: '50%', 
                  width: '20px', 
                  height: '20px', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginLeft: '2px'
                }}>
                  <span style={{ fontSize: '0.7rem', marginTop: '-1px' }}>➔</span>
                </span>
              </button>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', background: '#ecfdf5', borderRadius: '50%', color: '#10b981' }}>✓</span> Secure & Scalable
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>
                <Zap size={18} style={{ color: '#ff5a00' }} fill="#ff5a00" /> Agile & Reliable
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>
                <Clock size={18} style={{ color: '#ff5a00' }} /> On-Time Delivery
              </div>
            </div>
          </div>
          
          {/* Right Content - Mockup Area */}
          {/* Right Content - Mockup Area */}
          <div 
            style={{ flex: '1 1 500px', position: 'relative', height: '500px', cursor: 'pointer' }} 
            className="animate-fade-up"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            
            {/* The Laptop */}
            <div style={{
              position: 'absolute',
              top: '12%',
              left: '10%',
              width: '80%',
              height: '58%',
              background: '#090d16',
              borderRadius: '16px',
              boxShadow: mousePos.x || mousePos.y ? '0 35px 60px rgba(255,90,0,0.15)' : '0 25px 50px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              color: 'white',
              zIndex: 2,
              border: '4px solid #1e293b',
              borderBottomWidth: '12px',
              backgroundImage: 'radial-gradient(circle at top right, rgba(255,90,0,0.1), transparent)',
              transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
              transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease'
            }}>
              <Logo dark={true} scale={0.85} />
              <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'white', marginBottom: '0.4rem', lineHeight: '1.2' }}>Building Digital Success</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  Powering <span style={{ color: '#ff5a00' }}>ideas</span> with <span style={{ color: '#ff5a00' }}>code.</span>
                </p>
              </div>
            </div>
 
            {/* Laptop Base */}
            <div style={{
              position: 'absolute',
              top: '69%',
              left: '5%',
              width: '90%',
              height: '14px',
              background: '#475569',
              borderRadius: '0 0 16px 16px',
              transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${15 + mousePos.y}deg)`,
              transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
              zIndex: 1
            }}></div>
 
            {/* Floating Rocket with Fire Trail */}
            <div className="animate-float" style={{ 
              position: 'absolute', 
              top: '-5%', 
              right: '-8%', 
              zIndex: 3, 
              filter: 'drop-shadow(0 15px 25px rgba(255,90,0,0.35))',
              transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)`,
              transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
            }}>
              <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Fire Trails */}
                <path d="M 35 90 C 25 95 15 105 10 115 C 20 110 30 100 35 90 Z" fill="#ff7a00" />
                <path d="M 40 85 C 32 90 22 98 18 106 C 26 102 34 94 40 85 Z" fill="#ffc000" />
                {/* Rocket Body */}
                <path d="M 45 75 L 85 35 C 95 25 105 25 110 10 C 95 15 95 25 85 35 L 45 75 Z" fill="white" />
                <path d="M 52 68 L 85 35 C 95 25 105 25 110 10 C 95 15 90 20 82 28 L 49 61 Z" fill="#f1f5f9" />
                {/* Nose Cone */}
                <path d="M 95 25 C 100 20 105 20 110 10 C 100 15 100 20 95 25 Z" fill="white" />
                {/* Left/Right Wings */}
                <path d="M 50 70 L 30 70 L 45 55 Z" fill="white" />
                <path d="M 70 50 L 70 30 L 55 45 Z" fill="white" />
                {/* Window */}
                <circle cx="75" cy="45" r="6" fill="#0f172a" />
                <circle cx="75" cy="45" r="3" fill="#ff5a00" />
              </svg>
            </div>
            
            {/* Code Tag Card */}
            <div style={{
              position: 'absolute', top: '15%', left: '-2%', zIndex: 3,
              transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)`,
              transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
            }}>
              <div className="glass-card animate-float-slow" style={{ 
                padding: '1.25rem', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' 
              }}>
                <Code size={28} style={{ color: '#0f172a' }} />
              </div>
            </div>
            
            {/* Phone Card */}
            <div style={{
              position: 'absolute', top: '50%', left: '2%', zIndex: 3,
              transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)`,
              transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
            }}>
              <div className="glass-card animate-float-fast" style={{ 
                padding: '1.25rem', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' 
              }}>
                <Smartphone size={28} style={{ color: '#0f172a' }} />
              </div>
            </div>
            
            {/* Chart Card */}
            <div style={{
              position: 'absolute', top: '32%', right: '8%', zIndex: 3,
              transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`,
              transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
            }}>
              <div className="glass-card animate-float-slow" style={{ 
                padding: '1.5rem', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' 
              }}>
                <BarChart3 size={36} style={{ color: '#0f172a' }} />
              </div>
            </div>
            
            {/* Cloud Card */}
            <div style={{
              position: 'absolute', bottom: '15%', right: '-8%', zIndex: 3,
              transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)`,
              transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
            }}>
              <div className="glass-card animate-float" style={{ 
                padding: '1.25rem', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 15px 35px rgba(0,0,0,0.06)' 
              }}>
                <Cloud size={28} style={{ color: '#ff5a00' }} />
              </div>
            </div>
 
          </div>
        </div>

        {/* Floating Stats Bar */}
        <div className="glass-card animate-fade-up" style={{
          marginTop: '3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          padding: '2.5rem 2rem',
          borderRadius: '24px'
        }}>
          {/* Stat 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,90,0,0.1)', color: 'var(--accent-primary)', padding: '12px', borderRadius: '12px' }}>
              <Briefcase size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>4+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Projects Delivered</div>
            </div>
          </div>
          
          {/* Stat 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '12px', borderRadius: '12px' }}>
              <Users size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>3+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Happy Clients</div>
            </div>
          </div>
          
          {/* Stat 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', padding: '12px', borderRadius: '12px' }}>
              <Award size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>4+</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Years Experience</div>
            </div>
          </div>
          
          {/* Stat 4 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'rgba(168,85,247,0.1)', color: '#a855f7', padding: '12px', borderRadius: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>99%</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
