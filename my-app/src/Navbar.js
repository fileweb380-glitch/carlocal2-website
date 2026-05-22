import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const links = ["home", "cars", "about", "contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      padding: mobile ? "18px 20px" : "20px 40px",

      background: scrolled
        ? "rgba(10,10,10,0.95)"
        : "transparent",

      backdropFilter: scrolled ? "blur(20px)" : "none",

      borderBottom: scrolled
        ? "1px solid rgba(255,255,255,0.08)"
        : "none",

      transition: "0.4s ease",
    },

    logo: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
    },

    logoCircle: {
      width: 38,
      height: 38,
      borderRadius: "50%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      background:
        "linear-gradient(135deg, #c8a96e, #e8c98e)",

      color: "#000",
      fontWeight: 900,
    },

    logoText: {
      fontSize: mobile ? 20 : 24,
      fontWeight: 800,
      letterSpacing: 3,

      background:
        "linear-gradient(90deg, #c8a96e, #e8c98e)",

      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    navLinks: {
      display: mobile ? "none" : "flex",
      alignItems: "center",
      gap: 35,
      listStyle: "none",
    },

    navButton: {
      background: "none",
      border: "none",
      color: "#aaa",
      cursor: "pointer",

      textTransform: "uppercase",
      letterSpacing: 2,

      fontSize: 13,
    },

    bookBtn: {
      display: mobile ? "none" : "block",

      padding: "12px 24px",

      border: "none",
      borderRadius: 50,

      cursor: "pointer",

      background:
        "linear-gradient(135deg, #c8a96e, #e8c98e)",

      color: "#000",
      fontWeight: "bold",
    },

    menuBtn: {
      display: mobile ? "block" : "none",

      background: "none",
      border: "none",

      color: "#c8a96e",

      fontSize: 34,
      cursor: "pointer",
    },

    mobileMenu: {
      position: "fixed",
      inset: 0,

      background: "rgba(0,0,0,0.97)",

      zIndex: 2000,

      display: "flex",
      flexDirection: "column",

      alignItems: "center",
      justifyContent: "center",

      gap: 35,
    },

    mobileLink: {
      background: "none",
      border: "none",

      color: "#fff",

      fontSize: 28,

      letterSpacing: 3,
      textTransform: "uppercase",

      cursor: "pointer",
    },

    closeBtn: {
      position: "absolute",
      top: 30,
      right: 30,

      background: "none",
      border: "none",

      color: "#c8a96e",

      fontSize: 35,
      cursor: "pointer",
    },

    mobileBook: {
      textDecoration: "none",

      color: "#000",

      background:
        "linear-gradient(135deg, #c8a96e, #e8c98e)",

      padding: "14px 30px",

      borderRadius: 50,

      fontWeight: "bold",
    },
  };

  return (
    <>
      <nav style={styles.navbar}>

        {/* LOGO */}
        <div
          style={styles.logo}
          onClick={() => scrollTo("home")}
        >
          <div style={styles.logoCircle}>N</div>

          <h1 style={styles.logoText}>NEMO</h1>
        </div>

        {/* DESKTOP LINKS */}
        <ul style={styles.navLinks}>
          {links.map((link) => (
            <li key={link}>
              <button
                style={styles.navButton}
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* BOOK BUTTON */}
        <Link to="/soon">
          <button style={styles.bookBtn}>
            Book Now
          </button>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          style={styles.menuBtn}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={styles.mobileMenu}>

          <button
            style={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {links.map((link) => (
            <button
              key={link}
              style={styles.mobileLink}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}

          <Link
            to="/soon"
            style={styles.mobileBook}
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