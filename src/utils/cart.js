const VIP_SKU = 'vip-membership'
const VIP_PRICE = 49.99

function getUid() {
  try {
    let uid = localStorage.getItem('uid')
    if (!uid) {
      uid = `guest-${Date.now()}`
      localStorage.setItem('uid', uid)
    }
    return uid
  } catch {
    return 'guest'
  }
}

function cartKey(uid = getUid()) {
  return `${uid}-cart`
}

export function readCart(uid) {
  try {
    const raw = localStorage.getItem(cartKey(uid))
    const cart = raw ? JSON.parse(raw) : []
    return Array.isArray(cart) ? cart : []
  } catch {
    return []
  }
}

export function writeCart(cart, uid) {
  localStorage.setItem(cartKey(uid), JSON.stringify(cart))
  window.dispatchEvent(new Event('cart-updated'))
}

export function getCartCount(cart = readCart()) {
  return cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
}

export function formatMoney(value) {
  return `$${Number(value).toFixed(2)}`
}

export function parseMoney(value) {
  return Number.parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0
}

export function addProductToCart({
  sku,
  name,
  image,
  price,
  quantity = 1,
  purchaseType = 'onetime',
  shipping = 4.95,
}) {
  const uid = getUid()
  const cart = readCart(uid)
  const unitPrice = parseMoney(price)
  const line = {
    id: sku,
    sku,
    title: name,
    name,
    image,
    quantity,
    price: unitPrice.toFixed(2),
    unitPrice: unitPrice.toFixed(2),
    purchaseType,
    shipping: Number(shipping) || 0,
  }

  if (purchaseType === 'vip') {
    line.title = `${name} (VIP Subscription)`
    line.purchaseType = 'vip'
  }

  const existingIndex = cart.findIndex(
    (item) => item.sku === sku && item.purchaseType === line.purchaseType
  )

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += quantity
  } else {
    cart.push(line)
  }

  writeCart(cart, uid)
  return cart
}

export function addVipMembershipToCart() {
  const uid = getUid()
  const cart = readCart(uid)
  const exists = cart.some((item) => item.sku === VIP_SKU)

  if (!exists) {
    cart.push({
      id: VIP_SKU,
      sku: VIP_SKU,
      title: 'VIP Membership',
      name: 'VIP Membership',
      quantity: 1,
      price: VIP_PRICE.toFixed(2),
      unitPrice: VIP_PRICE.toFixed(2),
      purchaseType: 'vip-membership',
      fixedPricing: true,
      shipping: 0,
    })
    writeCart(cart, uid)
  }

  return cart
}

export function updateCartItemQuantity(index, quantity) {
  const uid = getUid()
  const cart = readCart(uid)
  if (!cart[index]) return cart

  if (quantity <= 0) {
    cart.splice(index, 1)
  } else {
    cart[index].quantity = quantity
  }

  writeCart(cart, uid)
  return cart
}

export function removeCartItem(index) {
  return updateCartItemQuantity(index, 0)
}

export function clearCart(uid) {
  writeCart([], uid)
}

export function cartHasVipMembership(cart = readCart()) {
  return cart.some((item) => item.sku === VIP_SKU || item.purchaseType === 'vip-membership')
}

export function cartHasVipProduct(cart = readCart()) {
  return cart.some((item) => item.purchaseType === 'vip')
}

export function getCartTotals(cart = readCart()) {
  let subtotal = 0
  let shipping = 0
  let quantity = 0
  let vipFee = 0

  cart.forEach((item) => {
    const qty = Number(item.quantity || 0)
    const unit = parseMoney(item.unitPrice || item.price)
    subtotal += unit * qty
    quantity += qty

    if (item.sku !== VIP_SKU) {
      shipping = Math.max(shipping, Number(item.shipping) || 0)
    }
  })

  if (cartHasVipMembership(cart) || cartHasVipProduct(cart)) {
    vipFee = VIP_PRICE
  }

  return {
    subtotal,
    shipping: cart.length ? shipping : 0,
    vipFee,
    total: subtotal + shipping + vipFee,
    quantity,
  }
}

export { VIP_SKU, VIP_PRICE, getUid }
