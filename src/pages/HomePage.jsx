import Hero from '../components/Hero'
import FeaturedProduct from '../components/FeaturedProduct'
import TrustBar from '../components/TrustBar'
import Benefits from '../components/Benefits'
import Results from '../components/Results'
import Comparison from '../components/Comparison'
import VipCta from '../components/VipCta'
import Faq from '../components/Faq'
import Newsletter from '../components/Newsletter'
import SiteLayout from '../components/SiteLayout'

export default function HomePage() {
  return (
    <SiteLayout>
      <main>
        <Hero />
        <FeaturedProduct />
        <TrustBar />
        <Benefits />
        <Results />
        <Comparison />
        <VipCta />
        <Faq />
        <Newsletter />
      </main>
    </SiteLayout>
  )
}
