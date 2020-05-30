import '../styles/styles.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}>
            <Head>
              <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@523&display=swap" rel="stylesheet" />
            </Head>
          </Component>
}

export default App