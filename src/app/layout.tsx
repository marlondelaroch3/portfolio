import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'marlondelaroch3',
  description: 'Marlon De La Roche portfolio',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="es" >
      <body className='pl-4 pr-4 tablet:pl-10c tablet:pr-10c flex flex-col items-center'>{children}</body>
    </html>
  )
}
