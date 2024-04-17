import Alert from '@dinui/react/alert'
import { IconFile, IconPercentage } from '@tabler/icons-react'

export default function AlertColorsDemo() {
  return (
    <div className="flex flex-wrap flex-col gap-4">
      <Alert wvariant="soft" wcolor="wbrand">
        <Alert.Icon>
          <IconPercentage />
        </Alert.Icon>

        <Alert.Content>
          <Alert.Content.Title>Get Discount</Alert.Content.Title>

          <Alert.Content.Description>
            Upgrade your plain before your trial ends to get 5% discount
          </Alert.Content.Description>
        </Alert.Content>
      </Alert>

      <Alert wvariant="soft" wcolor="wgray">
        <Alert.Icon>
          <IconFile />
        </Alert.Icon>

        <Alert.Content>
          <Alert.Content.Title>Your team used 7/50 free docs</Alert.Content.Title>

          <Alert.Content.Description>
            You can add components to your app using the cli.
          </Alert.Content.Description>
        </Alert.Content>
      </Alert>

      <Alert wvariant="soft" wcolor="wsuccess">
        <Alert.Icon />

        <Alert.Content>
          <Alert.Content.Title>
            Thanks! Look out for an email sent to dinwwwh@gmail.com
          </Alert.Content.Title>

          <Alert.Content.Description>
            It's got a link you'll need to click to confirm this is your account.
          </Alert.Content.Description>
        </Alert.Content>
      </Alert>

      <Alert wvariant="soft" wcolor="wwarning">
        <Alert.Icon />

        <Alert.Content>
          <Alert.Content.Title>Sync is disabled</Alert.Content.Title>

          <Alert.Content.Description>
            Enable cloud sync to help safeguard your data
          </Alert.Content.Description>
        </Alert.Content>
      </Alert>

      <Alert wvariant="soft" wcolor="werror">
        <Alert.Icon />

        <Alert.Content className="flex gap-1 items-center">
          <Alert.Content.Title>Heads up:</Alert.Content.Title>

          <Alert.Content.Description className="mt-0">
            Once done this account can't be undone
          </Alert.Content.Description>
        </Alert.Content>
      </Alert>
    </div>
  )
}
