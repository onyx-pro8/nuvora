import { Link } from 'react-router-dom'
import { BRAND, HERO_SPECS, PRODUCT } from '../data/site'

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-particles">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
        <span className="particle p5" />
        <span className="particle p6" />
        <span className="particle p7" />
        <span className="particle p8" />
      </div>
      <div className="shadow-bg__box">
        <div className="container">
          <div className="home-flex">
            <div className="home-left">
              <div className="hero-badge">{BRAND.tagline}</div>
              <h1 className="home-title title-with-highlight title-with-highlight--light">
                Energy, Circulation &amp; <strong>Natural Health</strong>
              </h1>
              <p className="hero-description">
                NUVORA brings you extra-strength organic beet root — 2040 mg per serving to support healthy blood flow,
                natural energy, and overall wellness. USDA Organic, non-GMO, vegan, gluten-free, and made in the USA.
              </p>
              <div className="hero-spec-row">
                {HERO_SPECS.map((spec) => (
                  <span key={spec} className="hero-spec">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="hero-cta-group">
                <Link to="/shop" className="hero-btn-primary get_page" data-page="shop">
                  Shop Now
                </Link>
                <Link
                  to={`/product?sku=${PRODUCT.sku}`}
                  className="hero-btn-outline get_page"
                  data-page="product"
                  data-order-type={PRODUCT.sku}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="home-right">
              <img className="product-photo" src={PRODUCT.image} alt={PRODUCT.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
