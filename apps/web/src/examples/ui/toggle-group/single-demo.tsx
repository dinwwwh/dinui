import ToggleGroup from '@dinui/react/toggle-group'
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react'

export default function ToggleGroupSingleDemo() {
  return (
    <ToggleGroup type="single">
      <ToggleGroup.Item value="bold" aria-label="Toggle bold" icon={false}>
        <ToggleGroup.Item.LeftIcon>
          <IconBold />
        </ToggleGroup.Item.LeftIcon>
        Bold
      </ToggleGroup.Item>
      <ToggleGroup.Item value="italic" aria-label="Toggle italic">
        <ToggleGroup.Item.Icon>
          <IconItalic />
        </ToggleGroup.Item.Icon>
      </ToggleGroup.Item>
      <ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
        <ToggleGroup.Item.Icon>
          <IconUnderline />
        </ToggleGroup.Item.Icon>
      </ToggleGroup.Item>
    </ToggleGroup>
  )
}
