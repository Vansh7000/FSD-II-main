import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="p-4 p-md-5 rounded-4 hero-bg text-white">
      <h1 className="display-6 fw-bold">College Event Week 2026</h1>
      <p className="lead mt-2 mb-4">
        Join workshops, tech talks, cultural night, and competitions. Build skills,
        win prizes, and have fun!
      </p>

      <div className="d-flex gap-2 flex-wrap">
        <Button variant="contained" component={NavLink} to="/projects">
          View Events
        </Button>
        <Button variant="outlined" color="inherit" component={NavLink} to="/contact">
          RSVP Now
        </Button>
      </div>
    </div>
  );
}
