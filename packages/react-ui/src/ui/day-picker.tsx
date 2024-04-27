'use client'

import { button } from './button'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import * as DayPickerPrimitive from 'react-day-picker'
import { tv } from 'tailwind-variants'
import { Merge } from 'type-fest'

const dayPicker = tv({
  slots: {
    root: 'p-3',
    months: 'flex flex-wrap gap-4',
    month: 'space-y-4',
    caption: 'flex justify-center pt-1 relative items-center',
    captionLabel: 'text-sm font-medium',
    nav: 'gap-1 flex items-center',
    navButton: button({
      variant: 'outline',
    }).root({
      className: 'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
    }),

    navButtonPrevious: 'absolute left-1',
    navButtonNext: 'absolute right-1',
    table: 'border-collapse space-y-1',
    headRow: 'flex',
    headCell: 'text-fg-weaker w-8 font-normal text-[0.8rem]',
    row: 'flex mt-2',
    cell: [
      '[&:has(.drm)]:bg-bg--active',
      '[&:has(.drs)]:bg-bg--active [&:has(.drs)]:rounded-l-md',
      '[&:has(.dre)]:bg-bg--active [&:has(.dre)]:rounded-r-md',
      'last:[&:has(.ds)]:rounded-r-md first:[&:has(.ds)]:rounded-l-md',
    ],
    day: button({
      variant: 'ghost',
      size: 'sm',
      icon: true,
    }).root({
      className: [
        'text-[0.8125rem] font-normal aria-selected:opacity-100',

        '[&.dt:not(.ds)]:text-fg-brand [&.dt.drm]:text-fg-brand',
        '[&.dd]:opacity-50',
        '[&.do]:opacity-50',
        '[&.ds:not(.drm,.dd)]:bg-brand [&.ds:not(.drm,.dd)]:hover:bg-brand',
      ],
    }),
    dayRangeStart: 'drs',
    dayRangeEnd: 'dre',
    daySelected: 'ds',
    dayToday: 'dt',
    dayOutside: 'do',
    dayDisabled: 'dd',
    dayRangeMiddle: 'drm',
    dayHidden: 'dh',
    component_iconLeft: 'size-4',
    component_iconRight: 'size-4',
  },
})

function DayPicker({
  componentIconLeftProps,
  componentIconRightProps,
  ...props
}: Merge<
  React.ComponentProps<(typeof DayPickerPrimitive)['DayPicker']>,
  {
    componentIconLeftProps?: React.ComponentProps<typeof IconChevronLeft>
    componentIconRightProps?: React.ComponentProps<typeof IconChevronRight>
  }
>) {
  const classes = dayPicker()

  return (
    <DayPickerPrimitive.DayPicker
      showOutsideDays
      {...props}
      className={classes.root({ className: props.className })}
      classNames={{
        ...props.classNames,
        months: classes.months({ className: props.classNames?.months }),
        month: classes.month({ className: props.classNames?.month }),
        caption: classes.caption({ className: props.classNames?.caption }),
        caption_label: classes.captionLabel({ className: props.classNames?.caption_label }),
        nav: classes.nav({ className: props.classNames?.nav }),
        nav_button: classes.navButton({ className: props.classNames?.nav_button }),
        nav_button_previous: classes.navButtonPrevious({
          className: props.classNames?.nav_button_previous,
        }),
        nav_button_next: classes.navButtonNext({ className: props.classNames?.nav_button_next }),
        table: classes.table({ className: props.classNames?.table }),
        head_row: classes.headRow({ className: props.classNames?.head_row }),
        head_cell: classes.headCell({ className: props.classNames?.head_cell }),
        row: classes.row({ className: props.classNames?.row }),
        cell: classes.cell({ className: props.classNames?.cell }),
        day: classes.day({ className: props.classNames?.day }),
        day_range_start: classes.dayRangeStart({ className: props.classNames?.day_range_start }),
        day_range_end: classes.dayRangeEnd({ className: props.classNames?.day_range_end }),
        day_selected: classes.daySelected({ className: props.classNames?.day_selected }),
        day_today: classes.dayToday({ className: props.classNames?.day_today }),
        day_outside: classes.dayOutside({ className: props.classNames?.day_outside }),
        day_disabled: classes.dayDisabled({ className: props.classNames?.day_disabled }),
        day_range_middle: classes.dayRangeMiddle({ className: props.classNames?.day_range_middle }),
        day_hidden: classes.dayHidden({ className: props.classNames?.day_hidden }),
      }}
      components={{
        IconLeft: () => (
          <IconChevronLeft
            {...componentIconLeftProps}
            className={classes.component_iconLeft({ className: componentIconLeftProps?.className })}
          />
        ),
        IconRight: () => (
          <IconChevronRight
            {...componentIconRightProps}
            className={classes.component_iconRight({
              className: componentIconRightProps?.className,
            })}
          />
        ),
        ...props.components,
      }}
    />
  )
}

export default DayPicker
export { dayPicker, DayPickerPrimitive }
export type { DateRange, DayClickEventHandler, DateFormatter } from 'react-day-picker'
