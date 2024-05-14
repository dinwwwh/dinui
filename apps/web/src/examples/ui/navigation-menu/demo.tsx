'use client'

import NavigationMenu, { NavigationMenuPrimitive } from '@dinui/react/navigation-menu'
import Skeleton from '@dinui/react/skeleton'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Getting started</NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuPrimitive.Link asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-bg--active/30 to-bg--active/70 p-6"
                  href="#"
                >
                  <Skeleton className="size-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">DinUI</div>
                  <p className="text-sm leading-tight text-fg-weaker">
                    Beautifully designed components built with Radix UI and Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuPrimitive.Link>
            </li>
            <NavigationMenu.Link href="#" title="Introduction">
              Introduction
              <NavigationMenu.Link.Description>
                Re-usable components built using Radix UI and Tailwind CSS.
              </NavigationMenu.Link.Description>
            </NavigationMenu.Link>
            <NavigationMenu.Link href="#">
              Installation
              <NavigationMenu.Link.Description>
                How to install dependencies and structure your app.
              </NavigationMenu.Link.Description>
            </NavigationMenu.Link>
            <NavigationMenu.Link href="#">
              Typography
              <NavigationMenu.Link.Description>
                Styles for headings, paragraphs, lists...etc
              </NavigationMenu.Link.Description>
            </NavigationMenu.Link>
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
        <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
        <NavigationMenu.Content>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {components.map((component) => (
              <NavigationMenu.Link key={component.title} href={component.href}>
                {component.title}
                <NavigationMenu.Link.Description>
                  {component.description}
                </NavigationMenu.Link.Description>
              </NavigationMenu.Link>
            ))}
          </ul>
        </NavigationMenu.Content>
      </NavigationMenu.Item>

      <NavigationMenu.LinkItem href="#">Documentation</NavigationMenu.LinkItem>
    </NavigationMenu>
  )
}
