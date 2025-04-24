
"use client"

import { useState } from "react"
import React from 'react';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material"
   import MenuIcon from "@mui/icons-material/Menu"
   import WorkIcon from "@mui/icons-material/Work"

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

const Navbar = ({ userName }) => {
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("userName") // Also remove the userName
    navigate("/login")
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    setDrawerOpen(open)
  }

  // Get first letter of name for avatar
  const avatarLetter = userName ? userName.charAt(0).toUpperCase() : "U"

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for larger screens */}
          {/* <WorkIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NUMoves
          </Typography>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {pages.map((page) => (
                    <ListItem key={page.name} disablePadding>
                      <ListItemButton component={RouterLink} to={page.path}>
                        <ListItemText primary={page.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
                <List>
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleLogout}>
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>

          {/* Logo for mobile screens */}
          {/* <WorkIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JOBS
          </Typography>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* User menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={userName} sx={{ bgcolor: "primary.dark" }}>
                  {avatarLetter}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center">Welcome, {userName}</Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar

