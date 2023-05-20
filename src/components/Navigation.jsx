import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const style = {
    position: "relative",
    height: "10vh",
    padding: "0 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <header>
      <Link to={`/`}>
        {" "}
        <div className="site-logo">VANLIFE</div>
      </Link>
      <nav>
        <NavLink
          to={`/host`}
          className={({ isActive }) => (isActive ? "isActive" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to={`/about`}
          className={({ isActive }) => (isActive ? "isActive" : "")}
        >
          About
        </NavLink>
        <NavLink
          to={`/vans`}
          className={({ isActive }) => (isActive ? "isActive" : "")}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
