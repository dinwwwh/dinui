import Avatar from '@dinui/react/avatar'
import Button from '@dinui/react/button'
import HoverCard from '@dinui/react/hover-card'
import { IconCalendar } from '@tabler/icons-react'

export default function HoverCardDemo() {
  return (
    <HoverCard open>
      <HoverCard.Trigger asChild>
        <Button variant="ghost">@nextjs</Button>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <Avatar.Image src="https://github.com/vercel.png" />
            <Avatar.Fallback>VC</Avatar.Fallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2 text-fg-weaker">
              <IconCalendar className="mr-2 h-4 w-4" />{' '}
              <span className="text-xs">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  )
}
