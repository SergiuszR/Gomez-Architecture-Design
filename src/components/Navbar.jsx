import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "active" : ""}>
      <ul>
        <li>
          <Link smooth to="home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="about">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="projects">
            Projects
          </Link>
        </li>
        <li>
          <Link smooth to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
