import Alert from '@dinui/react/alert'

export default function AlertBordersDemo() {
  return (
    <div className="flex flex-wrap flex-col gap-4">
      <Alert wborder="left" wvariant="soft" wcolor="wbrand">
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
