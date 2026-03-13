import { Envelope } from '@/components/Envelope'
import { createFileRoute } from '@tanstack/react-router'

export const ssr = false;

export const Route = createFileRoute('/')({
    component: RouteComponent,
    ssr: false
})

function RouteComponent() {
    return (
        <div className="h-dvh bg-grey-olive overflow-hidden">
            <div className='max-w-sm md:max-w-md mx-auto px-4 md:px-0 relative rotate-6'>
                <Envelope />
            </div>
        </div>
    )
}
