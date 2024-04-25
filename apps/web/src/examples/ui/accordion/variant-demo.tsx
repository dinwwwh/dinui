import Accordion from '@dinui/react/accordion'

export default function AccordionVariantDemo() {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-2">
      <Accordion.Item value="item-1">
        <Accordion.Item.Trigger>Is it accessible?</Accordion.Item.Trigger>
        <Accordion.Item.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Item.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Item.Trigger>Is it styled?</Accordion.Item.Trigger>
        <Accordion.Item.Content>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </Accordion.Item.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Item.Trigger>Is it animated?</Accordion.Item.Trigger>
        <Accordion.Item.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Item.Content>
      </Accordion.Item>
    </Accordion>
  )
}
