import { ElementType } from "react";
import { Box, Stack, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { GiPineTree } from "react-icons/gi";

type Props = {};

export const Header: ElementType<Props> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Stack sx={{ width: 66 }}>
            <GiPineTree style={{ width: 40, height: 40 }} />
          </Stack>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FamTree
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
