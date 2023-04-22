'use client'

import { Button } from '@/components/katzen/ui/button'
import { ToastAction } from '@/components/katzen/ui/toast'
import { useToast } from '@/components/katzen/ui/use-toast'

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Scheduled: Catch up ',
          description: 'Friday, February 10, 2023 at 5:57 PM',
          action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
        })
      }}>
      Add to calendar
    </Button>
  )
}
