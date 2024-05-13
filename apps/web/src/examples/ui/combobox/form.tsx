'use client'

import Button from '@dinui/react/button'
import Command from '@dinui/react/command'
import Form, { useForm } from '@dinui/react/form'
import Popover from '@dinui/react/popover'
import { cn } from '@dinui/react/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconCheck, IconSelector } from '@tabler/icons-react'
import { z } from 'zod'

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
] as const

const FormSchema = z.object({
  language: z.string({
    required_error: 'Please select a language.',
  }),
})

export default function ComboboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(`You submitted the following values: ${JSON.stringify(data, null, 2)}`)
  }

  return (
    <Form form={form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <Form.Field
        control={form.control}
        name="language"
        render={({ field }) => (
          <Form.Item className="flex flex-col">
            <Form.Label>Language</Form.Label>
            <Popover>
              <Popover.Trigger asChild>
                <Form.Control>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn('w-[200px] justify-between', !field.value && 'text-fg-weaker')}
                  >
                    {field.value
                      ? languages.find((language) => language.value === field.value)?.label
                      : 'Select language'}

                    <Button.RightIcon className="size-4 text-fg-weaker">
                      <IconSelector />
                    </Button.RightIcon>
                  </Button>
                </Form.Control>
              </Popover.Trigger>
              <Popover.Content className="w-[200px] p-0">
                <Command>
                  <Command.Input placeholder="Search framework..." className="h-9" />
                  <Command.List>
                    <Command.List.Empty>No framework found.</Command.List.Empty>

                    <Command.List.Group>
                      {languages.map((language) => (
                        <Command.List.Item
                          value={language.label}
                          key={language.value}
                          onSelect={() => {
                            form.setValue('language', language.value)
                          }}
                        >
                          {language.label}
                          <IconCheck
                            className={cn(
                              'ml-auto h-4 w-4',
                              language.value === field.value ? 'opacity-100' : 'opacity-0',
                            )}
                          />
                        </Command.List.Item>
                      ))}
                    </Command.List.Group>
                  </Command.List>
                </Command>
              </Popover.Content>
            </Popover>
            <Form.Description>
              This is the language that will be used in the dashboard.
            </Form.Description>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />

      <Button type="submit">Submit</Button>
    </Form>
  )
}
