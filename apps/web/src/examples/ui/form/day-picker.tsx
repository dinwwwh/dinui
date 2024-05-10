'use client'

import Button from '@dinui/react/button'
import DayPicker from '@dinui/react/day-picker'
import Form from '@dinui/react/form'
import Popover from '@dinui/react/popover'
import { cn } from '@dinui/react/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
})

export default function DayPickerForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`You submitted the following values:  ${JSON.stringify(data, null, 2)}`)
  }

  return (
    <Form form={form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Form.Field
        control={form.control}
        name="dob"
        render={({ field }) => (
          <Form.Item className="flex flex-col">
            <Form.Label>Date of birth</Form.Label>
            <Popover>
              <Popover.Trigger asChild>
                <Form.Control>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-[240px] pl-3 text-left font-normal',
                      !field.value && 'text-fg-weaker',
                    )}
                  >
                    {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </Form.Control>
              </Popover.Trigger>
              <Popover.Content className="w-auto p-0" align="start">
                <DayPicker
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                  initialFocus
                />
              </Popover.Content>
            </Popover>
            <Form.Description>Your date of birth is used to calculate your age.</Form.Description>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />

      <Button type="submit">Submit</Button>
    </Form>
  )
}
