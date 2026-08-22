export default function ShippingSection() {
  return (
    <section className="shipping-section">
      <div className="container shipping-flex">
        <div className="shipping-box">
          <svg className="shipping-box__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" aria-label="Fast Shipping">
            <circle cx="40" cy="40" r="40" fill="var(--color-primary)" />
            <path d="M18 44h2l2-8h20v-4H20a2 2 0 0 0-2 2v10z" fill="#fff" />
            <rect x="22" y="36" width="20" height="12" rx="1" fill="#fff" />
            <path d="M42 36h4l6 6v6h-10V36z" fill="#E4F0DC" />
            <circle cx="28" cy="50" r="3.5" fill="var(--color-primary-dark)" stroke="#fff" strokeWidth="1.5" />
            <circle cx="46" cy="50" r="3.5" fill="var(--color-primary-dark)" stroke="#fff" strokeWidth="1.5" />
          </svg>
          <div className="shipping-box__info">
            <div className="shipping-box__title">FAST SHIPPING FOR EVERY ORDER</div>
            <p className="shipping-box__text">
              WE OFFER FAST SHIPPING FOR ALL ORDERS OF ANY SIZE, 24/7. YOU WILL NEVER WAIT LONG FOR YOUR ORDER!
            </p>
          </div>
        </div>

        <div className="shipping-box">
          <svg className="shipping-box__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" aria-label="30-Day Money-Back Guarantee">
            <circle cx="40" cy="40" r="40" fill="var(--color-primary)" />
            <path d="M40 16c0 0-18 8-18 24 0 12 8 20 18 24 10-4 18-12 18-24 0-16-18-24-18-24z" fill="#E4F0DC" stroke="#fff" strokeWidth="1.5" />
            <path d="M40 20c0 0-14 7-14 20 0 10 6 16 14 20 8-4 14-10 14-20 0-13-14-20-14-20z" fill="var(--color-primary)" />
            <text x="40" y="39" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">30</text>
            <text x="40" y="49" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="400" fontFamily="Arial, sans-serif">DAYS</text>
          </svg>
          <div className="shipping-box__info">
            <div className="shipping-box__title">30 - DAY MONEY - BACK GUARANTEE</div>
            <p className="shipping-box__text">
              WE OFFER A 30-DAY MONEY-BACK GUARANTEE! SO BE SURE THAT YOU WILL GET YOUR RESULT, OR YOUR MONEY BACK!
            </p>
          </div>
        </div>

        <div className="shipping-box">
          <svg className="shipping-box__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none" aria-label="Tested for Quality">
            <circle cx="40" cy="40" r="40" fill="var(--color-primary)" />
            <path d="M34 22h12v2H34z" fill="#fff" />
            <path d="M36 24v12l-8 14a3 3 0 0 0 2.6 4.5h18.8a3 3 0 0 0 2.6-4.5L44 36V24" fill="#E4F0DC" stroke="#fff" strokeWidth="1.5" />
            <circle cx="52" cy="52" r="10" fill="var(--color-primary-dark)" />
            <path d="M47 52l3 3 5-6" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="shipping-box__info">
            <div className="shipping-box__title">TESTED FOR QUALITY</div>
            <p className="shipping-box__text">
              ALL OF OUR PRODUCTS ARE TESTED AND VERIFIED THROUGH A 3RD PARTY TO ENSURE ACCURACY. WE TEST FOR POTENCY &amp; PESTICIDES.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
