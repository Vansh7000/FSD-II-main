import { useApp } from "../context/AppContext";

export default function Footer() {
  const { state } = useApp();

  return (
    <footer className="border-top py-3 mt-auto">
      <div className="container d-flex justify-content-between align-items-center">
        <small className="text-muted">© 2026 CampusFest</small>
        <small className="text-muted">Theme: <b>{state.theme}</b></small>
      </div>
    </footer>
  );
}