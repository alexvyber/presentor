import { Label } from '@/components/katzen/ui/label'
import { Textarea } from '@/components/katzen/ui/textarea'

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  )
}
