import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
export function InvitationLetter({ className }: { className?: string }) {
  return (
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
        duration: 2,
      }}
      className={twMerge("w-90 h-auto py-[12cqi] text-fuchsia-plum", className)}
      style={{
        backgroundImage: "url(/assets/bg-letter-vertical.webp)",
        backgroundPosition: "100% auto",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        containerType: "inline-size",
      }}
    >
      <h3 className="font-noto-serif text-center uppercase text-[4cqi]">
        The Wedding of
      </h3>
      <div className="font-parisienne text-[10cqi] flex justify-center items-center mb-8">
        <span>Thalita</span>
        <img
          src="/assets/doves-pink.webp"
          className="w-[24cqi] mx-[-2cqi] object-contain translate-y-[2cqi]"
        />
        <span>Rama</span>
      </div>
      <Link to="/content">
        <motion.button
          animate={{
            x: [0, -4, 4, -4, 4, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeInOut",
          }}
          className="uppercase text-[#2b2b2b]  w-full inline-block text-[4cqi] py-[2cqi]"
          style={{
            backgroundImage: "url(/assets/border-btn.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          Open Invitation
        </motion.button>
      </Link>
    </motion.div>
  );
}
