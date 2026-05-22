import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const links = ["home", "cars", "about", "contact"];

function Navbar() {
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
    <>
      <nav className={scrolled ? "navbar scrolled" : "navbar"}>

        {/* LOGO */}
        <div className="logo" onClick={() => scrollTo("home")}>
          <div className="logo-circle">N</div>

          <h1 className="logo-text">NEMO</h1>
        </div>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}>
                {link}
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

        {/* MOBILE MENU ICON */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
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

          {links.map((link) => (
            <button
              key={link}
              className="mobile-link"
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}

          <Link
            to="/soon"
            className="mobile-book-link"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;