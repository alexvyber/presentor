'use client'

import { Button } from '@/components/katzen/ui/button'
import { useToast } from '@/components/katzen/ui/use-toast'

export function ToastWithTitle() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
        })
      }}>
      Show Toast
    </Button>
  )
}
