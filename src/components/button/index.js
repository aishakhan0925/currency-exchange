import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const Btn = ({ onClick, value }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="success" onClick={onClick} variant="contained">
        {value}
      </Button>
    </Stack>
  );
};
