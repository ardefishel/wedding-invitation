import { Envelope } from '@/components/Envelope'
import { createFileRoute } from '@tanstack/react-router'




export const Route = createFileRoute('/')({
    component: RouteComponent,
    ssr: false
})

function RouteComponent() {

    return (
        <div className="h-dvh bg-grey-olive flex flex-col justify-center overflow-hidden items-center">
            <div className='relative bg-red-200 my-auto '>
                <Envelope />
            </div>
        </div>
    )
}
