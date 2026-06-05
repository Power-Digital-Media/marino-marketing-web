import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { IconMonitor, IconFlag, IconMapPin, IconPhone, IconUsers, IconTag, IconMeta, IconFunnel, IconLayout } from '../components/Icons';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const [plannerMix, setPlannerMix] = useState({
    webdev: true,
    crm: false,
    email: false,
    google: true,
    signage: false
  });

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const togglePlannerItem = (key) => {
    setPlannerMix(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDeployStrategy = () => {
    const selected = Object.keys(plannerMix).filter(k => plannerMix[k]);
    const qs = selected.length > 0 ? `?services=${selected.join(',')}` : '';
    navigate(`/contact${qs}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateMetrics = () => {
    let reach = 12000;
    let channels = 1;
    if (plannerMix.webdev)  { reach += 20000; channels++; }
    if (plannerMix.crm)     { reach += 5000;  channels++; }
    if (plannerMix.email)   { reach += 10000; channels++; }
    if (plannerMix.google)  { reach += 30000; channels++; }
    if (plannerMix.signage) { reach += 8000;  channels++; }
    const stars = ['★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★'];
    return { reach, strength: stars[Math.min(channels - 1, 4)] };
  };

  const { reach, strength } = calculateMetrics();

  const plannerOptions = [
    { key: 'webdev',  Icon: IconMonitor, label: 'Mobile Inventory Page' },
    { key: 'crm',    Icon: IconPhone,   label: 'SMS Lead Routing' },
    { key: 'email',  Icon: IconUsers,   label: 'Customer Text Follow-Ups' },
    { key: 'google', Icon: IconMapPin,  label: 'Google Business Profile' },
    { key: 'signage',Icon: IconFlag,    label: 'Lot Flags & Signage' },
  ];

  return (
    <div className="home-page animate-fade-in">
      <Hero />

      {/* ── 1. Service Pillars ── */}
      <section className="section-padding home-pillars-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-section-tag">How We Serve You</span>
            <h2 className="home-section-title">A Full-Stack Local Marketing Team</h2>
            <p className="home-section-desc">
              From custom websites and video ads to lot flags and Google profiles —
              we handle everything so you can stay focused on closing deals.
            </p>
          </div>

          <div className="grid home-pillars-grid">
            {/* Pillar 1 */}
            <div className="pillar-card animate-fade-in">
              <div className="pillar-glow" aria-hidden="true"></div>
              <div className="pillar-icon-wrap">
                <IconMonitor size={22} />
              </div>
              <h3 className="pillar-title">Websites, Funnels & Landing Pages</h3>
              <p className="pillar-desc">
                Custom-built inventory pages, dedicated landing pages for promotions,
                and multi-step sales funnels that turn ad traffic into phone calls and
                lot visits — automatically.
              </p>
              <ul className="pillar-list">
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Mobile-Friendly Inventory Pages</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Sales Funnels & Lead Capture</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Campaign-Specific Landing Pages</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Facebook Marketplace Sync</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>SMS & Direct Phone Leads</li>
              </ul>
              <button className="btn btn-primary pillar-cta" onClick={() => go('/solutions')}>
                See Digital Packages →
              </button>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card animate-fade-in" style={{ animationDelay: '0.12s' }}>
              <div className="pillar-glow" aria-hidden="true"></div>
              <div className="pillar-icon-wrap">
                <IconMeta size={22} />
              </div>
              <h3 className="pillar-title">Meta, CRM, Email & Video</h3>
              <p className="pillar-desc">
                We manage your Meta Business Suite, run carousel and video ad campaigns
                on Facebook and Instagram, build CRM pipelines, and produce video ads
                that keep your brand in front of local buyers every week.
              </p>
              <ul className="pillar-list">
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Meta Business Suite Management</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Product, Carousel & Video Ads</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>CRM Pipeline & Email Campaigns</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Custom Video Creative</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Customer Follow-Up Sequences</li>
              </ul>
              <button className="btn btn-primary pillar-cta" onClick={() => go('/contact')}>
                Ask About Campaigns →
              </button>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card animate-fade-in" style={{ animationDelay: '0.24s' }}>
              <div className="pillar-glow" aria-hidden="true"></div>
              <div className="pillar-icon-wrap">
                <IconFlag size={22} />
              </div>
              <h3 className="pillar-title">Physical Presence & Storefront Branding</h3>
              <p className="pillar-desc">
                Heavy-duty roadside flags, banners, and branded merchandise that pull
                highway traffic straight through your lot gates.
              </p>
              <ul className="pillar-list">
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>High-Rise Lot Flags & Flagpoles</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Custom Caps, Shirts & Keychains</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Vinyl Banners & Roadside Signs</li>
                <li className="pillar-list-item"><span className="pillar-list-dot"></span>Google Business Profile Mgmt</li>
              </ul>
              <button className="btn btn-primary pillar-cta" onClick={() => go('/portfolio')}>
                Browse Products →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Promotional Products Teaser ── */}
      <section className="section-padding home-cases-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-section-tag">Promotional Products</span>
            <h2 className="home-section-title">Put Your Name on Everything That Stays</h2>
            <p className="home-section-desc">
              Caps, flags, keychains, banners — physical branded products your customers
              keep and see every single day. Real merchandise, no gimmicks.
            </p>
          </div>

          <div className="grid home-promo-grid">
            <div className="home-promo-card animate-fade-in">
              <div className="home-promo-icon"><IconFlag size={22} /></div>
              <h3 className="home-promo-title">Lot Flags &amp; Banners</h3>
              <p className="home-promo-desc">
                Heavy-duty American flags, blade banners, and full-color vinyl signs that
                turn highway traffic into lot walk-ins. Commercial-grade, built to last.
              </p>
            </div>
            <div className="home-promo-card animate-fade-in" style={{ animationDelay: '0.08s' }}>
              <div className="home-promo-icon"><IconTag size={22} /></div>
              <h3 className="home-promo-title">Apparel &amp; Headwear</h3>
              <p className="home-promo-desc">
                Embroidered caps, polo shirts, and screen-printed tees with your dealership
                or store logo. Customers wear your name around town — every day.
              </p>
            </div>
            <div className="home-promo-card animate-fade-in" style={{ animationDelay: '0.16s' }}>
              <div className="home-promo-icon"><IconUsers size={22} /></div>
              <h3 className="home-promo-title">Branded Gifts &amp; Giveaways</h3>
              <p className="home-promo-desc">
                Keychains, tumblers, pens, and car magnets engraved or printed with your
                brand. High-retention items that keep your business top of mind.
              </p>
            </div>
          </div>

          <div className="portfolio-teaser-more animate-fade-in">
            <button className="btn btn-secondary" onClick={() => go('/portfolio')}>
              Browse All Products →
            </button>
          </div>
        </div>
      </section>

      {/* ── 3. Google Local Search Spotlight ── */}
      <section className="section-padding home-google-section">
        <div className="container">
          <div className="magazine-teaser-block animate-fade-in">
            <div className="magazine-teaser-info">
              <span className="home-section-tag">Google Local Search</span>
              <h2 className="home-section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Show Up When Local Buyers Search
              </h2>
              <p className="home-section-desc" style={{ textAlign: 'left', maxWidth: '100%', marginBottom: '0.85rem' }}>
                When someone in your county searches "used trucks near me" or "ATV dealer
                Natchez," your business needs to appear at the top of Google Maps — with real
                photos, fresh reviews, and a phone number that rings your desk.
              </p>
              <p className="pillar-desc" style={{ marginBottom: '1.5rem' }}>
                We set up and manage your Google Business Profile so motivated local
                buyers find you first — before they drive past to a competitor.
              </p>
              <button className="btn btn-secondary" onClick={() => go('/solutions')}>
                See Google Profile Packages →
              </button>
            </div>

            <div className="google-spotlight-card">
              <div className="google-map-pin-bar">
                <span className="google-map-logo">
                  <IconMapPin size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                  Google Maps
                </span>
                <span className="google-map-result-count">3 results near Natchez, MS</span>
              </div>
              <div className="google-map-result top-result">
                <div className="gmr-rank">1</div>
                <div className="gmr-info">
                  <span className="gmr-name">Hwy 49 Auto Sales</span>
                  <span className="gmr-stars">★★★★★ <span className="gmr-count">(48)</span></span>
                  <span className="gmr-detail">Used Car Dealer · Open Now · 2.1 mi</span>
                </div>
                <span className="gmr-badge">Managed</span>
              </div>
              <div className="google-map-result">
                <div className="gmr-rank muted">2</div>
                <div className="gmr-info">
                  <span className="gmr-name muted">River Road Motors</span>
                  <span className="gmr-stars muted">★★★☆☆ <span className="gmr-count">(12)</span></span>
                  <span className="gmr-detail muted">Used Cars · 4.8 mi</span>
                </div>
              </div>
              <div className="google-map-result">
                <div className="gmr-rank muted">3</div>
                <div className="gmr-info">
                  <span className="gmr-name muted">Delta Auto Group</span>
                  <span className="gmr-stars muted">★★★☆☆ <span className="gmr-count">(7)</span></span>
                  <span className="gmr-detail muted">Cars · 6.2 mi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. The Marino Advantage ── */}
      <section className="section-padding marino-advantage-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-section-tag">The Marino Advantage</span>
            <h2 className="home-section-title">Where Face-to-Face Trust Meets Local Speed</h2>
          </div>

          <div className="grid marino-advantage-grid">
            <div className="advantage-block animate-fade-in">
              <span className="advantage-number" aria-hidden="true">01</span>
              <h3 className="advantage-heading">Built on a Handshake</h3>
              <p className="advantage-copy">
                In Mississippi, business is built on trust. We meet you face-to-face at
                your lot, store, or dealership — then build the digital infrastructure
                around the way you actually work. That means websites, CRM pipelines,
                funnels, and ad campaigns that feel like a natural extension of your
                business — not a foreign tech layer dropped on top of it.
              </p>
            </div>

            <div className="advantage-block animate-fade-in" style={{ animationDelay: '0.10s' }}>
              <span className="advantage-number" aria-hidden="true">02</span>
              <h3 className="advantage-heading">Facebook Posts → Web Inventory</h3>
              <p className="advantage-copy">
                We know local shop owners do most of their listing updates on Facebook. We take those
                posts and automatically sync them to a clean mobile inventory page. That means one
                update covers Facebook, your website, and your Google Business Profile — zero
                duplicate data entry.
              </p>
            </div>

            <div className="advantage-block animate-fade-in" style={{ animationDelay: '0.20s' }}>
              <span className="advantage-number" aria-hidden="true">03</span>
              <h3 className="advantage-heading">Every Lead Straight to Your Phone</h3>
              <p className="advantage-copy">
                We build your CRM so that every web inquiry, Facebook message, and
                funnel submission fires a direct text to your cell phone the moment it
                comes in — no dashboard hunting, no missed follow-ups. Your pipeline
                stays full and your response time stays under two minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Interactive Campaign Planner ── */}
      <section className="section-padding home-planner-section">
        <div className="container">
          <div className="home-section-header">
            <span className="home-section-tag">Interactive Planner</span>
            <h2 className="home-section-title">Design Your Local Campaign Mix</h2>
            <p className="home-section-desc">
              Select your services to instantly see your weekly shopper reach and launch timeline.
            </p>
          </div>

          <div className="planner-designer-card animate-fade-in">
            {/* Left: selector */}
            <div className="planner-designer-controls">
              <h3 className="planner-pane-title">1. Choose Your Marketing Mix</h3>
              <div className="planner-pills-selector">
                {plannerOptions.map(({ key, Icon, label }) => (
                  <button
                    key={key}
                    className={`planner-pill ${plannerMix[key] ? 'active' : ''}`}
                    onClick={() => togglePlannerItem(key)}
                  >
                    <Icon size={15} />
                    {label}
                  </button>
                ))}
              </div>

              <div className="planner-estimates-row">
                <div className="planner-estimate-box">
                  <span className="planner-est-label">Est. Weekly Shopper Reach</span>
                  <span className="planner-est-value glow">{reach.toLocaleString()}+ buyers</span>
                </div>
                <div className="planner-estimate-box">
                  <span className="planner-est-label">Strategy Strength</span>
                  <span className="planner-est-value gold-stars">{strength}</span>
                </div>
              </div>
            </div>

            {/* Right: timeline */}
            <div className="planner-designer-preview">
              <h3 className="planner-pane-title">2. Campaign Launch Timeline</h3>
              <div className="planner-timeline">
                {plannerMix.webdev && (
                  <div className="timeline-step">
                    <span className="timeline-dot"></span>
                    <div className="timeline-info">
                      <span className="timeline-time">Week 1</span>
                      <span className="timeline-title">Fast Mobile Inventory Launch</span>
                      <span className="timeline-desc">A clean vehicle or catalog page that loads instantly for local mobile buyers.</span>
                    </div>
                  </div>
                )}
                {plannerMix.crm && (
                  <div className="timeline-step">
                    <span className="timeline-dot"></span>
                    <div className="timeline-info">
                      <span className="timeline-time">Week 1</span>
                      <span className="timeline-title">Direct SMS Lead Alert Route</span>
                      <span className="timeline-desc">Website contact submissions routed directly to your cell phone via text.</span>
                    </div>
                  </div>
                )}
                {plannerMix.email && (
                  <div className="timeline-step">
                    <span className="timeline-dot"></span>
                    <div className="timeline-info">
                      <span className="timeline-time">Week 2</span>
                      <span className="timeline-title">Customer Text & Follow-Ups</span>
                      <span className="timeline-desc">Automated texts triggered to follow up with buyers who requested pricing quotes.</span>
                    </div>
                  </div>
                )}
                {plannerMix.google && (
                  <div className="timeline-step">
                    <span className="timeline-dot"></span>
                    <div className="timeline-info">
                      <span className="timeline-time">Week 1</span>
                      <span className="timeline-title">Google Business Profile Setup</span>
                      <span className="timeline-desc">Profile optimized with photos, categories, and review automation so local buyers find you first.</span>
                    </div>
                  </div>
                )}
                {plannerMix.signage && (
                  <div className="timeline-step">
                    <span className="timeline-dot"></span>
                    <div className="timeline-info">
                      <span className="timeline-time">Ongoing</span>
                      <span className="timeline-title">Lot Flag & Store Signage Delivery</span>
                      <span className="timeline-desc">High-visibility lot flags and flagpole hardware delivered to capture drive-by traffic.</span>
                    </div>
                  </div>
                )}
                {!plannerMix.webdev && !plannerMix.crm && !plannerMix.email && !plannerMix.google && !plannerMix.signage && (
                  <div className="timeline-empty-state">
                    Select one or more marketing services to generate your launch timeline.
                  </div>
                )}
              </div>

              <button className="btn btn-amber planner-deploy-cta" onClick={handleDeployStrategy}>
                Inquire Strategy Mix →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Bottom CTA Band ── */}
      <section className="home-cta-band">
        <div className="container home-cta-inner">
          <div className="home-cta-text">
            <h2 className="home-cta-headline">Local buyers are already searching for you.</h2>
            <p className="home-cta-sub">
              We'll meet you in person within 24 hours to build your campaign plan.
            </p>
          </div>
          <div className="home-cta-actions">
            <button className="btn btn-primary home-cta-btn" onClick={() => go('/contact')}>
              Start Your Campaign
            </button>
            <button className="btn home-cta-ghost" onClick={() => go('/solutions')}>
              View All Packages →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
