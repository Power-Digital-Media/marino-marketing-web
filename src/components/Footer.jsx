import { Link } from 'react-router-dom';
import { IconMapPin, IconPhone, IconMail } from './Icons';
import './Footer.css';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid footer-grid">
          {/* Brand block */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo" onClick={handleScrollTop}>
              Marino<span>Marketing</span>
            </Link>
            <p className="footer-slogan">
              Connecting simple mobile inventory pages with trusted regional weekly print media to drive local buyers straight to your sales lot.
            </p>
          </div>

          {/* Navigation block */}
          <div>
            <h4 className="footer-column-title">Company</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link" onClick={handleScrollTop}>Home</Link>
              <Link to="/solutions" className="footer-link" onClick={handleScrollTop}>Solutions Hub</Link>
              <Link to="/portfolio" className="footer-link" onClick={handleScrollTop}>Products</Link>
              <Link to="/about" className="footer-link" onClick={handleScrollTop}>About Us</Link>
            </div>
          </div>

          {/* Services block */}
          <div>
            <h4 className="footer-column-title">Solutions</h4>
            <div className="footer-links">
              <Link to="/solutions" className="footer-link" onClick={handleScrollTop}>Dealer Inventories</Link>
              <Link to="/solutions" className="footer-link" onClick={handleScrollTop}>SMS Lead Routing</Link>
              <Link to="/solutions" className="footer-link" onClick={handleScrollTop}>Text Follow-Ups</Link>
              <Link to="/solutions" className="footer-link" onClick={handleScrollTop}>Facebook Market Sync</Link>
              <Link to="/solutions" className="footer-link" onClick={handleScrollTop}>Google Business Profile</Link>
              <Link to="/solutions" className="footer-link" onClick={handleScrollTop}>Lot Flags & Banners</Link>
            </div>
          </div>

          {/* Contact info block */}
          <div>
            <h4 className="footer-column-title">Inquiries</h4>
            <div className="footer-contact-info">
              <p><IconMapPin size={13} style={{ marginRight: '0.45rem', verticalAlign: 'middle', opacity: 0.65 }} /> Mississippi, USA</p>
              <p><IconPhone size={13} style={{ marginRight: '0.45rem', verticalAlign: 'middle', opacity: 0.65 }} /> 601.594.2291</p>
              <p><IconMail size={13} style={{ marginRight: '0.45rem', verticalAlign: 'middle', opacity: 0.65 }} /> marinomarketing12@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright and attribution */}
        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Marino Marketing Solutions. All rights reserved.
          </span>
          <span className="footer-credit">
            Developed in Partnership with <Link to="/solutions" onClick={handleScrollTop}>Local Growth Systems</Link>.
          </span>
        </div>
      </div>
    </footer>
  );
}
