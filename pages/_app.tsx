import "../styles/styles.css";
import Head from "next/head";
import { AppProps } from "next/app";
import Router from "next/router";
import withGA from "next-ga";
import Menu from "./../components/menu";
import Footer from "./../components/footer";
import {GetThemeFromCookie} from './../common/theme';
import { initGA, logPageView } from "../common/analytics"
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    GetThemeFromCookie()
    initGA()
    logPageView()
});
  return (
    <div className="wrapper">
      <Menu />
      <Component {...pageProps}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@523&display=swap"
            rel="stylesheet"
          />
        </Head>
      </Component>
      <Footer />
    </div>
  );
}

export default withGA("UA-149592648-2", Router)(App);
