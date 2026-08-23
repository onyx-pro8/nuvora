export default function PageBanner({ kicker, title, children }) {
  return (
    <section className="hero-section catalog-banner">
      <div className="container">
        {kicker ? <div className="hero-badge">{kicker}</div> : null}
        <h1 className="page-banner__title">{title}</h1>
        {children ? <p className="hero-description page-banner__lede">{children}</p> : null}
      </div>
    </section>
  )
}
