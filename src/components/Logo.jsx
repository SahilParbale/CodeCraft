import React from 'react';

const Logo = ({ dark = false, scale = 1 }) => {
  const textColor = dark ? '#ffffff' : '#0f172a';
  
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      transform: `scale(${scale})`,
      transformOrigin: 'left center'
    }}>
      {/* Icon */}
      <svg width="85" height="85" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        {/* The 'C' */}
        <path d="M 48 20 A 18 18 0 1 0 48 40" stroke="#ff5a00" strokeWidth="8" strokeLinecap="round" fill="none" />
        
        {/* The '</>' */}
        <path d="M 30 24 L 24 30 L 30 36" stroke="#ff5a00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 36 21 L 32 39" stroke="#ff5a00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 38 24 L 44 30 L 38 36" stroke="#ff5a00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* The Particles */}
        <path d="M 6 18 L 9 18 M 13 18 L 18 18" stroke="#ff5a00" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 2 24 L 10 24 M 14 24 L 18 24" stroke="#ff5a00" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 8 30 L 12 30 M 16 30 L 18 30" stroke="#ff5a00" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 4 36 L 8 36 M 12 36 L 18 36" stroke="#ff5a00" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 10 42 L 18 42" stroke="#ff5a00" strokeWidth="3.5" strokeLinecap="round" />
      </svg>

      {/* Text Group */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* CODECRAFT */}
        <div style={{ 
          fontSize: '1.9rem', 
          fontWeight: '900', 
          lineHeight: '1', 
          letterSpacing: '0.05em', 
          fontFamily: "'Inter', sans-serif",
          display: 'flex'
        }}>
          <span style={{ color: textColor }}>CODE</span>
          <span style={{ color: '#ff5a00' }}>CRΛFT</span>
        </div>
        
        {/* — SOLUTIONS — */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
          <div style={{ height: '1px', flex: 1, background: '#ff5a00' }}></div>
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: '700', 
            letterSpacing: '0.45em', 
            color: textColor,
            fontFamily: "'Inter', sans-serif",
            paddingLeft: '4px' // Optical alignment for tracking
          }}>
            SOLUTIONS
          </span>
          <div style={{ height: '1px', flex: 1, background: '#ff5a00' }}></div>
        </div>
        
        {/* BUILDING CODE. CRAFTING SOLUTIONS. CREATING IMPACT. */}
        <div style={{ 
          fontSize: '0.42rem', 
          fontWeight: '800', 
          letterSpacing: '0.12em', 
          color: '#ff5a00', 
          marginTop: '6px',
          fontFamily: "'Inter', sans-serif",
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }}>
          BUILDING CODE. CRAFTING SOLUTIONS. CREATING IMPACT.
        </div>
      </div>
    </div>
  );
};

export default Logo;
