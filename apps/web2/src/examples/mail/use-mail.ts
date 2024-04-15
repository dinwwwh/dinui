import type { Mail } from './data'
import { mails } from './data'
import { atom, useAtom } from 'jotai'

type Config = {
  selected: Mail['id'] | null
}

const configAtom = atom<Config>({
  selected: mails[0]?.id as string,
})

export function useMail() {
  return useAtom(configAtom)
}
