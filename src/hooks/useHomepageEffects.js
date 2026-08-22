import { useEffect, useState } from 'react'

function pad(n) {
  return n < 10 ? `0${n}` : String(n)
}

/** Ports homepage behaviors from original main.js + inline script */
export function useHomepageEffects() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [countdown, setCountdown] = useState({ hours: '00', minutes: '00', seconds: '00' })
  const [scrollVisible, setScrollVisible] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    let endOfDay = new Date()
    endOfDay = new Date(endOfDay.getFullYear(), endOfDay.getMonth(), endOfDay.getDate() + 1, 0, 0, 0)

    const tick = () => {
      const now = new Date()
      let diff = endOfDay - now
      if (diff <= 0) {
        endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0)
        diff = endOfDay - now
      }
      setCountdown({
        hours: pad(Math.floor(diff / (1000 * 60 * 60))),
        minutes: pad(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: pad(Math.floor((diff % (1000 * 60)) / 1000)),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
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
    try {
      const uid = localStorage.getItem('uid') || 'guest'
      const cart = JSON.parse(localStorage.getItem(`${uid}-cart`) || '[]')
      const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
      setCartCount(count || 0)
    } catch {
      setCartCount(0)
    }
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
    countdown,
    scrollVisible,
    scrollToTop,
    cartCount,
  }
}
