import { useAppDispatch } from "@app/store";
import { Box, Button } from "@mui/material";
import React from "react";

export const AddPreview = ({
  setImage,
}: {
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
  function onImageChange(e: React.FormEvent<HTMLInputElement>) {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
  }

  return (
    <Box sx={{ mb: 3 }}>
      <Button variant="outlined" sx={{ position: "relative" }}>
        Upload preview
        <input
          style={{
            opacity: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          onChange={onImageChange}
          type="file"
          accept="image/*,.jpg,.jpeg,.png,.jfif,.gif"
        />
      </Button>
    </Box>
  );
};
