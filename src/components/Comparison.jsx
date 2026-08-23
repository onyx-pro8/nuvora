import { FORMULA_STANDARDS } from '../data/site'

export default function Comparison() {
  return (
    <section className="comparison-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Compare</span>
          <h2 className="section-title title-with-highlight">
            Why Choose <strong>NUVORA</strong>?
          </h2>
          <p className="section-subtitle">
            Extra-strength organic beet root with a published serving size, a named manufacturer, and an Iowa company
            behind the store.
          </p>
        </div>
        <div className="formula-standard-grid">
          {FORMULA_STANDARDS.map((item) => (
            <article key={item.title} className="formula-standard-card animate-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
