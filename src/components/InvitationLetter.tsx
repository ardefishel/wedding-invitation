import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

interface InvitationLetterProps {
  className?: string;
  onOpen?: () => void;
}

export function InvitationLetter({ className, onOpen }: InvitationLetterProps) {
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
      className={twMerge("text-fuchsia-plum h-auto w-90 py-[12cqi]", className)}
      style={{
        backgroundImage: "url(/assets/bg-letter-vertical.webp)",
        backgroundPosition: "100% auto",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        containerType: "inline-size",
      }}
    >
      <h3 className="font-noto-serif text-center text-[4cqi] uppercase">
        The Wedding of
      </h3>
      <div className="font-parisienne mb-8 flex items-center justify-center text-[10cqi]">
        <span>Thalita</span>
        <img
          src="/assets/doves-pink.webp"
          className="mx-[-2cqi] w-[24cqi] translate-y-[2cqi] object-contain"
        />
        <span>Rama</span>
      </div>
      <motion.button
        onClick={onOpen}
        animate={{
          x: [0, -4, 4, -4, 4, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        }}
        className="inline-block w-full py-[2cqi] text-[4cqi] text-[#2b2b2b] uppercase"
        style={{
          backgroundImage: "url(/assets/border-btn.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        Open Invitation
      </motion.button>
    </motion.div>
  );
}
