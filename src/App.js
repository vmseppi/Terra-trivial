import React from "react";
import "../src/index.css";
import { Container } from "@mui/material";
import { DataProvider } from '../src/context/DataContext';
import Navbar from "./components/navBar";
import SeccionOne from "./components/seccionOne";

function App() {
  return (
    <DataProvider> 
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
      <SeccionOne/>
    </Container>
    </DataProvider>
  );
}

export default App;
