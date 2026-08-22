import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Unable to subscribe.')
      setMessage(data.message || 'Thanks for subscribing!')
      setEmail('')
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-topbar">
          <div className="footer-topbar__info">
            <div className="footer-topbar__title">Tokyos Health</div>
            <div className="footer-topbar__info-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p>
                Pursuance Shore LLC
                <br />
                6034 W Placer Claim Way, West Jordan, UT 84081
              </p>
            </div>
            <div className="footer-topbar__info-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p>
                <a href="tel:+18775372188" className="phone__line">
                  +1 (877) 537-2188
                </a>
              </p>
            </div>
            <div className="footer-topbar__info-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <p>
                <a href="mailto:support@tokyoshealth.com" style={{ color: '#cbd5e1' }}>
                  support@tokyoshealth.com
                </a>
              </p>
            </div>
            <div className="footer-hours">Mon - Fri: 9 AM - 5 PM (MST)</div>
          </div>
          <div className="footer-topbar__form">
            <div className="footer-topbar__title">Newsletter</div>
            <div className="ft-form__text">
              Subscribe for exclusive deals, health tips, and early access to new products.
            </div>
            <div className="subscribe-block">
              <form className="ft-form subscribe-form" noValidate onSubmit={onSubmit}>
                <input
                  type="email"
                  name="email"
                  className="ft-form__input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="ft-form__button btn-hover">
                  Subscribe
                </button>
              </form>
              {message ? <p style={{ marginTop: 10, fontSize: 13 }}>{message}</p> : null}
            </div>
          </div>
        </div>

        <div className="fda-disclaimer">
          *These statements have not been evaluated by the Food and Drug Administration. This product
          is not intended to diagnose, treat, cure, or prevent any disease. Consult your healthcare
          provider before starting any supplement program.
        </div>

        <div className="footer-lowbar">
          <div className="footer-navigation">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>
            <a href="/shop/" className="get_page" data-page="shop">
              Shop
            </a>
            <a href="/vip/" className="get_page" data-page="vip">
              VIP
            </a>
            <a href="/contacts/" className="get_page" data-page="contacts">
              Contacts
            </a>
            <a href="/privacy-policy/" className="get_page" data-page="privacy-policy">
              Privacy Policy
            </a>
            <a href="/terms/" className="get_page" data-page="terms">
              Terms
            </a>
            <a href="/refund-policy/" className="get_page" data-page="refund-policy">
              Refund Policy
            </a>
          </div>
          <div className="footer-cards">
            <img src="/images/visa.svg" alt="Visa" width="40" height="25" />
            <img src="/images/mastercard.svg" alt="Mastercard" width="40" height="25" />
            <img src="/images/amex.svg" alt="American Express" width="40" height="25" />
            <img src="/images/discover.svg" alt="Discover" width="40" height="25" />
          </div>
        </div>
        <div className="copyright">
          © 2026 Pursuance Shore LLC. All rights reserved. Tokyos Health — The Art of Natural Health.
        </div>
      </div>
    </footer>
  )
}
