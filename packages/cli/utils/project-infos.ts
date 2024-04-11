import fs from 'fs-extra'
import path from 'node:path'
import { type PackageJson } from 'type-fest'

export async function getProjectPackageInfos(opts: { cwd: string }) {
  const packageJsonPath = path.resolve(opts.cwd, 'package.json')

  return fs.readJson(packageJsonPath) as Promise<PackageJson>
}

export async function isDinUIInstalledCorrectly(opts: { cwd: string }) {
  return fs.exists(path.resolve(opts.cwd, './node_modules/@dinui/react'))
}

export async function getDinUIComponents(opts: { cwd: string }) {
  const ui = await fs.readdir(path.resolve(opts.cwd, './node_modules/@dinui/react/ui'))

  return ui.filter((file) => file.endsWith('.tsx')).map((file) => file.replace('.tsx', ''))
}
