import Head from "next/head";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
// import { CacheProvider } from "@emotion/react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { CssBaseline, Stack } from "@mui/material";

import { Sidebar } from "../src/components/sidebar";
import { LoginModal } from "../src/components/login-modal";
import { Loader } from "../src/components/loader";

// import emotionCache from "../src/utils/createEmotionCache";
import theme from "../src/utils/theme";

import type { AppProps } from "next/app";

/**
 * Main wrapper component for every page to ensure login and sidebar functionality
 */
 const Main = ({ Component, pageProps }: AppProps) => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setShowLogin(true);
    }
  }, [isLoading, isAuthenticated]);

  return (
    <>
      <LoginModal open={showLogin} />
      <Sidebar />
      <Stack sx={{ marginLeft: "89px" }}>
        {isLoading ? <Loader height="100vh" /> : <Component {...pageProps} />}
      </Stack>
    </>
  );
};

/**
 * Setup providers and initial app page
 */
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
          <Main Component={Component} pageProps={pageProps} />
        </ThemeProvider>
      </Auth0Provider>
    </>
    // </CacheProvider>
  );
}

export default MyApp;
