import Button from '@dinui/react/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@dinui/react/card'
import Input from '@dinui/react/input'
import Label from '@dinui/react/label'
import Select from '@dinui/react/select'

export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
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
                  <Select.Content.Item value="next">Next.js</Select.Content.Item>
                  <Select.Content.Item value="sveltekit">SvelteKit</Select.Content.Item>
                  <Select.Content.Item value="astro">Astro</Select.Content.Item>
                  <Select.Content.Item value="nuxt">Nuxt.js</Select.Content.Item>
                </Select.Content>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
