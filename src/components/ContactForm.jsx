import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    { id: 'webdev', label: 'Custom Web Dev' },
    { id: 'crm', label: 'CRM & Pipelines' },
    { id: 'email', label: 'Email Campaigns' },
    { id: 'leads', label: 'Digital Leads & Ads' },
    { id: 'google', label: 'Google Business Profile' },
    { id: 'signage', label: 'Flags & Signage' }
  ];

  const handleServiceToggle = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Submission
    setIsSubmitted(true);
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container contact-grid">
        {/* Info Column */}
        <div className="contact-info animate-fade-in">
          <span className="contact-tag">Grow With Us</span>
          <h2>Start Your Campaign</h2>
          <p>
            Whether you want custom high-speed web pipelines, CRM automations, regional magazine placement, or premium flags/banners—we customize our services for your business.
          </p>
          
          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">📞</div>
              <div>
                <span className="contact-detail-text">601.594.2291</span>
                <span className="contact-detail-subtext">Monday - Friday, 9am - 5pm</span>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <div className="contact-detail-icon">✉️</div>
              <div>
                <span className="contact-detail-text">marinomarketing12@gmail.com</span>
                <span className="contact-detail-subtext">Send us an inquiry directly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Quote Form Column */}
        <div className="contact-form animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {!isSubmitted ? (
            <form className="quote-builder-form" onSubmit={handleSubmit}>
              <div className="form-double-group">
                <div className="input-group">
                  <label className="input-label" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    className="input-field" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="input-group">
                  <label className="input-label" htmlFor="company">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    className="input-field" 
                    placeholder="Local Brand Inc." 
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-double-group">
                <div className="input-group">
                  <label className="input-label" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    className="input-field" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="input-group">
                  <label className="input-label" htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    className="input-field" 
                    placeholder="601-594-2291" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Service Select Pills */}
              <div className="input-group">
                <label className="input-label">Select Services Needed</label>
                <div className="service-selector-grid">
                  {availableServices.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <label 
                        key={service.id} 
                        className={`service-checkbox-label ${isSelected ? 'selected' : ''}`}
                      >
                        <input 
                          type="checkbox" 
                          checked={isSelected}
                          onChange={() => handleServiceToggle(service.id)}
                        />
                        {isSelected ? '✓' : '+'} {service.label}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="input-group">
                <label className="input-label" htmlFor="message">Brief Project Description</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="3" 
                  className="input-field" 
                  placeholder="Tell us about your sales goals..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                Request Campaign Proposal
              </button>
            </form>
          ) : (
            <div className="quote-builder-form form-success-container animate-fade-in">
              <div className="success-check-icon">✓</div>
              <h3 style={{ fontFamily: 'var(--font-heading)' }}>Proposal Request Received!</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Thank you, <strong>{formData.name}</strong>. We have received your request for <strong>{formData.company || 'your brand'}</strong>. 
                Our strategy team will review your selected services and reach out to scheduling a campaign roadmap within 24 hours.
              </p>
              <button className="btn btn-secondary" onClick={() => setIsSubmitted(false)}>
                Request Another Service
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
