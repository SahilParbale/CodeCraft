import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    acceptTerms: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappNumber = "917058731515";
    const text = `*New Contact Request*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset form UI
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        acceptTerms: false
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section" style={{ background: '#ffffff', padding: '6rem 0' }}>
      {/* Background Grid Lines */}
      <div className="bg-grid-lines">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        
        {/* Title */}
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif", fontWeight: '600', fontSize: '2.8rem', color: '#0f172a' }}>
            Contact Us
          </h2>
        </div>

        {/* Contact Form Wrapper */}
        <div style={{ width: '100%', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* First Name & Last Name */}
            <div className="grid-two-col">
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
                <label htmlFor="firstName" style={{ fontWeight: '700', fontSize: '0.8rem', color: '#0f172a', fontFamily: "'Inter', sans-serif" }}>First name</label>
                <input
                  type="text"
                  id="firstName"
                  style={{
                    width: '100%',
                    background: '#f8fafc',
                    border: '1.5px solid #f1f5f9',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9rem',
                    color: '#0f172a',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none'
                  }}
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
                <label htmlFor="lastName" style={{ fontWeight: '700', fontSize: '0.8rem', color: '#0f172a', fontFamily: "'Inter', sans-serif" }}>Last name</label>
                <input
                  type="text"
                  id="lastName"
                  style={{
                    width: '100%',
                    background: '#f8fafc',
                    border: '1.5px solid #f1f5f9',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9rem',
                    color: '#0f172a',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none'
                  }}
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
              <label htmlFor="email" style={{ fontWeight: '700', fontSize: '0.8rem', color: '#0f172a', fontFamily: "'Inter', sans-serif" }}>Email</label>
              <input
                type="email"
                id="email"
                style={{
                  width: '100%',
                  background: '#f8fafc',
                  border: '1.5px solid #f1f5f9',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  color: '#0f172a',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none'
                }}
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Message */}
            <div className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'flex-start' }}>
              <label htmlFor="message" style={{ fontWeight: '700', fontSize: '0.8rem', color: '#0f172a', fontFamily: "'Inter', sans-serif" }}>Message</label>
              <textarea
                id="message"
                rows="5"
                style={{
                  width: '100%',
                  background: '#f8fafc',
                  border: '1.5px solid #f1f5f9',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  color: '#0f172a',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  resize: 'none'
                }}
                placeholder="Type your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            {/* Accept Terms Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
              <input
                type="checkbox"
                id="acceptTerms"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                style={{
                  width: '16px',
                  height: '16px',
                  accentColor: 'var(--accent-primary)',
                  cursor: 'pointer'
                }}
                required
              />
              <label htmlFor="acceptTerms" style={{ fontSize: '0.85rem', color: '#475569', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>
                I accept the <a href="#terms" onClick={(e) => e.preventDefault()} style={{ color: 'var(--accent-primary)', textDecoration: 'underline', fontWeight: '500' }}>Terms</a>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary" style={{
              width: 'fit-content',
              padding: '0.75rem 2.25rem',
              fontSize: '0.9rem',
              marginTop: '0.5rem',
              fontFamily: "'Inter', sans-serif"
            }}>
              {isSubmitted ? 'Submitted!' : 'Submit \u2192'}
            </button>
          </form>
        </div>

        {/* Small Info Cards under form (No colored background squares, matching screenshot) */}
        <div className="grid-two-col" style={{
          width: '100%',
          maxWidth: '640px'
        }}>
          {/* Email Info Card */}
          <div style={{
            background: '#ffffff',
            border: '1.5px solid #f1f5f9',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.015)',
            textAlign: 'left'
          }}>
            <div style={{ color: 'var(--accent-primary)', display: 'flex', flexShrink: 0 }}>
              <Mail size={20} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f172a', fontFamily: "'Inter', sans-serif" }}>Email</span>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontFamily: "'Inter', sans-serif" }}>jjadhavshreyas84@gmail.com</span>
            </div>
          </div>

          {/* Phone Info Card */}
          <div style={{
            background: '#ffffff',
            border: '1.5px solid #f1f5f9',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.015)',
            textAlign: 'left'
          }}>
            <div style={{ color: 'var(--accent-primary)', display: 'flex', flexShrink: 0 }}>
              <Phone size={20} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f172a', fontFamily: "'Inter', sans-serif" }}>Phone</span>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontFamily: "'Inter', sans-serif" }}>+91 7058731515, +91 8788114603</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
