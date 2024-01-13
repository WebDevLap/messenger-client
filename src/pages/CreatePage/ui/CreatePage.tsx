import { CreatePost } from "@widgets/CreatePost";
import React from "react";
import "@widgets/CreatePost";
import {  Container } from "@mui/material";

export const CreatePage = () => {

  return (
    <div>
      <Container maxWidth="lg" sx={{my: 1, p: 0}}>
        <CreatePost />
      </Container>
    </div>
  );
};
