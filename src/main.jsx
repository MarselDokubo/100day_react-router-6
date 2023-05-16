import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./page/Home.jsx";
import About from "./page/About.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Vans from "./page/Vans.jsx";
import Van from "./page/Van.jsx";
import "./server.js";
// BrowserRouter is a jsx component that exports a Context provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<Van />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
