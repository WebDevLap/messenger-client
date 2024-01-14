import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Avatar,
  Badge,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { ChangeEvent } from "react";
import { uploadFile } from "../hooks/uploadFile";
import { useAppDispatch, useAppSelector } from "@app/store";
import { setUserAvatar } from "@entities/User";
import { setAvatar } from "@entities/UserProfile";
import { useMenu } from "@shared/hooks/functional";
import UserService from "@Services/UserService";

export const UserAvatar = ({ isSelfProfile }: { isSelfProfile: boolean }) => {
  const avatar = useAppSelector((state) => state.userProfile.avatar);
  const dispatch = useAppDispatch();
  const menu = useMenu();
  async function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    // if (!isSelfProfile) return;
    const res = await uploadFile(e, "avatar");
    dispatch(setAvatar(res.data.avatar));
    dispatch(setUserAvatar(res.data.avatar));
    menu.close();
  }

  async function onInputDelete() {
    const formData = new FormData();
    formData.append("avatar", "");

    const res = await UserService.patchUser(formData);
    dispatch(setAvatar(""));
    dispatch(setUserAvatar(""));
    menu.close();
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
        badgeContent={
          isSelfProfile && <Edit sx={{ color: "pink.contrastText" }} />
        }
        sx={
          isSelfProfile
            ? {
                ".MuiBadge-badge": {
                  bgcolor: "pink.main",
                  p: 2,
                  borderRadius: "50%",
                  cursor: "pointer",
                  pointerEvents: "none",
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
        <Box onClick={menu.open}>
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
              cursor: isSelfProfile ? "pointer" : "auto",
            }}
            src={avatar}
          />
        </Box>

        {isSelfProfile && (
          <>
            <Menu
              open={!!menu.openEl}
              onClose={menu.close}
              anchorEl={menu.openEl}
              anchorOrigin={{
                horizontal: "right",
                vertical: "bottom",
              }}
              transformOrigin={{
                horizontal: "right",
                vertical: "top",
              }}
            >
              <MenuList disablePadding>
                <MenuItem
                  sx={{
                    position: "relative",
                  }}
                >
                  <ListItemIcon>
                    <Edit fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Select Image</ListItemText>
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
                </MenuItem>
                <MenuItem
                  sx={{
                    position: "relative",
                  }}
                  onClick={() => {
                    onInputDelete();
                  }}
                >
                  <ListItemIcon>
                    <Delete />
                  </ListItemIcon>
                  <ListItemText>Delete Image</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        )}
      </Badge>
    </Box>
  );
};
