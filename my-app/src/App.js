import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Cars from "./Cars";
import About from "./About";
import Contact from "./Contact";
import Soon from "./Soon";

import "./App.css";

function HomePage({ activeSection }) {

  return (

    <div className="App">

      <Navbar active={activeSection} />

      <section
        id="home"
        style={{ scrollMarginTop: "0px" }}
      >
        <Hero />
      </section>

      <section
        id="cars"
        style={{ scrollMarginTop: "80px" }}
      >
        <Cars />
      </section>

      <section
        id="about"
        style={{ scrollMarginTop: "80px" }}
      >
        <About />
      </section>

      <section
        id="contact"
        style={{ scrollMarginTop: "80px" }}
      >
        <Contact />
      </section>

    </div>

  )

}

function App() {

  const [activeSection, setActiveSection] =
    useState("home")

  useEffect(() => {

    const sections = [
      "home",
      "cars",
      "about",
      "contact"
    ]

    const observers = sections.map((id) => {

      const el = document.getElementById(id)

      if (!el) return null

      const obs = new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {

            setActiveSection(id)

          }

        },

        { threshold: 0.3 }

      )

      obs.observe(el)

      return obs

    })

    return () =>

      observers.forEach(
        (o) => o && o.disconnect()
      )

  }, [])

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <HomePage
              activeSection={activeSection}
            />
          }
        />

        <Route
          path="/soon"
          element={<Soon />}
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App;