import { useEffect, useState } from 'react'

function pad(value) {
  return String(value).padStart(2, '0')
}

export function useCountdown(hoursFromNow = 4) {
  const [remaining, setRemaining] = useState(() => hoursFromNow * 3600)

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : hoursFromNow * 3600))
    }, 1000)
    return () => clearInterval(id)
  }, [hoursFromNow])

  const hours = Math.floor(remaining / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  const seconds = remaining % 60

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}
