import Select from '@dinui/react/select'

export default function SelectDemo() {
  return (
    <Select>
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Content.Group>
          <Select.Content.Group.Label>Fruits</Select.Content.Group.Label>

          <Select.Content.Item value="apple">Apple</Select.Content.Item>
          <Select.Content.Item value="banana" disabled>
            Banana
          </Select.Content.Item>
          <Select.Content.Item value="blueberry">Blueberry</Select.Content.Item>
          <Select.Content.Item value="grapes">Grapes</Select.Content.Item>
          <Select.Content.Item value="pineapple">Pineapple</Select.Content.Item>
        </Select.Content.Group>
      </Select.Content>
    </Select>
  )
}
