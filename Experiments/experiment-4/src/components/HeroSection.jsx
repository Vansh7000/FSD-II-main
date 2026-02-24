import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="p-4 p-md-5 rounded-4 hero-bg">
      <h1 className="display-6 fw-bold">College Event Week 2026</h1>

      <p className="lead mt-2 mb-4">
        Join workshops, tech talks, cultural night, and competitions. Build skills,
        win prizes, and have fun!
      </p>

      <div className="d-flex gap-2 flex-wrap">
        <NavLink to="/projects" className="btn btn-light fw-semibold">
          View Events
        </NavLink>

        <NavLink to="/schedule" className="btn btn-outline-light fw-semibold">
          View Schedule
        </NavLink>

        <NavLink to="/contact" className="btn btn-primary fw-semibold">
          RSVP Now
        </NavLink>
      </div>
    </div>
  );
}