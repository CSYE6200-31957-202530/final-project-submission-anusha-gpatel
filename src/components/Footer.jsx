import { Box, Container, Typography, Link, Grid, Divider } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              NUMoves
            </Typography>
            <Typography variant="body2" color="text.secondary">
              BUY, SELL AND CONNECT
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link component={RouterLink} to="/" color="inherit" display="block">
              Home
            </Link>
            <Link component={RouterLink} to="/about" color="inherit" display="block">
              Post Your Ad
            </Link>
            <Link component={RouterLink} to="/jobs" color="inherit" display="block">
              Messaging
            </Link>
            <Link component={RouterLink} to="/companies" color="inherit" display="block">
              Your Ads
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" display="block">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@numoves.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 (123) 456-7890
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 27 Chestnut Ave, JP, Boston - 02130
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="#">
            NuMoves
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer

