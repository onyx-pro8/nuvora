const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function FeaturedProduct() {
  return (
    <section className="featured-product-section animate-section in-view">
      <div className="container">
        <div className="featured-product-grid">
          <div className="featured-product-image animate-item">
            <img src="/images/banner-prod.png" alt="Sleep Bloom - Sakura Calm Elixir" loading="lazy" />
          </div>
          <div className="featured-product-info animate-item">
            <span className="product-category-badge">Sleep Support</span>
            <h2>Sleep Bloom</h2>
            <p className="product-short-desc">
              A doctor-formulated blend of calming botanicals designed to ease your mind, promote
              deep restful sleep, and support overnight recovery — delivered in easy-to-use liquid
              drops for maximum absorption.
            </p>
            <ul className="featured-benefits-list">
              <li>
                <CheckIcon />
                Encourages calmness and relaxation naturally
              </li>
              <li>
                <CheckIcon />
                Promotes deep, restful sleep
              </li>
              <li>
                <CheckIcon />
                Antioxidant-rich botanical blend
              </li>
              <li>
                <CheckIcon />
                Liquid drops for fast, superior absorption
              </li>
            </ul>
            <div className="featured-product-price">
              $39.99 <span>/ bottle</span>
            </div>
            <a
              href="/product/?sku=sleep-bloom"
              className="btn-primary get_page"
              data-page="product"
              data-order-type="sleep-bloom"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
