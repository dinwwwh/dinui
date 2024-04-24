import Alert from '@dinui/react/alert'
import { IconPercentage } from '@tabler/icons-react'

export default function AlertVariantsDemo() {
  return (
    <div className="flex flex-wrap flex-col gap-4">
      <Alert>
        <Alert.Icon />

        <Alert.Content>
          <Alert.Content.Title>Heads up!</Alert.Content.Title>

          <Alert.Content.Description>
            You can add components to your app using the cli.
          </Alert.Content.Description>
        </Alert.Content>

        <Alert.CloseButton />
      </Alert>

      <Alert variant="brand">
        <Alert.Icon>
          <IconPercentage />
        </Alert.Icon>

        <Alert.Content>
          <Alert.Content.Title>Get Discount</Alert.Content.Title>

          <Alert.Content.Description>
            Upgrade your plain before your trial ends to get 5% discount
          </Alert.Content.Description>
        </Alert.Content>

        <Alert.CloseButton />
      </Alert>

      <Alert variant="danger">
        <Alert.Icon />

        <Alert.Content>
          <Alert.Content.Title>Heads up!</Alert.Content.Title>

          <Alert.Content.Description>
            You can add components to your app using the cli.
          </Alert.Content.Description>
        </Alert.Content>

        <Alert.CloseButton />
      </Alert>
    </div>
  )
}
