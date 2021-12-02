import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react";

import { Sidebar } from "../src/components/sidebar";
import { LoginModal } from "../src/components/login-modal";
import { CircularProgress, Stack } from "@mui/material";
import { Loader } from "../src/components/loader";

let token: any

const Home: NextPage = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setShowLogin(true);
    }
  }, [isLoading, isAuthenticated])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoginModal open={showLogin} />
        <Sidebar />
        <Stack>
          {isLoading ? <Loader height="100vh" /> : <></>}
        </Stack>
      </main>
    </div>
  );
};

export default Home;
