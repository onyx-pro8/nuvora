import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'Who operates NUVORA?',
    a: 'NUVORA is the nutrition store of Alecky Complete LLC in Grimes, Iowa. We sell Organic Beet Root Capsules from Toplux Nutrition. Billing, shipping, and returns are handled by our Iowa company.',
  },
  {
    q: 'How do I take Organic Beet Root Capsules?',
    a: 'Take 2 capsules daily with water, preferably with a meal. This extra-strength formula provides 2040 mg per serving. Do not exceed the recommended serving unless advised by your healthcare provider.',
  },
  {
    q: 'What is in the bottle?',
    a: 'The listed ingredient is organic beet root powder. Other ingredients are vegetable cellulose (capsule) and organic rice flour. The formula is advertised as USDA Organic, vegan, non-GMO, gluten-free, and made in the USA.',
  },
  {
    q: 'Who manufactures the product?',
    a: 'The capsules are from Toplux Nutrition / Lux Global Inc. NUVORA (Alecky Complete LLC) is the merchant you order from, and we handle billing, shipping questions, and returns.',
  },
  {
    q: 'How do returns and memberships work?',
    a: 'Contact aleckycomplete@gmail.com or 1-702-379-7554 within 30 days of delivery. Memberships can be stopped on the Easy Cancel page before the next 28-day billing date.',
  },
]

const Chevron = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <section className="faq-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title title-with-highlight">
            Frequently Asked <strong>Questions</strong>
          </h2>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={item.q}
              className={`faq-item animate-item${activeIndex === index ? ' active' : ''}`}
            >
              <div
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveIndex(activeIndex === index ? -1 : index)
                  }
                }}
              >
                <span>{item.q}</span>
                <Chevron />
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
