import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'

function money(value) {
  return `USD $${Number(value || 0).toFixed(2)}`
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    document.body.classList.add('receipt-page')
    try {
      const raw = sessionStorage.getItem('nuvora-last-order')
      setOrder(raw ? JSON.parse(raw) : null)
    } catch {
      setOrder(null)
    }
    return () => document.body.classList.remove('receipt-page')
  }, [])

  const receipt = order?.receipt
  const shipped = (receipt?.lines || []).filter(
    (line) => line.sku !== 'vip-membership' && line.purchaseType !== 'vip-membership'
  )

  return (
    <SiteLayout pageStyles={['checkout']}>
      <main className="checkout-page">
        <section className="checkout-section">
          <div className="container order-confirmation">
            {!receipt ? (
              <>
                <h1>No order confirmation is stored in this browser</h1>
                <p>Place an order from checkout to see the email template here.</p>
                <Link to="/shop">Return to shop</Link>
              </>
            ) : (
              <>
                <h1>Order confirmation</h1>
                <p className="email-preview__note">
                  This is the confirmation email template. It is shown here after checkout and is not sent.
                </p>
                <article className="email-preview">
                  <header className="email-preview__meta">
                    <p>
                      <span>From</span>
                      {receipt.merchantName}
                    </p>
                    <p>
                      <span>To</span>
                      {receipt.customerEmail}
                    </p>
                    <p>
                      <span>Subject</span>
                      {receipt.emailSubject}
                    </p>
                    <p>
                      <span>Initial charge date</span>
                      {receipt.initialChargeDate || receipt.orderDate}
                    </p>
                  </header>
                  <div className="email-preview__body">
                    <h2>Order confirmation</h2>
                    <p>Merchant: {receipt.merchantName}</p>
                    <p>Order number: {receipt.orderId}</p>
                    <p>Order date: {receipt.orderDate}</p>

                    <h2>Products being shipped</h2>
                    {shipped.map((line) => (
                      <p key={`${line.sku}-${line.purchaseType}`}>
                        Product: {line.name}
                        <br />
                        Quantity: {line.quantity}
                        <br />
                        Unit price: {money(line.unitPrice)}
                      </p>
                    ))}
                    <p>Subtotal: {money(receipt.subtotal)}</p>
                    <p>Shipping: {money(receipt.shipping)}</p>
                    {receipt.subscription ? <p>Membership: {money(receipt.membership)}</p> : null}
                    <p>Total cost: {money(receipt.total)}</p>
                    <p>Currency: {receipt.currency}</p>
                    <p>Initial charge date: {receipt.initialChargeDate}</p>
                    <p>{receipt.paymentNote}</p>

                    {receipt.subscription ? (
                      <>
                        <h2>Automatic renewal terms</h2>
                        <p>These are the same subscription terms shown at checkout.</p>
                        <p>Subscription: {receipt.subscription.name}</p>
                        <p>Related product: {receipt.subscription.relatedProduct}</p>
                        <p>Recurring charge: {money(receipt.subscription.recurringPrice)}</p>
                        <p>Recurring billing frequency: {receipt.subscription.intervalLabel}</p>
                        <p>Introductory or trial price: None. The recurring price starts with the first membership charge.</p>
                        <p>Billing statement descriptor: {receipt.subscription.statementDescriptor}</p>
                        <p>
                          Online cancellation: {receipt.subscription.cancellationMethods}{' '}
                          <Link to={receipt.subscription.cancellationPath}>Open Easy Cancel</Link>
                        </p>
                        <p>Cancellation deadline: {receipt.subscription.cancellationDeadline}</p>
                        <p>Cancellation or restocking fees: {receipt.subscription.fees}</p>
                        <p>Advance notice: {receipt.subscription.advanceNotice}</p>
                        <p className="email-preview__disclosure">{receipt.subscription.disclosure}</p>
                        <p>Subscription status: {receipt.subscription.status}</p>
                      </>
                    ) : (
                      <p>This order has no recurring subscription and will not renew automatically.</p>
                    )}

                    <h2>Customer support</h2>
                    <p>
                      {receipt.support.name}
                      <br />
                      {receipt.support.email}
                      <br />
                      {receipt.support.phone}
                    </p>
                  </div>
                </article>
                <p>
                  <Link to="/shop">Return to shop</Link>
                </p>
              </>
            )}
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}
