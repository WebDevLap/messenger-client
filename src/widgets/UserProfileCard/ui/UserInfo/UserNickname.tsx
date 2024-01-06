import AuthService from "@Services/AuthService";
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
import { setNickname } from "@widgets/UserProfileCard";
import React from "react";

export const UserNickname = () => {
  const user = useAppSelector((state) => state.userProfile);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const nickname = useInput(user.nickname, {
    minWidth: 5,
    maxWidth: 15,
  });

  function dialogClose() {
    setIsDialogOpen(false);
    nickname.clear();
  }
  function dialogOpen() {
    setIsDialogOpen(true);
  }
  async function onSubmit() {
    const formData = new FormData();
    formData.append("nickname", nickname.value);

    const res = await AuthService.patchUser(formData);
    dispatch(setNickname(res.data.nickname));
    dispatch(setUserNickname(res.data.nickname));
    setIsDialogOpen(false);
    nickname.clear(res.data.nickname);
  }

  return (
    <>
      <Box>
        <Typography
          variant="h5"
          onClick={dialogOpen}
          sx={{
            color: blue[300],
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          @{user.nickname}
        </Typography>
      </Box>

      {/* change first and last names Dialog */}
      <Dialog open={isDialogOpen} maxWidth="xs" fullWidth onClose={dialogClose}>
        <DialogTitle>Change names</DialogTitle>
        <form action="" onSubmit={onSubmit}>
          <DialogContent>
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
