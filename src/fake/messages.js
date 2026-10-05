function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim())
}

export function subscribeNewsletter(email) {
  const value = String(email || '').trim().toLowerCase()
  if (!isEmail(value)) throw new Error('Please enter a valid email address.')
  const key = 'nuvora-newsletter'
  const current = JSON.parse(sessionStorage.getItem(key) || '[]')
  if (!current.includes(value)) {
    current.push(value)
    sessionStorage.setItem(key, JSON.stringify(current))
  }
  return 'Thanks for subscribing!'
}

export function sendContact(form) {
  const firstName = String(form?.firstName || '').trim()
  const lastName = String(form?.lastName || '').trim()
  const email = String(form?.email || '').trim().toLowerCase()
  const message = String(form?.message || '').trim()
  if (!firstName || !lastName || !email || !message) {
    throw new Error('Please complete all required fields.')
  }
  if (!isEmail(email)) throw new Error('Please enter a valid email address.')
  if (!form?.agree) throw new Error('Please agree to the Privacy Policy and Terms of Service.')
  return 'Thank you! Your message was saved in this demo. No email was sent.'
}

export function requestCancellation(form) {
  const firstName = String(form?.firstName || '').trim()
  const lastName = String(form?.lastName || '').trim()
  const email = String(form?.email || '').trim().toLowerCase()
  const orderId = String(form?.orderId || '').trim()
  if (!firstName || !lastName || !email || !orderId) {
    throw new Error('Please complete all required fields.')
  }
  if (!isEmail(email)) throw new Error('Please enter a valid email address.')
  return 'Your cancellation request was saved in this demo. No email was sent.'
}
