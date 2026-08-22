import { useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import ShippingSection from '../components/ShippingSection'

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

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess(false)
    setSubmitting(true)

    try {
      const response = await fetch('/api/cancellation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Unable to submit your cancellation request.')
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
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>{' '}
            / <span>Easy Cancel</span>
          </div>
        </div>

        <section className="cancel-section">
          <div className="container privacy-content">
            <h1>CANCELLATION REQUEST</h1>
            <p>
              Please fill out the information below. After completing and submitting this form, your account will be
              terminated and all billing will be stopped. Once the account has been canceled, you will receive a
              cancellation email confirmation.
            </p>

            <form id="cancel" noValidate onSubmit={onSubmit}>
              <div className="itm form-holder">
                <label htmlFor="cancelReason">*Subject Line</label>
                <input
                  type="text"
                  className="form-control"
                  value="Cancellation Request"
                  id="cancelReason"
                  name="reason"
                  disabled
                  readOnly
                />
              </div>
              <div className="itm form-holder">
                <label htmlFor="cancelFirstName">*First Name</label>
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
                <label htmlFor="cancelLastName">*Last Name</label>
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
                <label htmlFor="cancelEmail">*Email</label>
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
                <label htmlFor="cancelOrderId">*Order #</label>
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
                  {submitting ? 'Sending...' : 'Send Mail'}
                </button>
              </div>
              <div className="itm">
                <label>&nbsp;</label>
                <div className="text-success" style={{ display: success ? 'block' : 'none' }}>
                  Thank you for your request. You can expect an email to your inbox confirming the cancellation of your
                  subscription.
                </div>
                {error ? <div className="text-success" style={{ display: 'block' }}>{error}</div> : null}
              </div>
            </form>
          </div>
        </section>

        <ShippingSection />
      </main>
    </SiteLayout>
  )
}
