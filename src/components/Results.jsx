export default function Results() {
  return (
    <section className="results-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Customer Notes</span>
          <h2 className="section-title title-with-highlight">
            Real Results from <strong>Real People</strong>
          </h2>
          <p className="section-subtitle">
            Shoppers choose NUVORA Organic Beet Root for energy, circulation, and daily wellness.
          </p>
        </div>
        <div className="results-grid">
          <div className="result-card animate-item">
            <div className="result-number">4.5</div>
            <div className="result-label">Star rating</div>
            <p className="result-desc">About 4.5 out of 5 from published customer feedback.</p>
          </div>
          <div className="result-card animate-item">
            <div className="result-number">3.4K</div>
            <div className="result-label">Written reviews</div>
            <p className="result-desc">Thousands of notes on energy, circulation support, and capsule convenience.</p>
          </div>
          <div className="result-card animate-item">
            <div className="result-number">63K+</div>
            <div className="result-label">Bottles sold</div>
            <p className="result-desc">A high-volume extra-strength beet root SKU with repeat demand.</p>
          </div>
        </div>
        <p className="results-footnote">
          *Ratings, reviews, and unit sales are approximate marketplace figures. Individual results may vary.
        </p>
      </div>
    </section>
  )
}
