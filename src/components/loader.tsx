import { ElementType } from "react";
import { CircularProgress, Stack } from "@mui/material";

type Props = {
  height?: string | number;
};

export const Loader: ElementType<Props> = ({ height = "auto" }) => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height }}>
      <CircularProgress />
    </Stack>
  );
};
