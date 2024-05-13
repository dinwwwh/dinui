'use client'

import Button from '@dinui/react/button'
import Form, { useForm } from '@dinui/react/form'
import Switch from '@dinui/react/switch'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
})

export default function SwitchForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`You submitted the following values: ${JSON.stringify(data, null, 2)}`)
  }

  return (
    <Form form={form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <Form.Field
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <Form.Item className="flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <Form.Label>Marketing emails</Form.Label>
                    <Form.Description>
                      Receive emails about new products, features, and more.
                    </Form.Description>
                  </div>
                  <Form.Control>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </Form.Control>
                </Form.Item>
              )}
            />
            <Form.Field
              control={form.control}
              name="security_emails"
              render={({ field }) => (
                <Form.Item className="flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                  <div className="space-y-0.5">
                    <Form.Label>Security emails</Form.Label>
                    <Form.Description>Receive emails about your account security.</Form.Description>
                  </div>

                  <Form.Control>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </Form.Control>
                </Form.Item>
              )}
            />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
