import { useAppDispatch, useAppSelector } from "@app/store";
import { setUserNickname } from "@entities/User";
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
import { setNickname } from "@entities/UserProfile";
import React from "react";
import UserService from "@Services/UserService";

export const UserNickname = ({ isSelfProfile }: { isSelfProfile: boolean }) => {
  const user = useAppSelector((state) => state.userProfile);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const nickname = useInput(user.nickname, {
    minWidth: 5,
    maxWidth: 15,
    specialChars: "_",
    noSpacing: true,
  });

  function dialogClose() {
    setIsDialogOpen(false);
    nickname.clear();
  }
  function dialogOpen() {
    if (!isSelfProfile) return;
    setIsDialogOpen(true);
  }
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nickname.isValid) {
      nickname.showError();
      return;
    }
    const formData = new FormData();
    formData.append("nickname", nickname.value);

    const res = await UserService.patchUser(formData);

    dispatch(setNickname(res.data.nickname));
    dispatch(setUserNickname(res.data.nickname));
    setIsDialogOpen(false);
  }

  return (
    <>
      <Box>
        <Typography
          variant="h5"
          onClick={dialogOpen}
          sx={{
            color: blue[500],
            cursor: "pointer",
            display: "inline-block",
            wordBreak: "break-all",
          }}
        >
          @{user.nickname}
        </Typography>
      </Box>

      {/* change first and last names Dialog */}
      <Dialog open={isDialogOpen} maxWidth="xs" fullWidth onClose={dialogClose}>
        <DialogTitle>Change nickname</DialogTitle>
        <form action="" onSubmit={onSubmit}>
          <DialogContent sx={{ pt: 0 }}>
            <DialogContentText paragraph>
              To change names fill in the fields
            </DialogContentText>
            <TextField
              label="Nickname change"
              value={nickname.value}
              fullWidth
              error={nickname.isShowError}
              helperText={
                <Box sx={{ minHeight: 25 }}>{nickname.errorText}</Box>
              }
              {...nickname.handlers}
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
