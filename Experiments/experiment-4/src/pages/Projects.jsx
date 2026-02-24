import CardComponent from "../components/CardComponent";
import { useApp } from "../context/AppContext";

export default function Projects() {
  const { state, dispatch } = useApp();

  const events = [
    { id: 1, title: "Web Dev Workshop", desc: "React + UI Libraries hands-on session.", tag: "Workshop" },
    { id: 2, title: "AI Quiz", desc: "Fast quiz round with surprise rewards.", tag: "Quiz" },
    { id: 3, title: "Poster Making", desc: "Design competition with judging.", tag: "Contest" },
    { id: 4, title: "Coding Sprint", desc: "DSA speed challenge for 60 mins.", tag: "Coding" },
    { id: 5, title: "Startup Pitch", desc: "Pitch your idea in 3 minutes.", tag: "Pitch" },
    { id: 6, title: "Sports Meet", desc: "Cricket, badminton, and relay.", tag: "Sports" },
  ];

  const isFav = (id) => state.favorites.some((e) => e.id === id);

  return (
    <div>
      <h1 className="h3 fw-bold">All Events</h1>
      <p className="text-muted">
        Add events to Favorites (uses <b>useReducer</b> + <b>useContext</b>).
      </p>

      <div className="row g-3 mt-1">
        {events.map((e) => (
          <div className="col-12 col-md-4" key={e.id}>
            <div className="h-100">
              <CardComponent title={e.title} desc={e.desc} tag={e.tag} />

              <div className="mt-2 d-flex gap-2">
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
        <div className="card rounded-4 shadow-sm mt-4">
          <div className="card-body">
            <h5 className="fw-bold mb-2">Your Favorites</h5>
            <ul className="mb-0">
              {state.favorites.map((f) => (
                <li key={f.id}>{f.title}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}