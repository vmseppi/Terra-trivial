import React, { useContext } from "react";
import { Box, Typography, Button } from "@mui/material";
import { DataContext } from "../context/DataContext";

export default function SectionBlog() {
  const { data } = useContext(DataContext);

  if (!data || !data.body) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  const cards = Object.values(data.body.posts);

  return (
    <Box
      sx={{
        padding: { xs: "64px 16px", md: "120px 0px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#F7F8F4",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: { xs: "32px", md: "72px" },
          fontFamily: "'Red Hat Display', sans-serif",
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: "bold",
        }}
      >
        {data.body.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          rowGap: "32px",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "345px", md: "276px" },
              height: { xs: "356px", md: "486px" },
              border: "none",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
            }}
          >
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: "100%",
                minHeight: { xs: "256px", md: " 362px" },
                maxHeight: { md: "362px" },
                minWidth: "345px",
                maxWidth: { md: "276px" },
                objectFit: "cover",
              }}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "white",
                padding: "8px 12px",
                fontSize: "10px",
                borderRadius: "19px",
                display: { xs: "none", md: "block" },
                fontFamily: "'Red Hat Display', sans-serif",
                backgroundColor: card.type === "Type A" ? "#189B5C" : "#F78BD8",
              }}
            >
              Type Pill
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {/* Fecha y Tipo */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  marginTop: "16px",
                }}
              >
                <Typography
                  sx={{
                    color: "#0F0F0F",
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {card.date}
                </Typography>
                <Box
                  sx={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor:
                      card.type === "Type A" ? "#189B5C" : "#F78BD8",
                    margin: "0 8px",
                    display: { xs: "block", md: "none" },
                  }}
                />
                <Typography
                  sx={{
                    color: "#0F0F0F",
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontSize: { xs: "10px", md: "40px" },
                    fontWeight: "bold",
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {card.type}
                </Typography>
              </Box>

              {/* description */}
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: "regular",
                  lineHeight: "21px",
                  color: "#0F0F0F",
                }}
              >
                This is the title of the journal post lorem ipsum dolor sit
                ameis is the title of the journal post lorem ipsum.
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        href={data.body.button_link}
        sx={{
          backgroundColor: "#189B5C",
          color: "white",
          padding: "16px 40px",
          textTransform: "none",
          borderRadius: 0,
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "16px",
          lineHeight: "28px",
          letterSpacing: "0.5px",
          marginTop: { xs: "32px", md: "96px" },
          "&:hover": {
            backgroundColor: "#F78BD8",
          },
        }}
      >
        {data.body.button_label}
      </Button>
    </Box>
  );
}
