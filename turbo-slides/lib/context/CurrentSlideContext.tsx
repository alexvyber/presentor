import { createContext, useContext, useState } from 'react'

type ContextType = {
  currentSlide: number
  setSlide: React.Dispatch<React.SetStateAction<number>>
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  steps: number[]
  setSteps: React.Dispatch<React.SetStateAction<number[]>>
  addStep: (id: number) => void
  removeStep: (id: number) => void
  clearSteps: () => void
}

export const CurrentSlideContext = createContext({
  currentSlide: 0,
  setSlide: ((some) => {}) satisfies React.Dispatch<React.SetStateAction<number>>,
} as ContextType)

export function CurrentSlideProvider({ children }: React.PropsWithChildren) {
  // Grab initial slide from hash (#) in URL
  const initialSlide = process.browser && window.location.hash ? parseInt(window.location.hash.replace('#', '')) : 0
  const [currentSlide, setSlide] = useState(initialSlide)
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<number[]>([])

  const addStep = (id: number) => {
    setSteps((prevSteps) => [...new Set([...prevSteps, id])])
  }
  const removeStep = (id: number) => {
    setSteps((prevSteps) => [...prevSteps.filter((prevStep) => prevStep !== id)])
  }
  const clearSteps = () => {
    setSteps([])
    setCurrentStep(0)
  }

  console.log('rendering context', currentStep, steps)

  return (
    <CurrentSlideContext.Provider
      value={{
        currentSlide,
        setSlide,
        currentStep,
        setCurrentStep,
        steps,
        setSteps,
        addStep,
        removeStep,
        clearSteps,
      }}>
      {children}
    </CurrentSlideContext.Provider>
  )
}

export const useCurrentSlide = () => useContext(CurrentSlideContext)
