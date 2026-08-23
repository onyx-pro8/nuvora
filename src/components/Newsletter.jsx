import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
    <section className="newsletter-section animate-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Stay in touch</h2>
          <p className="section-subtitle">
            Restock notes and member pricing from Alecky Complete LLC in Grimes, Iowa.
          </p>
        </div>
        <div className="subscribe-block">
          <form className="newsletter-form subscribe-form" noValidate onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
          {message ? <p style={{ marginTop: 12, fontSize: 14 }}>{message}</p> : null}
        </div>
      </div>
    </section>
  )
}
