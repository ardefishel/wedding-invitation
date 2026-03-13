import { useState, useEffect } from "react"

const imageUrls = [
    "assets/bg-knit.webp",
    "assets/bg-letter-horizontal.png",
    "assets/bg-letter-vertical.png",
    "assets/bg-texture.webp",
    "assets/border-section.png",
    "assets/bordern-btn.png",
    "assets/divider-vertical.png",
    "assets/envelope-body.webp",
    "assets/envelope-stamp.webp",
    "assets/envelope-top-back.svg",
    "assets/envelope-top.svg",
    "assets/heading-doves-black.png",
    "assets/heading-doves-pink.png",
    "assets/hero-1.png",
    "assets/hero-2.png",
    "assets/ornament-divider.png",
    "assets/ornament-flower.webp",
    "assets/ornament-necklace.png",
    "assets/ornament-ring.png"
]
export default function () {
    const loadImagePromises = imageUrls.map((src) => {
        return new Promise((resolve, reject) => {
            // console.log('Load image source: ', src)
            const img = new Image()
            img.onload = () => resolve(img)
            img.onerror = reject
            img.src = src
        })
    })

    const [isImageLoaded, setIsImageLoaded] = useState(false)
    useEffect(() => {
        Promise.all(loadImagePromises).then(() => {
            setIsImageLoaded(true)
        })
            .catch((err) => {
                console.log('Images failed to load', err)
                setIsImageLoaded(true)
            })
    }, [])
    return { isImageLoaded }
}