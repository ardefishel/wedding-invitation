import { ClientOnly } from "@tanstack/react-router";
import { delay } from "motion/react";
import { useMotionValue, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const FLAP_RATIO = 297 / 800;

export function Envelope({ className }: { className?: string }) {
  const zIndex = useMotionValue(100);

  return (
    <ClientOnly>
      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delayChildren: 2,
        }}
        className={twMerge("w-fit overflow-hidden", className)}
        style={{
          paddingTop: `calc( ${FLAP_RATIO} * 100% + 10px)`,
        }}
      >
        <div
          className="relative w-80 bg-white md:w-100 lg:w-120 xl:w-140"
          style={{ containerType: "inline-size", aspectRatio: "800 / 563" }}
        >
          {/* inner */}
          <motion.div
            initial={{
              height: "65cqi",
            }}
            animate={{
              height: "105cqi",
            }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute right-0 bottom-0 left-0 z-50 h-120"
            style={{
              backgroundImage: "url(/assets/bg-letter-vertical.webp)",
              backgroundPosition: "100% auto",
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              containerType: "inline-size",
            }}
          >
            <div className="relative mx-auto mt-[12cqi] flex -translate-x-[4cqi] -rotate-2 flex-col">
              <div
                className="w-full text-center leading-none"
                style={{ containerType: "inline-size" }}
              >
                <h3 className="font-parisienne text-[8cqi]">Dear,</h3>
                <h2 className="text-[12cqi] uppercase">
                  Guest <br /> Name
                </h2>
              </div>
              <span className="text-center text-[4cqi] uppercase">
                You are invited to ...{" "}
              </span>
              <img
                className="absolute right-[8cqi] -bottom-[20cqi] my-auto w-[26cqi] rotate-6"
                alt=""
                src="/assets/ornament-flower.webp"
              />
            </div>
          </motion.div>

          {/* body */}
          <div className="absolute right-0 bottom-0 left-0 z-100">
            <img
              className="object-contain"
              alt=""
              src="/assets/envelope-body.webp"
            />
            <div className="absolute inset-0 m-auto flex h-full w-[14cqi] -translate-y-[4cqi] justify-center">
              <motion.img
                initial={{
                  rotate: 40,
                }}
                animate={{
                  rotate: 0,
                }}
                transition={{
                  duration: 4,
                  type: "spring",
                }}
                className="object-contain"
                alt=""
                src="/assets/envelope-stamp.webp"
              />
            </div>
          </div>

          {/* flap */}
          <motion.div
            className="relative h-auto w-full origin-top bg-red-300 perspective-midrange transform-3d"
            style={{
              zIndex,
            }}
            animate={{
              rotateX: 180,
            }}
            transition={{
              duration: 2,
            }}
            onAnimationStart={() => {
              delay(() => zIndex.set(1), 800);
            }}
          >
            <img
              className="absolute inset-0 z-2 backface-hidden"
              alt=""
              src="/assets/envelope-top.svg"
            />
            <img
              className="absolute inset-0 rotate-x-180 rotate-z-180 backface-hidden"
              alt=""
              src="/assets/envelope-top-back.svg"
            />
          </motion.div>
        </div>
      </motion.div>
    </ClientOnly>
  );
}
