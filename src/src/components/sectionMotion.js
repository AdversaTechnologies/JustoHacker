/** Shared Framer Motion presets for landing sections */
export const viewportOnce = { once: true, margin: '-80px' }

export const fadeUpProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
}

export const staggerParent = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
  viewport: viewportOnce,
}

export const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
}
