'use client'

import Button from '@dinui/react/button'
import Checkbox from '@dinui/react/checkbox'
import Form, { useForm } from '@dinui/react/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
})

export default function CheckboxReactHookFormMultipleDemo() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['recents', 'home'],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`You submitted the following values: ${JSON.stringify(data, null, 2)}`)
  }

  return (
    <Form form={form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Form.Field
        control={form.control}
        name="items"
        render={() => (
          <Form.Item>
            <div className="mb-4">
              <Form.Label className="text-base">Sidebar</Form.Label>
              <Form.Description>
                Select the items you want to display in the sidebar.
              </Form.Description>
            </div>
            {items.map((item) => (
              <Form.Field
                key={item.id}
                control={form.control}
                name="items"
                render={({ field }) => {
                  return (
                    <Form.Item
                      key={item.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <Form.Control>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(field.value?.filter((value) => value !== item.id))
                          }}
                        />
                      </Form.Control>
                      <Form.Label className="text-sm font-normal">{item.label}</Form.Label>
                    </Form.Item>
                  )
                }}
              />
            ))}

            <Form.ErrorMessage />
          </Form.Item>
        )}
      />

      <Button type="submit">Submit</Button>
    </Form>
  )
}
