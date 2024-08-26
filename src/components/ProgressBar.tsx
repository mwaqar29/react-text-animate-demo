import { motion, useScroll } from 'framer-motion'

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  )
}
