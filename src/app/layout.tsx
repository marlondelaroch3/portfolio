import Script from 'next/script'
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
      <body className='pl-4 pr-4 min-[570px]:pl-10c min-[570px]:pr-10c min-[1300px]:pl-1/6  min-[1300px]:pr-1/6 flex flex-col items-center'>{children}</body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P65R67CFLB"></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-P65R67CFLB');
      `}
      </Script>
    </html>
  )
}
