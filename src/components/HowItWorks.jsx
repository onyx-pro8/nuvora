import { HOW_IT_WORKS } from '../data/site'

export default function HowItWorks() {
  return (
    <section className="detail-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Simple Routine</span>
          <h2 className="section-title title-with-highlight">
            How <strong>It Works</strong>
          </h2>
          <p className="section-subtitle">
            A clear daily routine — two capsules with a meal. No powders and no complicated stacks.
          </p>
        </div>
        <div className="how-grid">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="how-step animate-item">
              <div className="how-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
