import fs from 'fs-extra'
import path from 'path'
import { z } from 'zod'

const persistedOptionsSchema = z.object({
  add_initialDirectory: z.string().optional(),
})

type PersistedOptions = z.infer<typeof persistedOptionsSchema>

export async function getPersistedOptions(opts: { cwd: string }): Promise<PersistedOptions> {
  const optPath = path.resolve(opts.cwd, './node_modules/.dinui/.persisted-options.json')

  try {
    const options = await fs.readJson(optPath)

    return persistedOptionsSchema.parse(options)
  } catch {
    return {}
  }
}

export async function setPersistedOptions(options: PersistedOptions, opts: { cwd: string }) {
  const optPath = path.resolve(opts.cwd, './node_modules/.dinui/.persisted-options.json')

  try {
    await fs.ensureFile(optPath)
    await fs.writeJSON(optPath, options)
  } catch (e) {
    console.error(e)
    return false
  }
}

export async function getPersistedOption<K extends keyof PersistedOptions>(
  key: K,
  opts: { cwd: string },
) {
  const options = await getPersistedOptions(opts)

  return options[key]
}

export async function setPersistedOption<K extends keyof PersistedOptions>(
  key: K,
  val: PersistedOptions[K],
  opts: { cwd: string },
) {
  const options = await getPersistedOptions(opts)

  return await setPersistedOptions(
    {
      ...options,
      [key]: val,
    },
    opts,
  )
}
