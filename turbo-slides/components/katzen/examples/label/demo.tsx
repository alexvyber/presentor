import { Checkbox } from '@/components/katzen/ui/checkbox'
import { Label } from '@/components/katzen/ui/label'

export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}
