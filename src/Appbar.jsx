// Appbar.jsx
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Appbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(100, 175, 236, 0.7)",
          height: "80px",
          width: "80%",
          boxShadow: "none",
          backdropFilter: "blur(10px)",
          zIndex: 1,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            clemaestro Cleaning Services
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Team</Button>
            <Button color="inherit">Contact</Button>
          </Box>

          {/* Hamburger Icon for Mobile */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 250, padding: 2 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>About</MenuItem>
          <MenuItem onClick={handleMenuClose}>Services</MenuItem>
          <MenuItem onClick={handleMenuClose}>Team</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Appbar;
