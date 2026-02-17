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
    <div className="h-svh bg-grey-olive overflow-hidden">
      <div className="max-w-xl bg-knit h-full mx-auto flex relative justify-center items-center">
        <div className="invite-scale flex flex-col justify-center items-center">
          <TheWeddingEnvelope />
          <TheWeddingTitle />
        </div>
      </div>
    </div>
  );
}

const TheWeddingEnvelope = () => {
  return (
    <div className="items-center w-[70%] mt-8 rotate-6 flex flex-col relative h-[50%] max-h-[340px] ">
      <div className="bg-letter w-full h-100 bottom-0 z-0">
        <div className="flex flex-col -rotate-2 mx-auto mt-8 w-fit">
          <div className="mx-auto">
            <h3 className="font-parisienne text-2xl text-center">Dear</h3>
            <h2 className="uppercase text-4xl">Guest <br /> Name</h2>
          </div>
          <span className="uppercase text-lg">You are invited to ... </span>
        </div>
      </div>
      <div className="absolute bottom-0 w-fit z-10">
        <img src="/assets/ornament-flower.webp" className="absolute right-2 rotate-2 -top-18 m-auto -z-1 w-[30%] object-contain" />
        <img src="/assets/envelope-stamp.webp" className="absolute m-auto inset-0 z-10 -translate-y-3 size-12" />
        <img src="/assets/envelope-body.webp" className="z-100 " alt="" />
      </div>
    </div>
  )
}

const TheWeddingTitle = () => (
  <div className="bg-letter w-[80%] relative px-4 py-12 mx-auto text-center -rotate-6 text-fuchsia-plum">
    <img src="/assets/ornament-necklace.png" className="absolute w-72  z-100 -top-26 -right-32 object-cover" />

    <h3 className="font-noto-serif uppercase text-xs">The Wedding of</h3>
    <div className="font-parisienne text-3xl flex justify-center items-center mb-8">
      <span className="flex-1">Thalita</span>
      <img src="/assets/purple-doves.png" className="w-1/4 -mx-10 object-contain translate-y-2" />
      <span className="flex-1">Rama</span>
    </div>

    <ThemeButton text="Open Invitation" />
  </div>
)

const ThemeButton = ({ text }: { text: string }) => (
  <button
    className="uppercase text-[#2b2b2b] inline-block px-8 text-sm py-2 theme-button">
    {text}
  </button>
)
