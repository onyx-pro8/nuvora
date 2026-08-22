import { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import ShippingSection from '../components/ShippingSection'
import { COMPANY } from '../data/site'

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

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setMessage('')
    setSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Unable to send your message.')
      setMessage(data.message || 'Thank you! Your message has been sent successfully.')
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
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Contacts</span>
          </div>
        </div>

        <section className="contact-section">
          <div className="container">
            <div className="contact-title">Drop Us a Line</div>
            <div className="contact-description">
              We are committed to providing excellent customer service. If you have any questions or concerns, please
              contact our team by email at{' '}
              <a className="email__line" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
              .
            </div>

            <div className="contact-info">
              <div className="contact-info__title">
                <span className="companyName">{COMPANY.name}</span>
              </div>
              <div className="contact-info-box">
                <p>
                  Address: <span className="address__line">{COMPANY.fullAddress}</span>
                </p>
              </div>
              <div className="contact-info-box">
                <p>
                  Email:{' '}
                  <a className="email__line" href={`mailto:${COMPANY.email}`}>
                    {COMPANY.email}
                  </a>
                </p>
              </div>
              <div className="contact-info-box">
                <p>Hours of Operation: {COMPANY.hours}</p>
              </div>
            </div>

            <div className="contact-form">
              <div className="contact-form__title">Send us a message</div>
              <div className="contact-form__subtitle">
                If you have any questions, please fill out the form below and we will get back to you as soon as possible.
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
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="return">Return/Refund</option>
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
