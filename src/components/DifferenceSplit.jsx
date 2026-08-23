import { Link } from 'react-router-dom'
import { PRODUCT } from '../data/site'

export default function DifferenceSplit() {
  return (
    <section className="difference-split animate-section">
      <div className="container">
        <div className="difference-split__grid">
          <div className="difference-split__copy animate-item">
            <h2>A serving you can actually read</h2>
            <p>
              Extra-strength organic beet root at 2040 mg per serving — listed on the label, not hidden in a proprietary
              blend. Two capsules with a meal is the full daily routine.
            </p>
            <Link to="/shop" className="btn-primary">
              Check more products →
            </Link>
          </div>
          <div className="difference-split__visual animate-item">
            <img src={PRODUCT.image} alt={PRODUCT.alt} />
          </div>
          <div className="difference-split__copy animate-item">
            <h2>Organic beet root first</h2>
            <p>
              USDA Organic, vegan, non-GMO, and gluten-free capsules made in the USA for Toplux Nutrition. NUVORA is the
              Iowa storefront that sells and supports the order.
            </p>
            <Link to={`/product?sku=${PRODUCT.sku}`} className="btn-primary">
              Check more features →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
