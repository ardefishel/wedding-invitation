import { Envelope } from "@/components/Envelope";
import { createFileRoute } from "@tanstack/react-router";
import { delay, motion, useMotionValue } from "motion/react";
import {
  PropsWithChildren,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center items-center bg-grey-olive min-h-dvh overflow-hidden">
      <Envelope className="rotate-6" />
    </div>
  );
}

