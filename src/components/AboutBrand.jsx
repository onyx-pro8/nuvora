import { Link } from 'react-router-dom'
import { BRAND, COMPANY } from '../data/site'

export default function AboutBrand() {
  return (
    <section className="featured-product-section animate-section">
      <div className="container">
        <div className="featured-product-grid">
          <div className="featured-product-info animate-item">
            <span className="section-label">Our company</span>
            <h2 className="section-title title-with-highlight" style={{ textAlign: 'left', marginBottom: 16 }}>
              About <strong>{BRAND.name}</strong>
            </h2>
            <p className="product-short-desc">
              {BRAND.name} is operated by {COMPANY.name} in Grimes, Iowa. We offer extra-strength Organic Beet Root
              Capsules from Toplux Nutrition — USDA Organic, made in the USA — with straightforward pricing and support
              you can reach by phone or email.
            </p>
            <p className="product-short-desc" style={{ marginBottom: 0 }}>
              {COMPANY.fullAddress}
              <br />
              {COMPANY.hours}
              <br />
              Statement descriptor: {COMPANY.name}
            </p>
          </div>
          <div className="animate-item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
            <a href={COMPANY.phoneHref} className="btn-primary">
              Call {COMPANY.phone}
            </a>
            <Link to="/contacts" className="btn-outline-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
