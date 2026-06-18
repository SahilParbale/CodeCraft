import React from 'react';

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="partners-title">Used by over 200+ companies</div>
        
        <div className="partners-logo-strip">
          {/* Enreach */}
          <div className="partner-logo-item" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: '700', fontSize: '1rem', letterSpacing: '-0.03em', color: '#64748b' }}>enreach</span>
          </div>

          {/* ServicePartner (Boxed badge) */}
          <div className="partner-logo-item" style={{ border: '1.5px solid #cbd5e1', borderRadius: '4px', padding: '0.1rem 0.5rem', display: 'flex', alignItems: 'center', height: '24px' }}>
            <span style={{ fontSize: '0.55rem', fontWeight: '800', color: '#64748b', fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ServicePartner</span>
          </div>

          {/* Sophos */}
          <div className="partner-logo-item">
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: '900', fontSize: '1.25rem', letterSpacing: '0.05em', color: '#64748b' }}>SOPHOS</span>
          </div>

          {/* Zebra */}
          <div className="partner-logo-item" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M3 5h2v14H3zm3 0h1v14H6zm3 0h3v14H9zm5 0h1v14h-1zm2 0h3v14h-3zm5 0h1v14h-1z"/>
            </svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: '800', fontSize: '0.95rem', letterSpacing: '0.05em', color: '#64748b' }}>ZEBRA</span>
          </div>

          {/* Enreach Solution Partner (Boxed badge) */}
          <div className="partner-logo-item" style={{ border: '1.5px solid #cbd5e1', borderRadius: '4px', padding: '0.1rem 0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '26px' }}>
            <span style={{ fontSize: '0.45rem', fontWeight: '700', color: '#94a3b8', lineHeight: '1' }}>enreach</span>
            <span style={{ fontSize: '0.45rem', fontWeight: '800', color: '#64748b', lineHeight: '1', marginTop: '1px' }}>Solution Partner</span>
          </div>

          {/* Microsoft Partner */}
          <div className="partner-logo-item" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            {/* 4 square grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', width: '14px', height: '14px' }}>
              <div style={{ background: '#64748b', width: '6px', height: '6px' }}></div>
              <div style={{ background: '#64748b', width: '6px', height: '6px' }}></div>
              <div style={{ background: '#64748b', width: '6px', height: '6px' }}></div>
              <div style={{ background: '#64748b', width: '6px', height: '6px' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748b' }}>Microsoft</span>
              <span style={{ fontSize: '0.65rem', fontWeight: '600', color: '#94a3b8' }}>Partner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
