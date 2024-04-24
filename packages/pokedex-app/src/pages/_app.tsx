/* eslint-disable react/function-component-definition -- no-description */

import '@/styles/globals.css'
import '@repo/components/styles.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import RootLayoutComponent from '@/components/layout'
import wrapper from '@/store'
import Providers from '../components/common/providers'


const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Providers>
        <RootLayoutComponent>
          <Head>
            <title>Pokedex Application</title>
          </Head>
          <Component {...pageProps} />
        </RootLayoutComponent>
      </Providers>
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
