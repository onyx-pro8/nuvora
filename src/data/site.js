export const BRAND = {
  name: 'NUVORA',
  tagline: 'Better Nutrition. Every Day.',
  logo: '/images/nuvora-logo.png',
  descriptor: 'Organic beet nutrition for daily energy and circulation support.',
  merchantNote:
    'NUVORA is the online store of Alecky Complete LLC in Grimes, Iowa. Organic Beet Root Capsules are supplied by Toplux Nutrition / Lux Global Inc.',
}

export const COMPANY = {
  name: 'Alecky Complete LLC',
  addressLine1: '1800 NW Gabus Dr',
  addressLine2: 'Grimes, IA 50111',
  fullAddress: '1800 NW Gabus Dr, Grimes, IA 50111',
  email: 'aleckycomplete@gmail.com',
  phone: '1-702-379-7554',
  phoneHref: 'tel:+17023797554',
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
    '/images/organic-beet-root-2.png',
    '/images/organic-beet-root-3.png',
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
      name: '1 bottle',
      supply: '30-day supply',
      shipNote: '$4.95 shipping',
      label: '$18.30 - 30 Day Supply - Buy 1 + $4.95 Shipping',
      perBottle: 18.3,
      total: 18.3,
      shipping: 4.95,
    },
    {
      value: 2,
      name: '2 bottles',
      supply: '60-day supply',
      shipNote: '$4.95 shipping',
      label: '$34.60 - 60 Day Supply - Buy 2 + $4.95 Shipping',
      perBottle: 17.3,
      total: 34.6,
      shipping: 4.95,
    },
    {
      value: 3,
      name: '3 bottles',
      supply: '90-day supply',
      shipNote: 'Free shipping',
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
      q: 'Who sells this bottle?',
      a: 'You are buying from NUVORA, operated by Alecky Complete LLC in Grimes, Iowa. The capsules are from Toplux Nutrition / Lux Global Inc.',
    },
    {
      q: 'What if I am not satisfied?',
      a: 'Contact Alecky Complete LLC at aleckycomplete@gmail.com or 1-702-379-7554 within 30 days of delivery for return or refund help.',
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
    { title: 'Member bottle pricing', text: 'Pay the listed member price on Organic Beet Root Capsules instead of one-time shipping add-ons where VIP is selected.' },
    { title: 'Eligible free shipping', text: 'Member orders ship without the $4.95 one-time handling fee when membership terms apply.' },
    { title: 'Scheduled restock', text: 'A 28-day cycle so you can keep beet root in the cabinet without placing a new cart each time.' },
    { title: 'Iowa customer care', text: 'Reach Alecky Complete LLC by phone or email for billing, delivery, and Easy Cancel help.' },
    { title: 'One-time still available', text: 'You can buy a bottle without membership. Membership is optional.' },
    { title: 'Cancel before the next charge', text: 'Stop future billing on Easy Cancel, by email, or by phone before the next 28-day date.' },
  ],
  faq: [
    {
      q: 'What is a NUVORA membership?',
      a: 'It is a $49.99 charge every 28 days from Alecky Complete LLC that unlocks member pricing on Organic Beet Root Capsules and free shipping on eligible orders.',
    },
    {
      q: 'How much is membership?',
      a: 'Membership is $49.99 every 28 days until canceled. You receive notice 5 to 7 days before each billing cycle. Charges appear as Alecky Complete LLC.',
    },
    {
      q: 'How do I cancel?',
      a: 'Use Easy Cancel, call 1-702-379-7554, or email aleckycomplete@gmail.com before your next billing date.',
    },
    {
      q: 'Do I need a membership to buy beet root?',
      a: 'No. One-time bottles are sold on the product page with the 1, 2, or 3 bottle options.',
    },
  ],
  testimonials: [
    {
      quote: 'I keep the extra-strength beet root on auto-ship and skip the $4.95 handling fee.',
      name: 'Laura M.',
      detail: 'NUVORA member, Iowa',
    },
    {
      quote: 'Canceling took one form. Support confirmed by email the same day.',
      name: 'James R.',
      detail: 'NUVORA member',
    },
  ],
}

export const HERO_SPECS = [
  '2040 mg per serving',
  '90 capsules',
  'USDA Organic',
  'Made in the USA',
]

export const FORMULA_STANDARDS = [
  {
    title: 'Extra-strength serving',
    text: 'Each serving delivers 2040 mg of organic beet root powder — a clear, labeled amount instead of a proprietary blend.',
  },
  {
    title: 'Capsule convenience',
    text: 'No mixing, staining, or earthy powder mess. Two vegetable capsules with a meal is the full daily routine.',
  },
  {
    title: 'Certified organic ingredients',
    text: 'USDA Organic, non-GMO, vegan, and gluten-free. The listed ingredient is organic beet root powder.',
  },
  {
    title: 'Iowa storefront, USA-made formula',
    text: 'Sold by Alecky Complete LLC in Grimes, Iowa. Product manufactured in the USA for Toplux Nutrition.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Take two capsules',
    text: 'Use 2 capsules daily with water, preferably with a meal, as directed on the label.',
  },
  {
    step: '2',
    title: 'Support circulation',
    text: 'Organic beet root provides naturally occurring nitrates that help support nitric oxide and healthy blood flow.',
  },
  {
    step: '3',
    title: 'Stay consistent',
    text: 'Daily use is how most customers support energy, endurance, and overall wellness over time.',
  },
]

export const FORMULA_BADGES = [
  '2040 mg per serving',
  'USDA Organic',
  'Non-GMO',
  'Vegan',
  'Gluten-free',
  'Made in the USA',
  '90 capsules',
]

export const AUDIENCE = [
  {
    title: 'Daily energy',
    text: 'For adults who want a stimulant-free option to support stamina through a normal workday.',
  },
  {
    title: 'Active routines',
    text: 'A simple capsule format for training days, walking, or an active lifestyle.',
  },
  {
    title: 'Circulation support',
    text: 'Chosen by shoppers looking for organic beet root to support healthy blood flow.',
  },
  {
    title: 'Clean-label wellness',
    text: 'USDA Organic, vegan, non-GMO, and gluten-free for everyday supplement routines.',
  },
]

export const REVIEWS = [
  {
    name: 'Daniel K.',
    stars: '★★★★★',
    text: 'Easy to take and a clean label. I keep it in my morning routine for energy and circulation support.',
  },
  {
    name: 'Priya S.',
    stars: '★★★★☆',
    text: 'Solid extra-strength beet root. Capsules are convenient compared with powder, and shipping was prompt.',
  },
  {
    name: 'Michael T.',
    stars: '★★★★★',
    text: 'I wanted an organic option made in the USA. The 2040 mg serving and 30-day policy made the purchase straightforward.',
  },
  {
    name: 'Rachel W.',
    stars: '★★★★☆',
    text: 'No strong aftertaste, which I appreciate. I take two capsules with breakfast as directed.',
  },
  {
    name: 'Omar H.',
    stars: '★★★★★',
    text: 'Customer service answered my order question by email the same day. Product matched the description.',
  },
  {
    name: 'Elena P.',
    stars: '★★★★☆',
    text: 'Good value versus the listed compare-at price. I would buy again for daily wellness support.',
  },
]
