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
import { setFirstName, setLastName } from "@entities/UserProfile";
import React from "react";
import { usePatchUser } from "@features/User";

export const UserNames = ({ isSelfProfile }: { isSelfProfile: boolean }) => {
  const user = useAppSelector((state) => state.userProfile);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const patchUser = usePatchUser();

  const firstName = useInput(user.firstName, {
    maxWidth: 15,
    minWidth: 2,
    noSpacing: true,
  });
  const lastName = useInput(user.lastName, {
    maxWidth: 15,
    minWidth: 2,
    noSpacing: true,
  });
  const dispatch = useAppDispatch();

  function dialogClose() {
    setIsDialogOpen(false);
    firstName.clear();
    lastName.clear();
  }
  function dialogOpen() {
    if (!isSelfProfile) return;
    setIsDialogOpen(true);
  }
  async function onSubmit(e: any) {
    e.preventDefault()
    if (!firstName.isValid || !lastName.isValid) {
      firstName.showError();
      lastName.showError();
      return;
    }
    const formData = new FormData();
    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);

    const res = await patchUser(formData);

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
            cursor: "pointer",
            display: "inline-block",
            wordBreak: "break-all",
          }}
        >
          ~ {user.firstName} {user.lastName}
        </Typography>
      </Box>

      {/* change first and last names Dialog */}
      <Dialog open={isDialogOpen} maxWidth="xs" fullWidth onClose={dialogClose}>
        <DialogTitle>Change names</DialogTitle>

        <form onSubmit={onSubmit}>
          <DialogContent sx={{ pt: 0 }}>
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
              label="Last name change"
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
