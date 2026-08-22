import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import ShippingSection from '../components/ShippingSection'
import { BRAND, COMPANY } from '../data/site'

export default function RefundPolicyPage() {
  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product">
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Refund Policy</span>
          </div>
        </div>

        <section className="privacy-section">
          <div className="container privacy-content">
            <h1>Refund Policy</h1>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>
            <p>
              At {BRAND.name}, operated by {COMPANY.name}, we want you to be satisfied with your purchase. If you are not
              completely happy with your order, we are here to help.
            </p>

            <h2>30-Day Money-Back Guarantee</h2>
            <p>
              Unopened products may be returned within 30 days of delivery for a refund, subject to inspection upon
              receipt. Opened products may qualify for a refund or replacement depending on the reason for return.
            </p>

            <h2>How to Request a Refund</h2>
            <p>
              Contact us at <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> with your order number, purchase date,
              and reason for the return. Our team will provide return instructions if applicable.
            </p>

            <h2>Subscription Orders</h2>
            <p>
              Subscription charges can be canceled before the next billing date through our{' '}
              <Link to="/cancellation-request">Easy Cancel</Link> page or by emailing {COMPANY.email}. Cancellations stop
              future billing but do not automatically refund prior charges unless eligible under this policy.
            </p>

            <h2>Shipping Costs</h2>
            <p>
              Original shipping fees are non-refundable unless the return is due to our error or a defective product.
              Return shipping may be the customer&apos;s responsibility unless otherwise stated.
            </p>

            <h2>Contact</h2>
            <p>
              {COMPANY.name}
              <br />
              {COMPANY.fullAddress}
              <br />
              {COMPANY.email}
            </p>
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
