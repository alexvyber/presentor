import { FADE_DOWN_ANIMATION_VARIANTS, FADE_UP_LG_ANIMATION_VARIANTS } from '@/lib/design'

import { motion } from 'framer-motion'
import {
  // Stripes,
  StripesProps,
} from '../Stripes'
import { Container } from '../Container'
import { Button } from '../katzen/ui/button'

const stripesClasses = {
  'bg-orange-100': {
    gridRow: '5',
    gridColumn: 'viewport-start/span 3',
  },
  'ring ring-orange-200 dark:ring-orange-700': {
    gridRow: '-9',
    gridColumn: 'span 10/0',
  },
  'bg-orange-800': {
    gridRow: '-7',
    gridColumn: 'span 5/8',
  },
  'ring ring-orange-500 dark:ring-orange-900': {
    gridRow: '-6',
    gridColumn: 'viewport-start/span 10',
  },
  'bg-orange-700 dark:bg-orange-500': {
    gridRow: '-5',
    gridColumn: 'span 7/9',
  },
  'bg-orange-300 dark:bg-orange-400': {
    gridRow: '-5',
    gridColumn: 'span 5/7',
  },
  'bg-orange-500 dark:bg-orange-900': {
    gridRow: '-10',
    gridColumn: 'span 4 / viewport-end',
  },
  'bg-orange-800 dark:bg-orange-800': {
    gridRow: '-9',
    gridColumn: 'span 5 / viewport-end',
  },
  'bg-orange-500 dark:bg-orange-600': {
    gridRow: '-4',
    gridColumn: 'span 7 / viewport-end',
  },
  'bg-orange-100 dark:bg-orange-700': {
    gridRow: '-3',
    gridColumn: 'span 5/-4',
  },
  'ring ring-orange-500': {
    gridRow: '-2',
    gridColumn: 'span 5 / viewport-end',
  },
  'bg-orange-300 dark:bg-orange-500': {
    gridRow: '7',
    gridColumn: 'span 3/5',
  },
} satisfies StripesProps['stripesClasses']

export const Introduction = () => {
  return (
    <>
      {/* <Stripes className={''} stripesClasses={stripesClasses} backgroundColor="bg-orange-50" /> */}
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
