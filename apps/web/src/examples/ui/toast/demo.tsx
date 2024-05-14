import Button from '@dinui/react/button'
import toast from '@dinui/react/toast'

export default function ToastDemo() {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
          })
        }
      >
        Default
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => alert('Undo'),
            },
          })
        }
      >
        With Action
      </Button>

      <Button variant="outline" onClick={() => toast.error('Event has not been created')}>
        Error
      </Button>

      <Button variant="outline" onClick={() => toast.success('Event has been created')}>
        Success
      </Button>

      <Button
        variant="outline"
        onClick={() => toast.info('Be at the area 10 minutes before the event time')}
      >
        Info
      </Button>

      <Button
        variant="outline"
        onClick={() => toast.warning('Event start time cannot be earlier than 8am')}
      >
        Warning
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          const promise = () =>
            new Promise((resolve) => setTimeout(() => resolve({ name: 'Toast' }), 2000))

          toast.promise(promise, {
            loading: 'Loading...',
            success: (_data) => {
              return `Toast has been added`
            },
            error: 'Error',
          })
        }}
      >
        Promise
      </Button>

      <Button
        variant="outline"
        onClick={() => toast(<div className="text-sm">A custom toast with default styling</div>)}
      >
        Custom
      </Button>
    </div>
  )
}
