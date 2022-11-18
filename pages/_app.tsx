import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { global } from "../styles/global";
import { theme } from "../styles/theme";
import { DefaultSeo } from "next-seo";
function MyApp({ Component, pageProps }: AppProps) {
  const DEFAULT_SEO = {
    title: "키즈닥터 도안원",
    description: "창의력 영재교육 키즈닥터 도안원입니다.",
    canonical: "https://kidsdoctor-doan.vercel.app/",
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: "https://kidsdoctor-doan.vercel.app/",
      title: "키즈닥터 도안원",
      site_name: "키즈닥터 도안원",
      images: [
        {
          url: "../assets/common/backgroundImage.png",
          width: 285,
          height: 167,
          alt: "배경 이미지",
        },
      ],
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
    },
  };
  return (
    <>
      <Head>
        <title>키즈닥터 도안원</title>
        <DefaultSeo {...DEFAULT_SEO}></DefaultSeo>
        <meta
          name="naver-site-verification"
          content="96658fc3919f72e4f459c227efa5c9677e8c680e"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Global styles={global}></Global>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
