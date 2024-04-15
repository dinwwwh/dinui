import { Card, CardContent } from '@dinui/react/card'
import { Label } from '@dinui/react/label'
import DatePickerWithRange from '@web/examples/ui/date-picker-with-range'

export function DemoDatePicker() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="shrink-0">
            Pick a date
          </Label>
          <DatePickerWithRange className="[&>button]:w-[260px]" />
        </div>
      </CardContent>
    </Card>
  )
}
