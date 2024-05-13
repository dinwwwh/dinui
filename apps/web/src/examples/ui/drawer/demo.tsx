import Button from '@dinui/react/button'
import Drawer from '@dinui/react/drawer'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import * as React from 'react'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export default function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <div className="mx-auto w-full max-w-sm">
          <Drawer.Title>Move Goal</Drawer.Title>
          <Drawer.Description>Set your daily activity goal.</Drawer.Description>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                icon
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <MinusIcon className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">{goal}</div>
                <div className="text-[0.70rem] uppercase text-fg-weaker">Calories/day</div>
              </div>
              <Button
                variant="outline"
                icon
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar dataKey="goal" className="fill-fg-weak" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <Drawer.Actions>
            <Button>Submit</Button>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
          </Drawer.Actions>
        </div>
      </Drawer.Content>
    </Drawer>
  )
}
