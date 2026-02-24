import { useApp } from "../context/AppContext";

export default function FilterBar() {
  const { state, dispatch } = useApp();

  return (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <input
        className="form-control"
        style={{ maxWidth: 320 }}
        placeholder="Search events..."
        value={state.search}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />
      <button
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: "CLEAR_FAVORITES" })}
      >
        Clear Favorites
      </button>
    </div>
  );
}