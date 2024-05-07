'use client'

import Button from '@dinui/react/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@dinui/react/form'
import Select from '@dinui/react/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <Select.Trigger>
                    <Select.Value placeholder="Select a verified email to display" />
                  </Select.Trigger>
                </FormControl>
                <Select.Content>
                  <Select.Content.Item value="m@example.com">m@example.com</Select.Content.Item>
                  <Select.Content.Item value="m@google.com">m@google.com</Select.Content.Item>
                  <Select.Content.Item value="m@support.com">m@support.com</Select.Content.Item>
                </Select.Content>
              </Select>
              <FormDescription>
                You can manage email addresses in your <a href="#">email settings</a>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
