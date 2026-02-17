import { createFileRoute } from "@tanstack/react-router";

import "./index.css";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

/*
 * Canva canvas: 1179 × 2256 px
 * All positions derived from Canva transform: translate(Xpx, Ypx) rotate(Ndeg)
 * Converted to percentages: left% = X/1179*100, top% = Y/2256*100, width% = W/1179*100
 */

function RouteComponent() {

  return (
    <div className="min-h-svh bg-[rgb(145,137,116)] flex flex-col justify-center overflow-hidden">
      <TheWeddingEnvelope />
      <TheWeddingTitle />
    </div>
  );
}

const TheWeddingEnvelope = () => {
  return (
    <div className="items-center flex flex-col relative  h-fit ">
      <div className="bg-letter w-[443px] h-140 bottom-0 z-0">
        <div className="flex flex-col mx-auto mt-16 w-fit">
          <h3 className="font-parisienne text-4xl text-center">Dear</h3>
          <h2 className="uppercase text-6xl">Guest <br /> Name</h2>
          <span className="uppercase text-1xl">You are invited to ... </span>
        </div>
      </div>
      <div className="absolute bottom-0 w-fit z-10">
        <img src="/assets/ornament-flower.webp" className="absolute right-4 rotate-6 -top-26 m-auto -z-1 w-32" />
        <img src="/assets/envelope-stamp.webp" className="absolute m-auto inset-0 z-10 -translate-y-6  size-24" />
        <img src="/assets/envelope-body.webp" className="w-[443px] z-100 " alt="" />
      </div>
    </div>
  )
}

const TheWeddingTitle = () => (
  <div className="bg-letter p-16 mx-auto min-w-md text-center text-[#bc6890]">
    <h3 className="font-noto-serif uppercase text-3xl">The Wedding of</h3>
    <div className="font-parisienne text-[85px] flex justify-center items-center gap-42 relative mb-16 ">
      <span>Thalita</span>
      <img src="/assets/purple-doves.png" className=" size-[240px] object-contain absolute inset-0 m-auto translate-y-8 translate-x-2" />
      <span>Rama</span>
    </div>
    <ThemeButton text="Open Invitation" />
  </div>
)

const ThemeButton = ({ text }: { text: string }) => (
  <button
    className="uppercase text-[#2b2b2b] inline-block px-8 py-4 theme-button">
    {text}
  </button>
)