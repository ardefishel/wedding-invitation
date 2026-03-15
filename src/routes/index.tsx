import { Envelope } from "@/components/Envelope";
import { InvitationLetter } from "@/components/InvitationLetter";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigateWithTransition } from "@/utils/transitions";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  ssr: false,
});

function RouteComponent() {
  const [isLeaving, setIsLeaving] = useState(false);
  const { navigate } = useNavigateWithTransition();

  const handleOpen = () => {
    if (isLeaving) return;
    setIsLeaving(true);
  };

  return (
    <motion.div
      className="flex h-dvh flex-col items-center justify-center overflow-hidden bg-grey-olive"
      style={{
        backgroundImage: "url(/assets/bg-knit.webp)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
      animate={
        isLeaving
          ? { opacity: 0, scale: 1.08 }
          : { opacity: 1, scale: 1 }
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
      <div className="relative my-auto -translate-y-4">
        <Envelope className="rotate-6 translate-x-8" />
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
          className="absolute left-[50%] -translate-y-[70%] object-cover w-90 z-100"
          src="/assets/ornament-necklace.webp"
        />
        <InvitationLetter className="-rotate-6" onOpen={handleOpen} />
      </div>
    </motion.div>
  );
}
