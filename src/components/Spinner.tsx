export default function Spinner() {
  return (
    <div className="bg-grey-olive flex min-h-dvh items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4 text-center text-white">
        <div
          className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          aria-hidden="true"
        >
          <span className="sr-only">Loading invitation</span>
        </div>
        <p
          aria-live="polite"
          className="text-xs tracking-[0.35em] text-white/80 uppercase"
        >
          Preparing invitation
        </p>
      </div>
    </div>
  );
}
