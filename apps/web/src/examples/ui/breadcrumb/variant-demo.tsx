import Breadcrumb from '@dinui/react/breadcrumb'
import { IconSlash } from '@tabler/icons-react'

export default function BreadcrumbVariantDemo() {
  return (
    <Breadcrumb>
      <Breadcrumb.ItemLink href="#">Home</Breadcrumb.ItemLink>
      <Breadcrumb.ItemSeparator />

      <Breadcrumb.Item>
        {/* Add trigger action here */}
        <Breadcrumb.Item.Ellipsis />
      </Breadcrumb.Item>

      <Breadcrumb.ItemSeparator>
        <IconSlash />
      </Breadcrumb.ItemSeparator>

      <Breadcrumb.ItemLink asChild>
        {/* Your custom link here */}
        <a href="#">Components</a>
      </Breadcrumb.ItemLink>

      <Breadcrumb.ItemSeparator>
        <IconSlash />
      </Breadcrumb.ItemSeparator>

      <Breadcrumb.ItemPage>Breadcrumb</Breadcrumb.ItemPage>
    </Breadcrumb>
  )
}
