import { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageBanner from '../components/PageBanner'
import ShippingSection from '../components/ShippingSection'
import { BRAND, COMPANY } from '../data/site'
import { sendContact } from '../fake/messages'

export default function ContactsPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    agree: false,
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setError('')
    setMessage('')
    setSubmitting(true)

    try {
      setMessage(sendContact(form))
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        agree: false,
      })
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product">
        <PageBanner kicker={BRAND.tagline} title="Contact NUVORA">
          We are committed to providing excellent customer service. Reach {COMPANY.name} by phone or email during listed
          hours.
        </PageBanner>

        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Contact</span>
          </div>
        </div>

        <section className="contact-section">
          <div className="container contact-layout">
            <div>
            <div className="contact-directory">
              <div className="contact-card">
                <h3>Call</h3>
                <p>
                  <a className="phone__line" href={COMPANY.phoneHref}>
                    {COMPANY.phone}
                  </a>
                </p>
                <p>{COMPANY.hours}</p>
              </div>
              <div className="contact-card">
                <h3>Email</h3>
                <p>
                  <a className="email__line" href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </p>
                <p>Order, return, and membership requests</p>
              </div>
              <div className="contact-card">
                <h3>Company</h3>
                <p>{COMPANY.name}</p>
                <p>{COMPANY.fullAddress}</p>
              </div>
              <div className="contact-card">
                <h3>Stop a membership</h3>
                <p>
                  Use <Link to="/cancellation-request">Easy Cancel</Link> before the next 28-day charge.
                </p>
              </div>
            </div>
            </div>

            <div className="contact-form">
              <div className="contact-form__title">Write to {COMPANY.name}</div>
              <div className="contact-form__subtitle">
                Include your order number if you have one. We reply during listed business hours.
              </div>
              <form id="contactForm" noValidate onSubmit={onSubmit}>
                <div className="l-r">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    value={form.firstName}
                    onChange={onChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    value={form.lastName}
                    onChange={onChange}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={form.email}
                  onChange={onChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={onChange}
                />
                <select name="subject" value={form.subject} onChange={onChange}>
                  <option value="">Select Subject</option>
                  <option value="order">Beet root order</option>
                  <option value="product">Formula / label question</option>
                  <option value="return">Return or refund</option>
                  <option value="membership">Membership billing</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Message *"
                  required
                  value={form.message}
                  onChange={onChange}
                />
                <div className="contactCheck">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agreeCheck"
                    required
                    checked={form.agree}
                    onChange={onChange}
                  />
                  <label htmlFor="agreeCheck">
                    I agree to the <Link to="/privacy-policy">Privacy Policy</Link> and{' '}
                    <Link to="/terms">Terms of Service</Link>
                  </label>
                </div>
                <button type="submit" className="contact-form__button" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                {message ? (
                  <div className="contact-form__result" style={{ display: 'block' }}>
                    {message}
                  </div>
                ) : null}
                {error ? (
                  <div className="contact-form__result" style={{ display: 'block' }}>
                    {error}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
