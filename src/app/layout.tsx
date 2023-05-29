'use client'

import { Suspense } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Acorreialaw Advogados - Advocacia Especializada em Contratos',
  description:
    'Somos uma equipe de advogados altamente qualificados e especializados em direito contratual. Com anos de experiência no campo, ajudamos inúmeros clientes a redigir, revisar e negociar uma ampla variedade de contratos em diversas indústrias.'
}
export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
       {/* Google Tag Manager - Global base code */}
       <Suspense>
      <Script
        id='gtag-base'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-5D65SH3');
          `
        }}
      ></Script>
      </Suspense>
      <body className={inter.className}>
        <Suspense>{children}</Suspense>
        <Suspense>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-5D65SH3`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        </Suspense>
      </body>
    </html>
  )
}
