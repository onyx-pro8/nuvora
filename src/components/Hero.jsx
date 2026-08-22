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
              <div className="hero-badge">Japanese-Inspired Wellness</div>
              <h1 className="home-title title-with-highlight title-with-highlight--light">
                The Art of <strong>Natural Health</strong>
              </h1>
              <p className="hero-description">
                Tokyos Health brings you premium, science-backed supplements inspired by Japanese
                wellness traditions. Encourage calmness, promote restful sleep, and restore your
                natural balance.
              </p>
              <div className="hero-cta-group">
                <a href="/shop/" className="hero-btn-primary get_page" data-page="shop">
                  Shop Now
                </a>
                <a
                  href="/product/?sku=sleep-bloom"
                  className="hero-btn-outline get_page"
                  data-page="product"
                  data-order-type="sleep-bloom"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="home-right">
              <img src="/images/banner-prod.png" alt="Sleep Bloom - Sakura Calm Elixir" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
