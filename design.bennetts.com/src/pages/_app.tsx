import GlobalStyle from "@/assets/styles/Global";
import Frame from "@/components/Frame";
import Providers from "@/contexts";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <GlobalStyle />
        <Frame>
          <Component {...pageProps} />
        </Frame>
      </Providers>
    </>
  );
}
