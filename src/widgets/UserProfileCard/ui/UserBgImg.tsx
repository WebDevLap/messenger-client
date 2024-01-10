import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import { ChangeEvent } from "react";
import { Edit } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@app/store";
import { uploadFile } from "../hooks/uploadFile";
import { setBgImg } from "@entities/UserProfile";
import { useMenu } from "@shared/hooks/functional";
import DeleteIcon from "@mui/icons-material/Delete";
import UserService from "@Services/UserService";
export const UserBgImg = ({ isSelfProfile }: { isSelfProfile: boolean }) => {
  const dispatch = useAppDispatch();
  const bgImage = useAppSelector((state) => state.userProfile.backgroundImage);
  const menu = useMenu();

  async function fileInputChange(e: ChangeEvent<HTMLInputElement>) {
    const res = await uploadFile(e, "backgroundImage");
    dispatch(setBgImg(res.data.backgroundImage));
    menu.close();
  }

  async function fileInputDelete() {
    const formData = new FormData();
    formData.append("backgroundImage", "");

    const res = await UserService.patchUser(formData);
    dispatch(setBgImg(""));
    menu.close();
  }

  return (
    <Box sx={{ position: "relative", minHeight: "250px", maxHeight: "500px" }}>
      <img
        src={bgImage}
        alt=""
        style={{
          width: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          minHeight: "inherit",
        }}
      />
      <Box sx={{ position: "absolute", top: 20, right: 20 }}>
        {isSelfProfile && (
          <>
            <Button
              size="small"
              variant="contained"
              color="pink"
              sx={{ cursor: "pointer" }}
              onClick={menu.open}
            >
              <Edit fontSize="large" />
            </Button>
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
                    "&:hover": {
                      bgcolor: "success.dark",
                    },
                  }}
                >
                  <ListItemIcon>
                    <Edit fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Select Image</ListItemText>
                  <input
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 0,
                      width: "100",
                      height: "100%",
                    }}
                    onChange={fileInputChange}
                    type="file"
                    accept="image/*,.png,.jpg,.git,.web"
                  />
                </MenuItem>
                <MenuItem
                  sx={{
                    position: "relative",
                    "&:hover": {
                      bgcolor: "error.dark",
                    },
                  }}
                  onClick={() => {
                    fileInputDelete();
                  }}
                >
                  <ListItemIcon>
                    <DeleteIcon />
                  </ListItemIcon>
                  <ListItemText>Delete Image</ListItemText>
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        )}
      </Box>
    </Box>
  );
};
