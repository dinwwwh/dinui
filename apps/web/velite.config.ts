import { defineConfig, s } from 'velite'

export default defineConfig({
  collections: {
    docs: {
      name: 'Post',
      pattern: 'docs/**/*.mdx',
      schema: s
        .object({
          title: s.string().min(1).max(99),
          description: s.string().min(1),
          publishAt: s.isodate(),

          toc: s.toc(),
          code: s.mdx(),
          path: s.path(),
        })
        .transform((data) => {
          const relativePath = data.path.replace('docs/', '')
          const pathName = '/' + data.path

          return {
            ...data,
            relativePath,
            pathName,
          }
        }),
    },
  },
})
