import { useState } from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      category: 'digital',
      categoryLabel: 'Digital Solutions',
      title: 'Auto Dealer Lead Pipeline',
      description: 'Built a custom inventory-linked portal that syncs vehicle listings to databases, automatically capturing and routing leads via SMS alerts and CRM pipelines.',
      metricLabel: 'Leads Generated',
      metricValue: '+184% YoY',
      icon: '🚗'
    },
    {
      category: 'branding',
      categoryLabel: 'Branding & Print',
      title: 'S.V.N. Integrated Identity',
      description: 'A complete omnichannel brand launch combining physical banners, promotional stationery, and a fast-loading promotional page.',
      metricLabel: 'Store Foot Traffic',
      metricValue: '+45% Increase',
      icon: '📐'
    },
    {
      category: 'digital',
      categoryLabel: 'Digital Solutions',
      title: 'Retail Store Next-Gen Web',
      description: 'Replaced a slow legacy site with an ultra-lightweight Vite React platform. Integrated automated email notifications and contact scheduling.',
      metricLabel: 'Page Speed Rank',
      metricValue: '99/100 Mobile',
      icon: '⚡'
    },
    {
      category: 'branding',
      categoryLabel: 'Branding & Print',
      title: 'Tradewinds Magazine Feature',
      description: 'Coordinated a weekly regional print publication campaign for a home services client, driving local phone call inquiries.',
      metricLabel: 'Ad Reach',
      metricValue: '25k+ Weekly',
      icon: '📰'
    },
    {
      category: 'digital',
      categoryLabel: 'Digital Solutions',
      title: 'Automated CRM Sync',
      description: 'Integrated local retail contact forms with CRM pipelines and automated email follow-up flows, instantly routing queries to store managers.',
      metricLabel: 'Lead Response Time',
      metricValue: '< 5 Minutes',
      icon: '🔄'
    },
    {
      category: 'branding',
      categoryLabel: 'Branding & Print',
      title: 'Eco-Package Product Suite',
      description: 'Eco-friendly product packaging and hardware signage templates built for a regional organic food brand.',
      metricLabel: 'Unit Sales',
      metricValue: '+60k Packets',
      icon: '📦'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="portfolio-section section-padding" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <span className="portfolio-tag">Our Work</span>
          <h2>Real Results, Real Impact</h2>
          <p>
            Explore how we help businesses capture digital leads, streamline customer pipelines, and stand out in the physical world.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="filters-container">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work
          </button>
          <button 
            className={`filter-btn ${filter === 'digital' ? 'active' : ''}`}
            onClick={() => setFilter('digital')}
          >
            Digital & Systems
          </button>
          <button 
            className={`filter-btn ${filter === 'branding' ? 'active' : ''}`}
            onClick={() => setFilter('branding')}
          >
            Branding & Print
          </button>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="project-thumbnail">
                <span className="project-thumbnail-icon">{project.icon}</span>
              </div>
              <div className="project-details">
                <span className="project-category">{project.categoryLabel}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-metric">
                  <span className="project-metric-label">{project.metricLabel}</span>
                  <span className="project-metric-value">{project.metricValue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
