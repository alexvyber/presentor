import { Input } from '@/components/katzen/ui/input'
import { Label } from '@/components/katzen/ui/label'

export function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
