---
name: react-motion-dev
description: Build and refactor React animations with Motion (motion/react). Use this skill whenever the user asks for UI animation, transitions, shared layout animation, scroll-linked effects, in-view reveals, gesture interactions, or replacing CSS/JS animation logic in React components.
---

# React Motion Dev

Use this skill to implement smooth, maintainable React animations with Motion.

## What to do first

1. Check if `motion` is installed. If not, add it with `npm install motion` (or the repo package manager).
2. Import from `motion/react`.
3. Prefer minimal, composable animation primitives over large one-off configs.

## Core implementation rules

- Use `motion.*` components for animated DOM/SVG elements.
- Use `initial`, `animate`, and `exit` for lifecycle state changes.
- Wrap conditionally removed nodes with `AnimatePresence` to enable exit animation.
- Use `variants` when multiple elements share state-driven animation.
- Use `layout` for layout transitions and `layoutId` for shared element transitions.
- Use `whileHover`, `whileTap`, `whileFocus`, and `drag` for gestures.
- Use `whileInView`/`useInView` for scroll-triggered reveals.
- Use `useScroll` + `useTransform` + `useSpring` for scroll-linked/parallax/progress behavior.

## Performance and accessibility

- Animate `transform` and `opacity` first; avoid layout-thrashing properties.
- Keep transition durations short and purposeful (typically 0.2 to 0.6 seconds for UI).
- Respect reduced motion with `useReducedMotion` and provide non-motion fallbacks.
- Use `LazyMotion` for bundle-sensitive apps.

## Default patterns

### 1) Basic enter animation

```tsx
import { motion } from "motion/react"

export function FadeInCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      Content
    </motion.div>
  )
}
```

### 2) Exit animation with AnimatePresence

```tsx
import { AnimatePresence, motion } from "motion/react"

export function TogglePanel({ open }: { open: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {open ? (
        <motion.section
          key="panel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        />
      ) : null}
    </AnimatePresence>
  )
}
```

### 3) Variant-driven list stagger

```tsx
import { motion } from "motion/react"

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
}

export function StaggerList({ items }: { items: string[] }) {
  return (
    <motion.ul variants={list} initial="hidden" animate="show">
      {items.map((label) => (
        <motion.li key={label} variants={item}>
          {label}
        </motion.li>
      ))}
    </motion.ul>
  )
}
```

### 4) Scroll-linked progress bar

```tsx
import { motion, useScroll, useSpring } from "motion/react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return <motion.div style={{ scaleX, transformOrigin: "0% 50%" }} />
}
```

### 5) Reduced motion handling

```tsx
import { motion, useReducedMotion } from "motion/react"

export function AccessibleReveal() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.3 }}
    />
  )
}
```

## Anti-patterns to avoid

- Do not animate every element; animate hierarchy and key interaction points.
- Do not overuse huge spring stiffness or long durations that make UI feel sluggish.
- Do not use manual timers when Motion state props can drive transitions.
- Do not rely on hover-only interaction for touch-first flows.
- Do not ignore reduced-motion preference.

## Output expectations when this skill is used

When implementing changes, always provide:

1. A brief animation strategy (what is animated and why).
2. Concrete code updates using `motion/react` APIs.
3. Notes on accessibility (`useReducedMotion`) and performance.
4. Any package/install step if dependency is missing.
