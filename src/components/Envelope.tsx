import { delay } from "motion/react";
import { useMotionValue, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

export function Envelope({ className }: { className?: string }) {
    const imageRef = useRef<HTMLImageElement>(null);
    const envelopeBodyRef = useRef<HTMLDivElement | null>(null);
  
    const zIndex = useMotionValue(100);

    const [flapYPosition, setFlapYPosition] = useState(0);
    const [containerPadding, setContainerPadding] = useState(0);
  
    useEffect(() => {
      if (envelopeBodyRef.current) {
        setFlapYPosition(envelopeBodyRef.current.clientHeight);
      }
    }, []);
  
    useEffect(() => {
      if (imageRef.current) {
        setContainerPadding(imageRef.current.clientHeight);
      }
    }, []);
  
    return (
      <div
        className={`w-fit overflow-hidden ${className}`}
        style={{
          paddingTop: `calc(${containerPadding}px + 10px)`,
        }}
      >
        <div
          className="relative bg-white w-80 "
          style={{ containerType: "inline-size", aspectRatio: "800 / 563" }}
        >
          {/* inner */}
          <motion.div
            initial={{
              height: "55cqi",
            }}
            animate={{
              height: "105cqi",
            }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-0 left-0 right-0 h-120 z-50"
            style={{
              backgroundImage: "url(assets/bg-letter-vertical.png)",
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
                className="absolute right-[8cqi] -bottom-[20cqi] rotate-6 my-auto w-[24cqi]"
                src="/assets/ornament-flower.webp"
              />
            </div>
          </motion.div>
  
          {/* body */}
          <div
            ref={envelopeBodyRef}
            className="absolute bottom-0 left-0 right-0 z-100"
          >
            <img className="object-contain " src="assets/envelope-body.webp" />
            <div className="absolute w-[14cqi]  -translate-y-[4cqi] m-auto h-full inset-0 flex justify-center">
              <motion.img
                  initial={{
                      rotate: 40
                  }}
                  animate={{
                      rotate: 0
                  }}
                  transition={{
                      duration: 1
                  }}
              className="object-contain" src="assets/envelope-stamp.webp" />
            </div>
          </div>
  
          {/* flap */}
          <motion.div
            className="absolute translate-y-full left-0 right-0 w-full perspective-midrange origin-top transform-3d bg-amber-100"
            style={{
              bottom: flapYPosition,
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
              ref={imageRef}
              className="absolute inset-0 backface-hidden z-2"
              src="assets/envelope-top.svg"
            />
            <img
              className="absolute inset-0 rotate-z-180 rotate-x-180 backface-hidden"
              src="assets/envelope-top-back.svg"
            />
          </motion.div>
        </div>
      </div>
    );
  }
  