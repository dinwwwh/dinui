import Checkbox from '@dinui/react/checkbox'
import Label from '@dinui/react/label'

export default function LabelDisabledDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms-disabled" disabled className="peer" />
        <Label htmlFor="terms-disabled">Accept terms and conditions</Label>
      </div>
    </div>
  )
}
