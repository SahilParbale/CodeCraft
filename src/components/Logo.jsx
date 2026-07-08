import React from 'react';

const Logo = ({ dark = false, scale = 1, horizontal = true }) => {
  const textColor = dark ? '#ffffff' : '#0a0f1d';
  const bracketColor = '#0a0f1d'; // Always dark for contrast against the white circular face

  if (!horizontal) {
    // Vertical stacked layout
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        fontFamily: "'Outfit', sans-serif"
      }}>
        {/* SVG Icon */}
        <svg width="85" height="85" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, marginBottom: '8px' }}>
          <defs>
            <linearGradient id="logo-c-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="logo-c-dark-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#002d3d" />
              <stop offset="50%" stopColor="#0b1761" />
              <stop offset="100%" stopColor="#2d0552" />
            </linearGradient>
            <filter id="logo-shadow-v" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="3" flood-color="#0f172a" flood-opacity="0.25" />
            </filter>
          </defs>

          <path d="M 48.5 21.5 A 18 18 0 1 0 48.5 41.5" stroke="#000000" strokeWidth="10.5" strokeLinecap="round" fill="none" opacity="0.18" filter="blur(1.5px)" />
          <path d="M 48 20 A 18 18 0 1 0 48 40" stroke="url(#logo-c-dark-gradient)" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M 47.3 19.3 A 18 18 0 1 0 47.3 39.3" stroke="url(#logo-c-gradient)" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M 43 18.5 A 18 18 0 0 0 20 37.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.38" />

          <g filter="url(#logo-shadow-v)">
            <circle cx="10" cy="18" r="1.75" fill="#00d2ff" />
            <rect x="14.5" y="16.25" width="6" height="3.5" rx="1.75" fill="#00c3ff" />
            <rect x="4" y="22.25" width="8" height="3.5" rx="1.75" fill="#0080ff" />
            <circle cx="16.5" cy="24" r="1.75" fill="#0060ff" />
            <circle cx="8" cy="30" r="1.75" fill="#2563eb" />
            <rect x="12" y="28.25" width="8" height="3.5" rx="1.75" fill="#2563eb" />
            <rect x="6" y="34.25" width="8" height="3.5" rx="1.75" fill="#5040f0" />
            <circle cx="17.5" cy="36" r="1.75" fill="#7c3aed" />
            <circle cx="8" cy="42" r="1.75" fill="#7c3aed" />
            <rect x="12" y="40.25" width="7" height="3.5" rx="1.75" fill="#7c3aed" />
          </g>

          <circle cx="33" cy="30" r="13" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75" filter="drop-shadow(0 1.5px 3px rgba(0,0,0,0.15))" />
          <path d="M 29 26.5 L 25 30 L 29 33.5" stroke={bracketColor} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 34.5 23 L 31.5 37" stroke={bracketColor} strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <path d="M 35 26.5 L 39 30 L 35 33.5" stroke={bracketColor} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>

        {/* Text Group */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.08))'
        }}>
          <div style={{ fontSize: '1.95rem', fontWeight: '800', lineHeight: '1', letterSpacing: '-0.03em', display: 'flex' }}>
            <span style={{ color: textColor }}>CODE</span>
            <span style={{ background: 'linear-gradient(90deg, #2563eb 0%, #00d2ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>CRAFT</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', width: '100%', maxWidth: '170px' }}>
            <div style={{ height: '2px', width: '32px', background: 'linear-gradient(90deg, #2563eb, #00d2ff)', borderRadius: '999px' }}></div>
            <span style={{ fontSize: '0.72rem', fontWeight: '800', letterSpacing: '0.45em', color: textColor, paddingLeft: '0.45em', lineHeight: '1' }}>SOLUTIONS</span>
            <div style={{ height: '2px', width: '32px', background: 'linear-gradient(90deg, #00d2ff, #2563eb)', borderRadius: '999px' }}></div>
          </div>
          
          <div style={{ fontSize: '0.42rem', fontWeight: '800', letterSpacing: '0.08em', color: dark ? '#94a3b8' : '#475569', marginTop: '8px', textAlign: 'center', whiteSpace: 'nowrap' }}>
            BUILDING <span style={{ color: '#2563eb' }}>CODE.</span> CRAFTING <span style={{ color: '#2563eb' }}>SOLUTIONS.</span> CREATING <span style={{ color: '#00d2ff' }}>IMPACT.</span>
          </div>
        </div>
      </div>
    );
  }

  // Default Horizontal layout
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      transform: `scale(${scale})`,
      transformOrigin: 'left center',
      fontFamily: "'Outfit', sans-serif"
    }}>
      {/* SVG Icon */}
      <svg width="48" height="48" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <defs>
          <linearGradient id="logo-c-gradient-h" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="logo-c-dark-gradient-h" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#002d3d" />
            <stop offset="50%" stopColor="#0b1761" />
            <stop offset="100%" stopColor="#2d0552" />
          </linearGradient>
          <linearGradient id="logo-particle-gradient-h" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <filter id="logo-shadow-h" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="#0f172a" flood-opacity="0.25" />
          </filter>
        </defs>

        <path d="M 48.5 21.5 A 18 18 0 1 0 48.5 41.5" stroke="#000000" strokeWidth="10.5" strokeLinecap="round" fill="none" opacity="0.18" filter="blur(1.5px)" />
        <path d="M 48 20 A 18 18 0 1 0 48 40" stroke="url(#logo-c-dark-gradient-h)" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M 47.3 19.3 A 18 18 0 1 0 47.3 39.3" stroke="url(#logo-c-gradient-h)" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M 43 18.5 A 18 18 0 0 0 20 37.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.38" />

        <g filter="url(#logo-shadow-h)">
          <circle cx="10" cy="18" r="1.75" fill="#00d2ff" />
          <rect x="14.5" y="16.25" width="6" height="3.5" rx="1.75" fill="#00c3ff" />
          <rect x="4" y="22.25" width="8" height="3.5" rx="1.75" fill="#0080ff" />
          <circle cx="16.5" cy="24" r="1.75" fill="#0060ff" />
          <circle cx="8" cy="30" r="1.75" fill="#2563eb" />
          <rect x="12" y="28.25" width="8" height="3.5" rx="1.75" fill="#2563eb" />
          <rect x="6" y="34.25" width="8" height="3.5" rx="1.75" fill="#5040f0" />
          <circle cx="17.5" cy="36" r="1.75" fill="#7c3aed" />
          <circle cx="8" cy="42" r="1.75" fill="#7c3aed" />
          <rect x="12" y="40.25" width="7" height="3.5" rx="1.75" fill="#7c3aed" />
        </g>

        <circle cx="33" cy="30" r="13" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.75" filter="drop-shadow(0 1.5px 3px rgba(0,0,0,0.15))" />
        <path d="M 29 26.5 L 25 30 L 29 33.5" stroke={bracketColor} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M 34.5 23 L 31.5 37" stroke={bracketColor} strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <path d="M 35 26.5 L 39 30 L 35 33.5" stroke={bracketColor} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {/* Text Group - Center-Aligned Horizontally */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0 1.5px 2px rgba(0, 0, 0, 0.08))'
      }}>
        {/* CODECRAFT */}
        <div style={{ 
          fontSize: '1.4rem', 
          fontWeight: '800', 
          lineHeight: '1', 
          letterSpacing: '-0.03em', 
          display: 'flex'
        }}>
          <span style={{ color: textColor }}>CODE</span>
          <span style={{ 
            background: 'linear-gradient(90deg, #2563eb 0%, #00d2ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>CRAFT</span>
        </div>
        
        {/* SOLUTIONS dividers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', width: '100%' }}>
          <div style={{ height: '1.5px', flex: 1, background: 'linear-gradient(90deg, #2563eb, #00d2ff)', borderRadius: '999px' }}></div>
          <span style={{ 
            fontSize: '0.55rem', 
            fontWeight: '800', 
            letterSpacing: '0.35em', 
            color: textColor,
            paddingLeft: '0.35em',
            lineHeight: '1'
          }}>
            SOLUTIONS
          </span>
          <div style={{ height: '1.5px', flex: 1, background: 'linear-gradient(90deg, #00d2ff, #2563eb)', borderRadius: '999px' }}></div>
        </div>

        {/* Slogan */}
        <div style={{ 
          fontSize: '0.36rem', 
          fontWeight: '800', 
          letterSpacing: '0.08em', 
          color: dark ? '#94a3b8' : '#475569', 
          marginTop: '5px',
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }}>
          BUILDING <span style={{ color: '#2563eb' }}>CODE.</span> CRAFTING <span style={{ color: '#2563eb' }}>SOLUTIONS.</span> CREATING <span style={{ color: '#00d2ff' }}>IMPACT.</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
