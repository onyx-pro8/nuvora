import { useState } from 'react'

const FAQ_ITEMS = [
  {
    q: 'How do I take Sleep Bloom drops?',
    a: 'Take 1 full dropper (1 mL) under your tongue about 30 minutes before bedtime. Hold the liquid under your tongue for 30 seconds before swallowing for optimal absorption. You can also mix it with water or herbal tea if preferred.',
  },
  {
    q: 'How long until I see results?',
    a: 'Many customers notice improved relaxation and easier sleep onset within the first few nights. For the full benefits of deeper, more consistent sleep, we recommend using Sleep Bloom nightly for at least 2-4 weeks as the botanical ingredients build up in your system.',
  },
  {
    q: 'Are there any side effects?',
    a: 'Sleep Bloom is made with all-natural, non-GMO ingredients and is generally well tolerated. It contains Melatonin, which may cause drowsiness — do not drive or operate heavy machinery after use. If you are pregnant, nursing, or taking sleep or anxiety medication, please consult your healthcare provider before use.',
  },
  {
    q: 'What is your guarantee policy?',
    a: 'We offer a 30-day satisfaction guarantee. If you are not completely satisfied with Sleep Bloom, contact our support team within 30 days of your purchase for a full refund. No questions asked — we stand behind our product.',
  },
  {
    q: 'Is Sleep Bloom vegan-friendly?',
    a: 'Yes! Sleep Bloom is 100% plant-based and vegan-friendly. Our formula contains no animal-derived ingredients, artificial colors, or synthetic fillers. It is also gluten-free, dairy-free, soy-free, and non-GMO.',
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
