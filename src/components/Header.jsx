import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AnnouncementBar({ countdown }) {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-bar__content">
          <span className="announcement-bar__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span>Organic Beet Root — Now $18.30 (was $49.97)</span>
          <span className="announcement-bar__timer announcement-countdown">
            <span className="countdown-hours">{countdown.hours}</span>:
            <span className="countdown-minutes">{countdown.minutes}</span>:
            <span className="countdown-seconds">{countdown.seconds}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export function Subheader() {
  return (
    <section className="subheader-soc">
      <div className="container">
        <div className="subheader-soc_cont">
          <div className="subheader-soc_phone">
            <div className="subheader-soc_itm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="phone__line">Alecky Complete LLC · Grimes, IA</span>
            </div>
          </div>
          <div className="subheader-soc_itm">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href="mailto:aleckycomplete@gmail.com" className="email__line">
              aleckycomplete@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const NAV_LINKS = [
  { to: '/', label: 'Home', page: 'index', end: true },
  { to: '/shop/', label: 'Shop', page: 'shop' },
  { to: '/vip/', label: 'VIP', page: 'vip' },
  { to: '/contacts/', label: 'Contacts', page: 'contacts' },
  { to: '/privacy-policy/', label: 'Privacy Policy', page: 'privacy-policy' },
  { to: '/terms/', label: 'Terms', page: 'terms' },
  { to: '/cancellation-request/', label: 'Easy Cancel', page: 'cancellation-request' },
]

export function Header({ menuOpen, setMenuOpen, cartCount = 0 }) {
  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, setMenuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header-section">
      <div className="container">
        <div className="header-topbar">
          <button
            className="header-burger-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <Link to="/" className="header-logo get_page" data-page="index" onClick={closeMenu}>
            <img src="/images/nuvora-logo.png" alt="NUVORA — Better Nutrition. Every Day." />
          </Link>
          <nav
            id="site-navigation"
            className={`header-navigations${menuOpen ? ' active' : ''}`}
          >
            <button
              className="header-navigations__close"
              aria-label="Close navigation"
              type="button"
              onClick={closeMenu}
            >
              ×
            </button>
            {NAV_LINKS.map((link) =>
              link.to === '/' ? (
                <Link
                  key={link.page}
                  to="/"
                  className="nav-link get_page active"
                  data-page="index"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.page}
                  href={link.to}
                  className="nav-link get_page"
                  data-page={link.page}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
          <a href="/checkout/" className="header-cart get_page" data-page="cart" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="header-cart__quantity cart_count">{cartCount}</span>
          </a>
        </div>
      </div>
      {menuOpen ? (
        <button
          type="button"
          className="header-nav-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      ) : null}
    </header>
  )
}
