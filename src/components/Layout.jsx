"use client"

import { useState, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
//import Navbar from "./Navbar";
import Footer from "./Footer"
import { Box, Container } from "@mui/material"

const Layout = () => {
  const [userName, setUserName] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    // Get the user name from sessionStorage
    const storedUserName = sessionStorage.getItem("userName")

    if (storedUserName) {
      setUserName(storedUserName)
    } else {
      // Fallback to getting it from the token
      const token = sessionStorage.getItem("token")
      if (token) {
        try {
          const decodedToken = jwtDecode(token)
          setUserName(decodedToken.fullName || "User")
        } catch (error) {
          console.error("Invalid token:", error)
        }
      }
    }
  }, [])

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar userName={userName} />
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout

