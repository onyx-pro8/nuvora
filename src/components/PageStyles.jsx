import { useEffect } from 'react'

const PAGE_STYLES = {
  shop: ['/css/shop.css'],
  product: ['/css/product.css'],
  checkout: ['/css/checkout.css'],
  pages: ['/css/pages.css'],
  vip: ['/css/vip.css'],
}

export default function PageStyles({ sheets = [] }) {
  const sheetKey = sheets.join(',')

  useEffect(() => {
    const keys = sheetKey ? sheetKey.split(',') : []
    const hrefs = keys.flatMap((key) => PAGE_STYLES[key] || [])
    const created = []

    hrefs.forEach((href) => {
      if (document.head.querySelector(`link[data-page-style="${href}"]`)) return
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.dataset.pageStyle = href
      document.head.appendChild(link)
      created.push(link)
    })

    return () => {
      created.forEach((link) => link.remove())
    }
  }, [sheetKey])

  return null
}
