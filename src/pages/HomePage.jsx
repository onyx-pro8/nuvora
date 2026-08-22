import AnnouncementBar, { Header, Subheader } from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProduct from '../components/FeaturedProduct'
import TrustBar from '../components/TrustBar'
import Benefits from '../components/Benefits'
import Results from '../components/Results'
import Comparison from '../components/Comparison'
import VipCta from '../components/VipCta'
import Faq from '../components/Faq'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import LoadingOverlay from '../components/LoadingOverlay'
import { useHomepageEffects } from '../hooks/useHomepageEffects'

export default function HomePage() {
  const {
    menuOpen,
    setMenuOpen,
    countdown,
    scrollVisible,
    scrollToTop,
    cartCount,
  } = useHomepageEffects()

  return (
    <>
      <AnnouncementBar countdown={countdown} />
      <Subheader />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} cartCount={cartCount} />
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
      <Footer />
      <ScrollToTop visible={scrollVisible} onClick={scrollToTop} />
      <LoadingOverlay visible={false} />
    </>
  )
}
