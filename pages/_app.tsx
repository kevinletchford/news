import "../styles/styles.css";
import Head from "next/head";
import { AppProps } from "next/app";
import Router from "next/router";
import withGA from "next-ga";
import Menu from "./../components/menu";
import Footer from "./../components/footer";
import { GetThemeFromCookie } from "./../common/theme";
import { initGA, logPageView } from "../common/analytics";
import { useEffect } from "react";
import { swInit } from "./../common/service-worker-init";
import { swipeEvents } from "./../common/swipeEvents";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    GetThemeFromCookie();
    swInit();
    initGA();
    logPageView();
  });
  return (
    <div className="wrapper">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#25294a" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="apple-touch-icon" href="/img/apple.png"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@523&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="ios-offset-top"></div>
      <Menu />
      <Component {...pageProps}></Component>
      <Footer />
    </div>
  );
}

export default withGA("UA-149592648-2", Router)(App);
