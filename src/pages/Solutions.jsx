import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconMonitor,
  IconPhone,
  IconMail,
  IconTruck,
  IconUsers,
  IconMapPin,
  IconTag,
  IconFlag,
  IconMeta,
  IconVideo,
  IconFunnel,
  IconLayout,
} from '../components/Icons';
import './Solutions.css';

// Icon lookup map — service id → SVG component
const SERVICE_ICONS = {
  webdev:       IconMonitor,
  crm:          IconPhone,
  email:        IconMail,
  leads:        IconTruck,
  gmb:          IconUsers,
  google:       IconMapPin,
  promo:        IconTag,
  flags:        IconFlag,
  metasuite:    IconMeta,
  metacatalog:  IconTag,
  metacarousel: IconMeta,
  metavideo:    IconVideo,
  funnel:       IconFunnel,
  landing:      IconLayout,
};

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('digital');

  // Widget State Hooks
  const [webdevScore, setWebdevScore] = useState(99);
  const [webdevTesting, setWebdevTesting] = useState(false);
  const [crmStep, setCrmStep] = useState(0);
  const [crmStatus, setCrmStatus] = useState('Standby');
  const [emailCampaign, setEmailCampaign] = useState('tabloid');
  const [gmbRating, setGmbRating] = useState(5);
  const [gmbReviews, setGmbReviews] = useState(182);
  const [magazineSize, setMagazineSize] = useState('full');
  const [promoColor, setPromoColor] = useState('crimson');
  const [windSpeed, setWindSpeed] = useState('breeze');

  // Pipeline card specific state
  const [demoStep, setDemoStep] = useState(0);
  const [demoStatus, setDemoStatus] = useState('Ready for Demo');

  const digitalServices = [
    {
      id: 'webdev',
      title: 'Fast Mobile Inventories',
      description: 'Clean, lightning-fast inventory pages built specifically for used car lots, appliance shops, and ATV dealers. Fully optimized for local mobile shoppers and Google search visibility.',
      outcome: 'Best For: Fast Mobile Loading & Local Search Listings',
      widgetType: 'web'
    },
    {
      id: 'crm',
      title: 'Direct SMS Lead Routing',
      description: 'Never miss a buyer. Website inquiries, contact forms, and Facebook Marketplace quote requests are synced instantly and sent directly to your cell phone via SMS text alerts.',
      outcome: 'Best For: Handshake Leads & Sales Floor Follow-Ups',
      widgetType: 'crm',
      spanClass: 'bento-wide'
    },
    {
      id: 'email',
      title: 'Customer Text & Follow-Ups',
      description: 'Automated follow-up texts or email drips sent to auto, tractor, or appliance buyers who request quotes, keeping your listings top-of-mind without manual effort.',
      outcome: 'Best For: Staying Top-of-Mind with Motivated Buyers',
      widgetType: 'email'
    },
    {
      id: 'leads',
      title: 'Facebook Marketplace Sync',
      description: 'We sync your fresh lot arrivals and listings directly to local Facebook Marketplace feeds, generating motivated local phone calls and texts.',
      outcome: 'Best For: Used Car, ATV & Equipment Lot Traffic',
      widgetType: 'leads'
    },
    {
      id: 'gmb',
      title: 'Google Maps & Facebook Pages',
      description: 'Weekly posts, photo uploads of new arrivals, and active management of your local Google Maps page to ensure motorists find your lot first.',
      outcome: 'Best For: Drawing Local Search Visibility & Storefront Traffic',
      widgetType: 'gmb'
    },
    {
      id: 'funnel',
      title: 'Sales Funnels',
      description: 'Custom multi-step funnels that capture a lead at the top and walk them through to a scheduled call, text reply, or lot visit — all automated. Built specifically for car lots, ATV dealers, and retail shops.',
      outcome: 'Best For: Turning Cold Traffic into Warm, Ready-to-Buy Leads',
      widgetType: 'funnel'
    },
    {
      id: 'landing',
      title: 'Landing Pages',
      description: 'Standalone campaign pages built to convert — for a specific vehicle, promotion, or seasonal sale. No nav, no distractions. Just the offer and a clear call to action that rings your phone.',
      outcome: 'Best For: Promotion-Specific Campaigns & Ad Traffic',
      widgetType: 'landing'
    },
  ];

  const physicalServices = [
    {
      id: 'google',
      title: 'Google Business Profile Management',
      description: 'We set up and actively manage your Google Business Profile so your dealership or shop appears at the top of local Google Maps when motivated buyers search nearby.',
      outcome: 'Best For: Local Google Search & Maps Visibility',
      widgetType: 'magazine',
      spanClass: 'bento-wide'
    },
    {
      id: 'promo',
      title: 'Store Caps, Shirts & Keychains',
      description: 'Custom corporate gifts, branded caps, shirts, keychains, and pens that local customers keep and use, keeping your dealership top-of-mind.',
      outcome: 'Best For: Long-Term Brand Trust & Customer Loyalty',
      widgetType: 'promo'
    },
    {
      id: 'flags',
      title: "Lot Flags, Banners & Hardware",
      description: "Heavy-duty American flags, roadside banners, and 20'-25'+ commercial flagpoles designed to withstand elements and draw drive-by motorists straight to your gates.",
      outcome: 'Best For: Capturing Physical Roadside Drive-By Attention',
      widgetType: 'flags'
    }
  ];

  const metaServices = [
    {
      id: 'metasuite',
      title: 'Meta Business Suite Management',
      description: 'Full management of your Facebook and Instagram Business Suite — page posts, inbox responses, audience insights, and ad account oversight. We keep your presence active and professional.',
      outcome: 'Best For: Facebook & Instagram Page Management',
      widgetType: 'metasuite',
      spanClass: 'bento-wide'
    },
    {
      id: 'metacatalog',
      title: 'Meta Product Catalog Ads',
      description: 'Sync your inventory or product catalog directly to Facebook and Instagram so local buyers see your actual stock in their feed. Dynamic ads that update automatically when you add new listings.',
      outcome: 'Best For: Auto Lots, ATV Dealers & Retail Shops',
      widgetType: 'metacatalog'
    },
    {
      id: 'metacarousel',
      title: 'Meta Carousel Ad Campaigns',
      description: 'Multi-image carousel ads that showcase up to 10 vehicles, products, or promotions in a single swipeable ad unit. Higher engagement, more clicks, and a lower cost-per-lead than single-image ads.',
      outcome: 'Best For: Showing Multiple Products in One Ad',
      widgetType: 'metacarousel'
    },
    {
      id: 'metavideo',
      title: 'Meta Video Marketing Plans',
      description: 'Short-form video ads produced and placed on Facebook and Instagram Reels — showcasing new arrivals, walkarounds, testimonials, and seasonal promotions to reach buyers who scroll past static images.',
      outcome: 'Best For: High-Reach Awareness & New Buyer Acquisition',
      widgetType: 'metavideo'
    },
  ];

  const activeServices = activeTab === 'digital' ? digitalServices
    : activeTab === 'meta' ? metaServices
    : physicalServices;

  // Web speed simulator
  const runWebAudit = () => {
    if (webdevTesting) return;
    setWebdevTesting(true);
    setWebdevScore(0);
    let score = 0;
    const interval = setInterval(() => {
      score += 4;
      if (score >= 99) {
        setWebdevScore(99);
        clearInterval(interval);
        setWebdevTesting(false);
      } else {
        setWebdevScore(score);
      }
    }, 25);
  };

  // Lead Sim Pipeline
  const runCrmDemo = () => {
    if (crmStep > 0) return;
    setCrmStep(1);
    setCrmStatus('Form Submitted');
    setTimeout(() => { setCrmStep(2); setCrmStatus('Database Synced...'); }, 1000);
    setTimeout(() => { setCrmStep(3); setCrmStatus('Formatting SMS Alert'); }, 2000);
    setTimeout(() => { setCrmStep(4); setCrmStatus('Text Dispatched to Dealer!'); }, 3000);
    setTimeout(() => { setCrmStep(0); setCrmStatus('Standby'); }, 5500);
  };

  // Large pipeline tracker simulator
  const triggerPipelineDemo = () => {
    if (demoStep > 0) return;
    setDemoStep(1);
    setDemoStatus('Lead captured via Mobile Inventory page');
    setTimeout(() => { setDemoStep(2); setDemoStatus('Cleaned and parsed (synced to databases)'); }, 1500);
    setTimeout(() => { setDemoStep(3); setDemoStatus('SMS notification sent to Dealership Owner cell'); }, 3000);
    setTimeout(() => { setDemoStep(0); setDemoStatus('Ready for Demo'); }, 5000);
  };

  // GMB Review Incrementer
  const handleReviewStarClick = (starIdx) => {
    setGmbRating(starIdx);
    setGmbReviews(prev => prev + 1);
  };

  // Widget renderer
  const renderWidget = (type) => {
    switch (type) {
      case 'web':
        return (
          <div className="bento-widget web-widget">
            <div className="web-speed-indicator">
              <span className={`speed-score ${webdevScore >= 90 ? 'score-green' : ''}`}>{webdevScore}</span>
              <span className="speed-label">Mobile PageSpeed</span>
            </div>
            <button className="btn-bento-action" onClick={runWebAudit} disabled={webdevTesting}>
              {webdevTesting ? 'Auditing...' : 'Test Speed'}
            </button>
          </div>
        );

      case 'crm':
        return (
          <div className="bento-widget crm-widget-interactive">
            <div className="crm-interactive-steps">
              <div className={`crm-step-dot ${crmStep >= 1 ? 'active' : ''}`}>
                <span className="step-dot-icon">
                  <IconMonitor size={14} />
                </span>
                <span className="step-dot-label">Web Inquiry</span>
              </div>
              <div className="crm-step-line-connector">
                <div className="crm-connector-glow" style={{ width: crmStep === 2 ? '50%' : crmStep >= 3 ? '100%' : '0%' }}></div>
              </div>
              <div className={`crm-step-dot ${crmStep >= 2 ? 'active' : ''}`}>
                <span className="step-dot-icon">
                  <IconTruck size={14} />
                </span>
                <span className="step-dot-label">FB Sync</span>
              </div>
              <div className="crm-step-line-connector">
                <div className="crm-connector-glow" style={{ width: crmStep === 3 ? '50%' : crmStep >= 4 ? '100%' : '0%' }}></div>
              </div>
              <div className={`crm-step-dot ${crmStep >= 4 ? 'active' : ''}`}>
                <span className="step-dot-icon">
                  <IconPhone size={14} />
                </span>
                <span className="step-dot-label">SMS Alert</span>
              </div>
            </div>
            <div className="crm-action-footer">
              <span className="crm-status-indicator">
                Status: <strong className={crmStep === 4 ? 'color-green' : ''}>{crmStatus}</strong>
              </span>
              <button className="btn-bento-action" onClick={runCrmDemo} disabled={crmStep > 0}>
                {crmStep > 0 ? 'Syncing...' : 'Simulate Handshake Lead'}
              </button>
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="bento-widget email-widget-interactive">
            <div className="email-type-toggles">
              <button
                className={`email-toggle-btn ${emailCampaign === 'tabloid' ? 'active' : ''}`}
                onClick={() => setEmailCampaign('tabloid')}
              >
                Weekly Tabloid Digest
              </button>
              <button
                className={`email-toggle-btn ${emailCampaign === 'drip' ? 'active' : ''}`}
                onClick={() => setEmailCampaign('drip')}
              >
                SMS Drip Follow-Up
              </button>
            </div>
            <div className="email-preview-display">
              {emailCampaign === 'tabloid' ? (
                <div className="email-mini-preview">
                  <span className="email-preview-subject">Subject: We got your inquiry on the Sierra — how can we help?</span>
                  <span className="email-preview-stat">Open Rate: <strong>48.5%</strong> | Click Rate: <strong>14.2%</strong></span>
                </div>
              ) : (
                <div className="email-mini-preview">
                  <span className="email-preview-subject">SMS: Thanks for looking at the GMC Sierra. We're available now...</span>
                  <span className="email-preview-stat">Response Rate: <strong>68.2%</strong></span>
                </div>
              )}
            </div>
          </div>
        );

      case 'leads':
        return (
          <div className="bento-widget leads-widget">
            <div className="leads-track">
              <div className="leads-item">2021 Chevy Silverado - FB Market Inquiry</div>
              <div className="leads-item">John Deere Utility Tractor - Google Maps Inquiry</div>
              <div className="leads-item">Polaris Sportsman ATV - Website Lead Routed</div>
              <div className="leads-item">Speed Queen Washer - FB Page Message</div>
            </div>
          </div>
        );

      case 'gmb':
        return (
          <div className="bento-widget gmb-widget-interactive">
            <div className="star-rating-selector">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star-span ${star <= gmbRating ? 'active' : ''}`}
                  onClick={() => handleReviewStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="reviews-counter">Rating: <strong>{gmbRating.toFixed(1)}</strong> ({gmbReviews} reviews)</span>
          </div>
        );

      case 'magazine':
        return (
          <div className="bento-widget magazine-widget-interactive">
            <div className="mag-layout-toggles">
              <button
                className={`mag-layout-btn ${magazineSize === 'full' ? 'active' : ''}`}
                onClick={() => setMagazineSize('full')}
              >
                Review Request Link
              </button>
              <button
                className={`mag-layout-btn ${magazineSize === 'half' ? 'active' : ''}`}
                onClick={() => setMagazineSize('half')}
              >
                Add Business Photos
              </button>
              <button
                className={`mag-layout-btn ${magazineSize === 'strip' ? 'active' : ''}`}
                onClick={() => setMagazineSize('strip')}
              >
                View Insights
              </button>
            </div>
            <div className="magazine-mockup-tabloid">
              <div className="mock-tabloid-masthead">Google Business Profile Actions</div>
              <div className="mock-tabloid-grid-columns">
                <div className={`mock-tabloid-ad-space ${magazineSize === 'full' ? 'highlight-ad' : ''}`}>
                  <span>
                    {magazineSize === 'full'
                      ? 'SMS review request sent to last 10 buyers'
                      : magazineSize === 'half'
                      ? '4 new photos uploaded to your profile'
                      : 'Search views up 34% this month'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'promo':
        return (
          <div className="bento-widget promo-widget-interactive">
            <div className="promo-color-toggles">
              <button
                className={`promo-color-dot crimson ${promoColor === 'crimson' ? 'active' : ''}`}
                onClick={() => setPromoColor('crimson')}
                title="Crimson Red"
              ></button>
              <button
                className={`promo-color-dot obsidian ${promoColor === 'obsidian' ? 'active' : ''}`}
                onClick={() => setPromoColor('obsidian')}
                title="Forest Navy"
              ></button>
              <button
                className={`promo-color-dot gold ${promoColor === 'gold' ? 'active' : ''}`}
                onClick={() => setPromoColor('gold')}
                title="Antique Gold"
              ></button>
            </div>
            <div className="promo-merch-preview">
              <span className={`merch-preview-icon ${promoColor}`}>
                <IconTag size={26} />
              </span>
              <span className="merch-preview-label">Branded Item ({promoColor})</span>
            </div>
          </div>
        );

      case 'flags':
        return (
          <div className="bento-widget flags-widget-interactive">
            <div className="wind-toggles">
              <button
                className={`wind-toggle-btn ${windSpeed === 'calm' ? 'active' : ''}`}
                onClick={() => setWindSpeed('calm')}
              >
                Calm
              </button>
              <button
                className={`wind-toggle-btn ${windSpeed === 'breeze' ? 'active' : ''}`}
                onClick={() => setWindSpeed('breeze')}
              >
                Breeze
              </button>
              <button
                className={`wind-toggle-btn ${windSpeed === 'gale' ? 'active' : ''}`}
                onClick={() => setWindSpeed('gale')}
              >
                Gale
              </button>
            </div>
            <div className="flag-visual-container">
              <div className="flagpole"></div>
              <div className={`flag-banner ${windSpeed}`}>
                <div className="flag-logo-mark">MM</div>
              </div>
            </div>
          </div>
        );

      case 'metasuite':
        return (
          <div className="bento-widget meta-suite-widget">
            <div className="meta-suite-header">
              <span className="meta-suite-dot" style={{background:'#1877F2'}} />
              <span className="meta-suite-dot" style={{background:'#E1306C'}} />
              <span className="meta-suite-label">Business Suite</span>
            </div>
            <div className="meta-suite-stats">
              <div className="meta-suite-stat">
                <span className="meta-suite-stat-val">2.4K</span>
                <span className="meta-suite-stat-lbl">Page Reach</span>
              </div>
              <div className="meta-suite-stat">
                <span className="meta-suite-stat-val">184</span>
                <span className="meta-suite-stat-lbl">Post Engagements</span>
              </div>
              <div className="meta-suite-stat">
                <span className="meta-suite-stat-val">38</span>
                <span className="meta-suite-stat-lbl">Messages</span>
              </div>
            </div>
            <div className="meta-suite-bar-row">
              <span className="meta-suite-bar-lbl">Profile Completeness</span>
              <div className="meta-suite-bar"><div className="meta-suite-bar-fill" style={{width:'92%'}} /></div>
              <span className="meta-suite-bar-pct">92%</span>
            </div>
          </div>
        );

      case 'metacatalog':
        return (
          <div className="bento-widget meta-catalog-widget">
            <div className="meta-catalog-grid">
              {['2019 F-150', 'Polaris Sportsman', '2021 Silverado', 'Speed Queen Washer'].map((item, i) => (
                <div className="meta-catalog-item" key={i}>
                  <div className="meta-catalog-thumb" />
                  <span className="meta-catalog-name">{item}</span>
                </div>
              ))}
            </div>
            <div className="meta-catalog-label">Live Catalog · 4 listings synced</div>
          </div>
        );

      case 'metacarousel':
        return (
          <div className="bento-widget meta-carousel-widget">
            <div className="meta-carousel-track">
              {['Truck 1', 'Truck 2', 'Truck 3'].map((item, i) => (
                <div className={`meta-carousel-slide ${i === 0 ? 'active' : ''}`} key={i}>
                  <div className="meta-carousel-img" />
                  <div className="meta-carousel-caption">{item}</div>
                </div>
              ))}
            </div>
            <div className="meta-carousel-dots">
              <span className="meta-carousel-dot active" />
              <span className="meta-carousel-dot" />
              <span className="meta-carousel-dot" />
            </div>
            <div className="meta-catalog-label">Swipeable · Up to 10 cards per ad</div>
          </div>
        );

      case 'metavideo':
        return (
          <div className="bento-widget meta-video-widget">
            <div className="meta-video-preview">
              <div className="meta-video-thumb">
                <div className="meta-video-play">
                  <IconVideo size={22} />
                </div>
              </div>
              <div className="meta-video-info">
                <span className="meta-video-title">New Arrivals · June Walk-Around</span>
                <span className="meta-video-stat">Reach: <strong>4.1K</strong> &nbsp;·&nbsp; Views: <strong>1.8K</strong></span>
              </div>
            </div>
            <div className="meta-catalog-label">Reels &amp; Feed Video · Updated Monthly</div>
          </div>
        );

      case 'funnel':
        return (
          <div className="bento-widget funnel-widget">
            <div className="funnel-stages">
              <div className="funnel-stage funnel-stage--top">
                <span className="funnel-stage-label">Awareness</span>
                <span className="funnel-stage-count">1,240 reached</span>
              </div>
              <div className="funnel-stage-arrow" aria-hidden="true">↓</div>
              <div className="funnel-stage funnel-stage--mid">
                <span className="funnel-stage-label">Interest</span>
                <span className="funnel-stage-count">318 clicked</span>
              </div>
              <div className="funnel-stage-arrow" aria-hidden="true">↓</div>
              <div className="funnel-stage funnel-stage--bottom">
                <span className="funnel-stage-label">Convert</span>
                <span className="funnel-stage-count funnel-stage-count--accent">84 leads</span>
              </div>
            </div>
            <div className="meta-catalog-label">Automated · 3-step campaign funnel</div>
          </div>
        );

      case 'landing':
        return (
          <div className="bento-widget landing-widget">
            <div className="landing-mockup">
              <div className="landing-mock-bar">
                <span className="landing-mock-dot" /><span className="landing-mock-dot" /><span className="landing-mock-dot" />
              </div>
              <div className="landing-mock-body">
                <div className="landing-mock-headline" />
                <div className="landing-mock-sub" />
                <div className="landing-mock-sub landing-mock-sub--short" />
                <div className="landing-mock-cta">Call Now</div>
              </div>
            </div>
            <div className="meta-catalog-label">No nav · No distractions · One CTA</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="solutions-page animate-fade-in">

      {/* ── Dark Page Hero ── */}
      <section className="solutions-hero">
        <div className="solutions-hero-inner">
          <span className="solutions-hero-eyebrow">What We Offer</span>
          <h1 className="solutions-hero-heading">Advertising Built for Mississippi Retailers</h1>
          <p className="solutions-hero-sub">
          Simple, straightforward capabilities — digital inventory listings, Meta ad campaigns, and physical storefront presence to capture every local buyer in your market.
          </p>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="section-padding solutions-content">
        <div className="container">

          {/* Pill Tab Switcher */}
          <div className="tab-switcher-wrap">
            <div className="tab-pill-switcher" role="tablist">
              <button
                id="tab-digital"
                role="tab"
                aria-selected={activeTab === 'digital'}
                className={`tab-pill-btn ${activeTab === 'digital' ? 'active' : ''}`}
                onClick={() => setActiveTab('digital')}
              >
                Digital Sync
              </button>
              <button
                id="tab-meta"
                role="tab"
                aria-selected={activeTab === 'meta'}
                className={`tab-pill-btn ${activeTab === 'meta' ? 'active' : ''}`}
                onClick={() => setActiveTab('meta')}
              >
                Meta Ad Campaigns
              </button>
              <button
                id="tab-physical"
                role="tab"
                aria-selected={activeTab === 'physical'}
                className={`tab-pill-btn ${activeTab === 'physical' ? 'active' : ''}`}
                onClick={() => setActiveTab('physical')}
              >
                Print &amp; Storefront
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid bento-grid">
            {activeServices.map((service, index) => {
              const IconComponent = SERVICE_ICONS[service.id];
              return (
                <div
                  key={service.id}
                  className={`service-card ${service.spanClass || ''} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="service-icon-wrapper">
                    {IconComponent && <IconComponent size={22} />}
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>

                  {/* Interactive Mini-Widget */}
                  {renderWidget(service.widgetType)}

                  <div className="service-outcome-pill">{service.outcome}</div>
                </div>
              );
            })}

            {/* CRM Pipeline tracker — digital tab only */}
            {activeTab === 'digital' && (
              <div className="pipeline-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="pipeline-header-flex">
                  <div className="service-icon-wrapper">
                    <IconPhone size={22} />
                  </div>
                  <button className="btn-dash-action" onClick={triggerPipelineDemo} disabled={demoStep > 0}>
                    {demoStep > 0 ? 'Syncing...' : 'Simulate SMS Route'}
                  </button>
                </div>
                <h3 className="service-card-title">Live SMS Lead Routing Tracker</h3>
                <p className="service-card-description">
                  See how the sync works: A buyer submits a form on your inventory page, our systems clean and log the data instantly, and dispatch a text alert directly to your phone.
                </p>

                <div className="pipeline-flow">
                  <div className="pipeline-track"></div>
                  <div className={`pipeline-dot demo-step-${demoStep}`}></div>

                  <div className={`pipeline-node ${demoStep >= 1 ? 'active' : ''}`}>
                    <IconMonitor size={16} />
                    <span className="pipeline-node-label">Web Inquiry</span>
                  </div>

                  <div className={`pipeline-node ${demoStep >= 2 ? 'active' : ''}`}>
                    <IconTruck size={16} />
                    <span className="pipeline-node-label">Inventory Sync</span>
                  </div>

                  <div className={`pipeline-node ${demoStep >= 3 ? 'active' : ''}`}>
                    <IconPhone size={16} />
                    <span className="pipeline-node-label">Your Phone Alert</span>
                  </div>
                </div>
                <div className="pipeline-status-log">
                  Lead Status: <strong>{demoStatus}</strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Band ── */}
      <section className="solutions-cta-band">
        <div className="solutions-cta-inner">
          <p className="solutions-cta-label">Ready to get started?</p>
          <h2 className="solutions-cta-heading">Let's Build Your Campaign</h2>
          <Link to="/contact" className="btn btn-primary solutions-cta-btn">
            Request Your Campaign
          </Link>
        </div>
      </section>

    </div>
  );
}
