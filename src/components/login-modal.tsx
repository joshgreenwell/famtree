import { ElementType } from "react";
import { Modal, Stack, Button, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { GiPineTree } from "react-icons/gi";
import { useTheme } from "@mui/material/styles";

type Props = {
  open: boolean;
};

export const LoginModal: ElementType<Props> = ({ open }) => {
  const { loginWithRedirect } = useAuth0();
  const theme = useTheme()

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        spacing={4}
        justifyContent="center"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          outline: "none",
        }}
      >
        <Stack>
          <Stack direction='row' alignItems='center' justifyContent='center'>
            <GiPineTree style={{ width: 75, height: 75, color: theme.palette.primary.main }} />
          </Stack>
          <Typography align='center' variant="h6">Please Log In</Typography>
          <Typography align='center'>
            You do not appear to be logged in.
          </Typography>
        </Stack>
        <Button variant="outlined" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      </Stack>
    </Modal>
  );
};
