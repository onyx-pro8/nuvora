import { Link } from 'react-router-dom'
import { COMPANY } from '../data/site'

export default function GuaranteeBand() {
  return (
    <section className="detail-section detail-section--surface detail-section--cta animate-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Peace of Mind</span>
          <h2 className="section-title title-with-highlight animate-item">
            30-Day <strong>Money-Back</strong> Guarantee
          </h2>
          <p className="section-subtitle animate-item">
            If you are not satisfied, contact {COMPANY.name} within 30 days. Call{' '}
            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a> or email{' '}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>
        </div>
        <Link to="/refund-policy" className="btn-primary get_page animate-item" data-page="refund-policy">
          Read Refund Policy
        </Link>
      </div>
    </section>
  )
}
