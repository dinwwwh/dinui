import { env } from '../env'
import { cancel, intro, outro, spinner, text, note } from '@clack/prompts'
import { Command, program } from 'commander'
import color from 'picocolors'
import { z } from 'zod'

const optionsSchema = z.object({
  dir: z.string(),
  yes: z.boolean(),
  overwrite: z.boolean(),
})

export const add = new Command()
  .name('add')
  .description('add one or many component to your project')
  .argument('[components...]', 'the components to add')
  .requiredOption('-d, --dir <directory>', 'the relative directory path to add the component to.')
  .option('-y, --yes', 'skip confirmation prompt.', false)
  .option('-o, --overwrite', 'overwrite existing components.', false)
  .option(
    '-c, --cwd <cwd>',
    'the working directory. defaults to the current directory.',
    process.cwd(),
  )
  .showHelpAfterError(color.blue('info: add --help for additional information '))
  .action(async (components, opts) => {
    intro(`${color.bgCyan(` ${env.PROJECT_NAME} `)}`)
    const options = optionsSchema
      .extend({
        components: z.string(),
      })
      .safeParse({
        ...opts,
        components,
      })

    if (!options.success) {
      cancel(`${color.bgRed(' Invalid options! ')}`)
      program.error(`${color.bgRed(options.error.toString())}`)
    }

    const meaning = await text({
      message: 'What is the meaning of life?',
      placeholder: 'Not sure',
      initialValue: '42',
      validate(value) {
        if (value.length === 0) return `Value is required!`
      },
    })

    const s = spinner()
    s.start('Installing via npm')
    // Do installation
    await new Promise((r) => setTimeout(r, 1000))
    s.stop('Installed via npm')

    cancel('Operation cancelled.')
    program.error(`${color.bgRed('error: something went wrong! ')}`)
    // process.exit(1)

    outro(`Problems? ${color.underline(color.cyan(env.PROBLEM_URL))}`)
  })
