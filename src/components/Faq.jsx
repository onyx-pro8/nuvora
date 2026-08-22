import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'How do I take Organic Beet Root Capsules?',
    a: 'Take capsules with water as directed on the bottle. This extra-strength formula provides 2040 mg per serving. Do not exceed the recommended serving unless advised by your healthcare provider.',
  },
  {
    q: 'What is this product made of?',
    a: 'The listed ingredient is organic beet root. The formula is advertised as organic, non-GMO, vegan, natural, gluten-free, and made in the USA. It comes in convenient capsules from Toplux Nutrition.',
  },
  {
    q: 'What can beet root support?',
    a: 'Organic Beet Root Capsules are advertised to support healthy blood flow and circulation, natural energy and endurance, cardiovascular wellness, and overall vitality. These statements have not been evaluated by the FDA.',
  },
  {
    q: 'What is your guarantee policy?',
    a: 'If you are not satisfied, contact Alecky Complete LLC at aleckycomplete@gmail.com within 30 days of purchase. We will help you with a return or refund according to our refund policy.',
  },
  {
    q: 'Is this product vegan and gluten-free?',
    a: 'Yes. It is advertised as vegan, gluten-free, non-GMO, organic, and natural. Always review the supplement facts panel if you have allergies or dietary restrictions.',
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
