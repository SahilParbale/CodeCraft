import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Lock, Upload, FileText, Check, Phone, 
  Monitor, Terminal, Activity, ArrowUpRight, Cpu, HardDrive, 
  Database, Server, RefreshCw, LogOut, CheckCircle2, Play, Users, Briefcase
} from 'lucide-react';
import nagarsevakImg from '../assets/nagarsevak_dashboard.png';
import voterImg from '../assets/voter_dashboard.png';
import builderImg from '../assets/builder_dashboard.png';
import gimbooksImg from '../assets/gimbooks_dashboard.png';
import comingSoonImg from '../assets/coming_soon_placeholder.png';
import socialhubImg from '../assets/socialhub_cover.png';
import interviewAiImg from '../assets/interview_ai_dashboard.png';

const Products = () => {
  const navigate = useNavigate();
  const [activeSandbox, setActiveSandbox] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveSandbox(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeSandbox ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeSandbox]);

  const productsData = [
    {
      id: 'nagarsevak',
      name: 'Krishnaniti ERP System',
      category: 'Political Management',
      platform: 'Web / Cloud',
      description: 'A complete political management platform to streamline voter campaigns, office operations, and analytics.',
      image: nagarsevakImg,
      features: ['Complaint Management', 'Election Organization', 'Budget Tracking', 'Detailed Dashboards'],
      comingSoon: false
    },
    {
      id: 'buildermanager',
      name: 'Build Division AI',
      category: 'AI Construction Technology',
      platform: 'Web / AR / VR',
      description: 'An AI-powered platform transforming 2D architectural drawings into interactive 3D, AR, and VR experiences.',
      image: builderImg,
      features: ['2D to 3D Conversion', 'AR/VR Walkthroughs', 'AI Auto-Drafting', 'Interactive Models'],
      comingSoon: false
    },
    {
      id: 'socialhub',
      name: 'SocialHub',
      category: 'Social Media Management',
      platform: 'Web Application',
      description: 'A comprehensive, AI-powered social media management platform designed to unify your social presence and automate engagement.',
      image: socialhubImg,
      features: ['AI-Powered Suggestions', 'Real-Time Analytics', 'Smart Scheduling', 'Unified Inbox'],
      comingSoon: false
    },
    {
      id: 'interview_ai',
      name: 'InterviewAI',
      category: 'AI HR & Recruitment',
      platform: 'Web Application',
      description: 'An intelligent AI-driven interview platform that conducts mock interviews, evaluates body language, and provides instant performance scoring.',
      image: interviewAiImg,
      features: ['AI Mock Interviews', 'Real-time Scoring', 'Body Language Analysis', 'Custom Question Banks'],
      comingSoon: false
    },
    {
      id: 'voterpro',
      name: 'Election Management System',
      category: 'Electoral Data Analytics',
      platform: 'Web / App',
      description: 'Smart voter data management with verification, tracking, and deep demographic analytics.',
      image: voterImg,
      features: ['Electoral Roll Search', 'Booth & Sector Mapping', 'Data Deduplication', 'Demographic Analytics'],
      comingSoon: false
    },
    {
      id: 'gimbooks',
      name: 'GimBooks',
      category: 'Financial Tech',
      platform: 'Web / Cloud',
      description: 'Smart accounting and bookkeeping solution for modern businesses of every size.',
      image: gimbooksImg,
      features: ['Invoice & Billing', 'Expense Tracking', 'GST & Tax Compliance', 'Financial Reporting'],
      comingSoon: false
    },
    {
      id: 'ai-interview',
      name: 'AI Interview',
      category: 'HR Tech',
      platform: 'Web / AI',
      description: 'Automated AI-driven interview assessments to streamline hiring and evaluate candidate skills accurately.',
      image: comingSoonImg,
      features: ['Automated Screening', 'Skill Evaluation', 'Bias Reduction', 'Detailed Reports'],
      comingSoon: true
    },
    {
      id: 'ai-counselling',
      name: 'AI Counselling',
      category: 'Mental Health Tech',
      platform: 'Mobile / AI',
      description: 'Intelligent empathetic AI bots providing personalized 24/7 counseling and guidance.',
      image: comingSoonImg,
      features: ['24/7 Availability', 'Empathetic AI', 'Private Sessions', 'Mood Tracking'],
      comingSoon: true
    },
    {
      id: 'government-erp',
      name: 'Government ERP',
      category: 'Public Sector Tech',
      platform: 'Web / Cloud',
      description: 'Large scale enterprise resource planning engineered securely for government administrative departments.',
      image: comingSoonImg,
      features: ['Secure Architecture', 'Gov Scalability', 'Compliance Ready', 'Audit Trails'],
      comingSoon: true
    },
    {
      id: 'custom-erp',
      name: 'Custom ERP',
      category: 'Enterprise Tech',
      platform: 'Web / Cloud',
      description: 'Fully tailored, scalable ERP architecture designed from the ground up for massive corporate operations.',
      image: comingSoonImg,
      features: ['Custom Workflows', 'Legacy Integration', 'High Scalability', 'Advanced Analytics'],
      comingSoon: true
    }
  ];

  return (
    <section id="products" className="section" style={{ background: '#f8fafc', padding: '0 0 4.5rem 0' }}>
      
      <div className="container">
        <div className="section-header" style={{ paddingTop: '4.5rem', marginBottom: '3rem' }}>
          <span className="section-tag" style={{ background: '#f0f5ff', color: 'var(--accent-primary)', border: '1px solid rgba(37, 99, 235, 0.15)' }}>OUR PRODUCTS</span>
          <h2 className="section-title">Powerful Products. Real Impact.</h2>
          <p className="section-subtitle">
            Explore our ready-to-deploy platforms designed to simplify operations, boost efficiency and deliver measurable results.
          </p>
        </div>
      </div>

      {/* 2-Column Product Split Grid */}
      <div className="editorial-grid">
        {productsData.map((prod, idx) => {
          // Dynamic icon logic for the top 4 to match colors in screenshot
          let IconComponent = Briefcase;
          let iconColor = '#2563eb';
          let iconBg = '#eff6ff';
          
          if (idx === 1) { IconComponent = Monitor; iconColor = '#9333ea'; iconBg = '#faf5ff'; }
          else if (idx === 2) { IconComponent = Users; iconColor = '#10b981'; iconBg = '#f0fdf4'; }
          else if (idx === 3) { IconComponent = Activity; iconColor = '#ea580c'; iconBg = '#fff7ed'; }
          else if (idx > 3) { IconComponent = HardDrive; iconColor = '#64748b'; iconBg = '#f8fafc'; }

          return (
            <div 
              key={prod.id} 
              className="product-split-card animate-fade-up"
              onClick={() => {
                if (!prod.comingSoon) {
                  navigate('/product/' + prod.id);
                }
              }}
              style={{ 
                animationDelay: `${idx * 0.1}s`,
                cursor: prod.comingSoon ? 'default' : 'pointer'
              }}
            >
              {/* Left Side: Image */}
              <div className="psc-image-side">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="psc-image" 
                  style={
                    prod.name === 'Krishnaniti ERP System' ? { objectPosition: 'center top' } : 
                    prod.name === 'Gimbooks' ? { objectPosition: '30% center' } : 
                    {}
                  } 
                />
                {prod.comingSoon && (
                  <div className="ec-coming-soon-overlay">
                    <span className="ec-coming-soon-badge">COMING SOON</span>
                  </div>
                )}
              </div>

              {/* Right Side: Content */}
              <div className="psc-content-side">
                
                {/* Header: Icon + Title */}
                <div className="psc-header">
                  <div className="psc-icon" style={{ background: iconBg }}>
                    <IconComponent size={22} color={iconColor} />
                  </div>
                  <h3 className="psc-title">{prod.name}</h3>
                </div>

                {/* Badges */}
                <div className="psc-badges">
                  <span className="psc-badge category-badge">{prod.category}</span>
                  <span className="psc-badge platform-badge">{prod.platform}</span>
                </div>

                {/* Description */}
                <p className="psc-description">{prod.description}</p>

                {/* Features List */}
                <ul className="psc-features-list">
                  {prod.features.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="psc-check-icon" style={{ color: iconColor }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions Footer */}
                <div className="psc-actions">
                  <button 
                    className="psc-link-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!prod.comingSoon) {
                        navigate(`/get-started?product=${prod.name}`);
                      }
                    }}
                    disabled={prod.comingSoon}
                  >
                    Request Demo <ArrowRight size={16} />
                  </button>
                  <button 
                    className="psc-solid-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!prod.comingSoon) {
                        navigate('/product/' + prod.id);
                      }
                    }}
                    disabled={prod.comingSoon}
                  >
                    View Details
                  </button>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .editorial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          width: 100%;
          max-width: 1350px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .product-split-card {
          display: flex;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .product-split-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.08);
          border-color: rgba(37, 99, 235, 0.2);
        }

        .psc-image-side {
          flex: 1.1;
          padding: 0;
          background: #f8fafc;
          display: flex;
          align-items: stretch;
          justify-content: center;
          position: relative;
          border-right: 1px solid #f1f5f9;
        }

        .psc-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left center;
        }

        .psc-content-side {
          flex: 0.9;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
        }

        .psc-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .psc-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .psc-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          text-transform: uppercase;
          line-height: 1.2;
        }

        .psc-badges {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .psc-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          text-transform: uppercase;
        }
        
        .category-badge { background: #eff6ff; color: #2563eb; }
        .platform-badge { background: #f0fdf4; color: #16a34a; }

        .psc-description {
          font-size: 0.8rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .psc-features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .psc-features-list li {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: #334155;
          font-weight: 500;
        }

        .psc-check-icon {
          flex-shrink: 0;
        }

        .psc-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          border-top: 1px solid #f1f5f9;
          padding-top: 1rem;
        }

        .psc-link-btn {
          background: transparent;
          border: none;
          color: #2563eb;
          font-weight: 700;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          cursor: pointer;
          padding: 0;
          transition: gap 0.2s, color 0.2s;
        }

        .psc-link-btn:hover:not(:disabled) { 
          gap: 0.5rem; 
          color: #1d4ed8; 
        }

        .psc-solid-btn {
          background: #2563eb;
          color: #ffffff;
          border: none;
          padding: 0.4rem 1rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }

        .psc-solid-btn:hover:not(:disabled) { 
          background: #1d4ed8; 
          transform: translateY(-1px);
        }

        .psc-solid-btn:disabled, .psc-link-btn:disabled { 
          opacity: 0.5; 
          cursor: not-allowed; 
        }

        .ec-coming-soon-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        
        .ec-coming-soon-badge {
          background: #0f172a;
          color: white;
          padding: 0.5rem 1rem;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          border-radius: 4px;
        }

        @media (max-width: 1280px) {
          .psc-content-side { padding: 1.5rem; }
          .psc-image-side { padding: 0; }
        }

        @media (max-width: 1024px) {
          .editorial-grid { grid-template-columns: 1fr; max-width: 800px; }
          .product-split-card { flex-direction: row; }
          .psc-image-side { padding: 0; }
          .psc-content-side { padding: 1.5rem; }
        }

        @media (max-width: 768px) {
          .product-split-card { flex-direction: column; }
          .psc-image-side { border-right: none; border-bottom: 1px solid #f1f5f9; height: 250px; }
          .psc-header { align-items: flex-start; }
          .psc-actions { flex-direction: column; gap: 1rem; align-items: stretch; }
          .psc-solid-btn, .psc-link-btn { justify-content: center; width: 100%; }
        }
      `}</style>


      {activeSandbox && (
        <SandboxModal 
          product={activeSandbox} 
          onClose={() => setActiveSandbox(null)} 
          onDemoRequest={(prodName) => {
            setActiveSandbox(null);
            navigate(`/get-started?product=${prodName}`);
          }}
        />
      )}
    </section>
  );
};

/* SANDBOX WRAPPER MODAL */
const SandboxModal = ({ product, onClose, onDemoRequest }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'modalFadeIn 0.3s ease'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        height: '90vh',
        background: '#ffffff',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        
        {/* Sandbox Top Control Bar */}
        <div style={{
          background: '#0f172a',
          color: '#ffffff',
          padding: '0.85rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #1e293b'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              background: '#2563eb',
              fontSize: '0.65rem',
              fontWeight: '800',
              padding: '0.2rem 0.5rem',
              borderRadius: '4px',
              letterSpacing: '0.05em'
            }}>SANDBOX ENVIRONMENT</span>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'monospace' }}>
              {product === 'craftportal' && 'craftportal-dashboard.codecraft.run'}
              {product === 'centrallink' && 'centrallink-bridge.codecraft.run'}
              {product === 'monitorcraft' && 'monitorcraft-node-01.codecraft.run'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={() => onDemoRequest(
                product === 'craftportal' ? 'CraftPortal' : 
                product === 'centrallink' ? 'CentralLink' : 'MonitorCraft'
              )}
              style={{
                background: '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '0.4rem 1rem',
                fontSize: '0.75rem',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Request Live Demo
            </button>
            <button 
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#94a3b8',
                border: 'none',
                borderRadius: '6px',
                padding: '0.4rem 0.8rem',
                fontSize: '0.75rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Exit <LogOut size={12} />
            </button>
          </div>
        </div>

        {/* Sandbox Workspace Area */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden', background: '#f8fafc' }}>
          {product === 'craftportal' && <CraftPortalSandbox />}
          {product === 'centrallink' && <CentralLinkSandbox />}
          {product === 'monitorcraft' && <MonitorCraftSandbox />}
        </div>

      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

/* 1. CRAFTPORTAL SANDBOX ENVIRONMENT */
const CraftPortalSandbox = () => {
  const [files, setFiles] = useState([
    { name: 'NDA_Signed_2026.pdf', size: '1.2 MB', date: 'June 10, 2026', status: 'Verified' },
    { name: 'SystemArchitecture_v3.2.pdf', size: '8.4 MB', date: 'June 12, 2026', status: 'Verified' },
    { name: 'Database_Schema_v1.0.sql', size: '250 KB', date: 'June 13, 2026', status: 'Pending Review' }
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFiles(current => [
              ...current,
              { 
                name: 'RequirementSpecification_Final.docx', 
                size: '1.8 MB', 
                date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), 
                status: 'Verified' 
              }
            ]);
            setIsUploading(false);
          }, 400);
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  return (
    <div className="sandbox-layout" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar */}
      <div className="sandbox-sidebar">
        <div style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: '#e2e8f0', letterSpacing: '0.05em' }}>
          CraftPortal <span style={{ color: '#2563eb' }}>v2.4</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ background: '#1e293b', color: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>Workspace</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>Milestones</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>Billing</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>Team Access</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>Settings</div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="sandbox-main" style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Welcome */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', fontFamily: "'Inter', sans-serif" }}>Acme Corp Project Workspace</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Upload project specs or track file approvals safely.</p>
          </div>
          <span style={{ fontSize: '0.75rem', color: '#2563eb', background: '#f0f5ff', padding: '0.25rem 0.6rem', borderRadius: '9999px', fontWeight: '600', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
            ● Encrypted Pipeline Active
          </span>
        </div>

        {/* Milestone Tracker widget */}
        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontWeight: '700', fontSize: '0.85rem', color: '#1e293b' }}>Active Project Milestone: Phase 3 (Development)</span>
            <span style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: '600' }}>70% complete</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {['Discovery & UX', 'Architecture Design', 'Sprint Execution', 'Deployment & QA'].map((phase, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                <div style={{ height: '6px', background: idx <= 2 ? '#2563eb' : '#e2e8f0', borderRadius: '3px', marginBottom: '0.5rem' }}></div>
                <div style={{ fontSize: '0.75rem', fontWeight: idx === 2 ? '700' : '500', color: idx <= 2 ? '#0f172a' : '#94a3b8' }}>
                  {idx + 1}. {phase}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid: Shared Files & File Upload */}
        <div className="grid-two-col">
          {/* File Cabinet */}
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.25rem' }}>
            <h5 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem', fontFamily: "'Inter', sans-serif" }}>Secure File Cabinet</h5>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {files.map((file, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FileText size={20} style={{ color: '#2563eb' }} />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155' }}>{file.name}</div>
                      <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{file.size} • Uploaded {file.date}</div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    color: file.status === 'Verified' ? '#2563eb' : '#eab308',
                    background: file.status === 'Verified' ? '#f0f5ff' : '#fef9c3',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px'
                  }}>{file.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Upload Zone */}
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h5 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem', fontFamily: "'Inter', sans-serif" }}>Upload Deliverable</h5>
            
            {!isUploading ? (
              <div 
                onClick={simulateUpload}
                style={{
                  border: '2px dashed #cbd5e1',
                  borderRadius: '12px',
                  padding: '2.5rem 1rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: '#f8fafc'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.background = 'rgba(37, 99, 235, 0.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.background = '#f8fafc';
                }}
              >
                <Upload size={32} style={{ color: '#94a3b8', marginBottom: '0.75rem', margin: '0 auto 0.75rem' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155' }}>Click to simulate upload</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '0.25rem' }}>Uploads specification for review</div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <RefreshCw size={24} className="spin-icon" style={{ color: '#2563eb', margin: '0 auto 1rem', animation: 'spin 1s linear infinite' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#334155' }}>Uploading file...</div>
                <div style={{ width: '100%', background: '#e2e8f0', height: '6px', borderRadius: '3px', marginTop: '0.75rem', overflow: 'hidden' }}>
                  <div style={{ width: `${uploadProgress}%`, height: '100%', background: '#2563eb', transition: 'width 0.2s ease' }}></div>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem' }}>{uploadProgress}% completed</div>
              </div>
            )}
            
            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </div>

      </div>
    </div>
  );
};

/* 2. CENTRALLINK BRIDGE SANDBOX ENVIRONMENT */
const CentralLinkSandbox = () => {
  const [routingState, setRoutingState] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const toggleRouting = () => {
    setRoutingState(prev => !prev);
    setToastMessage(routingState ? 'Traffic routing shifted to Aachen SIP-1' : 'Traffic auto-routing and load balancing enabled across Aachen & India SIP links!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const dummyCallLogs = [
    { time: '14:52:10', caller: 'Amit Sharma', num: '+91 98230 45678', dest: 'Support Desk', dur: '3m 15s', route: 'Aachen-SIP-1', status: 'Completed' },
    { time: '14:50:05', priya: true, caller: 'Priya Patel', num: '+91 80234 56789', dest: 'Billing Team', dur: '8m 42s', route: 'Aachen-SIP-1', status: 'Completed' },
    { time: '14:48:20', caller: 'Vikram Singh', num: '+91 91123 45670', dest: 'Sales Germany', dur: '1m 05s', route: 'Transit-SIP-2', status: 'No Answer' },
    { time: '14:45:12', caller: 'Rajesh Kumar', num: '+91 88998 77665', dest: 'Tech Escalation', dur: '12m 30s', route: 'Aachen-SIP-1', status: 'Completed' },
    { time: '14:41:00', caller: 'Sneha Reddy', num: '+91 77665 54433', dest: 'Support Desk', dur: '4m 50s', route: 'Transit-SIP-2', status: 'Completed' }
  ];

  return (
    <div className="sandbox-layout" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Left Sidebar */}
      <div className="sandbox-sidebar">
        <div style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: '#e2e8f0', letterSpacing: '0.05em' }}>
          CentralLink Bridge
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ background: '#1e293b', color: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>Call Router</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>SIP Trunks</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>Analytics</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>Integrations</div>
        </div>
      </div>

      {/* Main Panel */}
      <div className="sandbox-main" style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
        {/* Toast Notification */}
        {toastMessage && (
          <div style={{
            position: 'absolute',
            top: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#0f172a',
            color: '#ffffff',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontSize: '0.85rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            border: '1px solid rgba(37, 99, 235, 0.2)'
          }}>
            <span style={{ color: '#2563eb' }}>✓</span> {toastMessage}
          </div>
        )}

        {/* Header metrics */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a', fontFamily: "'Inter', sans-serif" }}>SIP Call Telemetry & Router</h4>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Active call bridging for VoIP endpoints.</p>
          </div>
          
          {/* Switch toggle control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#ffffff', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#475569' }}>Auto-Route India-EU</span>
            <div 
              onClick={toggleRouting}
              style={{
                width: '42px',
                height: '22px',
                background: routingState ? '#2563eb' : '#cbd5e1',
                borderRadius: '11px',
                padding: '2px',
                cursor: 'pointer',
                transition: 'background 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: routingState ? 'flex-end' : 'flex-start'
              }}
            >
              <div style={{ width: '18px', height: '18px', background: '#ffffff', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}></div>
            </div>
          </div>
        </div>

        {/* Row metrics cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            { label: 'Active Channels', val: '12 / 32', color: '#2563eb', desc: 'Trunks in operation' },
            { label: 'Call Success Rate', val: '99.82%', color: '#2563eb', desc: 'Last 24 hours' },
            { label: 'Avg Call Duration', val: '4m 12s', color: '#2563eb', desc: 'Queue averages' },
            { label: 'Jitter / Latency', val: '14 ms', color: '#2563eb', desc: 'Network QoS rating' }
          ].map((card, i) => (
            <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500', marginBottom: '0.25rem' }}>{card.label}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: card.color }}>{card.val}</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '0.2rem' }}>{card.desc}</div>
            </div>
          ))}
        </div>

        {/* Live Call Logs - Dummy Indian Records */}
        <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h5 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0f172a', marginBottom: '1rem', fontFamily: "'Inter', sans-serif" }}>Recent Indian Call Records</h5>
          
          <div style={{ overflowX: 'auto', flex: 1 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.8rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', fontWeight: '600' }}>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Time</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Caller Details</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>SIP Node</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Duration</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Routing Route</th>
                  <th style={{ padding: '0.5rem 0.75rem' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {dummyCallLogs.map((log, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155' }}>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace' }}>{log.time}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <strong>{log.caller}</strong>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace' }}>{log.num}</div>
                    </td>
                    <td style={{ padding: '0.75rem' }}>{log.dest}</td>
                    <td style={{ padding: '0.75rem' }}>{log.dur}</td>
                    <td style={{ padding: '0.75rem', fontFamily: 'monospace', color: '#64748b' }}>{log.route}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <span style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontSize: '0.7rem',
                        color: log.status === 'Completed' ? '#2563eb' : '#ef4444',
                        background: log.status === 'Completed' ? '#f0f5ff' : '#fef2f2'
                      }}>{log.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

/* 3. MONITORCRAFT SANDBOX ENVIRONMENT */
const MonitorCraftSandbox = () => {
  const [cpuUsage, setCpuUsage] = useState(38);
  const [logs, setLogs] = useState([
    { time: '14:52:05', type: 'INFO', msg: 'System check: Aachen and Mumbai nodes are online & operating fully.' },
    { time: '14:50:11', type: 'WARN', msg: 'SSL Certificate for app.codecraft.run expires in 14 days. Auto-renew scheduled.' },
    { time: '14:48:00', type: 'INFO', msg: 'Nginx load balancer config successfully synced across all regions.' },
    { time: '14:45:30', type: 'INFO', msg: 'Cron DB backup completed: backup-db-20260616.tar.gz uploaded (24.5 GB).' }
  ]);

  // Simulate animated CPU and metrics ticking
  useEffect(() => {
    const interval = setInterval(() => {
      // Tick CPU usage
      const newCpu = Math.floor(Math.random() * (55 - 22 + 1)) + 22;
      setCpuUsage(newCpu);

      // Randomly append a server check log
      if (Math.random() > 0.6) {
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];
        const randomLogs = [
          'Ping test to db-replica-02: 12ms latency.',
          'CPU metric verified on prod-app-01.',
          'Static cache assets invalidated and refreshed.',
          'Heartbeat packet broadcasted to all node clusters.'
        ];
        const msg = randomLogs[Math.floor(Math.random() * randomLogs.length)];
        setLogs(prev => [
          { time: timeStr, type: 'INFO', msg },
          ...prev.slice(0, 5)
        ]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const servers = [
    { name: 'de-prod-app-01', location: 'Aachen, DE', cpu: `${cpuUsage}%`, ram: '5.2 / 16 GB', disk: '48%', active: true },
    { name: 'in-prod-app-02', location: 'Mumbai, IN', cpu: '42%', ram: '6.1 / 16 GB', disk: '32%', active: true },
    { name: 'de-db-cluster-01', location: 'Aachen, DE', cpu: '12%', ram: '12.8 / 32 GB', disk: '64%', active: true },
    { name: 'in-db-replica-02', location: 'Mumbai, IN', cpu: '8%', ram: '10.1 / 32 GB', disk: '28%', active: true }
  ];

  return (
    <div className="sandbox-layout" style={{ background: '#0b0f19', color: '#94a3b8', fontFamily: 'monospace' }}>
      {/* Left Sidebar */}
      <div className="sandbox-sidebar" style={{ background: '#020617', borderRight: '1px solid #1e293b' }}>
        <div style={{ fontSize: '0.8rem', fontWeight: '800', color: '#f8fafc', letterSpacing: '0.05em' }}>
          MONITORCRAFT <span style={{ color: '#2563eb' }}>v1.2</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ background: '#1e293b', color: '#f8fafc', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer' }}>Server Nodes</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>Alarm Triggers</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>Log Analyzer</div>
          <div style={{ padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'not-allowed' }}>Settings</div>
        </div>
      </div>

      {/* Main Terminal Dashboard */}
      <div className="sandbox-main" style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Top telemetry state */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '1rem' }}>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#f8fafc', margin: 0, fontFamily: 'monospace' }}>Cluster Status Control Desk</h4>
            <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Active live tracking of CodeCraft client environments.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb', display: 'inline-block', animation: 'blink 1.5s infinite' }}></span>
            <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: '600' }}>SYS ACTIVE - ALL SYSTEMS GO</span>
          </div>
        </div>

        {/* Server Nodes Telemetry List */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          <div style={{ background: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: '700', marginBottom: '0.75rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.4rem' }}>
              PROVISIONED ACTIVE NODE CLUSTER
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {servers.map((srv, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px dashed #1e293b', paddingBottom: '0.5rem', fontSize: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Server size={14} style={{ color: '#2563eb' }} />
                    <span style={{ color: '#f8fafc', fontWeight: 'bold' }}>{srv.name}</span>
                    <span style={{ color: '#64748b' }}>({srv.location})</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <span>CPU: <strong style={{ color: idx === 0 ? '#2563eb' : '#f8fafc' }}>{srv.cpu}</strong></span>
                    <span>RAM: <strong style={{ color: '#f8fafc' }}>{srv.ram}</strong></span>
                    <span>Disk: <strong style={{ color: '#f8fafc' }}>{srv.disk}</strong></span>
                  </div>

                  <span style={{ color: '#2563eb', fontWeight: 'bold' }}>[ONLINE]</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Metrics Row: Ticking CPU Gauge & Live Terminal logs */}
        <div className="grid-two-col" style={{ minHeight: '220px' }}>
          
          {/* Gauges card */}
          <div style={{ background: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: '700', marginBottom: '1rem' }}>de-prod-app-01 CPU METRIC</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Cpu size={32} style={{ color: '#2563eb' }} />
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#f8fafc' }}>{cpuUsage}%</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Load Balancer Active</div>
                </div>
              </div>
            </div>
            
            {/* Visual ticking meter */}
            <div>
              <div style={{ width: '100%', background: '#1e293b', height: '10px', borderRadius: '5px', overflow: 'hidden', marginBottom: '0.5rem' }}>
                <div style={{ width: `${cpuUsage}%`, height: '100%', background: '#2563eb', transition: 'width 0.4s ease' }}></div>
              </div>
              <div style={{ fontSize: '0.65rem', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
                <span>0%</span>
                <span>50% (LIMIT)</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Log events terminal */}
          <div style={{ background: '#020617', border: '1px solid #1e293b', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: '700', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>SYSTEM EVENT STREAM</span>
              <span style={{ color: '#64748b', fontSize: '0.7rem' }}>Ticking live...</span>
            </div>
            
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.7rem', overflowY: 'auto' }}>
              {logs.map((log, i) => (
                <div key={i} style={{ lineHeight: '1.4' }}>
                  <span style={{ color: '#64748b' }}>[{log.time}]</span>{' '}
                  <span style={{ 
                    color: log.type === 'WARN' ? '#eab308' : '#2563eb', 
                    fontWeight: 'bold' 
                  }}>[{log.type}]</span>{' '}
                  <span style={{ color: '#cbd5e1' }}>{log.msg}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default Products;
