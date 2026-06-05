import React from 'react';
import './About.css';

export default function About({ setCurrentSection }) {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container about-grid">
        {/* Story Content Column */}
        <div className="about-content animate-fade-in">
          <span className="about-tag">About Us</span>
          <h2 className="about-headline">We Bridge the Gap Between Digital Performance & Local Presence</h2>
          <p className="about-description">
            Marino Marketing Solutions was founded on the principle that local businesses thrive when they command both the digital space and the physical streets. We don't just build modern Next.js/React websites or automate sales pipelines; we align those digital systems with offline publications to capture every segment of your customer market.
          </p>
          
          {/* Numeric Counters */}
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Successful Campaigns</span>
            </div>
          </div>
        </div>

        {/* Google Business Profile visual column */}
        <div className="about-visual animate-fade-in" style={{ animationDelay: '0.1s' }} id="google-local">
          <div className="google-spotlight-card">
            <div className="google-map-pin-bar">
              <span className="google-map-logo">📍 Google Maps</span>
              <span className="google-map-result-count">Near You in MS</span>
            </div>
            <div className="google-map-result top-result">
              <div className="gmr-rank">1</div>
              <div className="gmr-info">
                <span className="gmr-name">Hwy 49 Auto Sales</span>
                <span className="gmr-stars">★★★★★ <span className="gmr-count">(48)</span></span>
                <span className="gmr-detail">Used Car Dealer · Open Now · 2.1 mi</span>
              </div>
              <span className="gmr-badge">Managed by Marino</span>
            </div>
            <div className="google-map-result">
              <div className="gmr-rank muted">2</div>
              <div className="gmr-info">
                <span className="gmr-name muted">River Road Motors</span>
                <span className="gmr-stars muted">★★★☆☆ <span className="gmr-count">(12)</span></span>
                <span className="gmr-detail muted">Used Cars · 4.8 mi</span>
              </div>
            </div>
            <div className="google-profile-badges">
              <span className="google-badge">📍 Shows in Maps</span>
              <span className="google-badge">🔍 Ranks Locally</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
