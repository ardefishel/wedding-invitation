import { createFileRoute } from '@tanstack/react-router'
import { delay, LayoutGroup, motion, useMotionValue, Variants } from 'motion/react'
import { useState } from 'react';

export const Route = createFileRoute('/trash/envelope2')({
    component: RouteComponent,
})

function RouteComponent() {
    const [variant, setVariant] = useState<'envelope-open' | 'envelope-close'>('envelope-close')

    const zIndexTop = useMotionValue(100)

    const topVariant: Variants = {
        'envelope-close': {
            rotateX: 0, transition: {
                duration: 1,
                delay: 0.4
            },
        },
        'envelope-open': {
            rotateX: 180, transition: {
                duration: 1,
            }
        }
    }
    const innerVariant: Variants = {
        'envelope-close': {
            y: 0,
            transition: {
                duration: 1
            }
        },
        'envelope-open': {
            y: -200,
            transition: {
                duration: 1,
                delay: 0.4
            }
        }
    }

    return (
        <div className='flex-1 flex w-full h-dvh items-center justify-center bg-grey-olive'>
            <LayoutGroup id='envelope'  >
                {/* wrapper */}
                <motion.div className='w-120 relative cursor-pointer' onClick={() => setVariant(variant === 'envelope-close' ? 'envelope-open' : 'envelope-close')}>
                    {/* envelope top */}
                    <motion.div
                        layoutId='envelope'
                        animate={variant}
                        variants={topVariant}
                        style={{ zIndex: zIndexTop }}
                        onAnimationStart={(definition) => {
                            delay(() => {
                                if (definition === 'envelope-open') zIndexTop.set(1)
                                if (definition === 'envelope-close') zIndexTop.set(100)
                            }, 500)
                        }}
                        // onAnimationComplete={(definition) => {
                        //     
                        // }}
                        className='relative w-full transform-3d origin-top perspective-midrange'>
                        <img className='absolute inset-0 z-10 backface-hidden' src="assets/envelope-top.svg" />
                        <img className='absolute inset-0 rotate-z-180 rotate-x-180 z-1 backface-hidden' src="assets/envelope-top-back.svg" />
                    </motion.div>

                    {/* envelope body */}
                    <motion.div className='absolute inset-0 z-10'>
                        <img src="assets/envelope-body.webp" />

                    </motion.div>

                    {/* envelope inner */}
                    <motion.div className='bg-blue-300 relative w-full z-1'>
                        <motion.div variants={innerVariant} animate={variant} className='w-11/12 mx-auto mt-12 bg-white aspect-square flex justify-center items-center'>
                            Letter
                        </motion.div>

                    </motion.div>
                </motion.div>
            </LayoutGroup>

        </div >
    )
}
