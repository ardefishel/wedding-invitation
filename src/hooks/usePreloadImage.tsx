import { useEffect, useState } from 'react'

const imageUrls = [
  '/assets/bg-knit.webp',
  '/assets/bg-letter-horizontal.png',
  '/assets/bg-letter-vertical.png',
  '/assets/bg-texture.webp',
  '/assets/border-section.png',
  '/assets/border-btn.png',
  '/assets/divider-vertical.png',
  '/assets/envelope-body.webp',
  '/assets/envelope-stamp.webp',
  '/assets/envelope-top-back.svg',
  '/assets/envelope-top.svg',
  '/assets/doves-black.png',
  '/assets/doves-pink.png',
  '/assets/hero-1.png',
  '/assets/hero-2.png',
  '/assets/ornament-divider.png',
  '/assets/ornament-flower.webp',
  '/assets/ornament-necklace.png',
  '/assets/ornament-ring.png',
]

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image()

    image.onload = () => resolve()
    image.onerror = () => resolve()
    image.src = src
  })
}

export default function usePreloadImage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let isMounted = true

    Promise.all(imageUrls.map(preloadImage)).then(() => {
      if (isMounted) {
        setIsLoaded(true)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return { isLoaded }
}
