import { ElementType, useState } from "react";
import Link from "next/link";
import {
  Drawer,
  List,
  ListItem,
  Stack,
  Avatar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAuth0 } from "@auth0/auth0-react";

import { GiPineTree } from "react-icons/gi";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForumIcon from "@mui/icons-material/Forum";
import ArticleIcon from "@mui/icons-material/Article";

const drawerWidth = 90;

const routes = [
  {
    name: "Family",
    Icon: DashboardIcon,
    link: "/",
  },
  {
    name: "Posts",
    Icon: ArticleIcon,
    link: "/posts",
  },
  {
    name: "Messages",
    Icon: ForumIcon,
    link: "/messages",
  },
];

export const Sidebar: ElementType = () => {
  const theme = useTheme();
  const { user, logout } = useAuth0();

  const [selected, setSelected] = useState<number>(0);

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
            <GiPineTree
              style={{
                width: 40,
                height: 40,
                color: theme.palette.primary.main,
              }}
            />
          </Stack>
        </ListItem>
        {routes.map(({ name, Icon, link }, i) => (
          <ListItem
            button
            key={name}
            onClick={() => setSelected(i)}
            style={
              selected === i
                ? {
                    background: theme.palette.primary.main,
                    color: theme.palette.common.white,
                  }
                : {}
            }
          >
            <Link href={link}>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  width: drawerWidth,
                  height: 50,
                }}
              >
                <Icon
                  color="primary"
                  style={
                    selected === i
                      ? {
                          color: theme.palette.common.white,
                        }
                      : {}
                  }
                />
                <Typography variant="caption">{name}</Typography>
              </Stack>
            </Link>
          </ListItem>
        ))}
      </List>
      <div style={{ flexGrow: 1 }} />
      <List>
        <ListItem
          button
          onClick={() => setSelected(routes.length)}
          style={
            selected === routes.length
              ? {
                  background: theme.palette.primary.main,
                  color: theme.palette.common.white,
                }
              : {}
          }
        >
          <Link href="/profile">
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                width: drawerWidth,
                height: 65,
              }}
            >
              <Avatar src={user?.picture} />
              <Typography variant="caption">Profile</Typography>
            </Stack>
          </Link>
        </ListItem>
        <ListItem
          button
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              width: drawerWidth,
              height: 50,
            }}
          >
            <LogoutIcon color="primary" />
            <Typography variant="caption">Logout</Typography>
          </Stack>
        </ListItem>
      </List>
    </Drawer>
  );
};
