import Breadcrumb from '@dinui/react/breadcrumb'
import { IconSlash } from '@tabler/icons-react'

export default function BreadcrumbVariantDemo() {
  return (
    <Breadcrumb>
      <Breadcrumb.LinkItem href="#">Home</Breadcrumb.LinkItem>
      <Breadcrumb.SeparatorItem />

      <Breadcrumb.Item>
        {/* Add trigger action here */}
        <Breadcrumb.Item.Ellipsis />
      </Breadcrumb.Item>

      <Breadcrumb.SeparatorItem>
        <IconSlash />
      </Breadcrumb.SeparatorItem>

      <Breadcrumb.LinkItem asChild>
        {/* Your custom link here */}
        <a href="#">Components</a>
      </Breadcrumb.LinkItem>

      <Breadcrumb.SeparatorItem>
        <IconSlash />
      </Breadcrumb.SeparatorItem>

      <Breadcrumb.PageItem>Breadcrumb</Breadcrumb.PageItem>
    </Breadcrumb>
  )
}
