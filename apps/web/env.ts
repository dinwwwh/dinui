import { z } from 'zod'

export const env = z
  .object({
    AUTHOR_TWITTER_URL: z.string().url(),
    GITHUB_REPOSITORY_URL: z.string().url(),
  })
  .parse({
    AUTHOR_TWITTER_URL: import.meta.env.VITE_AUTHOR_TWITTER_URL,
    GITHUB_REPOSITORY_URL: import.meta.env.VITE_GITHUB_REPOSITORY_URL,
  })
