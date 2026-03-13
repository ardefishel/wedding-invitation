import { Envelope } from '@/components/Envelope'
import Spinner from '@/components/Spinner'
import usePreloadImage from '@/hooks/usePreloadImage'
import { createFileRoute } from '@tanstack/react-router'




export const Route = createFileRoute('/')({
    component: RouteComponent,
    ssr: false
})

function RouteComponent() {
    const { isImageLoaded } = usePreloadImage()

    return (
        <div className="h-dvh bg-grey-olive overflow-hidden">
            {!isImageLoaded ? <Spinner /> :
                (
                    <div className='max-w-sm md:max-w-md mx-auto px-4 md:px-0 relative rotate-6'>
                        <Envelope />
                    </div>
                )
            }
        </div>
    )
}
