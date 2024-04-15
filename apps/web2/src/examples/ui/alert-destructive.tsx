import { Alert, AlertDescription, AlertTitle } from '@dinui/react/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  )
}
