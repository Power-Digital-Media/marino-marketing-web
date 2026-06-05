import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const leads = [
  { initial: 'J', name: 'James T.', source: 'Google Maps', text: 'Is the Silverado still on the lot? Trying to come look today.', time: '2m ago' },
  { initial: 'K', name: 'Kayla M.', source: 'Facebook', text: "Saw your Polaris Sportsman listing. Do y'all offer financing on Saturdays?", time: '9m ago' },
  { initial: 'B', name: 'Bobby D.', source: 'Your Website', text: 'Need the Speed Queen washer — can I pick it up this afternoon?', time: '17m ago' },
  { initial: 'M', name: 'Marcus W.', source: 'Google Maps', text: "Found you on Maps. Your team had exactly what I needed in stock.", time: '34m ago' },
];

const ticker = [
  'Hwy 49 Auto: Facebook inventory synced · 1.4s',
  'Delta ATV Center: Google profile updated · 3 new reviews this week',
  'Tractor Dealer: Google Search views +34% this month',
  'Delta Appliance: Lead routed to SMS · 1.8s',
  'River Road Motors: Top 3 Google Maps placement achieved',
];

export default function Hero() {
  const navigate = useNavigate();
  const [activeLead, setActiveLead] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLead(prev => (prev + 1) % leads.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-gradient" aria-hidden="true"></div>

        <div className="container hero-container">
          {/* Left: Copy */}
          <div className="hero-copy animate-fade-in">
            <div className="hero-eyebrow">Mississippi's Local Growth Partner</div>

            <h1 className="hero-title">
              Local buyers are already searching.<br /><em>We make sure they find you.</em>
            </h1>

            <p className="hero-desc">
              We connect your Facebook posts to clean mobile inventory pages,
              keep your Google Business Profile full of fresh reviews, and route
              every buyer inquiry directly to your cell phone — no complicated tech required.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-num">+184%</span>
                <span className="stat-lbl">More Walk-Ins</span>
              </div>
              <span className="stat-sep" aria-hidden="true"></span>
              <div className="hero-stat">
                <span className="stat-num">+34%</span>
                <span className="stat-lbl">Google Search Views</span>
              </div>
              <span className="stat-sep" aria-hidden="true"></span>
              <div className="hero-stat">
                <span className="stat-num">&lt;24h</span>
                <span className="stat-lbl">Setup Time</span>
              </div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => go('/contact')}>
                Start Your Campaign
              </button>
              <button className="btn btn-ghost" onClick={() => go('/solutions')}>
                View Packages →
              </button>
            </div>
          </div>

          {/* Right: Results card */}
          <div className="hero-card-wrap animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="results-card">

              {/* Card header */}
              <div className="rc-header">
                <div className="rc-live-badge">
                  <span className="rc-pulse" aria-hidden="true"></span>
                  Live Lead Activity
                </div>
                <span className="rc-brand">Marino Marketing</span>
              </div>

              {/* Cycling lead notifications */}
              <div className="rc-leads" aria-live="polite" aria-label="Incoming buyer leads">
                {leads.map((lead, i) => (
                  <div
                    key={i}
                    className={`rc-lead ${i === activeLead ? 'is-active' : ''}`}
                    aria-hidden={i !== activeLead}
                  >
                    <div className="rc-lead-avatar">{lead.initial}</div>
                    <div className="rc-lead-body">
                      <div className="rc-lead-top">
                        <span className="rc-lead-name">{lead.name}</span>
                        <span className="rc-lead-src">via {lead.source}</span>
                      </div>
                      <p className="rc-lead-text">"{lead.text}"</p>
                    </div>
                    <span className="rc-lead-time">{lead.time}</span>
                  </div>
                ))}
              </div>

              {/* Google local ranking */}
              <div className="rc-ranking">
                <div className="rc-ranking-label">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Google Local Results · Natchez, MS
                </div>
                <div className="rc-rank rc-rank-first">
                  <span className="rc-rank-num">1</span>
                  <div className="rc-rank-info">
                    <span className="rc-rank-name">Hwy 49 Auto Sales</span>
                    <span className="rc-rank-stars">★★★★★ <em>(48 reviews)</em></span>
                  </div>
                  <span className="rc-managed">Managed</span>
                </div>
                <div className="rc-rank rc-rank-other">
                  <span className="rc-rank-num dim">2</span>
                  <div className="rc-rank-info">
                    <span className="rc-rank-name dim">River Road Motors</span>
                    <span className="rc-rank-stars dim">★★★☆☆ <em>(12)</em></span>
                  </div>
                </div>
              </div>

              {/* Bottom metrics */}
              <div className="rc-metrics">
                <div className="rc-metric">
                  <span className="rc-metric-val">48</span>
                  <span className="rc-metric-lbl">Reviews</span>
                </div>
                <div className="rc-metric-sep" aria-hidden="true"></div>
                <div className="rc-metric">
                  <span className="rc-metric-val">4.9★</span>
                  <span className="rc-metric-lbl">Rating</span>
                </div>
                <div className="rc-metric-sep" aria-hidden="true"></div>
                <div className="rc-metric">
                  <span className="rc-metric-val">#1</span>
                  <span className="rc-metric-lbl">Local Rank</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Campaign Ticker */}
      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...ticker, ...ticker].map((item, idx) => (
              <span key={idx} className="ticker-item">
                <span className="ticker-dot"></span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
