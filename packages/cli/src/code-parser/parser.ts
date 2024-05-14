export class CodeParser {
  constructor(public code: string) {}

  getDependencies() {
    return [
      ...this.code.matchAll(/from '((@[a-z0-9-~][a-z0-9-._~]*\/)?([a-z0-9-~][a-z0-9-._~]*))/g),
    ]
      .map((m) => m[1] as string)
      .filter((d) => !['react'].includes(d))
  }

  getUserCode() {
    return this.code.replaceAll(/import type \* as _.*\n/g, '')
  }
}
