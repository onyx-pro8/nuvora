import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import TermsContent from '../components/legal/TermsContent'
import { BRAND, COMPANY } from '../data/site'
import {
  cartHasVipMembership,
  cartHasVipProduct,
  clearCart,
  formatMoney,
  getCartTotals,
  parseMoney,
  readCart,
  removeCartItem,
  updateCartItemQuantity,
  VIP_SKU,
} from '../utils/cart'

const US_STATES = [
  ['AL', 'Alabama'],
  ['AK', 'Alaska'],
  ['AZ', 'Arizona'],
  ['AR', 'Arkansas'],
  ['CA', 'California'],
  ['CO', 'Colorado'],
  ['CT', 'Connecticut'],
  ['DE', 'Delaware'],
  ['FL', 'Florida'],
  ['GA', 'Georgia'],
  ['HI', 'Hawaii'],
  ['ID', 'Idaho'],
  ['IL', 'Illinois'],
  ['IN', 'Indiana'],
  ['IA', 'Iowa'],
  ['KS', 'Kansas'],
  ['KY', 'Kentucky'],
  ['LA', 'Louisiana'],
  ['ME', 'Maine'],
  ['MD', 'Maryland'],
  ['MA', 'Massachusetts'],
  ['MI', 'Michigan'],
  ['MN', 'Minnesota'],
  ['MS', 'Mississippi'],
  ['MO', 'Missouri'],
  ['MT', 'Montana'],
  ['NE', 'Nebraska'],
  ['NV', 'Nevada'],
  ['NH', 'New Hampshire'],
  ['NJ', 'New Jersey'],
  ['NM', 'New Mexico'],
  ['NY', 'New York'],
  ['NC', 'North Carolina'],
  ['ND', 'North Dakota'],
  ['OH', 'Ohio'],
  ['OK', 'Oklahoma'],
  ['OR', 'Oregon'],
  ['PA', 'Pennsylvania'],
  ['RI', 'Rhode Island'],
  ['SC', 'South Carolina'],
  ['SD', 'South Dakota'],
  ['TN', 'Tennessee'],
  ['TX', 'Texas'],
  ['UT', 'Utah'],
  ['VT', 'Vermont'],
  ['VA', 'Virginia'],
  ['WA', 'Washington'],
  ['WV', 'West Virginia'],
  ['WI', 'Wisconsin'],
  ['WY', 'Wyoming'],
  ['DC', 'District of Columbia'],
]

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  country: 'US',
  state: '',
  address: '',
  zipCode: '',
  city: '',
  ageTerms: false,
  refundPolicy: false,
  cardNumber: '',
  expiryMonth: '',
  expiryYear: '',
  cvv: '',
  cardName: '',
}

export default function CheckoutPage() {
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const refreshCart = () => setCart(readCart())

  useEffect(() => {
    refreshCart()
    window.addEventListener('cart-updated', refreshCart)
    return () => window.removeEventListener('cart-updated', refreshCart)
  }, [])

  const totals = useMemo(() => getCartTotals(cart), [cart])
  const showVipFee = cartHasVipMembership(cart) || cartHasVipProduct(cart)
  const productLines = cart.filter((item) => item.sku !== VIP_SKU)

  const onChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setMessage('')
    setSubmitting(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, cart, totals }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Unable to place your order.')
      clearCart()
      setMessage(data.message || 'Thank you! Your order has been received.')
      setForm(EMPTY_FORM)
      window.setTimeout(() => navigate('/shop'), 1800)
    } catch (submitError) {
      setMessage(submitError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SiteLayout pageStyles={['checkout']} showAnnouncement={false}>
      <main className="checkout-page">
        <section className="checkout-section">
          <div className="container">
            {!cart.length ? (
              <div className="cart-empty" id="cartEmpty">
                <div className="cart-empty__icon">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="56" stroke="var(--color-primary)" strokeWidth="2" fill="#E4F0DC" />
                    <path
                      d="M35 45h5l3 24h34l3-18H43"
                      stroke="var(--color-primary)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="48" cy="78" r="4" fill="var(--color-primary)" />
                    <circle cx="72" cy="78" r="4" fill="var(--color-primary)" />
                  </svg>
                </div>
                <h2 className="cart-empty__title">Your cart is empty</h2>
                <p className="cart-empty__text">
                  Looks like you haven&apos;t added any supplements to your cart yet. Start shopping to boost your
                  wellness journey!
                </p>
                <Link to="/shop" className="get_page cart-empty__button button" data-page="shop">
                  Shop Supplements
                </Link>
              </div>
            ) : (
              <div className="checkout-content" id="checkoutContent">
                <section className="order-section">
                  <h2 className="section-title">YOUR ORDER</h2>
                  <div className="order-table">
                    <div className="order-table__header">
                      <span className="col-product">Product</span>
                      <span className="col-price">Price</span>
                      <span className="col-quantity">Quantity</span>
                      <span className="col-subtotal">Subtotal</span>
                    </div>
                    <div className="order-table__body" id="orderTableBody">
                      {productLines.map((item, index) => {
                        const cartIndex = cart.findIndex((line) => line === item)
                        const unit = parseMoney(item.unitPrice || item.price)
                        return (
                          <div key={`${item.sku}-${item.purchaseType}`} className="order-table__row" data-cart-index={cartIndex}>
                            <div className="col-product">
                              <button
                                type="button"
                                className="remove-item-btn"
                                data-cart-index={cartIndex}
                                aria-label="Remove item"
                                onClick={() => removeCartItem(cartIndex)}
                              >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                              </button>
                              <div className="product-image">
                                {item.image ? <img src={item.image} alt={item.title || item.name} loading="lazy" /> : null}
                              </div>
                              <span className="product-name">{item.title || item.name}</span>
                            </div>
                            <div className="col-price">{formatMoney(unit)}</div>
                            <div className="col-quantity">
                              <button
                                type="button"
                                className="qty-btn qty-decrease"
                                aria-label="Decrease quantity"
                                onClick={() => updateCartItemQuantity(cartIndex, item.quantity - 1)}
                              >
                                −
                              </button>
                              <input
                                type="text"
                                className="qty-input"
                                value={item.quantity}
                                readOnly
                                aria-label="Quantity"
                              />
                              <button
                                type="button"
                                className="qty-btn qty-increase"
                                aria-label="Increase quantity"
                                onClick={() => updateCartItemQuantity(cartIndex, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <div className="col-subtotal">{formatMoney(unit * item.quantity)}</div>
                          </div>
                        )
                      })}

                      {showVipFee ? (
                        <div className="order-table__row order-table__row--vip-fee">
                          <div className="col-product">
                            <span className="product-name" style={{ fontWeight: 600 }}>
                              VIP Membership Fee{' '}
                              <span style={{ fontWeight: 400, fontSize: '12px', color: '#92400e' }}>
                                (recurring every 28 days)
                              </span>
                            </span>
                          </div>
                          <div className="col-price">{formatMoney(totals.vipFee)}</div>
                          <div className="col-quantity" />
                          <div className="col-subtotal">{formatMoney(totals.vipFee)}</div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </section>

                <form id="checkoutForm" className="checkout-form" noValidate onSubmit={onSubmit}>
                  <div className="form-layout">
                    <div className="form-column form-column--left">
                      <div className="form-section">
                        <h2 className="section-title">PERSONAL INFORMATION</h2>
                        <div className="form-grid form-grid--2col">
                          <div className="form-group">
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="First Name"
                              required
                              value={form.firstName}
                              onChange={onChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              placeholder="Last Name"
                              required
                              value={form.lastName}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="form-grid form-grid--2col">
                          <div className="form-group">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Phone"
                              required
                              value={form.phone}
                              onChange={onChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="E-Mail"
                              required
                              value={form.email}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-section">
                        <h2 className="section-title">DELIVERY ADDRESS</h2>
                        <div className="form-grid form-grid--2col">
                          <div className="form-group">
                            <select id="country" name="country" required value={form.country} onChange={onChange}>
                              <option value="">Select Country</option>
                              <option value="US">United States</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <select id="state" name="state" required value={form.state} onChange={onChange}>
                              <option value="">Select State</option>
                              {US_STATES.map(([value, label]) => (
                                <option key={value} value={value}>
                                  {label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address*"
                            required
                            value={form.address}
                            onChange={onChange}
                          />
                        </div>
                        <div className="form-grid form-grid--2col">
                          <div className="form-group">
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              placeholder="Zip Code*"
                              required
                              value={form.zipCode}
                              onChange={onChange}
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              id="city"
                              name="city"
                              placeholder="City*"
                              required
                              value={form.city}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-section form-section--agreement">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            id="ageTerms"
                            name="ageTerms"
                            required
                            checked={form.ageTerms}
                            onChange={onChange}
                          />
                          <span className="checkbox-custom" />
                          <span className="checkbox-text">
                            I am at least 18 years of age and agree to this website&apos;s{' '}
                            <Link to="/terms" className="get_page" data-page="terms">
                              Terms &amp; Conditions
                            </Link>{' '}
                            and{' '}
                            <Link to="/privacy-policy" className="get_page" data-page="privacy-policy">
                              Privacy Policy
                            </Link>
                            .
                          </span>
                        </label>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            id="refundPolicy"
                            name="refundPolicy"
                            required
                            checked={form.refundPolicy}
                            onChange={onChange}
                          />
                          <span className="checkbox-custom" />
                          <span className="checkbox-text">
                            I have read and agree to the{' '}
                            <Link to="/refund-policy" className="get_page" data-page="refund-policy">
                              Refund Policy
                            </Link>
                            .
                          </span>
                        </label>
                        <p className="agreement-note">
                          You also agree that {BRAND.name} may send you periodic SMS or email messages with updates,
                          deals, and specials.
                        </p>
                      </div>
                    </div>

                    <div className="form-column form-column--right">
                      <div className="form-section">
                        <h2 className="section-title">PAYMENT DETAILS</h2>
                        <div className="form-group">
                          <label className="form-label" htmlFor="cardNumber">
                            Card number*
                          </label>
                          <div className="card-input-wrapper">
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              maxLength={19}
                              placeholder="1234 5678 9012 3456"
                              required
                              value={form.cardNumber}
                              onChange={onChange}
                            />
                            <div className="card-icons">
                              <img src="/images/visa.svg" alt="Visa" height="20" />
                              <img src="/images/mastercard.svg" alt="Mastercard" height="20" />
                              <img src="/images/amex.svg" alt="American Express" height="20" />
                              <img src="/images/discover.svg" alt="Discover" height="20" />
                            </div>
                          </div>
                        </div>
                        <div className="form-grid form-grid--expiry">
                          <div className="form-group">
                            <label className="form-label">Expiry Date*</label>
                            <div className="expiry-selects">
                              <select
                                id="expiryMonth"
                                name="expiryMonth"
                                required
                                value={form.expiryMonth}
                                onChange={onChange}
                              >
                                <option value="">Month</option>
                                {Array.from({ length: 12 }, (_, index) => {
                                  const month = String(index + 1).padStart(2, '0')
                                  return (
                                    <option key={month} value={month}>
                                      {month}
                                    </option>
                                  )
                                })}
                              </select>
                              <select
                                id="expiryYear"
                                name="expiryYear"
                                required
                                value={form.expiryYear}
                                onChange={onChange}
                              >
                                <option value="">Year</option>
                                {Array.from({ length: 15 }, (_, index) => {
                                  const year = String(26 + index)
                                  return (
                                    <option key={year} value={year}>
                                      20{year}
                                    </option>
                                  )
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="cvv">
                              CVV code*
                            </label>
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              maxLength={4}
                              placeholder="..."
                              required
                              value={form.cvv}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="cardName">
                            Name on card*
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            placeholder="Name On Card"
                            required
                            value={form.cardName}
                            onChange={onChange}
                          />
                        </div>
                        <p className="payment-note">Charges will appear as {COMPANY.name}</p>
                      </div>

                      <div className="cart-total-section">
                        <h2 className="section-title">CART TOTAL</h2>
                        <div className="cart-total__row">
                          <span>Subtotal</span>
                          <span id="cartSubtotalAmount">{formatMoney(totals.subtotal)}</span>
                        </div>
                        <div className="cart-total__row">
                          <span>Shipping</span>
                          <span id="cartShippingAmount">{formatMoney(totals.shipping)}</span>
                        </div>
                        {showVipFee ? (
                          <div className="cart-total__row cart-total__row--vip-fee" id="vipFeeRow">
                            <span>VIP Membership Fee</span>
                            <span id="vipFeeAmount">{formatMoney(totals.vipFee)}</span>
                          </div>
                        ) : null}
                        <div className="cart-total__row cart-total__row--total">
                          <span>Total</span>
                          <span id="cartTotalAmount">{formatMoney(totals.total)}</span>
                        </div>
                        <div className="cart-total__row cart-total__row--qty">
                          <span>Quantity products</span>
                          <span id="cartTotalQty">{totals.quantity}</span>
                        </div>
                        {showVipFee ? (
                          <div className="cart-total__vip-disclosure" id="vipDisclosure">
                            <p>
                              <strong>Subscription Disclosure:</strong> By placing your monthly recurring order of{' '}
                              <strong className="bank-disclosure-product">VIP Membership</strong> — you will be charged{' '}
                              <strong className="bank-disclosure-price">{formatMoney(totals.vipFee)}</strong> now and
                              every 28 days thereafter until you cancel your subscription. You will receive an electronic
                              notification 5 to 7 days prior to your transaction and a receipt after each successful
                              transaction.
                            </p>
                            <p>
                              You may cancel anytime via <Link to="/cancellation-request">Easy Cancel</Link> or email.
                            </p>
                          </div>
                        ) : null}

                        <button type="submit" className="place-order-btn" id="submitOrderBtn" disabled={submitting}>
                          <span className="btn-text">{submitting ? 'Processing...' : 'Place Order'}</span>
                        </button>
                        {message ? <p className="payment-note">{message}</p> : null}
                      </div>
                    </div>
                  </div>
                </form>

                <section className="terms-policy-section">
                  <h2 className="section-title">TERMS &amp; CONDITIONS</h2>
                  <div className="terms-policy-content" id="termsContent">
                    <TermsContent />
                  </div>
                </section>
              </div>
            )}
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
