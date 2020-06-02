import '../styles/styles.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Router from "next/router";
import withGA from "next-ga";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}>
            <Head>
              <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@523&display=swap" rel="stylesheet" />
            </Head>
          </Component>
}


export default withGA("UA-149592648-2", Router)(App);