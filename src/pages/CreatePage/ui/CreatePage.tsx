import React from "react";
// import "@widgets/CreatePost";
import {  Container } from "@mui/material";
import { CreatePost } from "@features/CreatePost";

export const CreatePage = () => {

  return (
    <div>
      <Container maxWidth="lg" sx={{my: 1, p: 0}}>
        <CreatePost />
      </Container>
    </div>
  );
};
