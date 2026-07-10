import React from 'react';
import nagarsevakImg from '../assets/nagarsevak_dashboard.png';
import voterImg from '../assets/voter_dashboard.png';
import builderImg from '../assets/builder_dashboard.png';
import gimbooksImg from '../assets/gimbooks_dashboard.png';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section" style={{ background: '#ffffff', paddingBottom: '3rem' }}>
      {/* Background Grid Lines */}
      <div className="bg-grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif", fontWeight: '600', fontSize: '2.8rem' }}>
            Our Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', width: '100%', marginBottom: '3rem' }}>
          
          {/* Card 1: GovTech ERP System */}
          <div className="project-card-light" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src={nagarsevakImg} alt="GovTech ERP System" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="project-tag-pill">Local Governance</span>
            </div>
            
            <div className="project-detail-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span className="project-detail-label">Project Stack & Solutions</span>
              
              <div className="project-tech-badges-row">
                <span className="project-tech-badge-light">React & Supabase</span>
                <span className="project-tech-badge-light project-tech-badge-yellow">WhatsApp Bot</span>
                <span className="project-tech-badge-light project-tech-badge-blue">GovTech</span>
              </div>
              
              <h3 className="project-detail-title">GovTech ERP System</h3>
              <p className="project-detail-text" style={{ flex: 1 }}>
                A modern administrative portal helping local representatives digitize ward operations, resolve citizen complaints, and track budgets securely.
              </p>
              
              <div className="project-card-actions" style={{ marginTop: 'auto' }}>
                <button className="btn-project-view">View Project</button>
                <a href="#projects" className="project-detail-link" onClick={(e) => e.preventDefault()}>
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Election Management System */}
          <div className="project-card-light" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src={voterImg} alt="Election Management System" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="project-tag-pill">Political Tech</span>
            </div>
            
            <div className="project-detail-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span className="project-detail-label">Project Stack & Solutions</span>
              
              <div className="project-tech-badges-row">
                <span className="project-tech-badge-light">Data Analytics</span>
                <span className="project-tech-badge-light project-tech-badge-yellow">Predictive Modeling</span>
                <span className="project-tech-badge-light project-tech-badge-blue">Outreach</span>
              </div>
              
              <h3 className="project-detail-title">Election Management System</h3>
              <p className="project-detail-text" style={{ flex: 1 }}>
                Advanced voter analytics platform enabling deep demographic insights, interactive booth-level mapping, and targeted campaign outreach.
              </p>
              
              <div className="project-card-actions" style={{ marginTop: 'auto' }}>
                <button className="btn-project-view">View Project</button>
                <a href="#projects" className="project-detail-link" onClick={(e) => e.preventDefault()}>
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Build Division AI */}
          <div className="project-card-light" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', background: '#e2e8f0' }}>
              <img src={builderImg} alt="Build Division AI" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              <span className="project-tag-pill">Real Estate</span>
            </div>
            
            <div className="project-detail-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span className="project-detail-label">Project Stack & Solutions</span>
              
              <div className="project-tech-badges-row">
                <span className="project-tech-badge-light">ERP System</span>
                <span className="project-tech-badge-light project-tech-badge-yellow">Inventory tracking</span>
                <span className="project-tech-badge-light project-tech-badge-blue">Sales CRM</span>
              </div>
              
              <h3 className="project-detail-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Build Division AI
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  background: '#f59e0b',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Coming Soon</span>
              </h3>
              <p className="project-detail-text" style={{ flex: 1 }}>
                An end-to-end unified platform for real estate developers to track construction sites, manage raw materials, and automate buyer invoicing.
              </p>
              
              <div className="project-card-actions" style={{ marginTop: 'auto' }}>
                <button className="btn-project-view">View Project</button>
                <a href="#projects" className="project-detail-link" onClick={(e) => e.preventDefault()}>
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: Gimbooks */}
          <div className="project-card-light" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', background: '#e2e8f0' }}>
              <img src={gimbooksImg} alt="Gimbooks" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="project-tag-pill">Fintech</span>
            </div>
            
            <div className="project-detail-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span className="project-detail-label">Project Stack & Solutions</span>
              
              <div className="project-tech-badges-row">
                <span className="project-tech-badge-light">SaaS</span>
                <span className="project-tech-badge-light project-tech-badge-yellow">Invoicing</span>
                <span className="project-tech-badge-light project-tech-badge-blue">Accounting</span>
              </div>
              
              <h3 className="project-detail-title">Gimbooks</h3>
              <p className="project-detail-text" style={{ flex: 1 }}>
                A comprehensive financial platform for SMEs to create GST compliant invoices, manage inventory, generate e-way bills, and track expenses effortlessly.
              </p>
              
              <div className="project-card-actions" style={{ marginTop: 'auto' }}>
                <button className="btn-project-view">View Project</button>
                <a href="#projects" className="project-detail-link" onClick={(e) => e.preventDefault()}>
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Centered orange project button */}
        <button className="btn btn-primary" style={{ padding: '0.8rem 2.25rem', fontSize: '0.95rem' }}>
          See All Project &rarr;
        </button>

      </div>
    </section>
  );
};

export default Projects;
