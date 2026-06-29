import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      // Format the message for WhatsApp
      const whatsappNumber = "917058731515";
      const text = `*New Contact Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
      
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section" style={{ padding: '4.5rem 0', background: '#fcfaf8' }}>
      <div className="container">
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0', 
          background: 'white', 
          borderRadius: '24px', 
          overflow: 'hidden', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.02)', 
          border: '1px solid #f1f5f9' 
        }}>
          
          {/* Left Side - Form (60%) */}
          <div style={{ flex: '1 1 min(100%, 500px)', padding: '2.5rem 2.25rem' }}>
            <span className="section-tag" style={{ marginBottom: '0.75rem', background: '#fff7ed', border: '1px solid rgba(255,90,0,0.15)' }}>LET'S TALK</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0f172a' }}>Let's Build Something Amazing Together</h2>
            <p className="section-subtitle" style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              Have a project in mind? Let's discuss how we can help.
            </p>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: '1.5px solid #e2e8f0',
                      background: '#f8fafc',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: '1.5px solid #e2e8f0',
                      background: '#f8fafc',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="phone" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: '1.5px solid #e2e8f0',
                      background: '#f8fafc',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="subject" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: '1.5px solid #e2e8f0',
                      background: '#f8fafc',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#334155' }}>Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1.5px solid #e2e8f0',
                    background: '#f8fafc',
                    outline: 'none',
                    fontSize: '0.9rem',
                    resize: 'none'
                  }}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
                style={{ 
                  marginTop: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 2.2rem',
                  width: 'fit-content',
                  borderRadius: '999px'
                }}
              >
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'} 
                {!isSubmitting && !submitted && <span style={{ fontSize: '1.1rem' }}>➔</span>}
              </button>

            </form>
          </div>
          
          {/* Right Side - Info Box (40% - Compacted Width) */}
          <div style={{ 
            flex: '1 1 min(100%, 280px)',
            maxWidth: '320px', 
            background: '#090d16', 
            color: 'white', 
            padding: '2.5rem 1.75rem', 
            display: 'flex', 
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            {/* Styled Map Background */}
            <div style={{ position: 'absolute', bottom: '10px', right: '5px', width: '70%', opacity: 0.1, pointerEvents: 'none' }}>
              <svg width="100%" height="auto" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="40" r="1.5" fill="white" /><circle cx="40" cy="40" r="1.5" fill="white" /><circle cx="60" cy="40" r="1.5" fill="white" />
                <circle cx="30" cy="50" r="1.5" fill="white" /><circle cx="50" cy="50" r="1.5" fill="white" /><circle cx="70" cy="50" r="1.5" fill="white" /><circle cx="90" cy="50" r="1.5" fill="white" />
                <circle cx="80" cy="60" r="1.5" fill="white" /><circle cx="100" cy="60" r="1.5" fill="white" /><circle cx="120" cy="60" r="1.5" fill="white" /><circle cx="140" cy="60" r="1.5" fill="white" />
                <circle cx="110" cy="70" r="1.5" fill="white" /><circle cx="130" cy="70" r="1.5" fill="white" /><circle cx="150" cy="70" r="1.5" fill="white" /><circle cx="170" cy="70" r="1.5" fill="white" /><circle cx="190" cy="70" r="1.5" fill="white" />
                <circle cx="140" cy="80" r="1.5" fill="white" /><circle cx="160" cy="80" r="1.5" fill="white" /><circle cx="180" cy="80" r="1.5" fill="white" /><circle cx="200" cy="80" r="1.5" fill="white" /><circle cx="220" cy="80" r="1.5" fill="white" />
                <circle cx="150" cy="90" r="1.5" fill="white" /><circle cx="170" cy="90" r="1.5" fill="white" /><circle cx="190" cy="90" r="1.5" fill="white" /><circle cx="210" cy="90" r="1.5" fill="white" /><circle cx="230" cy="90" r="1.5" fill="white" />
                <circle cx="160" cy="100" r="1.5" fill="white" /><circle cx="180" cy="100" r="1.5" fill="white" /><circle cx="200" cy="100" r="1.5" fill="white" /><circle cx="220" cy="100" r="1.5" fill="white" />
                <circle cx="170" cy="110" r="1.5" fill="white" /><circle cx="190" cy="110" r="1.5" fill="white" /><circle cx="210" cy="110" r="1.5" fill="white" />
                <circle cx="180" cy="120" r="1.5" fill="white" /><circle cx="200" cy="120" r="1.5" fill="white" />
                <circle cx="190" cy="130" r="1.5" fill="white" />
                <circle cx="180" cy="100" r="5" fill="#ff5a00" />
                <circle cx="180" cy="100" r="12" stroke="#ff5a00" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '2.5rem', position: 'relative', zIndex: 1, color: 'white' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', flex: 1, position: 'relative', zIndex: 1 }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(255, 90, 0, 0.1)', color: 'var(--accent-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Email</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'white' }}>
                    <a 
                      href="mailto:info@codecraft.net.in" 
                      style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'white'}
                    >
                      info@codecraft.net.in
                    </a>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(255, 90, 0, 0.1)', color: 'var(--accent-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Phone</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', lineHeight: '1.6', color: 'white' }}>
                    <a 
                      href="tel:+917058731515" 
                      style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'white'}
                    >
                      +91 7058731515
                    </a><br/>
                    <a 
                      href="tel:+918788114603" 
                      style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'white'}
                    >
                      +91 8788114603
                    </a>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(255, 90, 0, 0.1)', color: 'var(--accent-primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Address</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', lineHeight: '1.6', color: 'white' }}>
                    Building: Vinayak<br/>
                    Flt No: 1/13 Ground floor<br/>
                    Prabhat Road Lane No 10<br/>
                    Swaroop Hotel Lane.<br/>
                    Near Sanjeevan Ayurved<br/>
                    Deccan Pune 411004
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
