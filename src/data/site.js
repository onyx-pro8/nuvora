export const BRAND = {
  name: 'NUVORA',
  tagline: 'Better Nutrition. Every Day.',
  logo: '/images/nuvora-logo.png',
}

export const COMPANY = {
  name: 'Alecky Complete LLC',
  addressLine1: '1800 NW Gabus Dr',
  addressLine2: 'Grimes, IA 50111',
  fullAddress: '1800 NW Gabus Dr, Grimes, IA 50111',
  email: 'aleckycomplete@gmail.com',
  hours: 'Mon - Fri: 9 AM - 5 PM (CST)',
  state: 'Iowa',
}

export const PRODUCT = {
  sku: 'organic-beet-root',
  name: 'Organic Beet Root Capsules',
  brand: 'Toplux Nutrition',
  seller: 'Toplux Nutrition / Lux Global Inc.',
  badge: 'Energy & Antioxidant Support',
  image: '/images/organic-beet-root.png',
  alt: 'Toplux Nutrition Organic Beet Root Capsules',
  gallery: [
    '/images/organic-beet-root-2.jpg',
    '/images/organic-beet-root-3.jpg',
    '/images/organic-beet-root-4.png',
  ],
  description:
    'Organic beet root capsules formulated to support healthy blood flow and circulation, natural energy, and overall wellness. Extra-strength 2040 mg per serving, USDA Organic, and made in the USA.',
  benefits: [
    'Supports energy & endurance',
    'Supports healthy blood flow & circulation',
    'Cardiovascular & heart health support',
    'Organic, non-GMO, vegan & gluten-free',
  ],
  statBenefits: [
    'Supports daily energy & endurance',
    'Supports healthy blood flow & circulation',
    'Cardiovascular & heart health support',
    'Organic, non-GMO, vegan & gluten-free',
  ],
  price: '18.30',
  compareAtPrice: '49.97',
  vipPrice: '18.30',
  rating: '4.5',
  reviews: '3.4K',
  sold: '63K+',
  servings: '2040 mg per serving',
  count: '90 capsules',
  quantityOptions: [
    {
      value: 1,
      label: '$18.30 - 30 Day Supply - Buy 1 + $4.95 Shipping',
      perBottle: 18.3,
      total: 18.3,
      shipping: 4.95,
    },
    {
      value: 2,
      label: '$34.60 - 60 Day Supply - Buy 2 + $4.95 Shipping',
      perBottle: 17.3,
      total: 34.6,
      shipping: 4.95,
    },
    {
      value: 3,
      label: '$49.90 - 90 Day Supply - Buy 3 - FREE Shipping',
      perBottle: 16.63,
      total: 49.9,
      shipping: 0,
    },
  ],
  accordion: {
    howItWorks:
      'Organic beet root provides naturally occurring nitrates that support nitric oxide production, helping promote healthy circulation, stamina, and overall cardiovascular wellness when taken consistently.',
    shipping:
      'We provide fast, reliable shipping on all orders. Most deliveries arrive within 7–14 business days, depending on your location. Unopened products can be returned within 30 days of delivery.',
    guarantee:
      'Try NUVORA Organic Beet Root Capsules risk-free. If you are not satisfied, contact us within 30 days for help with a return or refund according to our refund policy.',
    supplementFacts: {
      servingSize: '2 capsules',
      servingsPerContainer: '45',
      rows: [
        ['Organic Beet Root Powder', '2040 mg', '**'],
      ],
      otherIngredients: 'Vegetable cellulose (capsule), organic rice flour.',
      suggestedUse:
        'Take 2 capsules daily with water, preferably with a meal, or as directed by your healthcare provider.',
      caution:
        'Consult your healthcare provider before use if you are pregnant, nursing, taking medication, or have a medical condition. Keep out of reach of children.',
    },
  },
  faq: [
    {
      q: 'How do I take Organic Beet Root Capsules?',
      a: 'Take 2 capsules daily with water, preferably with a meal. Do not exceed the recommended serving unless advised by your healthcare provider.',
    },
    {
      q: 'What can beet root support?',
      a: 'Organic beet root is commonly used to support healthy blood flow, natural energy, endurance, and cardiovascular wellness. These statements have not been evaluated by the FDA.',
    },
    {
      q: 'Is this product organic and vegan?',
      a: 'Yes. It is advertised as USDA Organic, vegan, non-GMO, gluten-free, and made in the USA.',
    },
    {
      q: 'What is your guarantee policy?',
      a: 'If you are not satisfied, contact Alecky Complete LLC at aleckycomplete@gmail.com within 30 days of purchase for return or refund assistance.',
    },
  ],
}

export const PRODUCTS = [PRODUCT]

export function getProductBySku(sku) {
  return PRODUCTS.find((item) => item.sku === sku) || PRODUCT
}

export const VIP = {
  price: '49.99',
  benefits: [
    { title: 'Members-Only Pricing', text: 'Save up to 63% on every order with VIP pricing on eligible products.' },
    { title: 'Free Shipping', text: 'Enjoy complimentary shipping on qualifying VIP orders.' },
    { title: 'Early Access', text: 'Be the first to shop new launches and limited wellness drops.' },
    { title: 'Priority Support', text: 'Get faster help from our customer care team by email.' },
    { title: 'Wellness Picks', text: 'Receive curated recommendations based on your wellness goals.' },
    { title: 'Flexible Cancel', text: 'Cancel anytime through Easy Cancel, email, or your account dashboard.' },
  ],
  faq: [
    {
      q: 'What is NUVORA VIP?',
      a: 'NUVORA VIP is a monthly membership that unlocks exclusive pricing, free shipping on eligible orders, and early access to new products.',
    },
    {
      q: 'How much does VIP cost?',
      a: 'VIP Membership is $49.99 every 28 days until canceled. You will receive notice 5 to 7 days before each billing cycle.',
    },
    {
      q: 'How do I cancel?',
      a: 'You can cancel anytime through our Easy Cancel page or by emailing aleckycomplete@gmail.com before your next billing date.',
    },
    {
      q: 'Do I need VIP to shop?',
      a: 'No. You can still make one-time purchases on any product page without joining VIP.',
    },
  ],
}
