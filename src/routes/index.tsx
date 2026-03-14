import { Envelope } from "@/components/Envelope";
import { InvitationLetter } from "@/components/InvitationLetter";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  ssr: false,
});

function RouteComponent() {
  return (
    <div
      className="flex h-dvh flex-col items-center justify-center overflow-hidden bg-grey-olive"
      style={{
        backgroundImage: "url(/assets/bg-knit.webp)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
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
        <InvitationLetter className="-rotate-6" />
      </div>
    </div>
  );
}
