import { Input } from '@/components/katzen/ui/input'
import { Label } from '@/components/katzen/ui/label'

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}
