import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom Select Component for a more professional look
const CustomSelect = ({ value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div
      style={{ position: 'relative', width: '100%' }}
      tabIndex={0}
      onBlur={() => setTimeout(() => setIsOpen(false), 200)}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          background: '#f8fafc',
          border: isOpen ? '1.5px solid #ea580c' : '1.5px solid #f1f5f9',
          borderRadius: '8px',
          padding: '0.85rem 1rem',
          fontSize: '0.9rem',
          color: selectedOption ? '#0f172a' : '#94a3b8',
          fontFamily: "'Inter', sans-serif",
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.2s ease',
          boxShadow: isOpen ? '0 0 0 3px rgba(234, 88, 12, 0.1)' : 'none'
        }}
      >
        <span style={{ userSelect: 'none' }}>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', color: '#94a3b8' }}>
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '0.5rem',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          zIndex: 50,
          maxHeight: '220px',
          overflowY: 'auto',
          padding: '0.4rem'
        }}>
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              onMouseEnter={(e) => {
                if (opt.value !== value) {
                  e.target.style.background = '#f8fafc';
                }
              }}
              onMouseLeave={(e) => {
                if (opt.value !== value) {
                  e.target.style.background = 'transparent';
                }
              }}
              style={{
                padding: '0.75rem 1rem',
                fontSize: '0.9rem',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                color: opt.value === value ? '#ea580c' : '#334155',
                background: opt.value === value ? '#fff7ed' : 'transparent',
                fontWeight: opt.value === value ? '600' : '400',
                borderRadius: '8px',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                userSelect: 'none'
              }}
            >
              {opt.label}
              {opt.value === value && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const GetStartedForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Parse query params to auto-fill for demo requests
    const params = new URLSearchParams(location.search);
    const product = params.get('product');

    if (product) {
      setFormData(prev => ({
        ...prev,
        service: 'Other',
        details: `I would like to request a demo and trial access for CodeCraft ${product}. Please get in touch to schedule a walkthrough.`
      }));
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappNumber = "917058731515";
    const text = `*New Project Request*%0A%0A*Name:* ${formData.fullName}%0A*Email:* ${formData.email}%0A*Company:* ${formData.company || 'N/A'}%0A*Service:* ${formData.service}%0A*Budget:* ${formData.budget}%0A*Details:* ${formData.details}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        details: ''
      });
    }, 3000);
  };

  const inputStyle = {
    width: '100%',
    background: '#f8fafc',
    border: '1.5px solid #f1f5f9',
    borderRadius: '8px',
    padding: '0.85rem 1rem',
    fontSize: '0.9rem',
    color: '#0f172a',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  const labelStyle = {
    fontWeight: '700',
    fontSize: '0.85rem',
    color: '#334155',
    fontFamily: "'Inter', sans-serif",
    marginBottom: '0.4rem',
    display: 'block'
  };

  const serviceOptions = [
    { value: 'IT Architecture', label: 'IT Architecture' },
    { value: 'Cloud Solutions', label: 'Cloud Solutions' },
    { value: 'Data Analytics', label: 'Data Analytics' },
    { value: 'Custom Software', label: 'Custom Software' },
    { value: 'Cybersecurity', label: 'Cybersecurity' },
    { value: 'Other', label: 'Other' },
  ];

  const budgetOptions = [
    { value: '< 5L', label: 'Less than ₹5 Lakhs' },
    { value: '5L - 10L', label: '₹5 Lakhs - ₹10 Lakhs' },
    { value: '10L - 50L', label: '₹10 Lakhs - ₹50 Lakhs' },
    { value: '50L+', label: '₹50 Lakhs+' },
    { value: 'Not sure', label: 'Not sure yet' },
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: 'calc(100vh - 80px)', padding: '5rem 1rem', display: 'flex', justifyContent: 'center' }}>

      <div style={{
        background: '#ffffff',
        width: '100%',
        maxWidth: '700px',
        borderRadius: '24px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.04)',
        padding: '3.5rem',
        border: '1px solid #e2e8f0'
      }}>

        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          {new URLSearchParams(location.search).get('product') && (
            <div style={{
              display: 'inline-block',
              background: 'rgba(234, 88, 12, 0.08)',
              color: '#ea580c',
              fontSize: '0.8rem',
              fontWeight: '700',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              marginBottom: '1rem',
              border: '1px solid rgba(234, 88, 12, 0.15)',
              fontFamily: "'Inter', sans-serif"
            }}>
              Demo Request: CodeCraft {new URLSearchParams(location.search).get('product')}
            </div>
          )}
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem' }}>
            Let's build something <span style={{ color: '#ea580c' }}>great.</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1rem', fontFamily: "'Inter', sans-serif" }}>
            {new URLSearchParams(location.search).get('product')
              ? `Fill out your details to schedule your personalized product walkthrough.`
              : `Fill out the form below and our team will get back to you within 24 hours.`}
          </p>
        </div>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', animation: 'fadeIn 0.5s ease' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(234, 88, 12, 0.1)', color: '#ea580c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem' }}>
              ✓
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#0f172a', marginBottom: '0.5rem', fontFamily: "'Inter', sans-serif" }}>Request Received!</h3>
            <p style={{ color: '#64748b', fontFamily: "'Inter', sans-serif" }}>Thank you for reaching out. We will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* Name & Email Row */}
            <div className="grid-two-col">
              <div>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="custom-input"
                  style={inputStyle}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Work Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="custom-input"
                  style={inputStyle}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Company & Service Row */}
            <div className="grid-two-col">
              <div>
                <label style={labelStyle}>Company Name</label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  className="custom-input"
                  style={inputStyle}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label style={labelStyle}>Service Required</label>
                {/* Hidden actual input for required validation */}
                <input type="hidden" required value={formData.service} />
                <CustomSelect
                  options={serviceOptions}
                  placeholder="Select a service..."
                  value={formData.service}
                  onChange={(val) => setFormData({ ...formData, service: val })}
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label style={labelStyle}>Estimated Budget</label>
              <input type="hidden" required value={formData.budget} />
              <CustomSelect
                options={budgetOptions}
                placeholder="Select your budget..."
                value={formData.budget}
                onChange={(val) => setFormData({ ...formData, budget: val })}
              />
            </div>

            {/* Project Details */}
            <div>
              <label style={labelStyle}>Project Details</label>
              <textarea
                placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                className="custom-input"
                style={{ ...inputStyle, minHeight: '130px', resize: 'vertical' }}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-btn-hover"
              style={{
                background: '#ea580c',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                marginTop: '0.5rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 14px rgba(234, 88, 12, 0.25)'
              }}
            >
              Submit Request
            </button>
            <style>{`
              .custom-input:focus {
                border-color: #ea580c !important;
                box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1) !important;
              }
              .submit-btn-hover:hover {
                background: #c2410c !important;
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(234, 88, 12, 0.3) !important;
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </form>
        )}
      </div>
    </div>
  );
};

export default GetStartedForm;
