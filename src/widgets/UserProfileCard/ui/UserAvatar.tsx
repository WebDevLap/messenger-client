import { Edit } from "@mui/icons-material";
import { Box, Avatar, Badge } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { ChangeEvent } from "react";
import { uploadFile } from "../hooks/uploadFile";
import { useAppDispatch, useAppSelector } from "@app/store";
import { setAvatar } from "..";
import { setUserAvatar } from "@entities/User";

export const UserAvatar = ({
  src,
  isSelfProfile,
}: {
  src: string;
  isSelfProfile: boolean;
}) => {
  const avatar = useAppSelector((state) => state.userProfile.avatar);
  const dispatch = useAppDispatch();

  async function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const res = await uploadFile(e, "avatar");
    dispatch(setAvatar(res.data.avatar));
    dispatch(setUserAvatar(res.data.avatar));
  }

  return (
    <Box
      sx={{
        p: 0.5,
        mb: 1,

        border: `5px solid ${blue[500]}`,
        borderRadius: "50%",

        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Badge
        overlap="circular"
        badgeContent={isSelfProfile && <Edit />}
        sx={
          isSelfProfile
            ? {
                ".MuiBadge-badge": {
                  bgcolor: "pink.main",
                  p: 2,
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  cursor: "pointer",
                },
              }
            : {}
        }
      >
        <Avatar
          sx={{
            height: {
              xs: 90,
              sm: 120,
            },
            width: {
              xs: 90,
              sm: 120,
            },
            cursor: "pointer",
          }}
          src={avatar ? avatar : src}
        />
        <input
          style={{
            width: "100%",
            height: "100%",
            opacity: 0,
            position: "absolute",
            top: 0,
            display: "block",
            zIndex: 100,
            left: 0,
            borderRadius: "20%",
          }}
          type="file"
          accept="image/*,.jpg,.jpeg,.png,.webp"
          onChange={onInputChange}
        />
      </Badge>
    </Box>
  );
};
