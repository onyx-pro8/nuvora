import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import ShippingSection from '../components/ShippingSection'
import TermsContent from '../components/legal/TermsContent'

export default function TermsPage() {
  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product">
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Terms</span>
          </div>
        </div>

        <section className="privacy-section">
          <div className="container privacy-content" id="terms-text">
            <h1>Terms of Service</h1>
            <TermsContent />
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
