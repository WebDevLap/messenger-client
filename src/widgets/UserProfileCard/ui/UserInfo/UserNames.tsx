import AuthService from "@Services/AuthService";
import { useAppDispatch, useAppSelector } from "@app/store";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useInput } from "@shared/hooks/functional";
import { setFirstName, setLastName } from "@widgets/UserProfileCard";
import React from "react";

export const UserNames = () => {
  const user = useAppSelector((state) => state.userProfile);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const firstName = useInput(user.firstName, {
    maxWidth: 30,
    minWidth: 2,
  });
  const lastName = useInput(user.lastName, {
    maxWidth: 30,
    minWidth: 2,
  });
  const dispatch = useAppDispatch();

  function dialogClose() {
    setIsDialogOpen(false);
    firstName.clear();
    lastName.clear();
  }
  function dialogOpen() {
    setIsDialogOpen(true);
  }
  async function onSubmit() {
    const formData = new FormData();
    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);

    const res = await AuthService.patchUser(formData);

    dispatch(setFirstName(res.data.firstName));
    dispatch(setLastName(res.data.lastName));


    firstName.clear(res.data.firstName);
    lastName.clear(res.data.lastName);
    setIsDialogOpen(false);
  }

  return (
    <>
      <Box>
        <Typography
          variant="h5"
          onClick={dialogOpen}
          sx={{
            color: blue[100],
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          ~ {user.firstName} {user.lastName}
        </Typography>
      </Box>

      {/* change first and last names Dialog */}
      <Dialog open={isDialogOpen} maxWidth="xs" fullWidth onClose={dialogClose}>
        <DialogTitle>Change names</DialogTitle>

        <form onSubmit={onSubmit}>
          <DialogContent>
            <DialogContentText paragraph>
              To change names fill in the fields
            </DialogContentText>
            <TextField
              label="First name change"
              value={firstName.value}
              fullWidth
              error={firstName.isShowError}
              helperText={
                <Box sx={{ minHeight: 25 }}>{firstName.errorText}</Box>
              }
              {...firstName.handlers}
            />
            <TextField
              label="First name change"
              value={lastName.value}
              fullWidth
              error={lastName.isShowError}
              helperText={
                <Box sx={{ minHeight: 25 }}>{lastName.errorText}</Box>
              }
              {...lastName.handlers}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={dialogClose}>
              close
            </Button>
            <Button variant="contained" color="pink" type="submit">
              change
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
