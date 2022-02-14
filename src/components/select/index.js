import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const CurrencySelect = ({
  currentCurrency,
  setCurrentCurrency,
  changingCurrency,
  setChangingCurrency,
  data,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button color="success" variant="contained" onClick={handleClickOpen}>
        Select Currencies
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel color="success" htmlFor="demo-dialog-native">
                From
              </InputLabel>
              <Select
                color="success"
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={currentCurrency}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                {data.map((v, i) => {
                  return (
                    <MenuItem
                      key={i}
                      onClick={() => setCurrentCurrency(v)}
                      value={v}
                    >
                      {v}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel color="success" id="demo-dialog-select-label">
                To
              </InputLabel>
              <Select
                color="success"
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={changingCurrency}
                input={<OutlinedInput label="Age" />}
              >
                {data.map((v, i) => {
                  return (
                    <MenuItem
                      key={i}
                      onClick={() => setChangingCurrency(v)}
                      value={v}
                    >
                      {v}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="success" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="success" onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
