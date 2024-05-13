import Alert from '@dinui/react/alert'
import { IconPercentage } from '@tabler/icons-react'

export default function AlertVariantDemo() {
  return (
    <div className="flex flex-wrap flex-col gap-4">
      <Alert>
        <Alert.Icon />

        <Alert.Content>
          <Alert.Title>Heads up!</Alert.Title>

          <Alert.Description>You can add components to your app using the cli.</Alert.Description>
        </Alert.Content>

        <Alert.CloseButton />
      </Alert>

      <Alert variant="brand-icon">
        <Alert.Icon>
          <IconPercentage />
        </Alert.Icon>

        <Alert.Content>
          <Alert.Title>Get Discount</Alert.Title>

          <Alert.Description>
            Upgrade your plain before your trial ends to get 5% discount
          </Alert.Description>
        </Alert.Content>

        <Alert.CloseButton />
      </Alert>

      <Alert variant="danger-icon">
        <Alert.Icon />

        <Alert.Content>
          <Alert.Title>Heads up!</Alert.Title>

          <Alert.Description>You can add components to your app using the cli.</Alert.Description>
        </Alert.Content>

        <Alert.CloseButton />
      </Alert>
    </div>
  )
}
