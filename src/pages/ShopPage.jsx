import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import ShippingSection from '../components/ShippingSection'
import { BRAND, PRODUCTS } from '../data/site'

export default function ShopPage() {
  return (
    <SiteLayout pageStyles={['shop']}>
      <main className="all-product">
        <section className="hero-section">
          <div className="container">
            <h1 className="ap-title">All Products</h1>
            <h3 className="ap-description">{BRAND.tagline.toUpperCase()}</h3>
          </div>
        </section>

        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>All Products</span>
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
                    <div className="ap-item__price">${product.price}</div>
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
