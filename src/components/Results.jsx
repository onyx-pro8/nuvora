export default function Results() {
  return (
    <section className="results-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label section-label--light">Proven Results</span>
          <h2 className="section-title section-title--light title-with-highlight title-with-highlight--light">
            Real Results from <strong>Real People</strong>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Based on customer-reported outcomes after 90 days of consistent use.
          </p>
        </div>
        <div className="results-grid">
          <div className="result-card animate-item">
            <div className="result-number">89%</div>
            <div className="result-label">Better Sleep Quality</div>
            <p className="result-desc">
              Customers reported deeper, more restorative sleep and fewer nighttime awakenings.
            </p>
          </div>
          <div className="result-card animate-item">
            <div className="result-number">76%</div>
            <div className="result-label">Fall Asleep Faster</div>
            <p className="result-desc">
              Users experienced a noticeable reduction in the time it takes to fall asleep each
              night.
            </p>
          </div>
          <div className="result-card animate-item">
            <div className="result-number">82%</div>
            <div className="result-label">Feel More Rested</div>
            <p className="result-desc">
              Participants woke up feeling refreshed and energized, without grogginess or morning
              fatigue.
            </p>
          </div>
        </div>
        <p className="results-footnote">
          *Results based on self-reported customer surveys. Individual results may vary.
        </p>
      </div>
    </section>
  )
}
