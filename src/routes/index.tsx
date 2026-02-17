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
    <div className="min-h-[100svh] bg-[rgb(145,137,116)] flex flex-col justify-center overflow-hidden">
      <TheWeddingTitle />
      <ThemeButton text="Open Invitation" />
    </div>
  );
}
const TheWeddingTitle = () => (
  <div className="bg-white mx-auto min-w-md text-center text-[#bc6890]">
    <h3 className="font-noto-serif uppercase text-3xl">The Wedding of</h3>
    <div className="font-parisienne text-[85px] flex justify-center items-center gap-42 relative ">
      <span>Thalita</span>
      <img src="/assets/purple-doves.png" className=" size-[240px] object-contain absolute inset-0 m-auto translate-y-8 translate-x-2" />
      <span>Rama</span>
    </div>
  </div>
)

const ThemeButton = ({ text }: { text: string }) => (
  <button
    className="uppercase text-[#2b2b2b] inline-block px-8 py-4 theme-button">
    {text}
  </button>
)