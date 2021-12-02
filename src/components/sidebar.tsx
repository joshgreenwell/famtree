import { ElementType } from "react";
import {
  Drawer,
  List,
  ListItem,
  Stack,
  Avatar,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useAuth0 } from "@auth0/auth0-react";

import { GiPineTree } from "react-icons/gi";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from '@mui/icons-material/Chat';

const drawerWidth = 90;

const routes = [
  {
    name: "Dashboard",
    icon: <DashboardIcon color="primary" />,
  },
  {
    name: "Chats",
    icon: <ChatIcon color="primary" />,
  },
];

export const Sidebar: ElementType = () => {
  const theme = useTheme()
  const { logout } = useAuth0();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >

      <List>
        <ListItem>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              width: drawerWidth,
              height: 50,
            }}
          >
            <GiPineTree style={{ width: 40, height: 40, color: theme.palette.primary.main }} />
          </Stack>
        </ListItem>
        {routes.map(({ name, icon }, index) => (
          <ListItem button key={name}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                width: drawerWidth,
                height: 50,
              }}
            >
              {icon}
              <Typography variant="caption">{name}</Typography>
            </Stack>
          </ListItem>
        ))}
      </List>
      <div style={{ flexGrow: 1 }} />
      <List>
        <ListItem button>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              width: drawerWidth,
              height: 50,
            }}
          >
            <Avatar />
          </Stack>
        </ListItem>
        <ListItem button onClick={() => logout({ returnTo: window.location.origin })}>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              width: drawerWidth,
              height: 50,
            }}
          >
            <LogoutIcon color="primary" />
          </Stack>
        </ListItem>
      </List>
    </Drawer>
  );
};
