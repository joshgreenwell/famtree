import type { NextPage } from "next";
import { TextField, Stack, InputAdornment, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Head from "next/head";

const Messages: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Family Tree - Messages</title>
        <meta
          name="description"
          content="Messages from your family on family tree."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          padding: "30px",
          height: "100vh",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Stack></Stack>
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => undefined}
                  edge="end"
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </main>
    </div>
  );
};

export default Messages;
