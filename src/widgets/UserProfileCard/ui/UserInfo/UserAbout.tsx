import UserService from "@Services/UserService";
import { useAppDispatch, useAppSelector } from "@app/store";
import { setAbout } from "@entities/UserProfile";
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
import { useInput } from "@shared/hooks/functional";
import React from "react";

export const UserAbout = ({ isSelfProfile }: { isSelfProfile: boolean }) => {
  const user = useAppSelector((state) => state.userProfile);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const about = useInput(user.about, {
    maxWidth: 300,
    minWidth: 0,
  });
  const dispatch = useAppDispatch();
  function dialogClose() {
    setIsDialogOpen(false);
    about.clear();
  }
  function dialogOpen() {
    if (!isSelfProfile) return;
    setIsDialogOpen(true);
  }
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!about.isValid) {
      about.showError();
      return;
    }
    const formData = new FormData();
    formData.append("about", about.value);
    console.log(about.value.length);
    const res = await UserService.patchUser(formData);
    dispatch(setAbout(res.data.about));
    setIsDialogOpen(false);
  }
  return (
    <>
      <Box>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2, wordBreak: "break-all", display: "inline-block" }}
          onClick={dialogOpen}
        >
          {user.about ? user.about : "No description"}
        </Typography>
      </Box>

      {/* change first and last names Dialog */}
      <Dialog open={isDialogOpen} maxWidth="xs" fullWidth onClose={dialogClose}>
        <DialogTitle>Change about</DialogTitle>

        <form onSubmit={onSubmit}>
          <DialogContent sx={{ pt: 0 }}>
            <DialogContentText paragraph>
              To change names fill in the fields
            </DialogContentText>
            <TextField
              label="About change"
              value={about.value}
              fullWidth
              error={about.isShowError}
              helperText={<Box sx={{ minHeight: 25 }}>{about.errorText}</Box>}
              {...about.handlers}
              multiline
              maxRows={15}
              minRows={3}
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
