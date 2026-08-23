import { Link } from 'react-router-dom'
import { BRAND, PRODUCT } from '../data/site'

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
            <img
              className="product-photo"
              src={PRODUCT.image}
              alt={PRODUCT.alt}
              loading="lazy"
            />
          </div>
          <div className="featured-product-info animate-item">
            <span className="product-category-badge">{PRODUCT.badge}</span>
            <h2>{PRODUCT.name}</h2>
            <p className="product-brand">{PRODUCT.brand}</p>
            <div className="product-rating">
              <span className="product-rating__stars" aria-label={`${PRODUCT.rating} out of 5 stars`}>
                ★★★★☆
              </span>
              <strong>{PRODUCT.rating}/5</strong>
              <span>{PRODUCT.reviews} reviews</span>
              <span>{PRODUCT.sold} sold</span>
            </div>
            <p className="product-short-desc">{PRODUCT.description}</p>
            <ul className="featured-benefits-list">
              {PRODUCT.benefits.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <div className="featured-product-price">
              ${PRODUCT.price} <span>/ bottle</span>
              <s>${PRODUCT.compareAtPrice}</s>
            </div>
            <Link
              to={`/product?sku=${PRODUCT.sku}`}
              className="btn-primary get_page"
              data-page="product"
              data-order-type={PRODUCT.sku}
            >
              Shop Now
            </Link>
            <p className="product-seller">{BRAND.merchantNote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
