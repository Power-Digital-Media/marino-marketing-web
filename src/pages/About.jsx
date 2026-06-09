import { Link } from 'react-router-dom';
import {
  IconMonitor,
  IconPhone,
  IconFlag,
  IconMail,
  IconMegaphone,
  IconVideo,
  IconDatabase,
  IconMeta,
  IconFunnel,
  IconLayout,
} from '../components/Icons';
import './About.css';

const stats = [
  { number: '100%', label: 'Customer Satisfaction' },
  { number: '50+',  label: 'Clients Served' },
  { number: '34%',  label: 'Avg Google Views Increase' },
  { number: '#1',   label: 'Local Rank Achieved' },
];

const services = [
  { icon: IconMonitor,   label: 'Elite Web Design' },
  { icon: IconDatabase,  label: 'Bespoke Custom Apps' },
  { icon: IconPhone,     label: 'SMS Lead Routing' },
  { icon: IconMeta,      label: 'Growth Marketing & Ads' },
  { icon: IconMegaphone, label: 'Google Business Profile' },
  { icon: IconDatabase,  label: 'CRM Pipeline Automation' },
  { icon: IconMail,      label: 'Customer Text Follow-Ups' },
  { icon: IconMeta,      label: 'Meta Business Suite Mgmt' },
  { icon: IconVideo,     label: 'Video Ads & Creative' },
  { icon: IconFunnel,    label: 'Campaign Sales Funnels' },
  { icon: IconLayout,    label: 'Landing Pages' },
  { icon: IconFlag,      label: 'Lot Flags & Banners' },
];

export default function About() {
  return (
    <main className="about-page">

      {/* ── Page Hero ── */}
      <section className="about-hero">
        <div className="about-hero__glow" aria-hidden="true" />
        <div className="container about-hero__inner">
          <span className="about-hero__eyebrow">Our Story</span>
          <h1 className="about-hero__headline">
            Built for Local Dealers.<br />Driven by Real Results.
          </h1>
          <p className="about-hero__sub">
            Marino Marketing Solutions was built by a Mississippi native who grew
            up watching small businesses fight for every customer. This is how we fight back.
          </p>
        </div>
      </section>

      {/* ── Story + Pull Quote ── */}
      <section className="section-padding about-story">
        <div className="container about-story__grid">
          <div className="about-story__copy">
            <span className="about-eyebrow-tag">Who We Are</span>
            <h2 className="about-story__title">A Marketing Firm That Knows Your Market</h2>
            <hr className="gold-rule" />
            <p>
              Marino Marketing Solutions was built after years of watching local used car
              lots, ATV dealers, and appliance retailers get left behind by agencies that never
              set foot in their markets. We knew there had to be a better way — one rooted in
              real community knowledge, not just ad dashboards.
            </p>
            <p>
              Today, Marino Marketing runs digital campaigns, print pieces, SMS pipelines, and
              Google profiles for dealerships and retailers across the Mississippi region. Every
              strategy is hand-built for the local buyer — because cookie-cutter marketing
              doesn't fill lots. Relationships do.
            </p>
          </div>
          <aside className="about-story__quote-col">
            <blockquote className="about-pullquote">
              <span className="about-pullquote__mark" aria-hidden="true">&ldquo;</span>
              <p className="about-pullquote__text">
                We put your inventory where local buyers are already looking.
              </p>
              <footer className="about-pullquote__footer">
                <strong>Nick Ellis</strong>
                <span>Founder, Marino Marketing Solutions</span>
              </footer>
            </blockquote>
            <div className="about-story__image-wrap">
              <img src="/assets/handshake_dealership.png" alt="Nick Ellis shaking hands with a local dealership owner" className="about-story__image" loading="lazy" />
            </div>
          </aside>
        </div>
      </section>

      {/* ── Stats Band ── */}
      <section className="about-stats">
        <div className="container about-stats__grid">
          {stats.map(({ number, label }) => (
            <div className="about-stat" key={label}>
              <span className="about-stat__number">{number}</span>
              <span className="about-stat__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Quick-List ── */}
      <section className="section-padding about-services">
        <div className="container">
          <div className="about-services__header">
            <span className="about-eyebrow-tag">What We Do</span>
            <h2>Every Tool You Need.<br />One Local Team.</h2>
            <hr className="gold-rule" />
          </div>
          <ul className="about-services__grid" role="list">
            {services.map(({ icon: Icon, label }) => (
              <li className="about-service-chip" key={label}>
                <span className="about-service-chip__icon">
                  <Icon size={20} />
                </span>
                <span className="about-service-chip__label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="about-cta">
        <div className="about-cta__glow" aria-hidden="true" />
        <div className="container about-cta__inner">
          <h2 className="about-cta__headline">Ready to get more from your marketing?</h2>
          <p className="about-cta__sub">
            From lot flags and Google profiles to custom websites and video ads —
            let's build a campaign that fits your business and your market.
          </p>
          <Link to="/contact" className="btn btn-primary about-cta__btn">
            Start Your Campaign
          </Link>
        </div>
      </section>

    </main>
  );
}
