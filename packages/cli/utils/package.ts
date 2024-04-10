import fs from 'fs-extra'
import path from 'node:path'
import { type PackageJson } from 'type-fest'

export function getPackageInfo() {
  const packageJsonPath = path.resolve(__dirname /** from ./dist folder */, '../package.json')

  return fs.readJson(packageJsonPath) as Promise<PackageJson>
}
