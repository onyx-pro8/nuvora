import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
            <span className="vip-badge">Exclusive Membership</span>
            <h1>
              Join {BRAND.name} VIP, <span>Save Up to 63%</span>
            </h1>
            <p>
              Unlock members-only pricing, free shipping on eligible orders, early access to new products, and priority
              support from the {BRAND.name} team.
            </p>
            <div className="vip-hero-actions">
              <button type="button" className="vip-btn vip-btn-white vip-btn-lg" onClick={joinVip}>
                Buy VIP Membership (${VIP.price})
              </button>
            </div>
            <div className="vip-trust-bar">
              <div className="vip-trust-item">30-Day Guarantee</div>
              <div className="vip-trust-item">Secure Checkout</div>
              <div className="vip-trust-item">Cancel Anytime</div>
            </div>
          </div>
        </section>

        <section className="vip-how-it-works">
          <div className="container">
            <h2 className="vip-section-title">How It Works</h2>
            <p className="vip-section-subtitle">Three simple steps to start saving on every order.</p>
            <div className="vip-how-grid">
              <div className="vip-how-step">
                <div className="vip-how-number">1</div>
                <h3>Join VIP</h3>
                <p>Activate your membership at checkout for ${VIP.price} every 28 days.</p>
              </div>
              <div className="vip-how-step">
                <div className="vip-how-number">2</div>
                <h3>Shop &amp; Save</h3>
                <p>Enjoy exclusive pricing on Organic Beet Root and future NUVORA launches.</p>
              </div>
              <div className="vip-how-step">
                <div className="vip-how-number">3</div>
                <h3>Cancel Anytime</h3>
                <p>No long-term contracts. Cancel before your next billing date whenever you want.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="vip-benefits">
          <div className="container">
            <h2 className="vip-section-title">VIP Benefits</h2>
            <p className="vip-section-subtitle">Everything included with your NUVORA VIP membership.</p>
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
            <h2 className="vip-section-title">Simple Pricing</h2>
            <p className="vip-section-subtitle">One membership. Exclusive savings every month.</p>
            <div className="vip-pricing-cards">
              <div className="vip-pricing-card featured">
                <h3>VIP Membership</h3>
                <div className="price">
                  ${VIP.price} <span>/ 28 days</span>
                </div>
                <p className="price-desc">Billed every 28 days until canceled.</p>
                <ul>
                  <li>Members-only product pricing</li>
                  <li>Free shipping on eligible orders</li>
                  <li>Early access to new products</li>
                  <li>Priority email support</li>
                  <li>Cancel anytime</li>
                </ul>
                <button type="button" className="vip-btn vip-btn-primary vip-btn-full" onClick={joinVip}>
                  Buy VIP Membership
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="vip-faq">
          <div className="container">
            <h2 className="vip-section-title">VIP FAQ</h2>
            <div className="vip-faq-list">
              {VIP.faq.map((item) => (
                <VipFaqItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        <section className="vip-join">
          <div className="container">
            <h2 className="vip-section-title">Ready to Join?</h2>
            <p className="vip-section-subtitle">
              Start saving today with {BRAND.name} VIP. Questions? Email {COMPANY.email}.
            </p>
            <div className="vip-join-actions">
              <button type="button" className="vip-join-btn vip-join-btn-buy" onClick={joinVip}>
                Buy VIP Membership
              </button>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
