import AnnouncementBar, { Header, Subheader } from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import LoadingOverlay from './LoadingOverlay'
import PageStyles from './PageStyles'
import { useSiteEffects } from '../hooks/useSiteEffects'

export default function SiteLayout({ children, pageStyles = [], showAnnouncement = true }) {
  const {
    menuOpen,
    setMenuOpen,
    countdown,
    scrollVisible,
    scrollToTop,
    cartCount,
  } = useSiteEffects()

  return (
    <>
      <PageStyles sheets={pageStyles} />
      {showAnnouncement ? <AnnouncementBar countdown={countdown} /> : null}
      <Subheader />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} cartCount={cartCount} />
      {children}
      <Footer />
      <ScrollToTop visible={scrollVisible} onClick={scrollToTop} />
      <LoadingOverlay visible={false} />
    </>
  )
}
