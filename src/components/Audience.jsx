import { AUDIENCE } from '../data/site'

export default function Audience() {
  return (
    <section className="detail-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who It&apos;s For</span>
          <h2 className="section-title title-with-highlight">
            Built for <strong>Everyday Wellness</strong>
          </h2>
          <p className="section-subtitle">
            Organic Beet Root Capsules fit a simple supplement routine — whether you shop for energy, circulation, or a
            clean label.
          </p>
        </div>
        <div className="benefits-content-grid">
          {AUDIENCE.map((item) => (
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
