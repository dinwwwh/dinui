import fs from 'fs-extra'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { type PackageJson } from 'type-fest'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function getCliPackageInfos() {
  const packageJsonPath = path.resolve(__dirname /** from ./dist folder */, '../package.json')

  return fs.readJson(packageJsonPath) as Promise<PackageJson>
}

export async function getCliVersion() {
  const infos = await getCliPackageInfos()

  return infos.version || 'Unknown'
}
