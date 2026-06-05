import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconFlag, IconTag, IconUsers } from '../components/Icons';
import './Portfolio.css';

const categories = [
  { id: 'all',       label: 'All Products' },
  { id: 'signage',   label: 'Lot Flags & Signage' },
  { id: 'apparel',   label: 'Apparel & Headwear' },
  { id: 'promo',     label: 'Promo & Branded Gifts' },
];

const products = [
  // ── Lot Flags & Signage ──
  {
    id: 'american-flags',
    category: 'signage',
    name: 'Heavy-Duty American Flags',
    description:
      'Commercial-grade nylon flags built for outdoor use at car lots, dealerships, and retail storefronts. Multiple sizes from 3×5 ft up to 5×8 ft.',
    details: ['Rip-stop nylon', 'Double-stitched fly end', '3×5 ft — 5×8 ft sizes'],
    icon: IconFlag,
  },
  {
    id: 'feather-banners',
    category: 'signage',
    name: 'Feather & Blade Banners',
    description:
      'Eye-catching roadside banners that snap in light breezes and hold their shape. Great for drawing highway traffic directly to your storefront entrance.',
    details: ['Printed full-color both sides', 'Ground stake & cross base options', 'Custom artwork available'],
    icon: IconFlag,
  },
  {
    id: 'flagpoles',
    category: 'signage',
    name: '20–25 ft Commercial Flagpoles',
    description:
      'Heavy-duty aluminum sectional flagpoles rated for commercial lots. Includes internal halyard, finial ball, and ground sleeve. Made to last years outdoors.',
    details: ['20 ft & 25 ft heights', 'Satin aluminum finish', 'Internal halyard system'],
    icon: IconFlag,
  },
  {
    id: 'vinyl-banners',
    category: 'signage',
    name: 'Custom Vinyl Banners',
    description:
      'Full-color 13 oz vinyl banners for grand openings, sales events, and permanent lot signage. Grommeted and reinforced for wind resistance.',
    details: ['13 oz heavy-duty vinyl', 'Any size, custom layout', 'Hemmed & grommeted'],
    icon: IconFlag,
  },
  // ── Apparel & Headwear ──
  {
    id: 'caps',
    category: 'apparel',
    name: 'Branded Caps & Hats',
    description:
      'Structured and unstructured caps embroidered with your dealership logo. Customers keep and wear branded hats for years — keeping your name in front of buyers daily.',
    details: ['Embroidered logo', 'Structured & unstructured styles', 'Adjustable snapback or fitted'],
    icon: IconTag,
  },
  {
    id: 'polo-shirts',
    category: 'apparel',
    name: 'Custom Polo Shirts',
    description:
      'Professional polo shirts embroidered with your business name and logo. Perfect for your sales team to wear on the lot — creating a polished, trustworthy look.',
    details: ['Left-chest embroidery', 'Moisture-wicking fabric options', 'S – 3XL sizing'],
    icon: IconTag,
  },
  {
    id: 't-shirts',
    category: 'apparel',
    name: 'Screen-Printed T-Shirts',
    description:
      'Quality cotton tees with your logo or event design screen-printed on the front and back. Great for lot giveaways, community events, and staff uniforms.',
    details: ['Front & back print', '100% cotton or 50/50 blend', 'Up to 6 spot colors'],
    icon: IconTag,
  },
  // ── Promo & Branded Gifts ──
  {
    id: 'keychains',
    category: 'promo',
    name: 'Custom Keychains',
    description:
      'Laser-engraved or printed metal and acrylic keychains with your dealership logo. Handed out at purchase — customers carry your brand on their keys every single day.',
    details: ['Metal & acrylic options', 'Laser-engraved or full-color print', 'Low minimum quantities'],
    icon: IconUsers,
  },
  {
    id: 'pens',
    category: 'promo',
    name: 'Branded Pens',
    description:
      'Smooth-writing ballpoint pens printed with your business name and phone number. Left at service counters and handed to every buyer — high-visibility, low cost.',
    details: ['Full-color imprint', 'Black or blue ink', 'Bulk pricing available'],
    icon: IconUsers,
  },
  {
    id: 'tumblers',
    category: 'promo',
    name: 'Insulated Tumblers & Mugs',
    description:
      'Stainless steel insulated tumblers laser-engraved with your logo. Customers use these daily for years — one of the highest-retention promotional products available.',
    details: ['20 oz & 30 oz options', 'Laser-engraved logo', 'Double-wall vacuum insulation'],
    icon: IconUsers,
  },
  {
    id: 'koozies',
    category: 'promo',
    name: 'Can Koozies & Coolers',
    description:
      'Custom neoprene can koozies printed with your logo. A Southern staple — handed out at events, cookouts, and lot promotions. Affordable and highly visible.',
    details: ['Full-wrap print', 'Neoprene or foam', 'Minimum 24 pcs'],
    icon: IconUsers,
  },
  {
    id: 'magnets',
    category: 'promo',
    name: 'Vinyl Car Magnets',
    description:
      'Full-color vinyl magnetic signs for dealer vehicles and company trucks. Removable, weather-resistant, and turn every company vehicle into a rolling billboard.',
    details: ['Custom shapes & sizes', 'UV-resistant print', 'Repositionable'],
    icon: IconUsers,
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visible = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter);

  return (
    <main className="portfolio-page">

      {/* ── Page Hero ── */}
      <section className="portfolio-hero">
        <div className="portfolio-hero__glow" aria-hidden="true" />
        <div className="container portfolio-hero__inner">
          <span className="portfolio-hero__eyebrow">Promotional Products</span>
          <h1 className="portfolio-hero__headline">
            Put Your Name on<br />Everything That Stays.
          </h1>
          <p className="portfolio-hero__sub">
            Caps, flags, keychains, banners — physical branded products your customers
            keep and see every day. Real merchandise. No fake case studies.
          </p>
        </div>
      </section>

      {/* ── Filter Pills ── */}
      <div className="portfolio-filters-bar">
        <div className="container portfolio-filters-bar__inner">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              className={`portfolio-filter-pill${activeFilter === id ? ' portfolio-filter-pill--active' : ''}`}
              onClick={() => setActiveFilter(id)}
              aria-pressed={activeFilter === id}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Product Grid ── */}
      <section className="section-padding portfolio-grid-section">
        <div className="container">
          <div className="portfolio-product-grid">
            {visible.map(product => {
              const IconComp = product.icon;
              return (
                <article className="product-card" key={product.id}>
                  <div className="product-card__icon-wrap" aria-hidden="true">
                    <IconComp size={28} />
                  </div>
                  <div className="product-card__body">
                    <h2 className="product-card__name">{product.name}</h2>
                    <p className="product-card__desc">{product.description}</p>
                    <ul className="product-card__details">
                      {product.details.map((d, i) => (
                        <li key={i} className="product-card__detail-item">
                          <span className="product-card__detail-dot" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="product-card__footer">
                    <Link to="/contact" className="product-card__cta">
                      Request a Quote →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {visible.length === 0 && (
            <p className="portfolio-empty">No products found for this category.</p>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="portfolio-cta">
        <div className="portfolio-cta__glow" aria-hidden="true" />
        <div className="container portfolio-cta__inner">
          <p className="portfolio-cta__eyebrow">Ready to order?</p>
          <h2 className="portfolio-cta__headline">Get a Custom Quote Today</h2>
          <p className="portfolio-cta__sub">
            We'll work with you to choose the right products, quantities, and artwork
            for your lot or storefront. No minimums on most items.
          </p>
          <Link to="/contact" className="btn btn-primary portfolio-cta__btn">
            Get in Touch
          </Link>
        </div>
      </section>

    </main>
  );
}
