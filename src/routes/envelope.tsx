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
        <div className='w-140 relative cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            {/* envelope top part */}
            <motion.div style={{ perspective: '800px', transformStyle: 'preserve-3d', position: 'relative', zIndex: 10 }}
                animate={{
                    rotateX: isOpen ? 180 : 0,
                    transformOrigin: 'top',
                }}
                transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                    delay: isOpen ? 0 : 0.6
                }}
            >
                <img src="/assets/envelope-top.svg" className='absolute inset-0 backface-hidden z-10' />
                <img src="/assets/envelope-top-back.svg" className='absolute inset-0 backface-hidden rotate-x-180 rotate-z-180 z-9' />
            </motion.div>
            {/* envelope inner */}
            <motion.div className='size-24 absolute  w-full inset-0 z-1' animate={{
                y: isOpen ? -180 : 0,
                zIndex: isOpen ? 1 : 11
            }} transition={{ delay: isOpen ? 0.6 : 0 }}>
                <div className='w-[90%] mx-auto h-100 bg-white'>

                </div>

            </motion.div>
            {/* envelope bottom part */}
            <div className='z-5 absolute inset-0'>
                <img src="/assets/envelope-body.webp" className='absolute inset-0 backface-hidden z-10' />
            </div>

        </div>
    </ScreenContainer>
}
