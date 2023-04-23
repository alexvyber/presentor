import { motion } from 'framer-motion'

export const SlideWrapper = ({ children }: any) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    animate="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}>
    {children}
  </motion.div>
)
