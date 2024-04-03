import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// TODO: change name to cn
export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}
