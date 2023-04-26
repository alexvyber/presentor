import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_LG_ANIMATION_VARIANTS } from '@/lib/design'

import { motion } from 'framer-motion'
import { Stripes } from '../Stripes'
import { Container } from '../Container'
import { Button } from '../katzen/ui/button'

const stripesClasses = [
  'ring ring-teal-200 dark:ring-teal-700',
  'bg-teal-800',
  'ring ring-teal-500 dark:ring-teal-900',
  'bg-teal-700 dark:bg-teal-500',
  'bg-teal-300 dark:bg-teal-400',
  'bg-teal-500 dark:bg-teal-900',
  'bg-teal-800 dark:bg-teal-800',
  'bg-teal-500 dark:bg-teal-600',
  'bg-teal-100 dark:bg-teal-700',
  'ring ring-teal-500',
  'bg-teal-300 dark:bg-teal-500',
]

export const Introduction = () => {
  return (
    <>
      <Stripes className={''} stripesClasses={stripesClasses} backgroundColor="bg-teal-50/50" />
      <Container>
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
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className={'classes'}>
            <div className="mt-20">
              <h3 className="font-bold font-raleway text-4xl sm:text-6xl leading-tight">Presentor</h3>
              <h3 className="font-medium font-raleway text-xl sm:text-3xl">Presentations for online era!</h3>
            </div>
            <div className="flex-1 flex flex-col flex-center justify-center">
              <motion.div className="mt-6 flex items-center gap-x-5 z-10" variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <Button className="text-xl rounded-xl">Some Button</Button>
                <Button variant="ghost" className="text-xl ">
                  Other Button
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute top-20 right-32">
            <motion.div variants={FADE_UP_LG_ANIMATION_VARIANTS}>{/* <div className="w-[225%] max-w-[225%] -rotate-12">asdf</div> */}</motion.div>
          </div>
        </motion.div>
      </Container>
    </>
  )
}

export default Introduction
