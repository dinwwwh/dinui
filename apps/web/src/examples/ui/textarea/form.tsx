'use client'

import Button from '@dinui/react/button'
import Form, { useForm } from '@dinui/react/form'
import Textarea from '@dinui/react/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
})

export default function TextareaForm() {
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
        name="bio"
        render={({ field }) => (
          <Form.Item>
            <Form.Label>Bio</Form.Label>
            <Form.Control>
              <Textarea
                placeholder="Tell us a little bit about yourself"
                className="resize-none"
                {...field}
              />
            </Form.Control>
            <Form.Description>
              You can <span>@mention</span> other users and organizations.
            </Form.Description>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />

      <Button type="submit">Submit</Button>
    </Form>
  )
}
