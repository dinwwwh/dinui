import { Alert, AlertDescription, AlertTitle } from '@dinui/react/alert'
import { RocketIcon } from '@radix-ui/react-icons'

export default function AlertDemo() {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}
