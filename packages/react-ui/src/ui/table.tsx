import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

const table = tv({
  slots: {
    rootWrapper: 'relative w-full overflow-auto',
    root: 'w-full caption-bottom text-sm',
    header: null,
    body: 'border-t',
    footer: 'border-t',
    row: 'border-b transition-colors hover:bg-bg--hover data-[state=selected]:bg-bg--active last:border-0',
    head: 'h-10 px-2 text-left align-middle font-medium text-fg-weaker',
    cell: 'p-2 align-middle',
    caption: 'mt-4 text-sm text-fg-weaker',
  },
})

const TableRoot = forwardRef<
  HTMLTableElement,
  Merge<
    React.HTMLAttributes<HTMLTableElement>,
    {
      wrapperProps?: React.ComponentProps<'div'>
    }
  >
>(({ wrapperProps, ...props }, ref) => {
  const { root, rootWrapper } = table()

  return (
    <div {...wrapperProps} className={rootWrapper({ className: wrapperProps?.className })}>
      <table {...props} ref={ref} className={root({ className: props.className })} />
    </div>
  )
})
TableRoot.displayName = 'Table'

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>((props, ref) => {
  const { header } = table()

  return <thead {...props} ref={ref} className={header({ className: props.className })} />
})
TableHeader.displayName = 'TableHeader'

const TableBody = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>((props, ref) => {
  const { body } = table()

  return <tbody {...props} ref={ref} className={body({ className: props.className })} />
})
TableBody.displayName = 'TableBody'

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>((props, ref) => {
  const { footer } = table()

  return <tfoot {...props} ref={ref} className={footer({ className: props.className })} />
})
TableFooter.displayName = 'TableFooter'

const TableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  (props, ref) => {
    const { row } = table()

    return <tr {...props} ref={ref} className={row({ className: props.className })} />
  },
)
TableRow.displayName = 'TableRow'

const TableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  (props, ref) => {
    const { head } = table()

    return <th {...props} ref={ref} className={head({ className: props.className })} />
  },
)
TableHead.displayName = 'TableHead'

const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  (props, ref) => {
    const { cell } = table()

    return <td {...props} ref={ref} className={cell({ className: props.className })} />
  },
)
TableCell.displayName = 'TableCell'

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>((props, ref) => {
  const { caption } = table()

  return <caption {...props} ref={ref} className={caption({ className: props.className })} />
})
TableCaption.displayName = 'TableCaption'

const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Caption: TableCaption,

  Head: TableHead,
  Row: TableRow,
  Cell: TableCell,
})

export default Table
export { table }
