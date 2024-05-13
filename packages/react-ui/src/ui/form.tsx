import Label from './label'
import { Slot } from '@radix-ui/react-slot'
import { createContext, forwardRef, useContext, useId } from 'react'
import type { ControllerProps, FieldPath, FieldValues, UseFormReturn } from 'react-hook-form'
import { Controller, FormProvider, useFormContext } from 'react-hook-form'
import { tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

const form = tv({
  slots: {
    item: 'flex flex-col gap-2',
    description: 'text-sm text-fg-weaker',
    errorMessage: 'text-sm font-medium text-fg-danger',
  },
})

function FormRoot({
  form,
  asChild,
  ...props
}: Merge<
  React.ComponentProps<'form'>,
  {
    form: UseFormReturn<any>
    asChild?: boolean
  }
>) {
  const Comp = asChild ? Slot : 'form'
  return (
    <FormProvider {...form}>
      <Comp {...props} />
    </FormProvider>
  )
}

const FormFieldContext = createContext<{ name: FieldPath<FieldValues> } | undefined>(undefined)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const FormItemContext = createContext<{ id: string } | undefined>(undefined)

const FormItem = forwardRef<
  HTMLDivElement,
  Merge<
    React.HTMLAttributes<HTMLDivElement>,
    {
      asChild?: boolean
    }
  >
>(({ asChild, ...props }, ref) => {
  const id = useId()
  const { item } = form()

  const Comp = asChild ? Slot : 'div'
  return (
    <FormItemContext.Provider value={{ id }}>
      <Comp {...props} ref={ref} className={item({ className: props.className })} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  if (!fieldContext) {
    throw new Error('useFormField should be used within <Form.Field>')
  }

  if (!itemContext) {
    throw new Error('useFormField should be used within <Form.Item>')
  }

  const fieldState = getFieldState(fieldContext.name, formState)

  const { id } = itemContext

  return {
    ...fieldState,
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
  }
}

const FormLabel = forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>((props, ref) => {
  const { error, formItemId } = useFormField()

  return <Label {...props} ref={ref} variant={error ? 'danger' : 'default'} htmlFor={formItemId} />
})
FormLabel.displayName = 'FormLabel'

const FormControl = forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
})
FormControl.displayName = 'FormControl'

const FormDescription = forwardRef<
  HTMLParagraphElement,
  Merge<
    React.HTMLAttributes<HTMLParagraphElement>,
    {
      asChild?: boolean
    }
  >
>(({ asChild, ...props }, ref) => {
  const { formDescriptionId } = useFormField()
  const { description } = form()

  const Comp = asChild ? Slot : 'p'
  return (
    <Comp
      {...props}
      ref={ref}
      id={formDescriptionId}
      className={description({ className: props.className })}
    />
  )
})
FormDescription.displayName = 'FormDescription'

const FormErrorMessage = forwardRef<
  HTMLParagraphElement,
  Merge<
    React.HTMLAttributes<HTMLParagraphElement>,
    {
      asChild?: boolean
    }
  >
>(({ asChild, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children
  const { errorMessage } = form()

  if (!body) {
    return null
  }

  const Comp = asChild ? Slot : 'p'
  return (
    <Comp
      {...props}
      ref={ref}
      id={formMessageId}
      className={errorMessage({ className: props.className })}
    >
      {body}
    </Comp>
  )
})
FormErrorMessage.displayName = 'FormErrorMessage'

const Form = Object.assign(FormRoot, {
  Field: FormField,
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  ErrorMessage: FormErrorMessage,
})

export default Form
export { form }
export { useForm } from 'react-hook-form'
export * as FormPrimitive from 'react-hook-form'
