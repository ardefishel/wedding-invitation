import { Envelope } from "@/components/Envelope";
import { InvitationLetter } from "@/components/InvitationLetter";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import { useNavigateWithTransition } from "@/utils/transitions";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  ssr: false,
});

function parseGuestLines(): [string, string] | undefined {
  if (typeof window === "undefined") return undefined;
  const match = window.location.search.match(/[?&]to=([^&]*)/);
  if (!match) return undefined;
  const parts = match[1].split("+").map((p) => decodeURIComponent(p));
  if (parts.length < 2) return [parts[0], ""];
  return [parts.slice(0, -1).join(" "), parts[parts.length - 1]];
}

function RouteComponent() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [stackScale, setStackScale] = useState(1);
  const stackRef = useRef<HTMLDivElement>(null);
  const stackScaleRef = useRef(1);
  const { navigate } = useNavigateWithTransition();
  const guestLines = parseGuestLines();

  useLayoutEffect(() => {
    let frameId = 0;

    const updateScale = () => {
      const stack = stackRef.current;
      if (!stack) return;

      const currentScale = stackScaleRef.current;
      const rect = stack.getBoundingClientRect();
      const naturalWidth = rect.width / currentScale;
      const naturalHeight = rect.height / currentScale;

      if (!naturalWidth || !naturalHeight) return;

      const nextScale = Math.min(
        1,
        (window.innerWidth - 32) / naturalWidth,
        (window.innerHeight - 32) / naturalHeight,
      );

      if (!Number.isFinite(nextScale)) return;
      if (Math.abs(nextScale - currentScale) < 0.01) return;

      stackScaleRef.current = nextScale;
      setStackScale(nextScale);
    };

    const scheduleScaleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateScale);
    };

    scheduleScaleUpdate();

    const resizeObserver = new ResizeObserver(scheduleScaleUpdate);

    if (stackRef.current) {
      resizeObserver.observe(stackRef.current);
    }

    window.addEventListener("resize", scheduleScaleUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleScaleUpdate);
    };
  }, []);

  const handleOpen = () => {
    if (isLeaving) return;
    setIsLeaving(true);
  };

  return (
    <motion.div
      className="bg-grey-olive flex h-dvh flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/assets/bg-knit.webp)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
      animate={
        isLeaving ? { opacity: 0, scale: 1.08 } : { opacity: 1, scale: 1 }
      }
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        if (isLeaving) {
          navigate("/content");
        }
      }}
    >
      <div className="flex flex-1 items-center justify-center px-4 py-4">
        <div
          className="origin-center"
          style={{ transform: `scale(${stackScale})` }}
        >
          <div ref={stackRef} className="relative my-auto -translate-y-4">
            <Envelope className="translate-x-8 rotate-6" guestLines={guestLines} />
            <motion.img
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="absolute left-[50%] z-100 w-90 -translate-y-[70%] object-cover md:left-[65%] md:w-100 lg:w-110 xl:w-125"
              src="/assets/ornament-necklace.webp"
            />
            <InvitationLetter className="-rotate-6" onOpen={handleOpen} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
