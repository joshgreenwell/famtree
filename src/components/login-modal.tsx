import { ElementType } from "react";
import { Modal, Box, Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

type Props = {
  open: boolean
};

export const LoginModal: ElementType<Props> = ({ open }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          outline: "none"
        }}
      >
        <Button onClick={() => loginWithRedirect()}>Login</Button>
      </Box>
    </Modal>
  );
};
