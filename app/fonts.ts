import { Saira } from 'next/font/google'
import { Merienda } from 'next/font/google'
import { Playball } from 'next/font/google'

export const main = Saira({
  weight: ['400'],
  variable: '--font-main',
  subsets: ['latin']
})

export const merienda = Merienda({
  weight: [],
  subsets: ['latin']
})

export const playball = Playball({
  weight: ['400'],
  subsets: ['latin']
})
