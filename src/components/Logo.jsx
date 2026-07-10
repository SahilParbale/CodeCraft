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
        {!dark ? (
          <img src="/logo-icon.jpg" alt="CodeCraft Logo" style={{ width: '120px', height: '120px', flexShrink: 0, marginBottom: '8px', mixBlendMode: 'multiply' }} />
        ) : (
          <img src="/logo-icon-dark.png" alt="CodeCraft Logo" style={{ width: '120px', height: '120px', flexShrink: 0, marginBottom: '8px' }} />
        )}

        {/* Text Group */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.08))'
        }}>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', lineHeight: '1', letterSpacing: '-0.03em', display: 'flex' }}>
            <span style={{ color: textColor }}>CODE</span>
            <span style={{ background: 'linear-gradient(90deg, #2563eb 0%, #00d2ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>CRΛFT</span>
          </div>
          
          {/* SOLUTIONS dividers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', width: '100%' }}>
            <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #2563eb, #00d2ff)', borderRadius: '999px' }}></div>
            <span style={{ fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.45em', color: textColor, paddingLeft: '0.45em', lineHeight: '1' }}>SOLUTIONS</span>
            <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #00d2ff, #2563eb)', borderRadius: '999px' }}></div>
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
      gap: '16px',
      transform: `scale(${scale})`,
      transformOrigin: 'left center',
      fontFamily: "'Outfit', sans-serif"
    }}>
      {!dark ? (
        <img src="/logo-icon.jpg" alt="CodeCraft Logo" style={{ width: '72px', height: '72px', flexShrink: 0, mixBlendMode: 'multiply' }} />
      ) : (
        <img src="/logo-icon-dark.png" alt="CodeCraft Logo" style={{ width: '72px', height: '72px', flexShrink: 0 }} />
      )}

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
          fontSize: '1.9rem', 
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
          }}>CRΛFT</span>
        </div>
        
        {/* SOLUTIONS dividers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', width: '100%' }}>
          <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #2563eb, #00d2ff)', borderRadius: '999px' }}></div>
          <span style={{ 
            fontSize: '0.65rem', 
            fontWeight: '800', 
            letterSpacing: '0.35em', 
            color: textColor,
            paddingLeft: '0.35em',
            lineHeight: '1'
          }}>
            SOLUTIONS
          </span>
          <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, #00d2ff, #2563eb)', borderRadius: '999px' }}></div>
        </div>


      </div>
    </div>
  );
};

export default Logo;
