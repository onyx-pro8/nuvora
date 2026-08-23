import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageBanner from '../components/PageBanner'
import ShippingSection from '../components/ShippingSection'
import LegalAside from '../components/LegalAside'
import { BRAND, COMPANY } from '../data/site'

export default function PrivacyPage() {
  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product">
        <PageBanner kicker="Privacy" title={`How ${BRAND.name} uses your information`}>
          {COMPANY.name} collects only what is needed to sell Organic Beet Root Capsules, ship orders, and answer
          support mail from Grimes, Iowa.
        </PageBanner>
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Privacy Policy</span>
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
              This Privacy Policy describes how {COMPANY.name}, doing business as {BRAND.name} (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;), collects, uses, and discloses personal data when you visit this site,
              place an order for Organic Beet Root Capsules, join a membership, or email {COMPANY.email}. It applies only
              to this Iowa storefront — not to Toplux Nutrition&apos;s own websites or to unrelated supplement brands.
            </p>

            <h2>Information you give us</h2>
            <ul>
              <li>Name, shipping address, email, and phone for orders and Easy Cancel requests.</li>
              <li>Payment details processed by our payment provider. We do not store full card numbers on this site.</li>
              <li>Messages you send about beet root orders, labels, or returns.</li>
            </ul>

            <h2>Information collected automatically</h2>
            <p>
              We may collect device, browser, IP address, and cookie data needed to run checkout, prevent fraud, and
              understand which product pages are used.
            </p>

            <h2>How we use data</h2>
            <ul>
              <li>Fulfill and ship Organic Beet Root Capsules</li>
              <li>Process membership billing every 28 days when you enroll</li>
              <li>Answer support at {COMPANY.phone} and {COMPANY.email}</li>
              <li>Send order receipts and, if you subscribe, restock notes</li>
              <li>Detect fraud and keep checkout secure</li>
            </ul>

            <h2>Who we share with</h2>
            <p>
              We share data with payment processors, shipping carriers, and service providers who help {COMPANY.name}{' '}
              operate NUVORA. We do not sell your personal information. The product manufacturer (Toplux Nutrition / Lux
              Global Inc.) is not given your payment card for our checkout.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on where you live, you may request access, correction, or deletion of personal data. Email{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or write to {COMPANY.fullAddress}.
            </p>

            <h2>Contact</h2>
            <p>
              {COMPANY.name}
              <br />
              {COMPANY.fullAddress}
              <br />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
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
