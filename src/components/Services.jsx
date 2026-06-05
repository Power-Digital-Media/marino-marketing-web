import React, { useState } from 'react';
import './Services.css';

export default function Services() {
  const [activeTab, setActiveTab] = useState('digital');

  const servicesData = {
    digital: [
      {
        icon: '💻',
        title: 'High-Performance Web Dev',
        description: 'Bespoke, lightning-fast web applications built on Next.js, React, and Vite. Designed with micro-animations and fully optimized for local search engine authority (SEO).',
        outcome: 'Best For: Page Speed & Search Rankings'
      },
      {
        icon: '🔄',
        title: 'CRM & Pipeline Automation',
        description: 'Synchronize your website forms directly with your customer database or sales pipes. Automatically route leads, schedule appointments, and organize client pipelines.',
        outcome: 'Best For: Efficiency & Lead Retention'
      },
      {
        icon: '✉️',
        title: 'Email Marketing Automations',
        description: 'Keep your customers engaged without manual effort. Custom automated newsletters, drip campaigns, product catalogs, and promotional deal broadcasts.',
        outcome: 'Best For: Recurring Customer Revenue'
      },
      {
        icon: '🚗',
        title: 'Deep-Funnel Digital Leads',
        description: 'Access our regional auto marketing networks. We promote, market, and distribute your dealer inventory directly to generate calls, chats, and scheduled visits.',
        outcome: 'Best For: Automotive Retail Conversions'
      },
      {
        icon: '📢',
        title: 'Paid Search & Social Ads',
        description: 'Targeted hyper-local campaigns on Facebook, Instagram, and Google. One-click ad systems designed to send potential buyers directly to your service or landing pages.',
        outcome: 'Best For: High-Speed Traffic Boost'
      },
      {
        icon: '👥',
        title: 'Google & Facebook Business',
        description: 'Weekly postings, content updates, and active reputation management of your local Google My Business and Facebook pages to keep your business top-of-mind.',
        outcome: 'Best For: Local Visibility & Trust'
      }
    ],
    physical: [
      {
        icon: '🗺️',
        title: 'Google Business Profile Management',
        description: 'We set up and actively manage your Google Business Profile so your dealership or shop appears at the top of local search results and Google Maps when buyers search nearby.',
        outcome: 'Best For: Local Search Visibility'
      },
      {
        icon: '👕',
        title: 'Promotional Merchandise',
        description: 'Custom corporate gifts, branded apparel, stationary, and promotional merchandise that clients keep and use every day to keep your brand visible.',
        outcome: 'Best For: Brand Recogition & Client Gifts'
      },
      {
        icon: '🚩',
        title: 'Flags, Banners & Hardware',
        description: 'High-quality American flags, state flags, Liberty banners, and outdoor sectional flagpoles (20\'-25\'+) to capture physical drive-by attention.',
        outcome: 'Best For: Physical Storefront Visibility'
      }
    ]
  };

  return (
    <section className="services-section section-padding" id="solutions">
      <div className="container">
        <div className="services-header">
          <span className="services-tag">Omnichannel Solutions</span>
          <h2>Everything Your Business Needs to Grow</h2>
          <p>
            We align high-performance custom web code and pipeline automation with print media and storefront displays for a comprehensive local advertising campaign.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'digital' ? 'active' : ''}`}
            onClick={() => setActiveTab('digital')}
          >
            Digital Growth Systems
          </button>
          <button 
            className={`tab-btn ${activeTab === 'physical' ? 'active' : ''}`}
            onClick={() => setActiveTab('physical')}
          >
            Physical & Print Branding
          </button>
        </div>

        {/* Dynamic Service Grid */}
        <div className="grid services-grid">
          {servicesData[activeTab].map((service, index) => {
            // Apply bento layout classes for visual interest
            let bentoClass = '';
            if (activeTab === 'digital' && index === 1) bentoClass = 'bento-wide';
            if (activeTab === 'physical' && index === 0) bentoClass = 'bento-wide';
            
            return (
              <div 
                key={index} 
                className={`service-card ${bentoClass} animate-fade-in`} 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <div className="service-outcome">{service.outcome}</div>
              </div>
            );
          })}

          {/* Interactive Lead Pipeline Widget for Digital Tab */}
          {activeTab === 'digital' && (
            <div className="pipeline-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="service-icon-wrapper">🔄</div>
              <h3 className="service-card-title">Live Pipeline Integration Tracker</h3>
              <p className="service-card-description">
                See how it works: A customer submits a form on your high-speed custom website, our systems process and clean the lead data instantly, routing it directly into your CRM database with a live mobile SMS alert to your sales representatives.
              </p>
              
              {/* CSS Animated Pipeline Flow Track */}
              <div className="pipeline-flow">
                <div className="pipeline-track"></div>
                <div className="pipeline-dot"></div>
                
                <div className="pipeline-node">
                  🌐
                  <span className="pipeline-node-label">Website Input</span>
                </div>
                
                <div className="pipeline-node">
                  ⚙️
                  <span className="pipeline-node-label">Lead Router</span>
                </div>
                
                <div className="pipeline-node">
                  📱
                  <span className="pipeline-node-label">Sales Rep CRM</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
