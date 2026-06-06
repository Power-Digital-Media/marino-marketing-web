import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const CANONICAL_DOMAIN = 'https://marinomarketingsolutions.com';

  // Inject speakable WebPage schema on route change
  useEffect(() => {
    const existing = document.querySelector('script[data-speakable]');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-speakable', 'true');
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${CANONICAL_DOMAIN}${location.pathname}#webpage`,
      'url': `${CANONICAL_DOMAIN}${location.pathname}`,
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['h1', 'h2']
      }
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/solutions', label: 'Solutions Hub' },
    { path: '/portfolio', label: 'Products' },
    { path: '/about', label: 'About Us' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-link" onClick={handleNavClick}>
          <div className="logo-text">
            Marino<span className="logo-accent">Marketing</span>
          </div>
          <div className="logo-subtext">Solutions</div>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn btn-primary nav-cta"
            onClick={handleNavClick}
          >
            Start Your Campaign
          </Link>
        </nav>
      </div>
    </header>
  );
}
