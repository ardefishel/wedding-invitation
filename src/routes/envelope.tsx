import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useState } from 'react'

export const Route = createFileRoute('/envelope')({
    component: RouteComponent,
})

function ScreenContainer({ children }: { children: React.ReactNode }) {
    return <div className='bg-grey-olive h-screen w-screen flex items-center justify-center'>
        {children}
    </div>
}

function RouteComponent() {
    const [isOpen, setIsOpen] = useState(false)

    return <ScreenContainer>
        {/* envelope wrapper */}
        <div className='w-140 relative rotate-6 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            {/* envelope top — perspective container */}
            <div className='absolute inset-0 z-10' style={{ perspective: '800px' }}>
                {/* flap wrapper — this rotates as one unit */}
                <motion.div
                    className='relative'
                    style={{ transformStyle: 'preserve-3d', transformOrigin: 'top center' }}
                    animate={{ rotateX: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    {/* front face */}
                    <img
                        className='w-full block'
                        src="/assets/envelope-top.svg"
                        style={{ backfaceVisibility: 'hidden' }}
                    />
                    {/* back face — pre-rotated so it shows when wrapper flips */}
                    <img
                        className='absolute inset-0 w-full scale-y-[-1]'
                        src="/assets/envelope-top-back.svg"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}
                    />
                </motion.div>
            </div>

            {/* envelope body */}
            <div className='relative'>
                <img src="/assets/envelope-body.webp" className='bg-white' />
                <img src="/assets/envelope-stamp.webp" className="absolute m-auto inset-0 z-10 -translate-y-3 size-12" />
            </div>
        </div>
    </ScreenContainer>
}
