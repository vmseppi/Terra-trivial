import React, { useState } from "react";
import { AppBar, Toolbar, Box, useMediaQuery, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import logoMobile from "../assets/logo_mobile.png";
import logoDesktop from "../assets/logo_desktop.png";
import burguer from "../assets/burguer.png";

const Navbar = () => {
  const menuItems = [
    { text: "Store", link: "/" },
    { text: "Our Story", link: "/our-story" },
    { text: "Journal", link: "/journal" },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //States for burguer menu
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Menú hamburguesa para móviles
  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        width: "100%",
        height: {
          sm: 60,
          md: 100,
        },
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        boxSizing: "border-box",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          minHeight: "60px",
          padding: {
            sm: "20px 15px 20px 30px",
            md: "26px 124px 26px 45px",
          },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: { sm: 122, md: 278.4 },
            height: { sm: 21, md: 48 },
          }}
        >
          <img
            src={isMobile ? logoMobile : logoDesktop}
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* Menu desktop */}
        <Box sx={{ display: { xs: "none", md: "block",} }}>
          {menuItems.map((item) => (
            <Button key={item.text} color="inherit" 
            sx={{ fontFamily: 'Work Sans, sans-serif', fontSize: '17px', marginLeft:"32px" }}>
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Burguer menu  for mobile */}
        <Box sx={{ display: { xs: "block", md: "none", width: "32px" } }}>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{
              width: "100%",
              height: "20px",
              padding: 0,
            }}
          >
            <img
              src={burguer}
              alt="Menu Icon"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </IconButton>
        </Box>

        {/* Drawer lateral menu for mobile*/}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
