import { Link } from 'react-router-dom'
import { INGREDIENTS, PRODUCT } from '../data/site'

export default function Ingredients() {
  const facts = PRODUCT.accordion.supplementFacts

  return (
    <section id="ingredients" className="detail-section animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Ingredients</span>
          <h2 className="section-title title-with-highlight">
            Everything in the <strong>Capsule</strong>
          </h2>
          <p className="section-subtitle">
            {PRODUCT.name} lists one active ingredient and two other ingredients. Serving size: {facts.servingSize}.{' '}
            {facts.servingsPerContainer} servings per bottle.
          </p>
        </div>
        <div className="ingredient-grid">
          {INGREDIENTS.map((item) => (
            <article key={item.name} className="formula-standard-card ingredient-card animate-item">
              <span className="ingredient-card__kind">{item.kind}</span>
              <h3>{item.name}</h3>
              <p className="ingredient-card__amount">{item.amount}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="ingredient-note">
          <Link to="/ingredients" className="btn-primary">
            See full ingredient details
          </Link>
        </p>
      </div>
    </section>
  )
}
