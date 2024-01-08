import { Edit } from "@mui/icons-material";
import { Box, Avatar, Badge } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { ChangeEvent } from "react";
import { uploadFile } from "../hooks/uploadFile";
import { useAppDispatch, useAppSelector } from "@app/store";
import { setUserAvatar } from "@entities/User";
import { setAvatar } from "@entities/UserProfile";

export const UserAvatar = ({
  isSelfProfile,
}: {
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
                  borderRadius: "50%",
                  cursor: "pointer",
                  height: {
                    xs: 10,
                    sm: 20,
                    md: 30,
                    lg: 40,
                  },
                  width: {
                    xs: 10,
                    sm: 20,
                    md: 30,
                    lg: 40,
                  },
                },
              }
            : {}
        }
      >
        <Avatar
          sx={{
            height: {
              xs: 70,
              sm: 100,
              md: 120,
              lg: 130,
              xl: 150,
            },
            width: {
              xs: 70,
              sm: 100,
              md: 120,
              lg: 130,
              xl: 150,
            },
            cursor: "pointer",
          }}
          src={avatar}
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
