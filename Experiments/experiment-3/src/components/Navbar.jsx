import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    textTransform: "none",
    fontWeight: 600,
    opacity: isActive ? 1 : 0.8,
  });

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar className="container">
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>
          CampusFest
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button color="inherit" component={NavLink} to="/" style={linkStyle}>
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/projects"
            style={linkStyle}
          >
            Events
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/contact"
            style={linkStyle}
          >
            RSVP
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
