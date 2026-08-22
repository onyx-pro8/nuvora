import { PRODUCT } from '../data/site'

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
      <div className="hero-ocean">
        <div className="hero-wave hero-wave--back" />
        <div className="hero-wave hero-wave--mid" />
        <div className="hero-wave hero-wave--front" />
      </div>
      <div className="shadow-bg__box">
        <div className="container">
          <div className="home-flex">
            <div className="home-left">
              <div className="hero-badge">Better Nutrition. Every Day.</div>
              <h1 className="home-title title-with-highlight title-with-highlight--light">
                Energy, Circulation &amp; <strong>Natural Health</strong>
              </h1>
              <p className="hero-description">
                NUVORA brings you extra-strength organic beet root — 2040 mg per serving to support
                healthy blood flow, natural energy, and overall wellness. USDA Organic, non-GMO,
                vegan, gluten-free, and made in the USA.
              </p>
              <div className="hero-cta-group">
                <a href="/shop/" className="hero-btn-primary get_page" data-page="shop">
                  Shop Now
                </a>
                <a
                  href={`/product/?sku=${PRODUCT.sku}`}
                  className="hero-btn-outline get_page"
                  data-page="product"
                  data-order-type={PRODUCT.sku}
                >
                  Learn More
                </a>
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
