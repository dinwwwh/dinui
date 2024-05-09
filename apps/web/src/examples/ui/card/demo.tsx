import Button from '@dinui/react/button'
import Card from '@dinui/react/card'
import Switch from '@dinui/react/switch'
import { cn } from '@dinui/react/utils'
import { IconBell, IconCheck } from '@tabler/icons-react'

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]

type CardProps = React.ComponentProps<typeof Card>

export default function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-[380px]', className)} {...props}>
      <Card.Title>Notifications</Card.Title>
      <Card.Description>You have 3 unread messages.</Card.Description>

      <div className="mt-6 grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <IconBell />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Push Notifications</p>
            <p className="text-sm text-fg-weaker">Send notifications to device.</p>
          </div>
          <Switch />
        </div>
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-sm text-fg-weaker">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card.Actions>
        <Button className="w-full">
          <Button.LeftIcon>
            <IconCheck />
          </Button.LeftIcon>
          Mark all as read
        </Button>
      </Card.Actions>
    </Card>
  )
}
