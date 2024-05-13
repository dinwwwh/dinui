'use client'

import Button from '@dinui/react/button'
import Form, { useForm } from '@dinui/react/form'
import Select from '@dinui/react/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
})

export default function SelectForm() {
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
        name="email"
        render={({ field }) => (
          <Form.Item>
            <Form.Label>Email</Form.Label>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <Form.Control>
                <Select.Trigger>
                  <Select.Value placeholder="Select a verified email to display" />
                </Select.Trigger>
              </Form.Control>
              <Select.Content>
                <Select.Content.Item value="m@example.com">m@example.com</Select.Content.Item>
                <Select.Content.Item value="m@google.com">m@google.com</Select.Content.Item>
                <Select.Content.Item value="m@support.com">m@support.com</Select.Content.Item>
              </Select.Content>
            </Select>
            <Form.Description>
              You can manage email addresses in your <a href="#">email settings</a>.
            </Form.Description>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  )
}
