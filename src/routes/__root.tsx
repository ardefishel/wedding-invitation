import {
  ClientOnly,
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import { inject } from "@vercel/analytics";
import appCss from "../styles.css?url";
import usePreloadImage from "@/hooks/usePreloadImage";
import Spinner from "@/components/Spinner";

inject();

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Thalita & Rama Wedding Invitation",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-grey-olive">
        <ClientOnly fallback={<Spinner />}>
          <ClientApp />
        </ClientOnly>
        <Scripts />
      </body>
    </html>
  );
}

function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (hasStarted) return;
    const startAudio = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.volume = 0.5;
      audio.play().then(() => setHasStarted(true)).catch(() => {});
    };
    document.addEventListener("click", startAudio, { once: true });
    return () => document.removeEventListener("click", startAudio);
  }, [hasStarted]);

  useEffect(() => {
    const onScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop ?? 0;
      setIsVisible(scrollTop <= lastScrollY.current);
      lastScrollY.current = scrollTop;
    };
    document.addEventListener("scroll", onScroll, { capture: true });
    return () => document.removeEventListener("scroll", onScroll, { capture: true });
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted) {
      audio.play().catch(() => {});
      audio.muted = false;
    } else {
      audio.muted = true;
    }
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/backsound/music.mpeg" loop />
      <button
        onClick={toggleMute}
        className="fixed right-3 top-3 z-50 transition-transform duration-300 sm:right-4 sm:top-4"
        style={{ transform: isVisible ? "translateY(0)" : "translateY(-80px)" }}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="14" fill="#3B3B3B" />
            <path d="M6.8539 6.1459C6.80741 6.09941 6.75222 6.06254 6.69148 6.03738C6.63074 6.01222 6.56564 5.99927 6.4999 5.99927C6.43416 5.99927 6.36906 6.01222 6.30832 6.03738C6.24758 6.06254 6.19239 6.09941 6.1459 6.1459C6.09941 6.19239 6.06254 6.24758 6.03738 6.30832C6.01222 6.36906 5.99927 6.43416 5.99927 6.4999C5.99927 6.56564 6.01222 6.63074 6.03738 6.69148C6.06254 6.75222 6.09941 6.80741 6.1459 6.8539L10.9999 11.7069V17.4999C10.5494 17.162 9.99793 16.9861 9.43494 17.0007C8.87196 17.0154 8.33041 17.2197 7.89803 17.5805C7.46565 17.9414 7.16778 18.4376 7.05267 18.9889C6.93757 19.5402 7.01197 20.1142 7.26383 20.6179C7.51569 21.1217 7.93025 21.5256 8.44034 21.7643C8.95043 22.0029 9.52617 22.0624 10.0743 21.933C10.6224 21.8036 11.1108 21.493 11.4603 21.0514C11.8097 20.6097 11.9999 20.0631 11.9999 19.4999V12.7069L15.4139 16.1209C15.0952 16.6017 14.9526 17.1778 15.0102 17.7517C15.0679 18.3256 15.3221 18.862 15.73 19.2698C16.1378 19.6777 16.6742 19.9319 17.2481 19.9896C17.822 20.0472 18.3981 19.9046 18.8789 19.5859L21.1459 21.8539C21.2398 21.9478 21.3671 22.0005 21.4999 22.0005C21.6327 22.0005 21.76 21.9478 21.8539 21.8539C21.9478 21.76 22.0005 21.6327 22.0005 21.4999C22.0005 21.3671 21.9478 21.2398 21.8539 21.1459L6.8539 6.1459ZM17.4999 14.9999C17.3799 14.9999 17.2619 15.0082 17.1459 15.0249L19.9759 17.8539C19.9912 17.7379 19.9992 17.6199 19.9999 17.4999V7.1799C19.9999 7.1239 19.9956 7.0689 19.9869 7.0149C19.9634 6.87389 19.9099 6.73956 19.8301 6.62096C19.7503 6.50237 19.646 6.40226 19.5242 6.32739C19.4025 6.25252 19.266 6.20463 19.1242 6.18695C18.9823 6.16927 18.8383 6.18221 18.7019 6.2249L11.7019 8.4129C11.5658 8.4553 11.4403 8.52631 11.3339 8.62117C11.2275 8.71603 11.1426 8.83254 11.0849 8.9629L13.8959 11.7749L18.9999 10.1799V15.4999C18.5672 15.1753 18.0408 14.9999 17.4999 14.9999Z" fill="#8A8A8A" />
          </svg>
        ) : (
          <svg className="h-8 w-8 sm:h-10 sm:w-10" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="14" fill="#EFB6B6" />
            <path d="M19.987 7.01604C19.9635 6.87503 19.91 6.7407 19.8302 6.62211C19.7504 6.50351 19.6461 6.4034 19.5243 6.32853C19.4026 6.25367 19.2661 6.20578 19.1243 6.1881C18.9824 6.17042 18.8384 6.18336 18.702 6.22604L11.702 8.41304C11.4985 8.47658 11.3206 8.60352 11.1943 8.77533C11.068 8.94714 10.9999 9.15481 11 9.36804V17.5C10.5495 17.1621 9.99803 16.9863 9.43505 17.0009C8.87206 17.0155 8.33051 17.2198 7.89813 17.5807C7.46576 17.9415 7.16788 18.4378 7.05278 18.9891C6.93767 19.5404 7.01208 20.1144 7.26394 20.6181C7.51579 21.1218 7.93035 21.5257 8.44044 21.7644C8.95054 22.0031 9.52628 22.0626 10.0744 21.9332C10.6225 21.8038 11.1109 21.4931 11.4604 21.0515C11.8099 20.6099 12 20.0632 12 19.5V12.368L19 10.18V15.5C18.5495 15.1621 17.998 14.9863 17.435 15.0009C16.8721 15.0155 16.3305 15.2198 15.8981 15.5807C15.4658 15.9415 15.1679 16.4378 15.0528 16.9891C14.9377 17.5404 15.0121 18.1144 15.2639 18.6181C15.5158 19.1218 15.9304 19.5257 16.4404 19.7644C16.9505 20.0031 17.5263 20.0626 18.0744 19.9332C18.6225 19.8038 19.1109 19.4931 19.4604 19.0515C19.8099 18.6099 20 18.0632 20 17.5V7.18004C20 7.12471 19.9957 7.07004 19.987 7.01604Z" fill="white" />
          </svg>
        )}
      </button>
    </>
  );
}

function ClientApp() {
  const { isLoaded } = usePreloadImage();

  return isLoaded ? (
    <>
      <BackgroundMusic />
      <Outlet />
    </>
  ) : (
    <Spinner />
  );
}
