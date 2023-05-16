import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/about`}>About</Link>
        <Link to={`/vans`}>Vans</Link>
      </nav>
    </header>
  );
};

export default Navigation;
