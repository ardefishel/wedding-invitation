import { delay, motion, useMotionValue } from "motion/react"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

export function Envelope() {
    const imageRef = useRef<HTMLImageElement>(null)
    const [padding, setPadding] = useState<number>(0)
    const [imgLoaded, setImgLoaded] = useState(false)

    const measurePadding = () => {
        if (imageRef.current) {
            const computedPadding = imageRef.current.clientHeight // adjust factor
            setPadding(computedPadding)
        }
    }

    useLayoutEffect(() => {
        if (imgLoaded) {
            measurePadding()
        }
    }, [imgLoaded])

    return (
        <div style={{ paddingTop: padding }}>
            <div className='relative flex-col bg-gray-50 justify-end items-end'>
                <EnvelopeFlap setImgLoaded={setImgLoaded} measurePadding={measurePadding} imageRef={imageRef} />
                <EnvelopeBody />
                <EnvelopeInner />
            </div>
        </div>
    )
}
function EnvelopeFlap({ imageRef, setImgLoaded, measurePadding }: { imageRef: React.RefObject<HTMLImageElement | null>, setImgLoaded: React.Dispatch<React.SetStateAction<boolean>>, measurePadding: () => void }) {
    const zIndex = useMotionValue(100)
    return (
        <motion.div
            animate={{
                rotateX: 180
            }}
            transition={{
                duration: 2
            }}
            onAnimationStart={() => {
                delay(() => zIndex.set(1), 800)
            }}
            className='relative perspective-midrange origin-top transform-3d' style={{ zIndex }}>
            <img onLoad={() => {
                setImgLoaded(true)
                measurePadding()
            }} ref={imageRef} className='absolute inset-0 backface-hidden z-2' src='assets/envelope-top.svg' />
            <img className='absolute inset-0 rotate-z-180 rotate-x-180 backface-hidden z-1' src='assets/envelope-top-back.svg' />
        </motion.div>
    )
}

function EnvelopeBody() {
    return (
        <div className='relative z-100' style={{ containerType: 'inline-size' }}>
            <img className='content' src='assets/envelope-body.webp' />
            <div className='absolute w-[14cqi]  -translate-y-[4cqi] m-auto h-full inset-0 flex justify-center'>
                <img className='object-contain' src='assets/envelope-stamp.webp' />
            </div>
        </div>
    )
}

function EnvelopeInner() {
    return (
        <motion.div className='absolute inset-0 w-full z-50'>
            <motion.div animate={{ y: -120, opacity: 1 }} transition={{ delay: 0.5, duration: 1, ease: 'easeIn' }} className=' w-full bg-no-repeat' style={{
                backgroundImage: 'url(assets/bg-letter-main.png)',
                backgroundPositionX: 4,
                backgroundSize: '100% auto',
                containerType: 'inline-size',
                aspectRatio: '800 / 485'
            }}>
                <div className="flex flex-col -rotate-2 mx-auto mt-8">
                    <div className="w-full text-center leading-tight" style={{ containerType: 'inline-size' }}>
                        <h3 className="font-parisienne text-[6cqi]" >Dear</h3>
                        <h2 className="uppercase text-[8cqi]">Guest <br /> Name</h2>
                    </div>
                    <span className="uppercase text-center ">You are invited to ... </span>
                </div>
                <img className='absolute right-[6cqi] bottom-0 top-[8cqi] rotate-4 my-auto w-[24cqi]' src='/assets/ornament-flower.webp' />
            </motion.div>
        </motion.div>
    )
}