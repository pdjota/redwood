import { runCommandTask } from 'src/lib'

export const command = 'save [name..]'
export const desc = 'Create a new migration.'
export const builder = {
  verbose: { type: 'boolean', default: true, alias: ['v'] },
}
export const handler = async ({ name, verbose }) => {
  await runCommandTask(
    [
      {
        title: 'Creating database migration...',
        cmd: 'prisma2',
        args: ['migrate save', `--name ${name}`, '--experimental'],
      },
    ],
    {
      verbose,
    }
  )
}
