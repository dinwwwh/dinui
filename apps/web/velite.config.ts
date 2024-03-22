import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { defineCollection, defineConfig, s } from 'velite'

const docs = defineCollection({
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
})

export default defineConfig({
  collections: {
    docs,
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-dark' }],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
