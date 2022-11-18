import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { global } from "../styles/global";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>키즈닥터 도안</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Global styles={global}></Global>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
