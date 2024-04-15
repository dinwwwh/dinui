import fs from 'fs-extra'
import path from 'node:path'
import { type PackageJson } from 'type-fest'

export async function getProjectPackageInfos(opts: { cwd: string }) {
  const packageJsonPath = path.resolve(opts.cwd, 'package.json')

  return fs.readJson(packageJsonPath) as Promise<PackageJson>
}
