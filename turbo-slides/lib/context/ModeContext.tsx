import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PRESENTATION_MODES } from '@/lib/constants'

type ModaContextType = {
  mode: string
  setMode: Dispatch<SetStateAction<string>>
}

export const ModeContext = createContext<ModaContextType>({} as ModaContextType)

export function ModeProvider({ children }: React.PropsWithChildren) {
  const [mode, setMode] = useState(PRESENTATION_MODES.SLIDESHOW)
  const router = useRouter()
  const newMode = router.query.mode

  useEffect(() => {
    if (typeof newMode === 'string') setMode(newMode)
  }, [newMode])

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>
}

export const useMode = () => useContext(ModeContext)
