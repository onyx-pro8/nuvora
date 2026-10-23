import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageBanner from '../components/PageBanner'
import { BRAND, COMPANY, FORMULA_BADGES, INGREDIENTS, PRODUCT } from '../data/site'

export default function IngredientsPage() {
  const facts = PRODUCT.accordion.supplementFacts

  useEffect(() => {
    const previousTitle = document.title
    document.title = `Ingredients - ${BRAND.name}`
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product ingredients-page">
        <PageBanner kicker="The label" title="Ingredients">
          Every ingredient in {PRODUCT.name}: one active ingredient at a labeled amount, plus the capsule and the fill
          inside it.
        </PageBanner>

        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Ingredients</span>
          </div>
        </div>

        <section className="ingredients-intro">
          <div className="container ingredients-intro__grid">
            <div>
              <p className="section-label">What is in the bottle</p>
              <h2>A short list, printed in full</h2>
              <p>
                {PRODUCT.brand} makes this formula in the USA. {BRAND.name}, operated by {COMPANY.name} in{' '}
                {COMPANY.state}, sells it. The supplement facts panel names organic beet root powder at {facts.rows[0][1]}{' '}
                per serving. Nothing else is hidden in a blend.
              </p>
              <p>
                Serving size is {facts.servingSize}. Each bottle has {facts.servingsPerContainer} servings (
                {PRODUCT.count}).
              </p>
              <ul className="ingredients-badges">
                {FORMULA_BADGES.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
            </div>
            <div className="ingredients-intro__photo">
              <img src={PRODUCT.image} alt={PRODUCT.alt} />
            </div>
          </div>
        </section>

        <section className="ingredients-list">
          <div className="container">
            {INGREDIENTS.map((item) => (
              <article key={item.name} className="ingredient-detail">
                <div className="ingredient-detail__copy">
                  <span className="ingredient-card__kind">{item.kind}</span>
                  <h2>{item.name}</h2>
                  <p className="ingredient-detail__amount">
                    {item.amount}
                    <span>{item.per}</span>
                  </p>
                  {item.details.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <dl className="ingredient-detail__facts">
                  {item.facts.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="ingredients-facts">
          <div className="container ingredients-facts__grid">
            <div>
              <p className="section-label">Supplement facts</p>
              <h2>As stored for this product</h2>
              <p>Serving size: {facts.servingSize}</p>
              <p>Servings per container: {facts.servingsPerContainer}</p>
              <table>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th>Amount per serving</th>
                    <th>% Daily Value</th>
                  </tr>
                </thead>
                <tbody>
                  {facts.rows.map(([ingredient, amount, dv]) => (
                    <tr key={ingredient}>
                      <td>{ingredient}</td>
                      <td>{amount}</td>
                      <td>{dv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>** Daily Value (DV) not established.</p>
              <p>
                <strong>Other ingredients:</strong> {facts.otherIngredients}
              </p>
              <p>
                <strong>Suggested use:</strong> {facts.suggestedUse}
              </p>
              <p>
                <strong>Caution:</strong> {facts.caution}
              </p>
              <p className="ingredients-facts__disclaimer">
                These statements have not been evaluated by the Food and Drug Administration. This product is not
                intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
            <figure>
              <img
                src={PRODUCT.labelImage}
                alt="Supplement facts label for Organic Beet Root Capsules: 2 capsules per serving, 45 servings, 2040 mg organic beet root powder"
              />
              <figcaption>
                This label graphic uses the bottle colors and the supplement facts already stored for this product. It
                is not a photograph of the manufacturer&apos;s printed label.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="ingredients-next">
          <div className="container">
            <h2>Read it, then choose a bottle</h2>
            <p>
              Questions about the formula can go to {COMPANY.name} at{' '}
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> or{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>
            <div className="ingredients-next__actions">
              <Link to={`/product?sku=${PRODUCT.sku}`} className="btn-primary">
                View the bottle
              </Link>
              <Link to="/shop" className="btn-outline-primary">
                Shop
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
