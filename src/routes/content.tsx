import { createFileRoute } from '@tanstack/react-router'
import { useNavigateWithTransition } from '../utils/transitions'

export const Route = createFileRoute('/content')({
  component: RouteComponent,
})

function RouteComponent() {
  const { navigate } = useNavigateWithTransition()

  return (
    <div className="h-svh bg-grey-olive overflow-hidden relative">
      <div className="max-w-xl bg-knit h-full mx-auto flex flex-col relative">
        <header className="p-4 flex items-center">
          <button
            onClick={() => navigate('/')}
            className="text-fuchsia-plum hover:text-fuchsia-plum/80 transition-colors"
          >
            ← Back to Invitation
          </button>
        </header>
        <main className="flex-1 flex flex-col justify-center items-center px-8 text-center">
          <h1 className="font-parisienne text-5xl text-fuchsia-plum mb-6">
            Wedding Content
          </h1>
          <p className="font-noto-serif text-fuchsia-plum/80 text-lg max-w-md">
            This is where your wedding details, schedule, venue information, and more will be displayed.
          </p>
        </main>
      </div>
    </div>
  )
}
