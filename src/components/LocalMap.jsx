import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import germanyMap from '../assets/germany_map.png';

const LocalMap = () => {
  return (
    <section id="local" className="section local-section">
      {/* Background Grid Lines */}
      <div className="bg-grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <div className="container local-grid" style={{ position: 'relative', zIndex: 1 }}>
        {/* Left Side: Address Details */}
        <div className="local-content">
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif", fontWeight: '600', fontSize: '2.8rem', marginBottom: '0.5rem' }}>
            We Are Local
          </h2>
          <p style={{ fontSize: '1rem', color: '#475569', marginBottom: '2rem', fontWeight: '500' }}>
            Based in the heart of Aachen, Germany
          </p>

          <div className="local-desc-card">
            "Based in Aachen, GO-Soft Solutions delivers innovative digital tools to drive business success. We combine local presence with international expertise to power your digital transformation."
          </div>

          <div className="local-info-block">
            {/* Aachen coordinate */}
            <div className="local-info-row">
              <div className="local-info-icon-wrapper">
                <MapPin size={18} />
              </div>
              <div className="local-info-details">
                <span className="local-info-title">Aachen</span>
                <span className="local-info-value">123 Sample St, Aachen NSW 2000 AU</span>
              </div>
            </div>

            {/* Phone */}
            <div className="local-info-row">
              <div className="local-info-icon-wrapper">
                <Phone size={18} />
              </div>
              <div className="local-info-details">
                <span className="local-info-title">P: +49 (24030 940 47-0)</span>
                <span className="local-info-value">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Email */}
            <div className="local-info-row">
              <div className="local-info-icon-wrapper">
                <Mail size={18} />
              </div>
              <div className="local-info-details">
                <a href="mailto:support@go-soft.eu" className="local-info-value" style={{ fontWeight: '600', color: '#0f172a' }}>
                  support@go-soft.eu
                </a>
                <span className="local-info-value">General Support</span>
              </div>
            </div>
          </div>

          <button className="btn btn-secondary" style={{ padding: '0.75rem 1.75rem' }}>
            View Map &rarr;
          </button>
        </div>

        {/* Right Side: Map of Germany */}
        <div className="local-map-wrapper">
          <img src={germanyMap} alt="Highlighted Map of Germany" style={{ width: '100%', maxWidth: '420px', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </section>
  );
};

export default LocalMap;
