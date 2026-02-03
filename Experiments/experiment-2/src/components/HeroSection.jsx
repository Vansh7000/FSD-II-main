import { Box, Typography, Button } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        height: "70vh",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        College Event Management System
      </Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Explore • Participate • Celebrate
      </Typography>

      <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
        Register Now
      </Button>
    </Box>
  );
}

export default HeroSection;
