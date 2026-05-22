import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const links = ["home", "cars", "about", "contact"];

function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* LOGO */}
        <div
          className="logo"
          onClick={() => scrollTo("home")}
        >
          <div className="logo-circle">N</div>

          <span className="logo-text">NEMO Test</span>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className={active === l ? "active" : ""}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* BOOK BUTTON */}
        <Link to="/soon" className="book-link">
          <button className="book-btn">
            Book Now
          </button>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">

          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="mobile-link"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;