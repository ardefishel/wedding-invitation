import { createFileRoute } from '@tanstack/react-router'
import { animate } from 'motion'
import {
    MotionConfig,
    motion,
    useMotionValue,
    useReducedMotion,
    useTransform,
    type Variants,
} from 'motion/react'
import { useEffect, useState, type ReactNode } from 'react'

export const Route = createFileRoute('/envelope')({
    component: EnvelopeRouteComponent,
})

export type EnvelopeVariant = 'envelope-open' | 'envelope-close'

export const ENVELOPE_MOTION_CONFIG = {
    flapDuration: 0.9,
    flapEase: 'easeInOut',
    flapAngle: -180,
    perspective: 1200,
    zSwapAt: 0.72,
    letterStartAt: 0.8,
    letterLift: '-24%',
    letterDuration: 0.34,
    closeLetterDuration: 0.26,
    closeFlapDelay: 0.3,
} as const

const ENVELOPE_LAYERS = {
    flapClosed: 30,
    body: 20,
    flapOpen: 15,
    letterClosed: 10,
    letterOpen: 30,
} as const

const ENVELOPE_BODY_RATIO = '800 / 563'
const ENVELOPE_FLAP_RATIO = '800 / 297'
const CLOSED_LETTER_Y = '38%'
const REDUCED_MOTION_DURATION = 0.18
const LETTER_OPEN_DELAY = ENVELOPE_MOTION_CONFIG.flapDuration * ENVELOPE_MOTION_CONFIG.letterStartAt
const LETTER_OPEN_TIMELINE = LETTER_OPEN_DELAY + ENVELOPE_MOTION_CONFIG.letterDuration
const LETTER_OPEN_TIMES = [0, LETTER_OPEN_DELAY / LETTER_OPEN_TIMELINE, 1]
const LETTER_CLOSE_TIMES = [0, 0.85, 1]

const BODY_VARIANTS: Variants = {
    'envelope-open': { opacity: 1, zIndex: ENVELOPE_LAYERS.body },
    'envelope-close': { opacity: 1, zIndex: ENVELOPE_LAYERS.body },
}

const LETTER_SHADOW = '0 28px 60px rgba(113, 85, 80, 0.18)'

function getFlapVariants(shouldReduceMotion: boolean): Variants {
    if (shouldReduceMotion) {
        return {
            'envelope-open': {
                rotateX: 0,
                transition: { duration: 0 },
            },
            'envelope-close': {
                rotateX: 0,
                transition: { duration: 0 },
            },
        }
    }

    return {
        'envelope-open': {
            rotateX: ENVELOPE_MOTION_CONFIG.flapAngle,
            transition: {
                duration: ENVELOPE_MOTION_CONFIG.flapDuration,
                ease: ENVELOPE_MOTION_CONFIG.flapEase,
            },
        },
        'envelope-close': {
            rotateX: 0,
            transition: {
                duration: ENVELOPE_MOTION_CONFIG.flapDuration,
                delay: ENVELOPE_MOTION_CONFIG.closeFlapDelay,
                ease: ENVELOPE_MOTION_CONFIG.flapEase,
            },
        },
    }
}

function getFrontFaceVariants(shouldReduceMotion: boolean): Variants {
    if (shouldReduceMotion) {
        return {
            'envelope-open': {
                opacity: 0,
                transition: { duration: REDUCED_MOTION_DURATION / 2, ease: 'easeOut' },
            },
            'envelope-close': {
                opacity: 1,
                transition: { duration: REDUCED_MOTION_DURATION / 2, ease: 'easeInOut' },
            },
        }
    }

    return {
        'envelope-open': { opacity: 1 },
        'envelope-close': { opacity: 1 },
    }
}

function getBackFaceVariants(shouldReduceMotion: boolean): Variants {
    if (shouldReduceMotion) {
        return {
            'envelope-open': {
                opacity: 1,
                transition: { duration: REDUCED_MOTION_DURATION / 2, ease: 'easeOut' },
            },
            'envelope-close': {
                opacity: 0,
                transition: { duration: REDUCED_MOTION_DURATION / 2, ease: 'easeInOut' },
            },
        }
    }

    return {
        'envelope-open': { opacity: 1 },
        'envelope-close': { opacity: 1 },
    }
}

function getLetterVariants(shouldReduceMotion: boolean): Variants {
    if (shouldReduceMotion) {
        return {
            'envelope-open': {
                y: ENVELOPE_MOTION_CONFIG.letterLift,
                opacity: 1,
                transition: {
                    duration: REDUCED_MOTION_DURATION,
                    ease: 'easeOut',
                },
            },
            'envelope-close': {
                y: CLOSED_LETTER_Y,
                opacity: 0.92,
                transition: {
                    duration: REDUCED_MOTION_DURATION,
                    ease: 'easeInOut',
                },
            },
        }
    }

    return {
        'envelope-open': {
            y: [CLOSED_LETTER_Y, CLOSED_LETTER_Y, ENVELOPE_MOTION_CONFIG.letterLift],
            opacity: [0.95, 0.95, 1],
            transition: {
                duration: LETTER_OPEN_TIMELINE,
                times: LETTER_OPEN_TIMES,
                ease: ['linear', 'easeOut', 'easeOut'],
            },
        },
        'envelope-close': {
            y: [ENVELOPE_MOTION_CONFIG.letterLift, '10%', CLOSED_LETTER_Y],
            opacity: [1, 0.98, 0.94],
            transition: {
                duration: ENVELOPE_MOTION_CONFIG.closeLetterDuration,
                times: LETTER_CLOSE_TIMES,
                ease: ['easeIn', 'easeIn', 'easeInOut'],
            },
        },
    }
}

function ScreenContainer({ children }: { children: ReactNode }) {
    return (
        <div className="bg-grey-olive flex min-h-dvh w-full items-center justify-center overflow-hidden px-6 py-10">
            {children}
        </div>
    )
}

export function EnvelopeRouteComponent() {
    const [envelopeState, setEnvelopeState] = useState<EnvelopeVariant>('envelope-close')
    const shouldReduceMotion = useReducedMotion() ?? false
    const flapProgress = useMotionValue(envelopeState === 'envelope-open' ? 1 : 0)

    const flapZIndex = useTransform(flapProgress, (latest) =>
        latest >= ENVELOPE_MOTION_CONFIG.zSwapAt ? ENVELOPE_LAYERS.flapOpen : ENVELOPE_LAYERS.flapClosed
    )
    const letterZIndex = useTransform(flapProgress, (latest) =>
        latest >= ENVELOPE_MOTION_CONFIG.zSwapAt ? ENVELOPE_LAYERS.letterOpen : ENVELOPE_LAYERS.letterClosed
    )

    useEffect(() => {
        const target = envelopeState === 'envelope-open' ? 1 : 0

        // Keep the stacking order handoff aligned with the flap motion.
        if (shouldReduceMotion) {
            flapProgress.set(target)
            return
        }

        const controls = animate(flapProgress, target, {
            duration: ENVELOPE_MOTION_CONFIG.flapDuration,
            delay: envelopeState === 'envelope-close' ? ENVELOPE_MOTION_CONFIG.closeFlapDelay : 0,
            ease: ENVELOPE_MOTION_CONFIG.flapEase,
        })

        return () => controls.stop()
    }, [envelopeState, flapProgress, shouldReduceMotion])

    const flapVariants = getFlapVariants(shouldReduceMotion)
    const frontFaceVariants = getFrontFaceVariants(shouldReduceMotion)
    const backFaceVariants = getBackFaceVariants(shouldReduceMotion)
    const letterVariants = getLetterVariants(shouldReduceMotion)
    const isOpen = envelopeState === 'envelope-open'

    return (
        <MotionConfig reducedMotion="user">
            <ScreenContainer>
                <button
                    type="button"
                    className="group block w-[min(35rem,90vw)] appearance-none border-0 bg-transparent p-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff3ec]"
                    onClick={() =>
                        setEnvelopeState((currentState) =>
                            currentState === 'envelope-open' ? 'envelope-close' : 'envelope-open'
                        )
                    }
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Close invitation envelope' : 'Open invitation envelope'}
                    data-envelope-state={envelopeState}
                    data-reduced-motion={shouldReduceMotion ? 'true' : 'false'}
                    data-testid="envelope-toggle"
                >
                    <div className="relative w-full" style={{ aspectRatio: ENVELOPE_BODY_RATIO }}>
                        <motion.div
                            className="absolute left-[5%] bottom-[7%] w-[90%]"
                            style={{
                                height: '84%',
                                zIndex: letterZIndex,
                                willChange: 'transform',
                            }}
                            initial={false}
                            animate={envelopeState}
                            variants={letterVariants}
                            data-testid="envelope-letter"
                        >
                            <div
                                className="flex h-full flex-col justify-between rounded-[2rem_2rem_1.25rem_1.25rem] border border-[#ead6cf] px-6 py-7 text-[#765a53]"
                                style={{
                                    background:
                                        'linear-gradient(180deg, #fffdf8 0%, #fff7f1 100%), repeating-linear-gradient(180deg, rgba(221, 182, 171, 0.18) 0, rgba(221, 182, 171, 0.18) 1px, transparent 1px, transparent 2.6rem)',
                                    boxShadow: LETTER_SHADOW,
                                }}
                            >
                                <div className="space-y-2">
                                    <p className="font-parisienne text-4xl text-[#b06f8c]">Invitation</p>
                                    <p className="max-w-[20ch] text-sm uppercase tracking-[0.35em] text-[#94756d]">
                                        Save the date
                                    </p>
                                </div>
                                <div className="space-y-3 text-center">
                                    <p className="font-noto-serif text-3xl text-[#7e5b58]">Aref &amp; Dita</p>
                                    <div className="mx-auto h-px w-24 bg-[#dfc1b8]" />
                                    <p className="text-sm uppercase tracking-[0.45em] text-[#9d8079]">Coming soon</p>
                                </div>
                                <div className="space-y-2 text-xs uppercase tracking-[0.3em] text-[#a08680]">
                                    <div className="h-px w-full bg-[#ead6cf]" />
                                    <p>Tap the envelope to preview the motion</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute inset-0"
                            style={{ zIndex: ENVELOPE_LAYERS.body }}
                            initial={false}
                            animate={envelopeState}
                            variants={BODY_VARIANTS}
                        >
                            <img
                                src="/assets/envelope-body.webp"
                                alt=""
                                aria-hidden="true"
                                draggable={false}
                                className="block h-full w-full select-none"
                            />
                        </motion.div>

                        <motion.div
                            className="absolute left-0 top-0 w-full"
                            style={{
                                aspectRatio: ENVELOPE_FLAP_RATIO,
                                perspective: ENVELOPE_MOTION_CONFIG.perspective,
                                transformStyle: 'preserve-3d',
                                transformOrigin: 'top center',
                                zIndex: flapZIndex,
                                willChange: 'transform',
                            }}
                            initial={false}
                            animate={envelopeState}
                            variants={flapVariants}
                            data-testid="envelope-flap"
                        >
                            <motion.img
                                src="/assets/envelope-top.svg"
                                alt=""
                                aria-hidden="true"
                                draggable={false}
                                className="absolute inset-0 h-full w-full select-none"
                                style={{ backfaceVisibility: 'hidden' }}
                                initial={false}
                                animate={envelopeState}
                                variants={frontFaceVariants}
                            />
                            <motion.img
                                src="/assets/envelope-top-back.svg"
                                alt=""
                                aria-hidden="true"
                                draggable={false}
                                className="absolute inset-0 h-full w-full select-none"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateX(180deg) rotateZ(180deg)',
                                }}
                                initial={false}
                                animate={envelopeState}
                                variants={backFaceVariants}
                            />
                        </motion.div>
                    </div>
                </button>
            </ScreenContainer>
        </MotionConfig>
    )
}
