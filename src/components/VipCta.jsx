export default function VipCta() {
  return (
    <section className="vip-cta-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Exclusive Access</span>
          <h2 className="section-title title-with-highlight animate-item">
            Join the VIP Club, <strong>Save Up to 50%</strong>
          </h2>
          <p className="section-subtitle animate-item">
            Unlock members-only pricing, early access to new products, free shipping on every order,
            and personalized wellness recommendations.
          </p>
        </div>
        <a href="/vip/" className="btn-primary get_page animate-item" data-page="vip">
          Become a VIP Member
        </a>
      </div>
    </section>
  )
}
