import { useMemo } from "react";
import { useApp } from "../context/AppContext";
import FilterBar from "../components/FilterBar";

const EVENTS = [
  { id: 1, name: "Web Dev Workshop", day: "Mon", time: "10:00 AM", category: "Workshop" },
  { id: 2, name: "AI Quiz", day: "Mon", time: "02:00 PM", category: "Quiz" },
  { id: 3, name: "Hackathon Kickoff", day: "Tue", time: "09:00 AM", category: "Hackathon" },
  { id: 4, name: "Poster Making", day: "Wed", time: "11:00 AM", category: "Contest" },
  { id: 5, name: "Startup Pitch", day: "Thu", time: "01:00 PM", category: "Pitch" },
  { id: 6, name: "Cultural Night", day: "Fri", time: "06:00 PM", category: "Fun" },
];

export default function Schedule() {
  const { state, dispatch } = useApp();

  // ✅ useMemo: optimize derived list + summary counts
  const filteredEvents = useMemo(() => {
    const q = state.search.trim().toLowerCase();
    if (!q) return EVENTS;
    return EVENTS.filter((e) => e.name.toLowerCase().includes(q) || e.category.toLowerCase().includes(q));
  }, [state.search]);

  const summary = useMemo(() => {
    const total = filteredEvents.length;
    const favCount = state.favorites.length;
    return { total, favCount };
  }, [filteredEvents, state.favorites.length]);

  const isFav = (id) => state.favorites.some((e) => e.id === id);

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div>
          <h1 className="h3 fw-bold m-0">Event Schedule</h1>
          <p className="text-muted m-0">
            Total shown: <b>{summary.total}</b> | Favorites: <b>{summary.favCount}</b>
          </p>
        </div>
        <FilterBar />
      </div>

      <div className="row g-3">
        {filteredEvents.map((e) => (
          <div className="col-12 col-md-6 col-lg-4" key={e.id}>
            <div className="card h-100 shadow-sm rounded-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="fw-bold">{e.name}</h5>
                  <span className="badge bg-secondary">{e.category}</span>
                </div>

                <p className="mb-1 text-muted">
                  {e.day} • {e.time}
                </p>

                {isFav(e.id) ? (
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => dispatch({ type: "REMOVE_FAVORITE", payload: e.id })}
                  >
                    Remove Favorite
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => dispatch({ type: "ADD_FAVORITE", payload: e })}
                  >
                    Add to Favorites
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {state.favorites.length > 0 && (
        <div className="card rounded-4 shadow-sm">
          <div className="card-body">
            <h5 className="fw-bold">Your Favorites</h5>
            <ul className="mb-0">
              {state.favorites.map((f) => (
                <li key={f.id}>
                  {f.name} ({f.day} {f.time})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}