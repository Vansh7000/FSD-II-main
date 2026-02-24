import { createContext, useContext, useMemo, useReducer } from "react";
import { appReducer, initialState } from "../reducer/appReducer";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // memoize context value to avoid extra re-renders
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider />");
  return ctx;
}