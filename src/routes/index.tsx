import { Envelope } from '@/components/Envelope'
import { createFileRoute } from '@tanstack/react-router'




export const Route = createFileRoute('/')({
  component: RouteComponent,
  ssr: false,
})

function RouteComponent() {
  return (
    <div
      className="flex h-dvh flex-col items-center justify-center overflow-hidden bg-grey-olive"
      style={{
        backgroundImage: 'url(/assets/bg-knit.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <div className="relative my-auto">
        <Envelope className="rotate-6" />
      </div>
    </div>
  )
}
