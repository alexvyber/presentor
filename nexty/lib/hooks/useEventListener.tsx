// @ts-nocheck
import { useEffect, useRef } from 'react'

type Handler = ({ keyCode, altKey }: { keyCode: number; altKey: boolean }) => false | void

export default function useEventListener(eventName: 'keydown', handler: Handler, element?: HTMLElement) {
  const windowEl = typeof window === 'undefined' ? undefined : window
  const eventEl = element ?? windowEl

  // Create a ref that stores handler
  const savedHandler = useRef()

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = eventEl && eventEl.addEventListener
      if (!isSupported) return

      // Create event listener that calls handler function stored in ref
      // @ts-ignore
      const eventListener = (event: any) => savedHandler.current(event)

      // Add event listener
      eventEl.addEventListener(eventName, eventListener)

      // Remove event listener on cleanup
      return () => {
        eventEl.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, eventEl] // Re-run if eventName or element changes
  )
}
