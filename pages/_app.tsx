import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { global } from "../styles/global";
import { theme } from "../styles/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>키즈닥터 도안원</title>
        <meta name="robots" content="index,follow"></meta>
        <meta
          name="naver-site-verification"
          content="96658fc3919f72e4f459c227efa5c9677e8c680e"
        />
        <meta
          name="google-site-verification"
          content="4RO3tyHMN_Qu_bOqq52x_9Zb3iz33se5jTfmPGyZXKg"
        />
        <meta
          name="description"
          content="키즈닥터 도안원 홈페이지 입니다."
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="키즈닥터 도안원" />
        <meta property="og:description" content="키즈닥터 도안원입니다." />
        <meta
          property="og:image"
          content="https://kidsdoctor-doan.vercel.app/backgroundImage.png"
        />
        <meta property="og:url" content="https://kidsdoctor-doan.vercel.app" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={global}></Global>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
