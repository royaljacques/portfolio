import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/header";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "@/components/style/theme";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width"/>
          </Head>
          <ThemeProvider theme={Theme}>
              <CssBaseline/>
              <Header/>
              <Component {...pageProps} />
          </ThemeProvider>

      </>

  );
}
