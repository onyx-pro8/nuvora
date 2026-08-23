import { Link } from 'react-router-dom'

export default function VipCta() {
  return (
    <section className="vip-cta-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Exclusive Access</span>
          <h2 className="section-title title-with-highlight animate-item">
            Join the Members Club, <strong>Save on Every Bottle</strong>
          </h2>
          <p className="section-subtitle animate-item">
            Unlock member pricing, free shipping on eligible orders, and a simple 28-day restock. One-time purchases
            remain available without a membership.
          </p>
        </div>
        <Link to="/vip" className="btn-primary get_page animate-item" data-page="vip">
          Become a Member
        </Link>
      </div>
    </section>
  )
}
