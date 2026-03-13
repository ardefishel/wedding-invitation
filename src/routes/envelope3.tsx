import { Envelope } from '@/components/NewEvelope'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'

// import bgLetter from '../../public/assets/bg-letter-main.png'

export const Route = createFileRoute('/envelope3')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='bg-grey-olive flex flex-1 min-h-dvh w-full justify-center items-center relative'>
      <Envelope />
    </div>
  )
}


// closed: body 10 , flap 100, inner 1
// open: body 100, flap 1, inner 10
// {/* 2xl = 24px */}
// {/* 4xl = 36px */}
