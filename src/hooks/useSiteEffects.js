import { useEffect, useState } from 'react'
import { getCartCount, readCart } from '../utils/cart'

export function useSiteEffects() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollVisible, setScrollVisible] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const refreshCart = () => setCartCount(getCartCount(readCart()))
    refreshCart()
    window.addEventListener('cart-updated', refreshCart)
    window.addEventListener('storage', refreshCart)
    return () => {
      window.removeEventListener('cart-updated', refreshCart)
      window.removeEventListener('storage', refreshCart)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrollVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('.animate-section')
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('hidden', menuOpen)
    return () => document.body.classList.remove('hidden')
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return {
    menuOpen,
    setMenuOpen,
    scrollVisible,
    scrollToTop,
    cartCount,
  }
}
