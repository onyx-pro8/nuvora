import { COMPANY, PRODUCT } from '../data/site'

const ITEMS = [
  {
    title: COMPANY.name,
    text: `${COMPANY.fullAddress}. Customer care ${COMPANY.hours}.`,
  },
  {
    title: 'USDA Organic',
    text: 'Organic beet root powder in vegan capsules. Non-GMO and gluten-free.',
  },
  {
    title: PRODUCT.servings,
    text: `${PRODUCT.count} per bottle. Take two capsules daily with a meal.`,
  },
  {
    title: COMPANY.phone,
    text: `Call or email ${COMPANY.email} for orders, shipping, and returns.`,
  },
]

export default function StoreCredentials() {
  return (
    <section className="detail-section detail-section--surface animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Company</span>
          <h2 className="section-title title-with-highlight">
            How <strong>NUVORA</strong> Works
          </h2>
          <p className="section-subtitle">
            An Iowa merchant selling extra-strength Organic Beet Root Capsules — with named ingredients, published
            servings, and support you can reach.
          </p>
        </div>
        <div className="benefits-content-grid">
          {ITEMS.map((item) => (
            <div key={item.title} className="benefit-content-card animate-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
