import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";

import { AppProvider, useApp } from "./context/AppContext";

function Shell() {
  const { state } = useApp();

  return (
    <div className={state.theme === "dark" ? "theme-dark" : "theme-light"}>
      <Navbar />

      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </AppProvider>
  );
}