import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextInput = ({ setAmount, amount }) => {
  return (
    <TextField
      color="success"
      onChange={(e) => setAmount(e.target.value)}
      fullWidth
      label="Enter Amount (Only type numbers)"
      id="fullWidth"
      type="number"
      value={amount}
    />
  );
};
