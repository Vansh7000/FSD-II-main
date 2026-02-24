import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    "nav-link " + (isActive ? "active fw-bold" : "");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          CampusFest
        </NavLink>

        <div className="d-flex gap-3 align-items-center">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
          <NavLink className={linkClass} to="/projects">
            Events
          </NavLink>
          <NavLink className={linkClass} to="/contact">
            RSVP
          </NavLink>
          <NavLink className={linkClass} to="/schedule">
            Schedule
          </NavLink>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}