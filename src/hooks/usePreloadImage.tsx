import { useEffect, useState } from "react";

const imageUrls = [
  "/assets/bg-knit.webp",
  "/assets/bg-letter-horizontal.webp",
  "/assets/bg-letter-vertical.webp",
  "/assets/bg-texture.webp",
  "/assets/border-section.webp",
  "/assets/border-btn.webp",
  "/assets/divider-vertical.webp",
  "/assets/envelope-body.webp",
  "/assets/envelope-stamp.webp",
  "/assets/envelope-top-back.svg",
  "/assets/envelope-top.svg",
  "/assets/doves-black.webp",
  "/assets/doves-pink.webp",
  "/assets/hero-1.webp",
  "/assets/hero-2.webp",
  "/assets/ornament-divider.webp",
  "/assets/ornament-flower.webp",
  "/assets/ornament-necklace.webp",
  "/assets/ornament-ring.webp",
  "/assets/bg-letter-vertical-2.webp",
];

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();

    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

export default function usePreloadImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    Promise.all(imageUrls.map(preloadImage)).then(() => {
      if (isMounted) {
        setIsLoaded(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { isLoaded };
}
