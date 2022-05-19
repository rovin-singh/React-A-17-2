import React from "react-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div id="navbar">
      <div className="logo">BLACKBAKERY</div>
      <div className="navmain">
        <ul>
          <li>Service</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </div>
      <div>
        <button>Contacts</button>
      </div>
    </div>
  );
};
export default Navbar;
