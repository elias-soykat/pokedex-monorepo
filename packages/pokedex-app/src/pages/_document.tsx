import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" name="robots" />
        <meta content="en_US" property="og:locale" />
        <meta content="Pokedex application" name="author" />
        <meta content="920" property="og:image:width" />
        <meta content="470" property="og:image:height" />
        <meta content="summary_large_image" name="twitter:card" />

        <meta content="Pokedex application for everyone" property="og:site_name" />
        <meta content="JavaScript developer, TypeScript developer, Web developer" name="keywords" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
