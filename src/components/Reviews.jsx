import { PRODUCT, REVIEWS } from '../data/site'

export default function Reviews({ compact = false }) {
  const items = compact ? REVIEWS.slice(0, 3) : REVIEWS

  return (
    <section className="detail-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Reviews</span>
          <h2 className="section-title title-with-highlight">
            What Customers <strong>Say</strong>
          </h2>
          <p className="section-subtitle">
            {PRODUCT.rating}/5 from {PRODUCT.reviews} reviews · {PRODUCT.sold} sold. Individual results may vary.
          </p>
        </div>
        <div className="review-grid">
          {items.map((review) => (
            <article key={review.name} className="review-card animate-item">
              <div className="product-rating__stars" aria-hidden="true">
                {review.stars}
              </div>
              <p>{review.text}</p>
              <strong>{review.name}</strong>
            </article>
          ))}
        </div>
        <p className="results-footnote" style={{ marginTop: 28 }}>
          *Ratings, reviews, and unit sales are approximate marketplace figures. These comments are representative and
          not a guarantee of results.
        </p>
      </div>
    </section>
  )
}
