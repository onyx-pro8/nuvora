import { FORMULA_BADGES } from '../data/site'

export default function FormulaBadges() {
  return (
    <section className="detail-section detail-section--surface animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What&apos;s Inside</span>
          <h2 className="section-title title-with-highlight">
            A Clean, Extra-Strength <strong>Formula</strong>
          </h2>
          <p className="section-subtitle">
            Organic beet root powder in vegetable capsules — 2040 mg per serving. Sold in Iowa, made in the USA.
          </p>
        </div>
        <div className="formula-badge-row">
          {FORMULA_BADGES.map((badge) => (
            <span key={badge} className="formula-badge animate-item">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
