import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Slide from '@/components/presentation/Slide'
import PresentationMode from '@/components/presentation/PresentationMode'
import Swipeable from '@/components/presentation/Swipeable'
import useEventListener from '@/hooks/useEventListener'
import { useTotalPages } from '@/context/TotalPagesContext'
import { useMode } from '@/lib/context/ModeContext'
import { useCurrentSlide } from '@/lib/context/CurrentSlideContext'
import { Storage } from '@/hooks/useStorage'
import { PRESENTATION_MODES } from '@/lib/constants'
import { Button } from '../katzen/ui/button'

export default function SlidePage({ children, next }) {
  const { currentSlide, setSlide, steps, currentStep, setCurrentStep, clearSteps } = useCurrentSlide()

  const router = useRouter()

  const totalPages = useTotalPages()

  const { mode, setMode } = useMode()

  const NEXT = [13, 32, 39]

  const PREV = 37

  const PRESENTER = 80
  let slideCount = 0

  const navigate = ({ keyCode, altKey }) => {
    // Handle Presentation Mode shortcut
    if (altKey) {
      if (keyCode === PRESENTER) {
        if (mode === PRESENTATION_MODES.SPEAKER) {
          setMode(PRESENTATION_MODES.SLIDESHOW)
          router.push(router.pathname, `${router.pathname}?mode=${PRESENTATION_MODES.SLIDESHOW}#${currentSlide}`, { shallow: true })
        } else {
          setMode(PRESENTATION_MODES.SPEAKER)
          router.push(router.pathname, `${router.pathname}?mode=${PRESENTATION_MODES.SPEAKER}#${currentSlide}`, { shallow: true })
        }
        return false
      }
    }

    // Handle Previous page
    if (keyCode === PREV && currentSlide === 0) {
      if (router.query && router.pathname) {
        if (router.pathname > 1) {
          router.push(`${parseInt(router.pathname, 10) - 1}?mode=${mode}#999`)
        }
      }
      return false
    }

    // Handle next page
    if (NEXT.indexOf(keyCode) !== -1 && currentSlide === slideCount) {
      if (router.query && router.pathname && next) {
        router.push(`${next}?mode=${mode}`)
      }
      return false
    }

    // Handle slide changes
    if (NEXT.indexOf(keyCode) !== -1) {
      // Do we have Steps inside the slide? Navigate those first
      if (steps.length > 0 && currentStep < steps.length - 1) return setCurrentStep((prevStep) => prevStep + 1)

      // Otherwise go to next slide
      document.documentElement.classList.remove(`slide-${currentSlide - 1}`)
      setSlide((prevState) => {
        document.documentElement.classList.add(`slide-${prevState + 1}`)
        document.documentElement.classList.remove(`slide-${prevState}`)
        return prevState + 1
      })
      clearSteps()
    } else if (keyCode === PREV) {
      // Do we have Steps inside the slide? Navigate those first
      if (steps.length > 0 && currentStep !== 0) return setCurrentStep((prevStep) => prevStep - 1)

      // Otherwise go to prev slide
      setSlide((prevState) => {
        document.documentElement.classList.remove(`slide-${prevState}`)
        document.documentElement.classList.add(`slide-${prevState - 1}`)
        return prevState - 1
      })
      clearSteps()
    }

    if (currentSlide === 0) {
      // document.documentElement.classList.add(`slide-0`)
      return false
    }
  }

  useEffect(() => {
    router.push(`${router.pathname}`).then(() => {
      router.push(`${router.pathname}?mode=${mode}#${currentSlide}`, `${router.pathname}?mode=${mode}#${currentSlide}`, { shallow: true })
    })
  }, [currentSlide, mode, router.pathname])

  useEventListener('keydown', navigate)

  const swipeLeft = () => {
    navigate({ keyCode: NEXT[0] })
  }

  const swipeRight = () => {
    navigate({ keyCode: PREV })
  }

  const slideNotes = () => {
    let generatorCount = 0
    let generatedNotes = []
    // Filter down children by only Slides
    React.Children.map(children, (child) => {
      // Check for <hr> element to separate slides
      const childType = child && child.props && (child.props.mdxType || [])
      if (childType && childType.includes('hr')) {
        generatorCount += 1
        return
      }
      // Check if it's a SpeakerNotes component
      if (childType && childType.includes('SpeakerNotes')) {
        if (!Array.isArray(generatedNotes[generatorCount])) {
          generatedNotes[generatorCount] = []
        }
        generatedNotes[generatorCount].push(child)
      }
    })

    return generatedNotes
  }

  const renderSlide = () => {
    let generatedSlides = []
    let generatorCount = 0

    // Filter down children by only Slides
    React.Children.map(children, (child) => {
      // Check for <hr> element to separate slides
      const childType = child && child.props && (child.props.mdxType || [])
      if (childType && childType.includes('hr')) {
        generatorCount += 1
        return
      }

      // Check if it's a SpeakerNotes component
      if (childType && !childType.includes('SpeakerNotes')) {
        // Add slide content to current generated slide
        if (!Array.isArray(generatedSlides[generatorCount])) {
          generatedSlides[generatorCount] = []
        }
        generatedSlides[generatorCount].push(child)
      }
    })

    // Get total slide count
    slideCount = generatorCount

    // Return current slide
    if (currentSlide === 999) {
      router.push(router.pathname, `${router.pathname}?mode=${mode}#${slideCount}`, { shallow: true })
      setSlide(slideCount)
    }
    return <Slide>{generatedSlides[currentSlide]}</Slide>
  }

  return (
    <Swipeable onSwipedLeft={swipeLeft} onSwipedRight={swipeRight}>
      <Storage />
      <PresentationMode mode={mode} notes={slideNotes()} currentSlide={currentSlide}>
        <div id="slide">{renderSlide()}</div>
      </PresentationMode>
      <div className="fixed w-full justify-center bottom-6 text-sm flex">
        <div className='flex gap-3 items-center'>
        <Button onClick={swipeRight}>Prev</Button>

<span className="opacity-50">|</span>

<Button onClick={swipeLeft}>Next</Button>
        </div>
      </div>
    </Swipeable>
  )
}
