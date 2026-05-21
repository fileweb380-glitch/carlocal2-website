import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const links = ["home", "cars", "about", "contact"];

function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <div>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "14px 40px" : "22px 40px",
          background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(200,169,110,0.15)"
            : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
          }}
          onClick={() => scrollTo("home")}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #c8a96e, #e8c98e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: 16,
              color: "#0a0a0a",
              letterSpacing: 1,
            }}
          >
            N
          </div>

          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 3,
              background: "linear-gradient(90deg, #c8a96e, #e8c98e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NEMO
          </span>
        </div>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            gap: 36,
            listStyle: "none",
          }}
        >
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: active === l ? "#c8a96e" : "#aaa",
                  borderBottom:
                    active === l
                      ? "1px solid #c8a96e"
                      : "1px solid transparent",
                  paddingBottom: 2,
                  transition: "all 0.3s",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/soon">
          <button
            style={{
              padding: "10px 24px",
              borderRadius: 50,
              background: "linear-gradient(135deg, #c8a96e, #e8c98e)",
              border: "none",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#0a0a0a",
            }}
          >
            Book Now
          </button>
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#c8a96e",
            fontSize: 24,
          }}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10,10,10,0.97)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: 24,
              right: 40,
              background: "none",
              border: "none",
              color: "#c8a96e",
              fontSize: 28,
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: active === l ? "#c8a96e" : "#f5f5f5",
                fontFamily: "Inter, sans-serif",
              }}
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