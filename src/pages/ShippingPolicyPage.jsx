import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageBanner from '../components/PageBanner'
import ShippingSection from '../components/ShippingSection'
import LegalAside from '../components/LegalAside'
import { BRAND, COMPANY } from '../data/site'

export default function ShippingPolicyPage() {
  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product">
        <PageBanner kicker="Delivery" title={`${BRAND.name} shipping`}>
          U.S. delivery of Organic Beet Root Capsules sold by {COMPANY.name}. Times are estimates, not guarantees.
        </PageBanner>
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Shipping Policy</span>
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
              {BRAND.name} ships from the United States. {COMPANY.name} is the merchant of record. Tracking is emailed
              when the carrier provides it.
            </p>

            <h2>Processing and delivery</h2>
            <p>
              Most orders arrive within 7–14 business days. Weather, carrier volume, and address errors can add time.
            </p>

            <h2>Rates for beet root bottles</h2>
            <p>
              Standard shipping is $4.95 on one- and two-bottle one-time orders unless a promotion says otherwise.
              Three-bottle one-time orders include free shipping. Membership shipping follows the terms shown at
              checkout.
            </p>

            <h2>Questions</h2>
            <p>
              Contact {COMPANY.name} at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or{' '}
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>.
            </p>
            <p>
              {COMPANY.name}
              <br />
              {COMPANY.fullAddress}
              <br />
              {COMPANY.hours}
            </p>
            </div>
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
