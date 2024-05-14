import fg from 'fast-glob'
import fs from 'fs-extra'
import path from 'path'

export async function loadComponents(opts: { cwd: string }) {
  const basePath = getBaseComponentPath(opts)
  const globComponentPaths = await fg(path.resolve(basePath, './**/*.tsx'))

  return globComponentPaths.map((path) =>
    path.replace(basePath, '').replace('ui/', '').replace('.tsx', ''),
  )
}

export async function loadComponentCode(opts: { name: string; cwd: string }) {
  const basePath = getBaseComponentPath(opts)
  const fullPath = path.resolve(
    basePath,
    opts.name.includes('/') ? `${opts.name}.tsx` : `ui/${opts.name}.tsx`,
  )

  return await fs.readFile(fullPath, { encoding: 'utf8' })
}

export function getBaseComponentPath(opts: { cwd: string }) {
  return path.resolve(opts.cwd, './node_modules/@dinui/react/src') + '/'
}
