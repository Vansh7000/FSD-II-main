import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Contact() {
  const { state } = useApp();

  const [form, setForm] = useState({
    name: "",
    email: "",
    dept: "",
    event: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`RSVP Submitted!\nName: ${form.name}\nEvent: ${form.event}`);
    setForm({ name: "", email: "", dept: "", event: "" });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6">
        <div className="card p-4 rounded-4 shadow-sm">
          <h2 className="h4 fw-bold mb-1">RSVP / Register</h2>
          <p className="text-muted mb-3">
            Current Theme: <b>{state.theme}</b> (from <b>useContext</b>)
          </p>

          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <input
              className="form-control"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              className="form-control"
              placeholder="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              className="form-control"
              placeholder="Department"
              name="dept"
              value={form.dept}
              onChange={handleChange}
              required
            />

            <input
              className="form-control"
              placeholder="Event Interested In"
              name="event"
              value={form.event}
              onChange={handleChange}
              required
            />

            <button className="btn btn-primary btn-lg" type="submit">
              Submit RSVP
            </button>
          </form>

          {state.favorites.length > 0 && (
            <div className="mt-4">
              <h6 className="fw-bold mb-2">Your Favorite Events</h6>
              <ul className="mb-0">
                {state.favorites.map((f) => (
                  <li key={f.id}>{f.title}</li>
                ))}
              </ul>
              <small className="text-muted">
                (Favorites coming from global reducer state)
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}