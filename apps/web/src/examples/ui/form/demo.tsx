'use client'

import Button from '@dinui/react/button'
import Form from '@dinui/react/form'
import Input from '@dinui/react/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export default function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Form form={form} className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
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
