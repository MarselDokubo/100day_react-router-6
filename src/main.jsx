import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Vans from "./pages/Vans/Vans.jsx";
import Van from "./pages/Vans/Van.jsx";
import "./server.js";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
// BrowserRouter is a jsx component that exports a Context provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Van />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
