import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Content = lazy(() => import("./pages/Content"));

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <h1>React Multi-Page App</h1>
          <nav>
            <NavLink
              end
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/content"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Content
            </NavLink>
          </nav>
        </header>

        <main className="app-content">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/content" element={<Content />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
