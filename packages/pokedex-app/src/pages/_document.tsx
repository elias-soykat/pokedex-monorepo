import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta name="author" content="Pokedex application" />
        <meta property="og:image:width" content="920" />
        <meta property="og:image:height" content="470" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content="Pokedex application for everyone" />
        <meta name="keywords" content="JavaScript developer, TypeScript developer, Web developer" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

