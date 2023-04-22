import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/design'
import classNames from 'clsx'
import { motion } from 'framer-motion'
import { Container } from '../Container'

// import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/design'

export const SignMessage = () => {
  return (
    <Container className="py-12">
      SignMessage
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
        <div className="">
          <div className="col-span-6 text-sm text-left flex flex-col justify-center">
            <div className="">
              <motion.div className="mx-auto mt-6 " variants={FADE_DOWN_ANIMATION_VARIANTS}>
                <motion.h1 className="slide-title" variants={FADE_DOWN_ANIMATION_VARIANTS}>
                  Sign Message
                </motion.h1>

                <p className="">
                  Vestibulum ac lacinia nulla, sit amet pulvinar enim. Duis pretium tortor et purus vulputate feugiat. Nunc in semper orci. Cras
                  commodo, elit at faucibus.
                </p>

                <p className="">
                  Donec sodales lobortis quam, accumsan dictum mauris cursus et. Proin sodales diam sed congue vulputate. Nam molestie fringilla
                  tristique.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  )
}

export default SignMessage
