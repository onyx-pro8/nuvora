import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout'
import ProductGallery from '../components/ProductGallery'
import Reviews from '../components/Reviews'
import { BRAND, COMPANY, getProductBySku } from '../data/site'
import { addProductToCart, formatMoney } from '../utils/cart'

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

  useEffect(() => {
    setSelectedOption(product.quantityOptions[0])
    document.title = `${product.name} - ${BRAND.name}`
  }, [product])

  const oneTimeTotal = selectedOption.total + selectedOption.shipping
  const vipTotal = Number(product.vipPrice)

  const goToCheckout = (purchaseType) => {
    addProductToCart({
      sku: product.sku,
      name: product.name,
      image: product.gallery[0],
      price: purchaseType === 'vip' ? product.vipPrice : selectedOption.total.toFixed(2),
      quantity: selectedOption.value,
      purchaseType,
      shipping: purchaseType === 'vip' ? 0 : selectedOption.shipping,
    })
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
                  <button
                    type="button"
                    className="purchase-btn vip-subscription-btn"
                    id="vip-subscription-btn"
                    data-purchase-type="vip"
                    onClick={() => goToCheckout('vip')}
                  >
                    <span className="purchase-btn__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h12l4 6-10 13L2 9z" />
                        <path d="M11 3l1 6h6" />
                        <path d="M13 3l-1 6H6" />
                      </svg>
                    </span>
                    <span className="purchase-btn__text">NUVORA Members</span>
                    <span className="purchase-btn__price vip-price">({formatMoney(vipTotal)})</span>
                  </button>

                  <div className="subscription-disclaimer" id="subscription-disclaimer">
                    <p>
                      <strong>Subscription Terms:</strong>{' '}
                      <span id="bank-subscription-disclosure">
                        By placing your monthly recurring order of{' '}
                        <strong className="bank-disclosure-product">{product.name}</strong> — you will be charged{' '}
                        <strong className="bank-disclosure-price">{formatMoney(vipTotal)}</strong> now and every 28 days
                        thereafter until you cancel your subscription. You will receive an electronic notification 5 to 7
                        days prior to your transaction and a receipt after each successful transaction.
                      </span>
                    </p>
                    <p>
                      Subscriptions are activated only when the NUVORA Members option is selected at checkout. Cancel
                      anytime via email, phone, or{' '}
                      <Link to="/cancellation-request" className="disclaimer-link">
                        Easy Cancel
                      </Link>
                      . To buy a bottle without membership, use One-Time Purchase.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="purchase-btn one-time-purchase-btn"
                    id="one-time-purchase-btn"
                    data-purchase-type="onetime"
                    onClick={() => goToCheckout('onetime')}
                  >
                    <span className="purchase-btn__text">One-time bottle</span>
                    <span className="purchase-btn__price one-time-price">({formatMoney(oneTimeTotal)})</span>
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
