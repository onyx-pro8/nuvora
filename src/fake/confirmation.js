import terms from '../data/subscription.json' with { type: 'json' }

function money(value) {
  return `USD $${Number(value || 0).toFixed(2)}`
}

function formatChargeDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value || '')
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeZone: 'America/Chicago',
  }).format(date)
}

export function buildOrderConfirmation({ orderId, email, cart, totals, createdAt }) {
  const lines = (cart || []).map((item) => ({
    name: item.name || item.title,
    sku: item.sku,
    quantity: Number(item.quantity || 0),
    unitPrice: Number(item.unitPrice || item.price || 0),
    purchaseType: item.purchaseType || 'onetime',
  }))

  const hasSubscription = lines.some(
    (item) => item.sku === terms.membershipSku || item.purchaseType === 'vip-membership' || item.purchaseType === 'vip'
  )
  const productLine = lines.find((item) => item.sku === terms.productSku)
  const subjectName = productLine?.name || terms.productName

  const receipt = {
    merchantName: terms.merchantName,
    orderId,
    orderDate: createdAt,
    customerEmail: email,
    currency: terms.currency,
    lines,
    subtotal: totals.subtotal,
    shipping: totals.shipping,
    membership: totals.vipFee,
    total: totals.total,
    paymentCaptured: false,
    initialChargeDate: formatChargeDate(createdAt),
    paymentNote: 'No card payment was captured in this demo. The date above is the initial charge date this receipt would show.',
    emailSent: false,
    emailSubject: `Order Confirmation - ${subjectName}`,
    subscription: hasSubscription
      ? {
          name: terms.membershipName,
          relatedProduct: terms.productName,
          recurringPrice: terms.recurringPrice,
          recurringCharge: money(terms.recurringPrice),
          intervalLabel: terms.intervalLabel,
          introductoryOffer: terms.introductoryOffer,
          nextScheduledCharge: null,
          statementDescriptor: terms.statementDescriptor,
          status: 'Demo only. Recurring billing was not created.',
          cancellationPath: terms.cancellationPath,
          cancellationMethods:
            'Cancel online on the Easy Cancel page before the next 28-day billing date. You can also email aleckycomplete@gmail.com or call 1-702-379-7554.',
          cancellationDeadline: 'Before the next 28-day billing date',
          fees: 'No cancellation fee and no restocking fee are listed in the published refund policy. Original shipping fees are non-refundable unless the return is due to our error or a defective product. Unopened products may be returned within 30 days of delivery.',
          advanceNotice: terms.advanceNotice,
          disclosure: terms.disclosure,
        }
      : null,
    support: {
      name: terms.merchantName,
      email: terms.supportEmail,
      phone: terms.supportPhone,
    },
  }

  return receipt
}
