import chalk from 'chalk'
import Color from 'color'
import { assign } from 'radash'
import plugin from 'tailwindcss/plugin'
import type { CSSRuleObject } from 'tailwindcss/types/config'
import type { LiteralUnion } from 'type-fest'

interface Colors {
  [color: string]: undefined | string | Colors

  'bg': string
  'bg--contrast'?: string
  'bg--hover'?: string
  'bg--active'?: string
  'bg--muted'?: string

  'fg'?: string
  'fg-weak'?: string
  'fg-weak--hover'?: string
  'fg-weaker'?: string
  'fg-weaker--hover'?: string

  'fg-brand'?: string
  'fg-brand--hover'?: string

  'fg-danger'?: string
  'fg-danger--hover'?: string

  'border'?: string
  'outline'?: string
}

interface Theme {
  name: LiteralUnion<'light' | 'dark', string>
  selectors: [string, ...string[]]
  colors: Colors
}

export default function createThemes<T extends Theme>(themes: T[]) {
  let twBase: CSSRuleObject = {}
  const twComponents: CSSRuleObject = {}
  const twColors: Record<string, string> = {}

  const resolveColors = (selectors: string[], colors: Colors) => {
    for (const selector of selectors) {
      const arr = selector.split(' ')
      const unique = [...new Set(arr)]

      // TODO: add link for more info
      for (const i in arr) {
        if (arr[i] !== unique[i]) {
          console.warn(
            chalk.yellow(`DinUI: Remove duplicate CSS selectors "${arr[i]}" in "${selector}".
This will cause issues with "${arr[i]}" class when handling focus and some other states in Tailwind.
This issue can arise when a child's color has the same name as a parent's color.
          `),
          )
        }
      }
    }

    for (const key in colors) {
      const color = colors[key]
      if (!color) continue

      if (typeof color === 'string') {
        const [red, green, blue, alpha] = Color(color).rgb().array()
        const colorVarName = `--color-${key}`
        const colorVarValue = `${red} ${green} ${blue} /** ${color} */`

        for (const selector of selectors) {
          twBase = assign(twBase, {
            [selector]: {
              [colorVarName]: colorVarValue,
            },
          })
        }

        if (!twColors[key]) {
          const colorValue = alpha
            ? `rgb(var(${colorVarName}) / ${alpha})`
            : `rgb(var(${colorVarName}) / <alpha-value>)`

          twColors[key] = colorValue
        }

        continue
      }

      const hasColorBgContrast = !!color['bg--contrast']
      const hasColorBgHover = !!color['bg--hover']
      const hasColorBgActive = !!color['bg--active']
      const hasColorBgMuted = !!color['bg--muted']

      if (!twComponents[`.bg-${key}`]) {
        twComponents[`.bg-${key}`] = {
          backgroundColor: 'rgb(var(--color-bg))',
          color: 'rgb(var(--color-fg))',
        }
      }

      if (hasColorBgContrast && !twComponents[`.bg-${key}--contrast`]) {
        twComponents[`.bg-${key}--contrast`] = {
          backgroundColor: 'rgb(var(--color-bg--contrast))',
          color: 'rgb(var(--color-fg))',
        }
      }

      if (hasColorBgHover && !twComponents[`.bg-${key}--hover`]) {
        twComponents[`.bg-${key}--hover`] = {
          backgroundColor: 'rgb(var(--color-bg--hover))',
          color: 'rgb(var(--color-fg))',
        }
      }

      if (hasColorBgActive && hasColorBgActive && !twComponents[`.bg-${key}--active`]) {
        twComponents[`.bg-${key}--active`] = {
          backgroundColor: 'rgb(var(--color-bg--active))',
          color: 'rgb(var(--color-fg))',
        }
      }

      if (hasColorBgMuted && !twComponents[`.bg-${key}--muted`]) {
        twComponents[`.bg-${key}--muted`] = {
          backgroundColor: 'rgb(var(--color-bg--muted))',
          color: 'rgb(var(--color-fg))',
        }
      }

      for (const selector of selectors) {
        resolveColors([`${selector} .bg-${key}`], color)
        hasColorBgContrast && resolveColors([`${selector} .bg-${key}--contrast`], color)
        hasColorBgHover && resolveColors([`${selector} .bg-${key}--hover`], color)
        hasColorBgActive && resolveColors([`${selector} .bg-${key}--active`], color)
        hasColorBgMuted && resolveColors([`${selector} .bg-${key}--muted`], color)
      }
    }
  }

  for (const theme of themes) {
    resolveColors(theme.selectors, theme.colors)
  }

  return plugin(
    ({ addBase, addComponents, addVariant }) => {
      addBase(twBase)
      addComponents(twComponents)

      for (const theme of themes) {
        addVariant(
          theme.name,
          theme.selectors.map((s) => `&:is(${s} *)`),
        )
      }
    },
    {
      darkMode: [], // disable default dark mode behavior
      theme: {
        extend: {
          colors: twColors,
        },
      },
    },
  )
}
