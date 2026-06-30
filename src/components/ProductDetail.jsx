import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, Building2, Zap, Clock, LineChart, Download, ArrowRight, 
  Settings, Users, FolderOpen, Map, Bell, ShieldCheck, Monitor, Smartphone, CheckCircle2, Megaphone, Check
} from 'lucide-react';
import nagarsevakImg from '../assets/nagarsevak_dashboard.png';

// Dynamic product data to power the page
const productData = {
  nagarsevak: {
    name: 'Nagarsevak Management',
    description: 'Complete Nagarsevak management system with workflow automation, tracking & reporting.',
    tags: [
      { icon: <Zap size={14} />, text: 'Smart Automation' },
      { icon: <Clock size={14} />, text: 'Real-time Tracking' },
      { icon: <LineChart size={14} />, text: 'Data Driven Insights' }
    ],
    image: nagarsevakImg,
    icon: <Building2 size={32} />,
    accentColor: '#ff5a00',
    keyFunctionalities: [
      {
        title: 'Complaint Management',
        icon: <Building2 size={24} />,
        desc: 'Citizens can raise complaints easily and track their status in real-time.'
      },
      {
        title: 'Task & Work Order Management',
        icon: <Settings size={24} />,
        desc: 'Create, assign and track tasks with automated workflows.'
      },
      {
        title: 'Citizen Management',
        icon: <Users size={24} />,
        desc: 'Maintain citizen records, profiles and communication in one place.'
      },
      {
        title: 'Department Management',
        icon: <Building2 size={24} />,
        desc: 'Manage all departments, roles and permissions efficiently.'
      },
      {
        title: 'Reports & Analytics',
        icon: <LineChart size={24} />,
        desc: 'Generate insightful reports and analyze performance with advanced dashboards.'
      },
      {
        title: 'Announcements',
        icon: <Megaphone size={24} />,
        desc: 'Send announcements and important updates to citizens instantly.'
      },
      {
        title: 'Document Management',
        icon: <FolderOpen size={24} />,
        desc: 'Store, manage and share important documents securely.'
      },
      {
        title: 'GIS Mapping Integration',
        icon: <Map size={24} />,
        desc: 'View and manage complaints & assets on interactive maps.'
      },
      {
        title: 'Notification & Alerts',
        icon: <Bell size={24} />,
        desc: 'Real-time email, SMS and in-app notifications for updates.'
      }
    ],
    versions: [
      {
        id: 'nagarsevak',
        version: 'Nagarsevak',
        label: 'Local level',

        status: 'Available',
        description: 'Complete management system tailored for Nagarsevaks to handle local ward issues, citizen complaints, and daily tasks.',
        whatsNew: [
          'Manage local citizen database',
          'Track and resolve ward-level complaints',
          'Broadcast local announcements',
          'Manage local funds and work orders'
        ],
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' }
        ]
      },
      { 
        id: 'amdar', 
        version: 'Amdar', 
        label: 'Constituency level',

        status: 'Available',
        description: 'Comprehensive platform for Amdars (MLAs) to manage their entire constituency, oversee multiple wards, and track large-scale projects.',
        whatsNew: [
          'Constituency-wide data analytics',
          'Multi-ward complaint aggregation',
          'Legislative work tracking',
          'Advanced fund allocation reporting'
        ],
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' }
        ]
      },
      { 
        id: 'khasdar', 
        version: 'Khasdar', 
        label: 'District level',

        status: 'Available',
        description: 'High-level dashboard for Khasdars (MPs) to monitor district progress, coordinate with multiple assembly constituencies, and manage national scheme implementations.',
        whatsNew: [
          'District-level performance tracking',
          'Central scheme integration',
          'Cross-constituency analytics',
          'Automated progress reporting'
        ],
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' }
        ]
      },
      { 
        id: 'minister', 
        version: 'Minister', 
        label: 'State level',

        status: 'Available',
        description: 'Executive command center for Ministers to oversee department-wide operations, state-level metrics, and high-priority administrative tasks.',
        whatsNew: [
          'State-wide real-time dashboard',
          'Departmental performance metrics',
          'High-priority task delegation',
          'Executive summaries and AI insights'
        ],
        compatibility: [
          { icon: <Monitor size={16} />, text: 'Web Application' }
        ]
      }
    ],
    stats: [
      { value: '50+', label: 'Cities Using', icon: <Building2 size={24} /> },
      { value: '10K+', label: 'Active Users', icon: <Users size={24} /> },
      { value: '1M+', label: 'Complaints Resolved', icon: <Users size={24} /> },
      { value: '98%', label: 'User Satisfaction', icon: <ShieldCheck size={24} /> }
    ]
  }
  // We can add data for voterpro, buildermanager, gimbooks here in the future
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id];
  
  const [activeVersion, setActiveVersion] = useState(product?.versions?.[0] || null);
  const [activeTier, setActiveTier] = useState('Advance');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div style={{ padding: '5rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', color: '#0f172a', fontFamily: "'Playfair Display', serif" }}>Product not found</h2>
        <button 
          onClick={() => navigate('/#products')}
          style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', background: '#ff5a00', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
        >
          Return to Products
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: '#fafbfc', minHeight: '100vh', paddingBottom: '4rem', paddingTop: '1rem', fontFamily: "'Inter', sans-serif" }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        
        {/* Back Button - Absolute Positioned to align with Logo */}
        <div style={{ position: 'absolute', top: 0, right: '1.5rem', height: '64px', display: 'flex', alignItems: 'center', zIndex: 10 }}>
          <button 
            onClick={() => navigate('/#products')}
            style={{ 
              background: 'white', 
              border: '1px solid #e2e8f0', 
              padding: '0.5rem 1rem', 
              borderRadius: '999px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: '#0f172a',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}
          >
            <ArrowLeft size={14} /> Back to Products
          </button>
        </div>

        {/* HERO SECTION */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          
          {/* Hero Left */}
          <div>
            <div style={{ 
              background: '#ff5a00', 
              color: 'white', 
              width: '64px', 
              height: '64px', 
              borderRadius: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '1.5rem',
              boxShadow: '0 8px 24px rgba(255, 90, 0, 0.3)'
            }}>
              {product.icon}
            </div>
            
            <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#0f172a', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              {product.name}
            </h1>
            
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '90%' }}>
              {product.description}
            </p>
            
            {/* Tags/Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {product.tags.map((tag, i) => (
                <div key={i} style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', 
                  background: 'white', border: '1px solid #e2e8f0', 
                  padding: '0.4rem 0.8rem', borderRadius: '999px', 
                  fontSize: '0.8rem', fontWeight: '600', color: '#ff5a00' 
                }}>
                  {tag.icon} <span style={{ color: '#475569' }}>{tag.text}</span>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate(`/get-started?product=${product.name}`)}
                style={{
                  background: '#ff5a00', color: 'white', border: 'none',
                  padding: '0.85rem 2rem', borderRadius: '999px',
                  fontSize: '0.95rem', fontWeight: '700',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(255, 90, 0, 0.3)',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Request Demo <ArrowRight size={16} />
              </button>
              <button 
                style={{
                  background: 'white', color: '#0f172a', border: '1px solid #e2e8f0',
                  padding: '0.85rem 2rem', borderRadius: '999px',
                  fontSize: '0.95rem', fontWeight: '700',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
              >
                Download Brochure <Download size={16} />
              </button>
            </div>
          </div>
          
          {/* Hero Right - Dashboard Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              background: 'white',
              borderRadius: '24px',
              padding: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', borderRadius: '12px' }} />
            </div>
          </div>
        </div>

        {/* KEY FUNCTIONALITIES */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: '#ff5a00', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>KEY FUNCTIONALITIES</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', marginTop: '0.5rem', marginBottom: '1rem' }}>Everything You Need, All in One Place</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            Powerful features designed to streamline operations and deliver better civic services.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem', 
          marginBottom: '6rem' 
        }}>
          {product.keyFunctionalities.map((feature, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '2rem 1.5rem', 
              borderRadius: '16px',
              border: '1px solid #f1f5f9',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.02)';
            }}
            >
              <div style={{ 
                width: '48px', height: '48px', 
                borderRadius: '12px', 
                background: '#fff7ed', 
                color: '#ff5a00', 
                display: 'flex', alignItems: 'center', justifyContent: 'center' 
              }}>
                {feature.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5', margin: 0 }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VERSIONS & CHANGELOG */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#ff5a00', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>VERSIONS</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', marginTop: '0.5rem', marginBottom: '1rem' }}>Product Versions & Changelog</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            We continuously update our platform to deliver the best experience.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '6rem' }}>
          {/* Versions Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {product.versions.map((ver, i) => (
              <button key={i} 
                onClick={() => setActiveVersion(ver)}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: activeVersion?.id === ver.id ? '#ff5a00' : 'white',
                  color: activeVersion?.id === ver.id ? 'white' : '#0f172a',
                  border: '1px solid',
                  borderColor: activeVersion?.id === ver.id ? '#ff5a00' : '#e2e8f0',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  boxShadow: activeVersion?.id === ver.id ? '0 10px 15px -3px rgba(255, 90, 0, 0.2)' : '0 2px 4px rgba(0,0,0,0.02)'
                }}
              >
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>
                    {ver.version} 
                  </div>
                  {ver.label && (
                    <div style={{ fontSize: '0.7rem', fontWeight: '600', opacity: 0.9 }}>{ver.label}</div>
                  )}
                </div>
              </button>
            ))}
            <button style={{
              background: 'white', border: '1px solid #e2e8f0', padding: '1rem',
              borderRadius: '12px', fontSize: '0.9rem', fontWeight: '600', color: '#0f172a',
              marginTop: '0.5rem', cursor: 'pointer', transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
            >
              View All Releases
            </button>
          </div>

          {/* Version Details */}
          {activeVersion && activeVersion.whatsNew ? (
            <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', margin: 0 }}>{activeVersion.version}</h3>
                    {activeVersion.label && <span style={{ background: '#fff7ed', color: '#ff5a00', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{activeVersion.label}</span>}
                  </div>
                  
                  {/* Premium Tier Tabs (Segmented Control) */}
                  <div style={{ 
                    display: 'inline-flex', 
                    background: '#f1f5f9', 
                    padding: '0.35rem', 
                    borderRadius: '12px', 
                    gap: '0.25rem', 
                    marginTop: '1.25rem',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
                  }}>
                    {['Basic', 'Pro', 'Advance'].map(tier => (
                      <button 
                        key={tier}
                        onClick={() => setActiveTier(tier)}
                        style={{
                          background: activeTier === tier ? 'white' : 'transparent',
                          color: activeTier === tier ? '#ff5a00' : '#64748b',
                          border: '1px solid',
                          borderColor: activeTier === tier ? 'rgba(0,0,0,0.05)' : 'transparent',
                          padding: '0.5rem 1.75rem',
                          borderRadius: '8px',
                          fontSize: '0.85rem',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: activeTier === tier ? '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' : 'none'
                        }}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>
                <span style={{ background: '#ecfdf5', color: '#10b981', fontSize: '0.8rem', fontWeight: '700', padding: '0.4rem 0.8rem', borderRadius: '999px' }}>{activeVersion.status}</span>
              </div>
              
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                {activeVersion.description}
              </p>
              
              <div style={{ display: 'flex', gap: '3rem' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '1.25rem' }}>What's New</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {activeVersion.whatsNew.slice(0, activeTier === 'Basic' ? 2 : activeTier === 'Pro' ? 3 : 4).map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#475569', lineHeight: '1.5' }}>
                        <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginTop: '2.5rem', marginBottom: '1.25rem' }}>Compatibility</h4>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {activeVersion.compatibility.map((comp, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', color: '#334155' }}>
                        {comp.icon} {comp.text}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Illustration Block representing the missing asset */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end', paddingBottom: '1rem' }}>
                  <div style={{ position: 'relative', width: '200px', height: '160px', background: '#f8fafc', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #cbd5e1' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#94a3b8' }}>
                      <LineChart size={48} strokeWidth={1.5} style={{ marginBottom: '1rem' }} />
                      <span style={{ fontSize: '0.75rem', fontWeight: '600' }}>Analytics Dashboard</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ) : (
             <div style={{ background: 'white', borderRadius: '20px', padding: '3rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
               <p>Detailed changelog for {activeVersion?.version} is currently unavailable.</p>
             </div>
          )}
        </div>

        {/* TRUST & IMPACT */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#ff5a00', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>TRUST & IMPACT</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a', marginTop: '0.5rem', marginBottom: '2rem' }}>Trusted by Cities, Loved by Citizens</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '3rem 0' }}>
            {product.stats.map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#fff7ed', color: '#ff5a00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA BANNER */}
        <div style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
          borderRadius: '24px', 
          padding: '3rem 4rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
        }}>
          {/* Subtle pattern overlay */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'rgba(255, 90, 0, 0.1)', border: '1px solid rgba(255, 90, 0, 0.2)', color: '#ff5a00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building2 size={40} />
            </div>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', color: 'white', marginBottom: '0.5rem' }}>Ready to Transform Civic Management?</h2>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', margin: 0 }}>Join 50+ cities already using {product.name} to deliver better services to their citizens.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
            <button 
              onClick={() => navigate(`/get-started?product=${product.name}`)}
              style={{
                background: '#ff5a00', color: 'white', border: 'none',
                padding: '0.85rem 2rem', borderRadius: '8px',
                fontSize: '1rem', fontWeight: '700',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                cursor: 'pointer', transition: 'transform 0.2s',
                boxShadow: '0 4px 14px rgba(255, 90, 0, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Request Demo <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => navigate('/contact')}
              style={{
                background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.85rem 2rem', borderRadius: '8px',
                fontSize: '1rem', fontWeight: '600',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                cursor: 'pointer', transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              Contact Sales <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
