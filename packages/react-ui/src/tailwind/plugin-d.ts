import color from 'color'
import plugin from 'tailwindcss/plugin'
import type { CSSRuleObject, PluginAPI } from 'tailwindcss/types/config'
import type { LiteralUnion } from 'type-fest'

type BgColor = 'bg' | 'bg-hover' | 'bg-active' | 'bg-contrast'
type FgColor =
  | 'fg'
  | 'fg-weak'
  | 'fg-weaker'
  | 'fg-brand-strong'
  | 'fg-brand'
  | 'fg-danger-strong'
  | 'fg-danger'
type BorderColor = 'border'
type RingColor = 'ring'

type Colors = Partial<
  Record<LiteralUnion<BgColor | FgColor | BorderColor | RingColor, string>, string>
>

interface Theme {
  name: LiteralUnion<'light' | 'dark' | 'surface' | 'brand' | 'danger', string>
  colors: Colors
  children?: Theme[]
  extendCssSelector?: string[]
}

type Vars = Record<string, string>
type Variant = Parameters<PluginAPI['addVariant']>

export default function createThemes(themes: Theme[]) {
  const base: CSSRuleObject = {}
  const utilities: CSSRuleObject = {}
  const colors: Colors = {}

  /** Deprecated should remove */
  const variants: Variant[] = []

  const parseTheme = (theme: Theme) => {
    const cssSelector = `.theme-${theme.name}`

    const base: CSSRuleObject = {
      [cssSelector]: {},
    }
    const vars: Vars = {}
    const colors: Colors = {}

    for (const child of theme.children ?? []) {
      const parsedChild = parseTheme(child)

      for (const key in parsedChild.base) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        base[cssSelector][key] = parsedChild.base[key]!
      }

      for (const key in parsedChild.colors) {
        colors[key] = parsedChild.colors[key]!
      }
    }

    utilities[cssSelector] = {
      '--dinui-theme': theme.name,
    }

    for (const colorName in theme.colors) {
      const [red, green, blue, alpha] = color(theme.colors[colorName]!).rgb().array()
      const colorVarName = `--color-${colorName}`
      const colorVarValue = `${red} ${green} ${blue}`
      vars[colorVarName] = colorVarValue

      // TODO: currently tailwind has problem when has default alpha value,
      // 1. cannot add fallback value for preview color on IDE
      // 2. not show warning for duplicate utilities define on IDE
      const colorValue = alpha
        ? `rgb(var(${colorVarName})/ ${alpha})`
        : `rgb(var(${colorVarName}, ${colorVarValue}) / <alpha-value>)`

      colors[colorName] = colorValue

      if (colorName === 'bg') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        base[cssSelector]['backgroundColor'] = colorValue.replace('<alpha-value>', 1)
      }

      if (colorName === 'fg') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        base[cssSelector]['color'] = colorValue.replace('<alpha-value>', 1)
      }

      if (colorName === 'border') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore

        // bellow line will work when you using inherit color for border
        base[cssSelector]['borderColor'] = colorValue.replace('<alpha-value>', 1)
      }
    }

    const selectors = [cssSelector, ...(theme.extendCssSelector ?? [])]

    variants.push([`theme-${theme.name}`, selectors.map((s) => `${s} &`)])

    for (const selector of selectors) {
      base[selector] = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...base[cssSelector],
        ...vars,
      }
    }

    return {
      base,
      colors,
    }
  }

  // Last theme more priority than first theme should reverse to make preview colors on IDE work more well => improve DX
  for (const theme of themes.reverse()) {
    const parsedTheme = parseTheme(theme)

    for (const key in parsedTheme.base) {
      base[key] = parsedTheme.base[key]!
    }

    for (const key in parsedTheme.colors) {
      colors[key] = parsedTheme.colors[key]!
    }
  }

  return plugin(
    ({ addBase, addUtilities, addVariant }) => {
      addBase(base)
      addUtilities(utilities)

      for (const variant of variants) {
        addVariant(...variant)
      }
    },
    {
      theme: {
        extend: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          colors: colors,
        },
      },
    },
  )
}
