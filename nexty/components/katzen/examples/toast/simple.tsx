'use client'

import { Button } from '@/components/katzen/ui/button'
import { useToast } from '@/components/katzen/ui/use-toast'

export function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: 'Your message has been sent.',
        })
      }}>
      Show Toast
    </Button>
  )
}
