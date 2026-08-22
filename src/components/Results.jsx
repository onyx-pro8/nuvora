export default function Results() {
  return (
    <section className="results-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label section-label--light">Customer Love</span>
          <h2 className="section-title section-title--light title-with-highlight title-with-highlight--light">
            Real Results from <strong>Real People</strong>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Shoppers choose NUVORA Organic Beet Root for energy, circulation, and daily wellness.
          </p>
        </div>
        <div className="results-grid">
          <div className="result-card animate-item">
            <div className="result-number">4.5</div>
            <div className="result-label">Average Rating</div>
            <p className="result-desc">About 4.5 out of 5 stars from verified customer feedback.</p>
          </div>
          <div className="result-card animate-item">
            <div className="result-number">3.4K</div>
            <div className="result-label">Customer Reviews</div>
            <p className="result-desc">Thousands of reviews highlighting energy, circulation, and overall health support.</p>
          </div>
          <div className="result-card animate-item">
            <div className="result-number">63K+</div>
            <div className="result-label">Bottles Sold</div>
            <p className="result-desc">A trusted extra-strength beet root formula with strong repeat demand.</p>
          </div>
        </div>
        <p className="results-footnote">
          *Ratings, reviews, and unit sales are approximate marketplace figures. Individual results
          may vary.
        </p>
      </div>
    </section>
  )
}
