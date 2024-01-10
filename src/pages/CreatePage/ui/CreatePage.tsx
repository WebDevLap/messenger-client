import { TipTap } from "@widgets/TipTap";
import React from "react";
import "@widgets/TipTap";
import { Box } from "@mui/material";

export const CreatePage = () => {
  const [description, setDescription] = React.useState("");

  return (
    <div>
      <Box sx={{ maxWidth: 700, margin: "0 auto" }}>
        <Box
          sx={{
            m: {
              sm: 2,
              xs: 1,
            },
          }}
        >
          <TipTap setDescription={setDescription} />
        </Box>
      </Box>
    </div>
  );
};
