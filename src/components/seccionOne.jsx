import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataContext } from "../context/DataContext";

const SeccionOne = () => {
  const { data } = useContext(DataContext);
  const [isFirstVisit, setIsFirstVisit] = useState(null);

  useEffect(() => {
    const checkVisit = () => {
      const hasVisitedBefore = localStorage.getItem("visited");

      if (hasVisitedBefore === null) {
        setIsFirstVisit(true);
      } else {
        setIsFirstVisit(false);
      }
    };

    checkVisit();
  }, []);

  useEffect(() => {
    if (isFirstVisit === true) {
      localStorage.setItem("visited", "true");
    }
  }, [isFirstVisit]);

  if (!data || !data.hero) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  const titleText = isFirstVisit
    ? data.hero.title.first_time_accessing
    : data.hero.title.second_time_accessing;

  const subtitleText = isFirstVisit ? data.hero.subtitle : data.hero.subtitle;

  const buttonLabel = isFirstVisit
    ? data.hero.button_label.first_time_accessing
    : data.hero.button_label.second_time_accessing;

  return (
    <Box
      sx={{
        height: { xs: "637px", md: "643px" },
        padding: { xs: "0 15px" },
        backgroundImage: `url(${data.hero.bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      {/* title */}
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontFamily: "'Red Hat Display', sans-serif",
          fontSize: { xs: "46px", md: "65px" },
        }}
      >
        {titleText}
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "white",
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "16px",
          letterSpacing: { xs: "0.2px", md: "0px" },
          maxWidth: "600px",
          marginTop: 2,
        }}
      >
        {subtitleText}
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        href={data.hero.button_link}
        sx={{
          marginTop: 3,
          padding: "16px 40px",
          color: "white",
          fontFamily: "'Work Sans', sans-serif",
          fontWeight: "600",
          fontSize: "16px",
          backgroundColor: isFirstVisit ? "#189B5C" : "#0F0F0F",
          textTransform: "none",
          height: "60px",
          maxWidth: "221px",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            backgroundColor: "#F78BD8",
          },
          borderRadius: 0,
        }}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default SeccionOne;
