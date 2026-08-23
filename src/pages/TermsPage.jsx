import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageBanner from '../components/PageBanner'
import ShippingSection from '../components/ShippingSection'
import TermsContent from '../components/legal/TermsContent'
import LegalAside from '../components/LegalAside'
import { BRAND, COMPANY } from '../data/site'

export default function TermsPage() {
  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product">
        <PageBanner kicker={COMPANY.name} title={`${BRAND.name} Terms of Service`}>
          Iowa governing law. Organic beet root orders, memberships, and this website.
        </PageBanner>
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Terms</span>
          </div>
        </div>

        <section className="privacy-section">
          <div className="container legal-shell">
            <LegalAside />
            <div className="privacy-content" id="terms-text">
              <TermsContent />
            </div>
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
