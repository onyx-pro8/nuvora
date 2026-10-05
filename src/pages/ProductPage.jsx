import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import ProductGallery from '../components/ProductGallery'
import Reviews from '../components/Reviews'
import { BRAND, COMPANY, getProductBySku } from '../data/site'
import terms from '../data/subscription.json' with { type: 'json' }
import { addProductToCart, addVipMembershipToCart, formatMoney } from '../utils/cart'

const PRODUCT_PAGE_STYLES = ['product']

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={`accordion-item${open ? ' active' : ''}`}>
      <button type="button" className="accordion-header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="accordion-icon">▼</span>
      </button>
      <div className="accordion-body">{children}</div>
    </div>
  )
}

export default function ProductPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const product = useMemo(() => getProductBySku(searchParams.get('sku')), [searchParams])
  const [selectedOption, setSelectedOption] = useState(product.quantityOptions[0])
  const [purchaseChoice, setPurchaseChoice] = useState(null)

  useEffect(() => {
    setSelectedOption(product.quantityOptions[0])
    setPurchaseChoice(null)
    document.title = `${product.name} - ${BRAND.name}`
  }, [product])

  const oneTimeTotal = selectedOption.total + selectedOption.shipping

  const goToCheckout = () => {
    if (!purchaseChoice) return

    addProductToCart({
      sku: product.sku,
      name: product.name,
      image: product.gallery[0],
      price: selectedOption.total.toFixed(2),
      quantity: selectedOption.value,
      purchaseType: 'onetime',
      shipping: purchaseChoice === 'subscription' ? 0 : selectedOption.shipping,
    })

    if (purchaseChoice === 'subscription') addVipMembershipToCart()
    navigate('/checkout')
  }

  const facts = product.accordion.supplementFacts

  return (
    <SiteLayout pageStyles={PRODUCT_PAGE_STYLES}>
      <main>
        <div className="product-breadcrumb">
          <div className="container">
            <Link to="/" className="get_page" data-page="index">
              Home
            </Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/shop" className="get_page" data-page="shop">
              Shop
            </Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{product.name}</span>
          </div>
        </div>

        <section className="product-detail">
          <div className="container">
            <div className="product-detail__layout">
              <div className="product-detail__image">
                <ProductGallery images={product.gallery} alt={product.alt} name={product.name} />
              </div>

              <div className="product-detail__info">
                <span className="product-category" id="product-category">
                  {product.badge}
                </span>
                <h1 className="product-title" id="product-title">
                  {product.name}
                </h1>
                <div className="product-spec-bar">
                  <span>{product.servings}</span>
                  <span>{product.count}</span>
                  <span>USDA Organic</span>
                  <span>Made in the USA</span>
                </div>
                <p className="product-brand">{product.brand}</p>
                <div className="product-merchant">
                  <strong>Sold by {BRAND.name}</strong> — {COMPANY.name}, {COMPANY.fullAddress}. Manufactured for{' '}
                  {product.seller}.
                </div>
                <div className="product-rating">
                  <span className="product-rating__stars" aria-label={`${product.rating} out of 5 stars`}>
                    ★★★★☆
                  </span>
                  <span className="product-rating__text">
                    {product.rating}/5 · {product.reviews} reviews · {product.sold} sold
                  </span>
                </div>

                <div className="product-benefits" id="product-benefits">
                  <div className="benefits-grid">
                    {product.statBenefits.map((benefit) => (
                      <div key={benefit} className="benefit-item">
                        <span className="benefit-check">✓</span> {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="product-item__buy">
                  <div className="product-bundle-row">
                    {product.quantityOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`product-bundle${selectedOption.value === option.value ? ' active' : ''}`}
                        onClick={() => setSelectedOption(option)}
                      >
                        <strong>{option.name}</strong>
                        <em>${option.total.toFixed(2)}</em>
                        <small>
                          {option.supply} · {option.shipNote}
                        </small>
                      </button>
                    ))}
                  </div>
                  <div className="product-item__buy-quantity">
                    <select
                      className="quantity-select"
                      id="quantity-select"
                      value={selectedOption.value}
                      onChange={(event) => {
                        const next = product.quantityOptions.find(
                          (option) => option.value === Number(event.target.value)
                        )
                        if (next) setSelectedOption(next)
                      }}
                    >
                      {product.quantityOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="type_product">
                  <p className="purchase-choice__lead">Choose one option. Membership is not selected for you.</p>
                  <div className="purchase-choice">
                    <label className={purchaseChoice === 'onetime' ? 'is-selected' : ''}>
                      <input
                        type="radio"
                        name="purchase-choice"
                        checked={purchaseChoice === 'onetime'}
                        onChange={() => setPurchaseChoice('onetime')}
                      />
                      <span>
                        <strong>One-time purchase</strong>
                        <small>
                          {selectedOption.name} ({selectedOption.supply}) · {formatMoney(selectedOption.total)} +{' '}
                          {formatMoney(selectedOption.shipping)} shipping · {formatMoney(oneTimeTotal)} due now. No
                          recurring charge.
                        </small>
                      </span>
                    </label>
                    <label className={purchaseChoice === 'subscription' ? 'is-selected' : ''}>
                      <input
                        type="radio"
                        name="purchase-choice"
                        checked={purchaseChoice === 'subscription'}
                        onChange={() => setPurchaseChoice('subscription')}
                      />
                      <span>
                        <strong>NUVORA Membership</strong>
                        <small>
                          {selectedOption.name} ({product.count} per bottle) charged once at{' '}
                          {formatMoney(selectedOption.total)} with $0.00 shipping on this order, plus{' '}
                          {formatMoney(terms.recurringPrice)} {terms.intervalLabel} until you cancel. No introductory
                          price.
                        </small>
                      </span>
                    </label>
                  </div>

                  <div className="subscription-disclaimer" id="subscription-disclaimer">
                    <ul className="subscription-facts">
                      <li>Subscription: {terms.membershipName}</li>
                      <li>
                        Product: {product.name}. A membership shipment does not include a bottle. The bottle in this
                        order is {selectedOption.name}, {product.count} per bottle, and it is charged once.
                      </li>
                      <li>
                        Initial bottle charge if you choose membership: {formatMoney(selectedOption.total)} with $0.00
                        shipping.
                      </li>
                      <li>Initial membership charge: {formatMoney(terms.recurringPrice)} USD</li>
                      <li>
                        Recurring charge: {formatMoney(terms.recurringPrice)} USD {terms.intervalLabel}. There is no
                        introductory or trial price.
                      </li>
                      <li>
                        Cancel on the Easy Cancel page, by email at {terms.supportEmail}, or by phone at{' '}
                        {terms.supportPhone}, before the next 28-day billing date.
                      </li>
                      <li>
                        The published refund policy does not list a cancellation fee or a restocking fee. Original
                        shipping is non-refundable unless the return is our error or the product is defective.
                      </li>
                    </ul>
                    <p>{terms.disclosure}</p>
                  </div>

                  <button
                    type="button"
                    className="purchase-btn one-time-purchase-btn"
                    disabled={!purchaseChoice}
                    onClick={goToCheckout}
                  >
                    <span className="purchase-btn__text">Continue to checkout</span>
                  </button>

                  <div className="footer-cards product-payment-cards">
                    <img src="/images/visa.svg" alt="Visa" width="40" height="25" />
                    <img src="/images/mastercard.svg" alt="Mastercard" width="40" height="25" />
                    <img src="/images/amex.svg" alt="American Express" width="40" height="25" />
                    <img src="/images/discover.svg" alt="Discover" width="40" height="25" />
                  </div>
                </div>

                <div className="product-suggest">
                  <p>
                    <strong>Suggested use:</strong> {facts.suggestedUse}
                  </p>
                </div>

                <div className="product-label-block">
                  <h2>Supplement facts</h2>
                  <p className="label-pending">
                    The manufacturer&apos;s label image is not in this project. The text below is the ingredient
                    information already stored for this product. It is not a photographed label.
                  </p>
                  <p>Serving size: {facts.servingSize}</p>
                  <p>Servings per container: {facts.servingsPerContainer}</p>
                  <table className="supplement-table">
                    <thead>
                      <tr>
                        <th>Ingredient</th>
                        <th>Amount per serving</th>
                        <th>% Daily Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {facts.rows.map(([ingredient, amount, dv]) => (
                        <tr key={ingredient}>
                          <td>{ingredient}</td>
                          <td>{amount}</td>
                          <td>{dv}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p>
                    <strong>Other ingredients:</strong> {facts.otherIngredients}
                  </p>
                  <p>
                    <strong>Suggested use:</strong> {facts.suggestedUse}
                  </p>
                  <p>
                    <strong>Caution:</strong> {facts.caution}
                  </p>
                </div>

                <p className="fda-disclaimer product-fda">
                  These statements have not been evaluated by the Food and Drug Administration. This product is not
                  intended to diagnose, treat, cure, or prevent any disease.
                </p>

                <div className="product-accordion">
                  <AccordionItem title="THE FORMULA">
                    <div id="how-it-works-content">
                      <p>{product.accordion.howItWorks}</p>
                    </div>
                  </AccordionItem>
                  <AccordionItem title="SHIPPING FROM THE U.S.">
                    <div id="shipping-content">
                      <p>{product.accordion.shipping}</p>
                    </div>
                  </AccordionItem>
                  <AccordionItem title="30-DAY IOWA RETURNS">
                    <div id="guarantee-content">
                      <p>{product.accordion.guarantee}</p>
                    </div>
                  </AccordionItem>
                  <AccordionItem title="SUPPLEMENT FACTS">
                    <div id="supplement-facts-content">
                      <h2>Supplement Facts</h2>
                      <p>Serving Size: {facts.servingSize}</p>
                      <p>Servings Per Container: {facts.servingsPerContainer}</p>
                      <table className="supplement-table">
                        <thead>
                          <tr>
                            <th>Ingredient</th>
                            <th>Amount Per Serving</th>
                            <th>% Daily Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {facts.rows.map(([ingredient, amount, dv]) => (
                            <tr key={ingredient}>
                              <td>{ingredient}</td>
                              <td>{amount}</td>
                              <td>{dv}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <p>*Percent Daily Value is based on a 2,000 calorie diet.</p>
                      <p>**Daily Value (DV) not established.</p>
                      <p>
                        <strong>OTHER INGREDIENTS:</strong> {facts.otherIngredients}
                      </p>
                      <p>
                        <strong>SUGGESTED USE:</strong> {facts.suggestedUse}
                      </p>
                      <p>
                        <strong>CAUTION:</strong> {facts.caution}
                      </p>
                    </div>
                  </AccordionItem>
                </div>

                <div className="product-faq">
                  <h2 className="product-faq__title">Frequently Asked Questions</h2>
                  <div className="product-accordion">
                    {product.faq.map((item) => (
                      <AccordionItem key={item.q} title={item.q}>
                        <p>{item.a}</p>
                      </AccordionItem>
                    ))}
                  </div>
                </div>

                <div className="product-description" id="product-description">
                  <p>{product.description}</p>
                  <p>{BRAND.merchantNote}</p>
                  <p>
                    Customer care: {COMPANY.phone} · {COMPANY.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="product-reviews-block">
          <Reviews compact />
        </div>
      </main>
    </SiteLayout>
  )
}
