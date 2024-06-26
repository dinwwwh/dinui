'use client'

import Button from '@dinui/react/button'
import Form from '@dinui/react/form'
import InputOTP from '@dinui/react/input-otp'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
})

export default function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`You submitted the following values: ${JSON.stringify(data, null, 2)}`)
  }

  return (
    <Form form={form} onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <Form.Field
        control={form.control}
        name="pin"
        render={({ field }) => (
          <Form.Item>
            <Form.Label>One-Time Password</Form.Label>
            <Form.Control>
              <InputOTP maxLength={6} {...field}>
                <InputOTP.Group>
                  <InputOTP.Slot index={0} />
                  <InputOTP.Slot index={1} />
                  <InputOTP.Slot index={2} />
                  <InputOTP.Slot index={3} />
                  <InputOTP.Slot index={4} />
                  <InputOTP.Slot index={5} />
                </InputOTP.Group>
              </InputOTP>
            </Form.Control>
            <Form.Description>
              Please enter the one-time password sent to your phone.
            </Form.Description>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />

      <Button type="submit">Submit</Button>
    </Form>
  )
}
