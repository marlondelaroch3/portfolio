import { Inter, Montserrat, Hind_Madurai, Lora } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', style: ['normal', 'italic']})
export const hind_madurai = Hind_Madurai({ subsets: ['latin'], variable: '--font-hind-madurais', weight: '400'})
export const lora = Lora({ subsets: ['latin'], variable: '--font-lora', style: ['italic']})