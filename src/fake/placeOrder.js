import terms from '../data/subscription.json' with { type: 'json' }
import { buildOrderConfirmation } from './confirmation.js'

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim())
}

function parseMoney(value) {
  return Number.parseFloat(String(value ?? '').replace(/[^0-9.]/g, '')) || 0
}

function isMembership(item) {
  return item?.sku === terms.membershipSku || item?.purchaseType === 'vip-membership'
}

function cartHasSubscription(cart) {
  return cart.some((item) => isMembership(item) || item?.purchaseType === 'vip')
}

export function placeFakeOrder({ form, cart, totals }) {
  const firstName = String(form?.firstName || '').trim()
  const lastName = String(form?.lastName || '').trim()
  const email = String(form?.email || '').trim().toLowerCase()

  if (!firstName || !lastName || !email) {
    throw new Error('Please complete all required personal information fields.')
  }
  if (!isEmail(email)) throw new Error('Please enter a valid email address.')
  if (!form?.ageTerms || !form?.refundPolicy) {
    throw new Error('Please accept the required terms and refund policy.')
  }
  if (!cart.length) throw new Error('Your cart is empty.')

  const subscription = cartHasSubscription(cart)
  if (subscription && form?.subscriptionConsent !== true) {
    throw new Error('Check the subscription consent box to authorize recurring NUVORA Membership billing.')
  }
  if (subscription) {
    const membership = cart.find((item) => isMembership(item))
    const price = membership ? parseMoney(membership.unitPrice || membership.price) : 0
    if (!membership || Math.abs(price - terms.recurringPrice) > 0.001) {
      throw new Error('The NUVORA Membership price in the cart does not match the published $49.99 price.')
    }
  }

  const orderId = `NV-${Date.now().toString().slice(-8)}`
  const safeCart = cart.map(({ cardNumber, cvv, cardExpiry, cardName, ...item }) => item)
  const receipt = buildOrderConfirmation({
    orderId,
    email,
    cart: safeCart,
    totals,
    createdAt: new Date().toISOString(),
  })

  return {
    orderId,
    emailSent: false,
    receipt,
    message: `Order ${orderId} is confirmed on this page. The confirmation email was not sent.`,
  }
}
