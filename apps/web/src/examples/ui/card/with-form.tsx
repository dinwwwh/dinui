import Button from '@dinui/react/button'
import Card from '@dinui/react/card'
import Input from '@dinui/react/input'
import Label from '@dinui/react/label'
import Select from '@dinui/react/select'

export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <Card.Title>Create project</Card.Title>
      <Card.Description>Deploy your new project in one-click.</Card.Description>

      <form className="mt-6">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <Select.Trigger id="framework">
                <Select.Value placeholder="Select" />
              </Select.Trigger>
              <Select.Content position="popper">
                <Select.Item value="next">Next.js</Select.Item>
                <Select.Item value="sveltekit">SvelteKit</Select.Item>
                <Select.Item value="astro">Astro</Select.Item>
                <Select.Item value="nuxt">Nuxt.js</Select.Item>
              </Select.Content>
            </Select>
          </div>
        </div>

        <Card.Actions className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </Card.Actions>
      </form>
    </Card>
  )
}
