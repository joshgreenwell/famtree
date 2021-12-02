import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import { CacheProvider } from "@emotion/react";
import { Auth0Provider } from "@auth0/auth0-react";

import emotionCache from "../src/utils/createEmotionCache";
import theme from "../src/utils/theme";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <CacheProvider value={emotionCache}>
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Auth0Provider
        domain="dev-a0dow-ii.us.auth0.com"
        clientId="bASpuujV4FGE8zDk6ZlxJxBmEhIqJsEQ"
        redirectUri="http://localhost:3000"
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Auth0Provider>
    </>
    // </CacheProvider>
  );
}

export default MyApp;
