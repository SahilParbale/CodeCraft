import React from 'react';
import { Shield, Zap, Code, Users } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Advisory Foundation',
      desc: 'CodeCraft was established by three veteran systems architects with the goal of bringing robust enterprise-level software design to growing tech startups.'
    },
    {
      year: '2023',
      title: 'Cloud Orchestration Expansion',
      desc: 'Launched our DevOps and cloud Migration division, helping 30+ client companies move monolithic architectures into resilient, auto-scaling Kubernetes clusters.'
    },
    {
      year: '2025',
      title: 'AI Engineering and LLMOps Integration',
      desc: 'Began integrating semantic vector models and automated LLM pipelines, scaling capabilities to deliver high-performance intelligence services.'
    }
  ];

  const values = [
    {
      icon: <Zap size={18} style={{ color: 'var(--accent-primary)' }} />,
      title: 'Performance First',
      desc: 'We treat loading speed and compute optimization as absolute features, not minor afterthoughts.'
    },
    {
      icon: <Shield size={18} style={{ color: 'var(--accent-primary)' }} />,
      title: 'Security by Design',
      desc: 'Adhering to strict Zero Trust specifications, secure data hashing, and credential isolation patterns.'
    },
    {
      icon: <Code size={18} style={{ color: 'var(--accent-primary)' }} />,
      title: 'Clean Architecture',
      desc: 'Source code engineered to be modular, typed, and documented, allowing your internal teams to scale seamlessly.'
    },
    {
      icon: <Users size={18} style={{ color: 'var(--accent-primary)' }} />,
      title: 'Transparent Collaboration',
      desc: 'Direct channels with engineers, frequent milestones, and atomic git check-ins keep you aligned.'
    }
  ];

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: 0 }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-tag">Our Profile</span>
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">
            We are a squad of senior engineers, UX strategists, and cloud architects who build software systems that scale.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Info & Values */}
          <div>
            <h3 className="about-intro-title">Crafting solutions for complex technological challenges.</h3>
            <p className="about-desc" style={{ marginBottom: '1.25rem' }}>
              We skip generic templates and bloated abstractions. Instead, we write focused, robust code specifically tailored to solve your operational bottlenecks, transaction traffic, and UI/UX challenges.
            </p>

            <div className="values-grid">
              {values.map((val, index) => (
                <div key={index} className="glass-card value-card">
                  <h4 className="value-title">
                    {val.icon} {val.title}
                  </h4>
                  <p className="value-desc">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Timeline Journey */}
          <div>
            <h3 className="about-intro-title" style={{ marginBottom: '1.5rem' }}>Our Journey Milestones</h3>
            <div className="journey-timeline">
              {milestones.map((ms, index) => (
                <div key={index} className="journey-milestone">
                  <span className="journey-dot"></span>
                  <span className="journey-year">{ms.year}</span>
                  <h4 className="journey-title">{ms.title}</h4>
                  <p className="journey-desc">{ms.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
