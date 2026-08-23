import Hero from '../components/Hero'
import FeaturedProduct from '../components/FeaturedProduct'
import TrustBar from '../components/TrustBar'
import HowItWorks from '../components/HowItWorks'
import FormulaBadges from '../components/FormulaBadges'
import Benefits from '../components/Benefits'
import ScienceStrip from '../components/ScienceStrip'
import Audience from '../components/Audience'
import StoreCredentials from '../components/StoreCredentials'
import Results from '../components/Results'
import Reviews from '../components/Reviews'
import Comparison from '../components/Comparison'
import GuaranteeBand from '../components/GuaranteeBand'
import VipCta from '../components/VipCta'
import AboutBrand from '../components/AboutBrand'
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
        <HowItWorks />
        <FormulaBadges />
        <Benefits />
        <ScienceStrip />
        <Audience />
        <StoreCredentials />
        <Results />
        <Reviews />
        <Comparison />
        <GuaranteeBand />
        <VipCta />
        <AboutBrand />
        <Faq />
        <Newsletter />
      </main>
    </SiteLayout>
  )
}
