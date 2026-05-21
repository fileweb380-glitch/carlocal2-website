import React, { useState } from "react";

const cars = [
  {
    id: 1,
    name: "NEMO Phantom",
    type: "Luxury Sedan",
    price: "$128,000",
    badge: "Best Seller",
    badgeColor: "#c8a96e",
    specs: { power: "550 HP", "0-60": "3.2s", range: "480 mi" },
    img: "https://storage.googleapis.com/miniloop/public/agents/assets/05c078ed-7899-492e-83eb-d079fd660d0f.png",
    desc: "Handcrafted luxury meets raw performance. The Phantom redefines what a sedan can be.",
  },
  {
    id: 2,
    name: "NEMO Apex",
    type: "Sports Coupe",
    price: "$214,000",
    badge: "New",
    badgeColor: "#e05c5c",
    specs: { power: "720 HP", "0-60": "2.6s", range: "320 mi" },
    img: "https://storage.googleapis.com/miniloop/public/agents/assets/42b45e4c-bdb3-475f-b301-5d5ca98139ca.png",
    desc: "Track-bred DNA in a road-legal masterpiece. Pure adrenaline, beautifully engineered.",
  },
  {
    id: 3,
    name: "NEMO Summit",
    type: "Luxury SUV",
    price: "$98,000",
    badge: "Popular",
    badgeColor: "#5cb8e0",
    specs: { power: "430 HP", "0-60": "4.1s", range: "520 mi" },
    img: "https://storage.googleapis.com/miniloop/public/agents/assets/c8299452-88dc-4f32-bde1-35d5130ee9fa.png",
    desc: "Commanding presence, effortless comfort. Summit conquers every terrain with elegance.",
  },
  {
    id: 4,
    name: "NEMO Volta",
    type: "Electric GT",
    price: "$176,000",
    badge: "Electric",
    badgeColor: "#5ce07a",
    specs: { power: "680 HP", "0-60": "2.9s", range: "610 mi" },
    img: "https://storage.googleapis.com/miniloop/public/agents/assets/41ccb3ac-d0ad-43fd-94c3-33e9a079ec7a.png",
    desc: "Zero emissions, maximum exhilaration. The future of driving is already here.",
  },
];

export default function Cars() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{
      background: "linear-gradient(180deg, #0a0a0a 0%, #111 100%)",
      padding: "120px 40px"
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span style={{
            display: "inline-block", fontSize: 11, letterSpacing: 4,
            textTransform: "uppercase", color: "#c8a96e",
            marginBottom: 16, fontWeight: 600
          }}>Our Collection</span>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900,
            letterSpacing: -1, lineHeight: 1.1, marginBottom: 16
          }}>
            Built for <span style={{
              background: "linear-gradient(90deg, #c8a96e, #e8c98e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>Legends</span>
          </h2>
          <p style={{ color: "#888", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Every NEMO model is a testament to obsessive craftsmanship and relentless innovation.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: 24
        }}>
          {cars.map((car) => (
            <div
              key={car.id}
              onMouseEnter={() => setHovered(car.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 20,
                background: hovered === car.id
                  ? "linear-gradient(145deg, #1e1e1e, #161616)"
                  : "linear-gradient(145deg, #161616, #111)",
                border: hovered === car.id
                  ? "1px solid rgba(200,169,110,0.3)"
                  : "1px solid rgba(255,255,255,0.06)",
                overflow: "hidden",
                transition: "all 0.4s ease",
                transform: hovered === car.id ? "translateY(-8px)" : "translateY(0)",boxShadow: hovered === car.id
                  ? "0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,169,110,0.1)"
                  : "0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
                <img
                  src={car.img}
                  alt={car.name}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.5s ease",
                    transform: hovered === car.id ? "scale(1.06)" : "scale(1)"
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)"
                }} />
                {/* Badge */}
                <span style={{
                  position: "absolute", top: 16, right: 16,
                  padding: "5px 14px", borderRadius: 50,
                  background: car.badgeColor, color: "#fff",
                  fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
                  textTransform: "uppercase"
                }}>{car.badge}</span>
              </div>

              {/* Content */}
              <div style={{ padding: "24px 24px 28px" }}>
                <div style={{ fontSize: 11, color: "#c8a96e", letterSpacing: 2,
                  textTransform: "uppercase", fontWeight: 600, marginBottom: 6 }}>{car.type}</div>
                <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{car.name}</div>
                <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6, marginBottom: 20 }}>{car.desc}</p>

                {/* Specs */}
                <div style={{
                  display: "flex", gap: 0,
                  borderRadius: 12, overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  marginBottom: 24
                }}>
                  {Object.entries(car.specs).map(([k, v], i) => (
                    <div key={k} style={{
                      flex: 1, padding: "12px 8px", textAlign: "center",
                      borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                      background: "rgba(255,255,255,0.02)"
                    }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#e8c98e" }}>{v}</div>
                      <div style={{ fontSize: 10, color: "#666", letterSpacing: 1,
                        textTransform: "uppercase", marginTop: 3 }}>{k}</div>
                    </div>
                  ))}
                </div>

                {/* Price + CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 10, color: "#666", letterSpacing: 1,
                      textTransform: "uppercase", marginBottom: 2 }}>Starting from</div>
                    <div style={{
                      fontSize: 22, fontWeight: 800,
                      background: "linear-gradient(90deg, #c8a96e, #e8c98e)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                    }}>{car.price}</div>
                  </div>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    style={{
                      padding: "11px 22px", borderRadius: 50,
                      background: "linear-gradient(135deg, #c8a96e, #e8c98e)",
                      border: "none", cursor: "pointer",
                      fontSize: 12, fontWeight: 700, letterSpacing: 1.5,textTransform: "uppercase", color: "#0a0a0a",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  >Inquire</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}