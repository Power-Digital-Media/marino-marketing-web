import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IconPhone, IconMail, IconMapPin } from '../components/Icons';
import './Contact.css';

export default function ContactPage() {
  const location = useLocation();
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Parse URL search params to pre-select services
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const servicesParam = params.get('services');
    if (servicesParam) {
      const selected = servicesParam.split(',');
      setSelectedServices(selected);
    }
  }, [location.search]);

  const availableServices = [
    { id: 'webdev', label: 'Dealer Inventories' },
    { id: 'crm', label: 'SMS Lead Alerts' },
    { id: 'email', label: 'Text Follow-Ups' },
    { id: 'leads', label: 'Facebook Market Sync' },
    { id: 'google', label: 'Google Business Profile' },
    { id: 'signage', label: 'Lot Flags & Signage' }
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
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page animate-fade-in">

      {/* ── Dark Page Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-hero-eyebrow">Contact Us</span>
          <h1 className="contact-hero-heading">Let's Start Your Campaign</h1>
          <p className="contact-hero-sub">We respond within 24 hours.</p>
        </div>
      </section>

      {/* ── Two-Column Section ── */}
      <section className="section-padding contact-body">
        <div className="container contact-grid">

          {/* Info Column */}
          <div className="contact-info">
            <p className="contact-info-name">Marino Marketing Solutions</p>
            <p className="contact-info-para">
              Whether you want simple mobile inventory listings, text lead alerts, Google Business Profile management, or heavy-duty lot flags and banners — we customize our packages for your local business.
            </p>
            <p className="contact-info-para">
              Fill out this campaign planner and we'll reach out within 24 hours to schedule a direct, face-to-face walkthrough and strategy proposal.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <IconPhone size={16} />
                </div>
                <div>
                  <span className="contact-detail-text">601.594.2291</span>
                  <span className="contact-detail-subtext">Monday – Friday, 9am – 5pm</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <IconMail size={16} />
                </div>
                <div>
                  <span className="contact-detail-text">marinomarketing12@gmail.com</span>
                  <span className="contact-detail-subtext">Direct Email Queries</span>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <IconMapPin size={16} />
                </div>
                <div>
                  <span className="contact-detail-text">Mississippi, USA</span>
                  <span className="contact-detail-subtext">Serving Local Retailers Statewide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card Column */}
          <div className="contact-form">
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

                {/* Service Toggle Pills */}
                <div className="input-group">
                  <label className="input-label">Select Services Needed</label>
                  <div className="service-selector-grid">
                    {availableServices.map((service) => {
                      const isSelected = selectedServices.includes(service.id);
                      return (
                        <label
                          key={service.id}
                          className={`service-pill ${isSelected ? 'selected' : ''}`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleServiceToggle(service.id)}
                          />
                          <span className="service-pill-check">{isSelected ? '✓' : '+'}</span>
                          {service.label}
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
              <div className="quote-builder-form form-success-container">
                <div className="success-check-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Proposal Request Received!</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Thank you, <strong>{formData.name}</strong>. We have received your request for <strong>{formData.company || 'your brand'}</strong>.{' '}
                  We'll review your selected services and reach out to schedule a campaign roadmap within 24 hours.
                </p>
                <button className="btn btn-secondary" onClick={() => setIsSubmitted(false)}>
                  Request Another Service
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
