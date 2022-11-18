import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import 'styles/reset.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Component {...pageProps}></Component>
    </>
  )
}

export default MyApp
