import { Link } from 'react-router-dom'
import { PRODUCT } from '../data/site'

export default function HighlightBand() {
  return (
    <section className="highlight-band">
      <div className="container highlight-band__grid">
        <article className="highlight-card">
          <div>
            <h3>{PRODUCT.name}</h3>
            <p>
              ${PRODUCT.price} / bottle
              <s> ${PRODUCT.compareAtPrice}</s>
            </p>
            <Link to={`/product?sku=${PRODUCT.sku}`} className="btn-primary">
              Go to shop
            </Link>
          </div>
          <img src={PRODUCT.gallery[0]} alt={PRODUCT.alt} />
        </article>
        <article className="highlight-card">
          <div>
            <h3>NUVORA Members</h3>
            <p>Optional 28-day restock with member pricing and Easy Cancel.</p>
            <Link to="/vip" className="btn-primary">
              View members
            </Link>
          </div>
          <img src={PRODUCT.image} alt="NUVORA Members" />
        </article>
      </div>
    </section>
  )
}
