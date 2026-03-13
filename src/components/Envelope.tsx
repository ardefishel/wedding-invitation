import { ClientOnly } from "@tanstack/react-router";
import { delay } from "motion/react";
import { useMotionValue, motion } from "motion/react";

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
          delayChildren: 2
        }}
        className={`w-fit overflow-hidden ${className}`}
        style={{
          paddingTop: `calc( ${FLAP_RATIO} * 100% + 10px)`,
        }}
      >
        <div
          className="relative bg-white w-80 "
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
            className="absolute bottom-0 left-0 right-0 h-120 z-50"
            style={{
              backgroundImage: "url(/assets/bg-letter-vertical.png)",
              backgroundPosition: "100% auto",
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              containerType: "inline-size",
            }}
          >
            <div className="flex relative flex-col -rotate-2 mx-auto -translate-x-[4cqi] mt-[12cqi]">
              <div
                className="w-full text-center leading-none "
                style={{ containerType: "inline-size" }}
              >
                <h3 className="font-parisienne text-[8cqi]">Dear,</h3>
                <h2 className="uppercase text-[12cqi]">
                  Guest <br /> Name
                </h2>
              </div>
              <span className="uppercase text-[4cqi] text-center ">
                You are invited to ...{" "}
              </span>
              <img
                className="absolute right-[8cqi] -bottom-[20cqi] rotate-6 my-auto w-[26cqi]"
                alt=""
                src="/assets/ornament-flower.webp"
              />
            </div>
          </motion.div>

          {/* body */}
          <div className="absolute bottom-0 left-0 right-0 z-100">
            <img
              className="object-contain "
              alt=""
              src="/assets/envelope-body.webp"
            />
            <div className="absolute w-[14cqi]  -translate-y-[4cqi] m-auto h-full inset-0 flex justify-center">
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
            className="relative w-full bg-red-300 h-auto perspective-midrange origin-top transform-3d"
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
              className="absolute inset-0 backface-hidden z-2"
              alt=""
              src="/assets/envelope-top.svg"
            />
            <img
              className="absolute inset-0 rotate-z-180 rotate-x-180 backface-hidden"
              alt=""
              src="/assets/envelope-top-back.svg"
            />
          </motion.div>
        </div>
      </motion.div>
    </ClientOnly>
  );
}
