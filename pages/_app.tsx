import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { global } from "../styles/global";
import { theme } from "../styles/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>키즈닥터도안영재학원</title>
        <meta name="robots" content="index,follow"></meta>
        <meta
          name="naver-site-verification"
          content="96658fc3919f72e4f459c227efa5c9677e8c680e"
        />
        <meta
          name="google-site-verification"
          content="4RO3tyHMN_Qu_bOqq52x_9Zb3iz33se5jTfmPGyZXKg"
        />
        <meta name="description" content="생각 공작소 키즈닥터 도안 영재학원" />
        <meta
          name="keywords"
          content="키즈닥터, 키즈닥터도안, 도안동학원, 창의력학원, 유아학원, 학원, 초등학생학원, 과학실험, 수학학원, 보드게임학원, kidsdoctor, 도안초등학교, 도안초, 학부모, 도안"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="키즈닥터도안영재학원" />
        <meta
          property="og:description"
          content="생각 공작소 키즈닥터 도안 영재학원"
        />
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
