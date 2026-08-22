import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import ShippingSection from '../components/ShippingSection'
import { BRAND, COMPANY } from '../data/site'

export default function PrivacyPage() {
  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product">
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Privacy Policy</span>
          </div>
        </div>

        <section className="privacy-section">
          <div className="container privacy-content">
            <h1>Privacy Policy</h1>
            <p>
              <strong>Last Updated:</strong> March 2026
            </p>

            <p>
              This Privacy Policy describes how {BRAND.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects,
              uses, and discloses your personal data when you visit, use, or make a purchase through our website or
              otherwise communicate with us about our services. {BRAND.name} is operated by {COMPANY.name}.
            </p>
            <p>Please read this Privacy Policy carefully.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will post the updated Privacy Policy on the Site and update the
              &quot;Last Updated&quot; date.
            </p>

            <h2>How We Collect and Use Your Personal Data</h2>
            <p>
              To provide our services, we collect personal information about you from various sources, including
              information you provide directly, information collected automatically, and information from third-party
              service providers such as payment processors.
            </p>

            <h3>Information You Provide Directly to Us</h3>
            <ul>
              <li>Contact details, including your name, address, and email address.</li>
              <li>Order information, including billing and shipping details.</li>
              <li>Customer support information, including messages you send to us.</li>
            </ul>

            <h3>Information We Collect About Your Usage</h3>
            <p>
              We may automatically collect certain information about your interaction with our website, including device
              information, browser details, IP address, and cookie data.
            </p>

            <h2>How We Use Your Personal Data</h2>
            <ul>
              <li>Processing payments and fulfilling orders</li>
              <li>Providing customer support</li>
              <li>Sending service notifications and optional marketing communications</li>
              <li>Improving our website and services</li>
              <li>Detecting fraud and maintaining security</li>
            </ul>

            <h2>How We Disclose Your Personal Data</h2>
            <p>
              We may disclose personal data to service providers who assist with payment processing, shipping, analytics,
              customer support, and order fulfillment. We do not sell sensitive personal data without consent.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, delete, or restrict processing of your
              personal data. To exercise these rights, contact us at{' '}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
            </p>

            <h2>Contact</h2>
            <p>
              {COMPANY.name}
              <br />
              {COMPANY.fullAddress}
              <br />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
