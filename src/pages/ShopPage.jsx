import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageBanner from '../components/PageBanner'
import ShippingSection from '../components/ShippingSection'
import { BRAND, COMPANY, PRODUCTS } from '../data/site'

export default function ShopPage() {
  return (
    <SiteLayout pageStyles={['shop']}>
      <main className="all-product">
        <PageBanner kicker={BRAND.tagline} title="Shop Organic Beet Root">
          Extra-strength 2040 mg capsules from Toplux Nutrition. Sold and supported by {COMPANY.name} in Grimes, Iowa.
        </PageBanner>

        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Shop</span>
          </div>
        </div>

        <section className="ap-section">
          <div className="container">
            <div className="ap-content">
              {PRODUCTS.map((product) => (
                <div key={product.sku} className="ap-item get_product" data-order-type={product.sku}>
                  <Link
                    to={`/product?sku=${product.sku}`}
                    className="get_page"
                    data-page="product"
                    data-order-type={product.sku}
                  >
                    <div className="ap-item__img">
                      <img src={product.gallery[0]} alt={product.alt} loading="lazy" decoding="async" />
                    </div>
                    <div className="ap-item__name">{product.name}</div>
                    <div className="shop-item-brand">
                      {product.brand} · {product.count}
                    </div>
                    <div className="shop-item-meta">
                      {product.rating}/5 · {product.reviews} reviews
                    </div>
                    <div className="ap-item__price">
                      ${product.price} <s>${product.compareAtPrice}</s>
                    </div>
                    <span className="btn-primary shop-item-cta">Shop Now</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
