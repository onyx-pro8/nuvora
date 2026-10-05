import { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import PageBanner from '../components/PageBanner'
import ShippingSection from '../components/ShippingSection'
import { COMPANY } from '../data/site'
import { requestCancellation } from '../fake/messages'

export default function CancellationPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    orderId: '',
  })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setError('')
    setSuccess(false)
    setSubmitting(true)

    try {
      requestCancellation(form)
      setSuccess(true)
      setForm({ firstName: '', lastName: '', email: '', orderId: '' })
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SiteLayout pageStyles={['pages']}>
      <main className="all-product">
        <PageBanner kicker="Easy Cancel" title="Request a membership cancellation">
          Send this request before the next 28-day billing date. You can also email {COMPANY.email} or call {COMPANY.phone}.
          This form records the request. It does not refund a bottle that already shipped.
        </PageBanner>

        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Easy Cancel</span>
          </div>
        </div>

        <section className="cancel-section">
          <div className="container">
            <div className="cancel-panel">
              <p>
                Use this form, {COMPANY.email}, or {COMPANY.phone} before the next 28-day billing date. The published
                refund policy does not list a cancellation fee or a restocking fee. A submitted request does not refund
                bottles that already shipped. See the <Link to="/refund-policy">Refund Policy</Link>.
              </p>

              <form id="cancel" noValidate onSubmit={onSubmit}>
                <div className="itm form-holder">
                  <label htmlFor="cancelReason">Request type</label>
                  <input
                    type="text"
                    className="form-control"
                    value="NUVORA membership cancellation"
                    id="cancelReason"
                    name="reason"
                    disabled
                    readOnly
                  />
                </div>
                <div className="itm form-holder">
                  <label htmlFor="cancelFirstName">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cancelFirstName"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={onChange}
                  />
                </div>
                <div className="itm form-holder">
                  <label htmlFor="cancelLastName">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cancelLastName"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={onChange}
                  />
                </div>
                <div className="itm form-holder">
                  <label htmlFor="cancelEmail">Email on the order</label>
                  <input
                    type="email"
                    className="form-control"
                    id="cancelEmail"
                    name="email"
                    required
                    value={form.email}
                    onChange={onChange}
                  />
                </div>
                <div className="itm form-holder">
                  <label htmlFor="cancelOrderId">Order number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cancelOrderId"
                    name="orderId"
                    required
                    value={form.orderId}
                    onChange={onChange}
                  />
                </div>
                <div className="itm">
                  <label htmlFor="cancelSubmit">&nbsp;</label>
                  <button className="mailTo" id="cancelSubmit" type="submit" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Submit cancellation'}
                  </button>
                </div>
                <div className="itm">
                  <label>&nbsp;</label>
                  <div className="text-success" style={{ display: success ? 'block' : 'none' }}>
                    Request saved in this demo. No email was sent.
                  </div>
                  {error ? <div className="text-success" style={{ display: 'block' }}>{error}</div> : null}
                </div>
              </form>
            </div>
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
