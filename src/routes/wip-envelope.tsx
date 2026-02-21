import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react'
import './wip-envelope.css'
export const Route = createFileRoute("/wip-envelope")({
    component: RouteComponent,
});

function RouteComponent() {
    // null = initial (no animation), 'open', 'close'
    const [animState, setAnimState] = useState<null | string>('close')

    const handleClick = () => {
        setAnimState(prev =>
            prev === 'open' ? 'close' : 'open'
        )
    }
    return (
        <div className='bg-grey-olive flex flex-col items-center justify-center h-screen'>
            <div onClick={handleClick}>
                <div className='items-center flex flex-col relative max-w-sm'>
                    <div className="envelope">
                        <div className={`envelope-top-wrapper ${animState ?? ''}`}>
                            <img src="/assets/envelope-top.svg" className={`envelope-top-front ${animState ?? ''}`} />
                            <img src="/assets/envelope-top-back.svg" className={`envelope-top-back ${animState ?? ''}`} />
                        </div>
                        <img src="/assets/envelope-body.webp" className="z-90 bg-[#f8f6f7]" />
                    </div>
                </div>
            </div>
        </div>
    )
}


