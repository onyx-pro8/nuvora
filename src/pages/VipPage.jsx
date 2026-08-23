import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import { BRAND, COMPANY, VIP } from '../data/site'
import { addVipMembershipToCart } from '../utils/cart'

function VipFaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`vip-faq-item${open ? ' active' : ''}`}>
      <button type="button" className="vip-faq-question" onClick={() => setOpen(!open)}>
        {question}
      </button>
      <div className="vip-faq-answer">{answer}</div>
    </div>
  )
}

export default function VipPage() {
  const navigate = useNavigate()

  const joinVip = () => {
    addVipMembershipToCart()
    navigate('/checkout')
  }

  return (
    <SiteLayout pageStyles={['vip']}>
      <main>
        <section className="vip-hero">
          <div className="vip-hero-content">
            <span className="vip-badge">Optional · 28-day cycle</span>
            <h1>
              {BRAND.name} Members for <span>repeat beet root orders</span>
            </h1>
            <p>
              Keep Organic Beet Root Capsules on a schedule with member pricing from {COMPANY.name}. One-time bottles
              stay available. Membership is never required to shop.
            </p>
            <div className="vip-hero-actions">
              <button type="button" className="vip-btn vip-btn-white vip-btn-lg" onClick={joinVip}>
                Add membership (${VIP.price})
              </button>
            </div>
            <div className="vip-trust-bar">
              <div className="vip-trust-item">Iowa company</div>
              <div className="vip-trust-item">Charges as {COMPANY.name}</div>
              <div className="vip-trust-item">Easy Cancel anytime</div>
            </div>
          </div>
        </section>

        <section className="vip-how-it-works">
          <div className="container">
            <h2 className="vip-section-title">How membership works</h2>
            <p className="vip-section-subtitle">A 28-day restock plan for this beet root SKU — not a wellness club kit.</p>
            <div className="vip-how-grid">
              <div className="vip-how-step">
                <div className="vip-how-number">1</div>
                <h3>Join at checkout</h3>
                <p>Membership is ${VIP.price} every 28 days until you cancel with {COMPANY.name}.</p>
              </div>
              <div className="vip-how-step">
                <div className="vip-how-number">2</div>
                <h3>Keep the bottle coming</h3>
                <p>Member pricing applies to Organic Beet Root Capsules and eligible shipping.</p>
              </div>
              <div className="vip-how-step">
                <div className="vip-how-number">3</div>
                <h3>Stop before the next charge</h3>
                <p>No annual contract. Cancel on Easy Cancel, by email, or at {COMPANY.phone}.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="vip-benefits">
          <div className="container">
            <h2 className="vip-section-title">What members receive</h2>
            <p className="vip-section-subtitle">Plain terms from an Iowa merchant — no mystery perks list.</p>
            <div className="vip-benefits-grid">
              {VIP.benefits.map((benefit) => (
                <div key={benefit.title} className="vip-benefit-card">
                  <div className="vip-benefit-icon">★</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="vip-pricing">
          <div className="container">
            <h2 className="vip-section-title">One-time vs membership</h2>
            <p className="vip-section-subtitle">Choose how you buy extra-strength beet root.</p>
            <div className="vip-pricing-cards">
              <div className="vip-pricing-card">
                <h3>One-time bottle</h3>
                <div className="price">
                  $23.25 <span>/ first bottle</span>
                </div>
                <p className="price-desc">$18.30 + $4.95 shipping. No recurring charge.</p>
                <ul>
                  <li>Pay per order</li>
                  <li>Standard U.S. shipping</li>
                  <li>No membership</li>
                </ul>
              </div>
              <div className="vip-pricing-card featured">
                <h3>NUVORA Members</h3>
                <div className="price">
                  ${VIP.price} <span>/ 28 days</span>
                </div>
                <p className="price-desc">Billed by {COMPANY.name} until canceled.</p>
                <ul>
                  <li>Member product pricing</li>
                  <li>Free shipping on eligible orders</li>
                  <li>Scheduled restock</li>
                  <li>Iowa phone and email support</li>
                  <li>Cancel before the next cycle</li>
                </ul>
                <button type="button" className="vip-btn vip-btn-primary vip-btn-full" onClick={joinVip}>
                  Add membership
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="vip-testimonials">
          <div className="container">
            <h2 className="vip-section-title">Member notes</h2>
            <p className="vip-section-subtitle">What members tell us about scheduled beet root orders.</p>
            <div className="vip-testimonials-grid">
              {VIP.testimonials.map((item) => (
                <article key={item.name} className="vip-testimonial-card">
                  <div className="vip-testimonial-stars">★★★★★</div>
                  <blockquote>{item.quote}</blockquote>
                  <div className="vip-testimonial-author">
                    {item.name}
                    <span>{item.detail}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vip-faq">
          <div className="container">
            <h2 className="vip-section-title">Membership questions</h2>
            <div className="vip-faq-list">
              {VIP.faq.map((item) => (
                <VipFaqItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        <section className="vip-join">
          <div className="container">
            <h2 className="vip-section-title">Ready to restock on a schedule?</h2>
            <p className="vip-section-subtitle">
              Questions? Call {COMPANY.phone} or email {COMPANY.email}. Cancel anytime on{' '}
              <Link to="/cancellation-request">Easy Cancel</Link>.
            </p>
            <div className="vip-join-actions">
              <button type="button" className="vip-join-btn vip-join-btn-buy" onClick={joinVip}>
                Add membership
              </button>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
