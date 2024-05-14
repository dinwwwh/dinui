'use client'

import Button from '@dinui/react/button'
import Form, { useForm } from '@dinui/react/form'
import Input from '@dinui/react/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`You submitted the following values: ${JSON.stringify(data, null, 2)}`)
  }

  return (
    <Form form={form} onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <Form.Field
        control={form.control}
        name="username"
        render={({ field }) => (
          <Form.Item>
            <Form.Label>Username</Form.Label>
            <Form.Control>
              <Input placeholder="dinwwwh" {...field} />
            </Form.Control>
            <Form.Description>This is your public display name.</Form.Description>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />

      <Button type="submit">Submit</Button>
    </Form>
  )
}
