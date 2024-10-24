import React, { useContext } from "react";
import "../src/index.css";
import { Container, Box, Typography, Skeleton } from "@mui/material";
import { DataProvider, DataContext } from "../src/context/DataContext";
import Navbar from "./components/navBar";
import SeccionOne from "./components/seccionOne";
import SeccionBlog from "./components/sectionBlog";

function App() {
  const { loading, error } = useContext(DataContext);

  if (loading) {
    return (
      <Container
        sx={{
          maxWidth: { xs: "100%", md: 1440 },
          minWidth: 375,
          width: "100%",
          margin: "0 auto",
          padding: 0,
        }}
      >
        <Navbar />
        <Box sx={{ padding: "20px" }}>
          {/* Skeleton for title */}
          <Skeleton variant="text" height={60} width="80%" />
          {/* Skeletons for card*/}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Skeleton variant="rectangular" width={345} height={356} />
            <Skeleton variant="rectangular" width={345} height={356} />
            <Skeleton variant="rectangular" width={345} height={356} />
          </Box>
        </Box>
      </Container>
    );
  }

  if (error) {
    return <Typography variant="h6">Error: {error.message}</Typography>;
  }

  return (
    <Container
      sx={{
        maxWidth: { xs: "100%", md: 1440 },
        minWidth: 375,
        width: "100%",
        margin: "0 auto",
        padding: 0,
      }}
    >
      <Navbar />
      <SeccionOne />
      <SeccionBlog />
    </Container>
  );
}

export default function AppWrapper() {
  return (
    <DataProvider>
      <App />
    </DataProvider>
  );
}
