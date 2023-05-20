import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "black",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to={`/host`}
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to={`/host/income`}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to={`/host/Review`}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
