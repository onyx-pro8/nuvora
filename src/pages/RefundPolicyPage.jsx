import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageBanner from '../components/PageBanner'
import ShippingSection from '../components/ShippingSection'
import LegalAside from '../components/LegalAside'
import { BRAND, COMPANY } from '../data/site'

export default function RefundPolicyPage() {
  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product">
        <PageBanner kicker="Returns" title="30-day refunds from Iowa">
          {COMPANY.name} handles returns for {BRAND.name} Organic Beet Root Capsules. Contact us within 30 days of
          delivery.
        </PageBanner>
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Refund Policy</span>
          </div>
        </div>

        <section className="privacy-section">
          <div className="container legal-shell">
            <LegalAside />
            <div className="privacy-content">
            <p>
              <strong>Last updated:</strong> August 23, 2026
            </p>
            <p>
              If a bottle is not the right fit, email {COMPANY.email} or call {COMPANY.phone} with your order number.
              Returns are reviewed by {COMPANY.name} in Grimes, Iowa.
            </p>

            <h2>30-day window</h2>
            <p>
              Unopened products may be returned within 30 days of delivery for a refund after inspection. Opened bottles
              may qualify for a refund or replacement depending on the reason.
            </p>

            <h2>How to start a return</h2>
            <p>
              Write to <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> with the order number, purchase date, and
              reason. We will send return instructions if a shipment back is required.
            </p>

            <h2>Membership charges</h2>
            <p>
              Stopping a membership on <Link to="/cancellation-request">Easy Cancel</Link> ends future 28-day billing. It
              does not automatically refund bottles already shipped unless they qualify under this policy.
            </p>

            <h2>Shipping costs</h2>
            <p>
              Original shipping fees are non-refundable unless the return is due to our error or a defective product.
            </p>

            <h2>Contact</h2>
            <p>
              {COMPANY.name}
              <br />
              {COMPANY.fullAddress}
              <br />
              {COMPANY.email}
              <br />
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </p>
            </div>
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
