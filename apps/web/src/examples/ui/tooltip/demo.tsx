import Button from '@dinui/react/button'
import Tooltip from '@dinui/react/tooltip'

export default function TooltipDemo() {
  return (
    <Tooltip.Provider delayDuration={400}>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover</Button>
        </Tooltip.Trigger>

        <Tooltip.Content>Add to library</Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  )
}
