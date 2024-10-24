import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/navBar";

function App() {
  return (
    <Container
      sx={{
        maxWidth: { xs: "100%", md: 1440 },
        minWidth: 375,
        width: "100%",
        margin: "0 auto",
        backgroundColor: "red",
        padding:0,
      }}
    >
      <Navbar />
    </Container>
  );
}

export default App;
