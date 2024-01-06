import { Box, Button } from "@mui/material";
import { ChangeEvent } from "react";
import { Edit } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@app/store";
import { setBgImg } from "..";
import { uploadFile } from "../hooks/uploadFile";

export const UserBgImg = ({
  isSelfProfile,
}: {
  isSelfProfile: boolean;
}) => {
  const dispatch = useAppDispatch();
  const bgImage = useAppSelector((state) => state.userProfile.backgroundImage);

  async function fileInputChange(e: ChangeEvent<HTMLInputElement>) {
    const res = await uploadFile(e, "backgroundImage");
    dispatch(setBgImg(res.data.backgroundImage));
  }

  return (
    <Box sx={{ position: "relative", minHeight: '250px' }}>
      <img
        src={bgImage}
        alt=""
        style={{ width: "100%", maxHeight: "100%", objectFit: "cover",minHeight: 'inherit' }}
      />
      <Box sx={{ position: "absolute", top: 20, right: 20 }}>
        {isSelfProfile && (
          <Button
            size="small"
            variant="contained"
            color="pink"
            sx={{ position: "relative" }}
          >
            <Edit fontSize="large" />
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
          </Button>
        )}
      </Box>
    </Box>
  );
};
