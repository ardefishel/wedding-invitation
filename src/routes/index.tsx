import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { useNavigateWithTransition } from "../utils/transitions";

import "./index.css";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

/*
 * Canva canvas: 1179 × 2256 px
 * All positions derived from Canva transform: translate(Xpx, Ypx) rotate(Ndeg)
 * Converted to percentages: left% = X/1179*100, top% = Y/2256*100, width% = W/1179*100
 */

function RouteComponent() {
  const totalImages = 5;
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoaded = useCallback(() => {
    setLoadedImages((value) => (value < totalImages ? value + 1 : value));
  }, [totalImages]);

  const allImagesLoaded = loadedImages >= totalImages;
  const revealClassName = allImagesLoaded ? "reveal-item" : "reveal-item--pending";

  return (
    <div className="h-svh bg-grey-olive overflow-hidden relative">
      <div className="max-w-xl bg-knit h-full mx-auto flex relative justify-center items-center">
        <div className="invite-scale flex flex-col justify-center items-center">
          <TheWeddingEnvelope className={revealClassName} onImageLoad={handleImageLoaded} />
          <TheWeddingTitle className={revealClassName} onImageLoad={handleImageLoaded} />
        </div>
      </div>
      {!allImagesLoaded && (
        <div className="image-loading-overlay" aria-live="polite" aria-busy="true">
          <div className="image-spinner" aria-label="Loading images" />
        </div>
      )}
    </div>
  );
}

const TheWeddingEnvelope = ({
  className = "",
  onImageLoad,
}: {
  className?: string;
  onImageLoad: () => void;
}) => {
  return (
    <div className={`items-center w-[70%] mt-8 rotate-6 flex flex-col relative h-[50%] max-h-[340px] ${className}`}>
      <div className="bg-letter w-full h-100 bottom-0 z-0">
        <div className="flex flex-col -rotate-2 mx-auto mt-8 w-fit">
          <div className="mx-auto">
            <h3 className="font-parisienne text-2xl text-center">Dear</h3>
            <h2 className="uppercase text-4xl">Guest <br /> Name</h2>
          </div>
          <span className="uppercase text-lg">You are invited to ... </span>
        </div>
      </div>
      <div className="absolute bottom-0 w-fit z-10">
        <LoadingImage
          src="/assets/ornament-flower.webp"
          className="absolute right-2 rotate-2 -top-18 m-auto -z-1 w-[30%] object-contain"
          onImageLoad={onImageLoad}
        />
        <LoadingImage
          src="/assets/envelope-stamp.webp"
          className="absolute m-auto inset-0 z-10 -translate-y-3 size-12"
          onImageLoad={onImageLoad}
        />
        <LoadingImage src="/assets/envelope-body.webp" className="z-100" alt="" onImageLoad={onImageLoad} />
      </div>
    </div>
  );
};

const TheWeddingTitle = ({
  className = "",
  onImageLoad,
}: {
  className?: string;
  onImageLoad: () => void;
}) => (
  <div className={`bg-letter w-[80%] relative px-4 py-12 mx-auto text-center -rotate-6 text-fuchsia-plum ${className}`}>
    <LoadingImage
      src="/assets/ornament-necklace.png"
      className="absolute w-72  z-100 -top-26 -right-32 object-cover"
      onImageLoad={onImageLoad}
    />

    <h3 className="font-noto-serif uppercase text-xs">The Wedding of</h3>
    <div className="font-parisienne text-3xl flex justify-center items-center mb-8">
      <span className="flex-1">Thalita</span>
      <LoadingImage
        src="/assets/purple-doves.png"
        className="w-1/4 -mx-10 object-contain translate-y-2"
        onImageLoad={onImageLoad}
      />
      <span className="flex-1">Rama</span>
    </div>

    <ThemeButton text="Open Invitation" />
  </div>
);

export const ThemeButton = ({ text }: { text: string }) => {
  const { navigate } = useNavigateWithTransition();

  return (
    <button
      onClick={() => navigate("/content")}
      className="uppercase text-[#2b2b2b] inline-block px-8 text-sm py-2 theme-button"
    >
      {text}
    </button>
  );
};

export const LoadingImage = ({ onImageLoad, ...props }: ImgHTMLAttributes<HTMLImageElement> & { onImageLoad: () => void }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const hasReportedRef = useRef(false);

  const notifyLoaded = useCallback(() => {
    if (hasReportedRef.current) {
      return;
    }

    hasReportedRef.current = true;
    onImageLoad();
  }, [onImageLoad]);

  useEffect(() => {
    const image = imageRef.current;
    if (image && image.complete && image.naturalWidth > 0) {
      notifyLoaded();
    }
  }, [notifyLoaded]);

  return <img ref={imageRef} {...props} onLoad={notifyLoaded} onError={notifyLoaded} />;
};
