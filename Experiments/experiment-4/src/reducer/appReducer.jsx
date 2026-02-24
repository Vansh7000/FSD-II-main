export const initialState = {
  theme: "light",          // context global state
  favorites: [],           // reducer-managed list
  search: "",              // filter/search
};

export function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case "SET_SEARCH":
      return { ...state, search: action.payload };

    case "ADD_FAVORITE": {
      const exists = state.favorites.some((e) => e.id === action.payload.id);
      if (exists) return state;
      return { ...state, favorites: [...state.favorites, action.payload] };
    }

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((e) => e.id !== action.payload),
      };

    case "CLEAR_FAVORITES":
      return { ...state, favorites: [] };

    default:
      return state;
  }
}