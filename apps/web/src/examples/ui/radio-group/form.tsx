'use client'

import Button from '@dinui/react/button'
import Form, { useForm } from '@dinui/react/form'
import RadioGroup from '@dinui/react/radio-group'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const FormSchema = z.object({
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
})

export default function RadioGroupForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`You submitted the following values: ${JSON.stringify(data, null, 2)}`)
  }

  return (
    <Form form={form} onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <Form.Field
        control={form.control}
        name="type"
        render={({ field }) => (
          <Form.Item className="gap-3">
            <Form.Label>Notify me about...</Form.Label>
            <Form.Control>
              <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                <Form.Item className="flex-row gap-3">
                  <Form.Control>
                    <RadioGroup.Item value="all" />
                  </Form.Control>
                  <Form.Label className="font-normal">All new messages</Form.Label>
                </Form.Item>
                <Form.Item className="flex-row gap-3">
                  <Form.Control>
                    <RadioGroup.Item value="mentions" />
                  </Form.Control>
                  <Form.Label className="font-normal">Direct messages and mentions</Form.Label>
                </Form.Item>
                <Form.Item className="flex-row gap-3">
                  <Form.Control>
                    <RadioGroup.Item value="none" />
                  </Form.Control>
                  <Form.Label className="font-normal">Nothing</Form.Label>
                </Form.Item>
              </RadioGroup>
            </Form.Control>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />

      <Button type="submit">Submit</Button>
    </Form>
  )
}
