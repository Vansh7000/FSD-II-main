import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0f2027",
        color: "white",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="body2">
        © 2025 College Event Management System
      </Typography>
    </Box>
  );
}

export default Footer;
