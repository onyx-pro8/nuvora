import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'

function money(value) {
  return `$${Number(value || 0).toFixed(2)} USD`
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState(null)

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('nuvora-last-order')
      setOrder(raw ? JSON.parse(raw) : null)
    } catch {
      setOrder(null)
    }
  }, [])

  const receipt = order?.receipt

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
                  </header>
                  <div className="email-preview__body">
                    <h2>Order confirmation</h2>
                    <p>Merchant: {receipt.merchantName}</p>
                    <p>Order number: {receipt.orderId}</p>
                    <p>Order date: {receipt.orderDate}</p>

                    <h2>Products ordered</h2>
                    {receipt.lines.map((line) => (
                      <p key={`${line.sku}-${line.purchaseType}`}>
                        Product: {line.name}
                        <br />
                        Quantity: {line.quantity}
                        <br />
                        Unit price: {money(line.unitPrice)}
                      </p>
                    ))}
                    <p>Initial charge: {money(receipt.total)}</p>
                    <p>Initial charge date: Not charged. {receipt.paymentNote}</p>

                    {receipt.subscription ? (
                      <>
                        <h2>Recurring subscription terms</h2>
                        <p>Subscription product: {receipt.subscription.name}</p>
                        <p>Related product: {receipt.subscription.relatedProduct}</p>
                        <p>Recurring charge: {money(receipt.subscription.recurringPrice)}</p>
                        <p>Billing frequency: {receipt.subscription.intervalLabel}</p>
                        <p>Introductory offer: None. The recurring price starts with the first membership charge.</p>
                        <p>Next scheduled charge: Not scheduled. Recurring billing was not created.</p>
                        <p>Statement descriptor: {receipt.subscription.statementDescriptor}</p>
                        <p>Subscription status: {receipt.subscription.status}</p>
                        <h2>Cancellation information</h2>
                        <p>Cancellation method: {receipt.subscription.cancellationMethods}</p>
                        <p>Cancellation deadline: {receipt.subscription.cancellationDeadline}</p>
                        <p>Fees: {receipt.subscription.fees}</p>
                      </>
                    ) : (
                      <p>This order has no recurring subscription.</p>
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
