import { PRESENTATION_MODES } from '@/lib/constants'

export default function PresentationMode({
  mode,
  notes,
  currentSlide,
  children,
}: React.PropsWithChildren & { mode: any; notes: any; currentSlide: any }) {
  if (mode === PRESENTATION_MODES.SPEAKER) {
    return (
      <div className="flex p-12 max-h-[100vh]">
        <div>{children}</div>
      </div>
    )
  }
  return children
}
