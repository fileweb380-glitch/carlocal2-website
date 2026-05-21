import React from "react";

const values = [
  { icon: "⚡", title: "Performance", desc: "Every component engineered for peak performance and driver engagement." },
  { icon: "💎", title: "Luxury", desc: "Uncompromising materials and craftsmanship in every detail." },
  { icon: "🌱", title: "Sustainability", desc: "Leading the shift toward a greener automotive future." },
  { icon: "🛡️", title: "Safety", desc: "Advanced systems that protect what matters most." },
];

export default function About() {
  return (
    <div style={{ background: "#0d0d0d", padding: "120px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span style={{ display: "inline-block", fontSize: 11, letterSpacing: 4,
            textTransform: "uppercase", color: "#c8a96e", marginBottom: 16, fontWeight: 600 }}>
            Who We Are
          </span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900,
            letterSpacing: -1, lineHeight: 1.1, marginBottom: 16 }}>
            The NEMO <span style={{
              background: "linear-gradient(90deg, #c8a96e, #e8c98e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>Story</span>
          </h2>
          <p style={{ color: "#888", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
            Born from a passion to create something extraordinary, NEMO was founded on the belief
            that a car should be more than transportation — it should be an experience that stirs the soul.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 60, alignItems: "center", marginBottom: 80
        }}>
          {/* Image */}
          <div style={{ position: "relative" }}>
            <img
              src="https://storage.googleapis.com/miniloop/public/agents/assets/676ed16f-538c-4881-89b0-8ce8618b83ac.png"
              alt="NEMO Showroom"
              style={{ width: "100%", borderRadius: 20, display: "block",
                border: "1px solid rgba(200,169,110,0.1)" }}
            />
            {/* Floating card */}
            <div style={{
              position: "absolute", bottom: -24, right: -24,
              background: "linear-gradient(135deg, #c8a96e, #e8c98e)",
              borderRadius: 16, padding: "24px 28px", color: "#0a0a0a"
            }}>
              <div style={{ fontSize: 36, fontWeight: 900, lineHeight: 1 }}>15+</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5,
                textTransform: "uppercase", opacity: 0.8, marginTop: 4 }}>Years of Excellence</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 style={{ fontSize: 30, fontWeight: 800, marginBottom: 20, lineHeight: 1.3 }}>
              Crafting Iconic Vehicles Since 2009
            </h3>
            <p style={{ color: "#888", lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>
              NEMO was established with a single mission: to craft automobiles that challenge convention
              and inspire emotion. Over 15 years, we've grown from a boutique atelier into a globally
              recognized symbol of automotive excellence.
            </p>
            <p style={{ color: "#888", lineHeight: 1.9, marginBottom: 32, fontSize: 15 }}>
              Our engineers, designers, and craftspeople share an obsessive dedication to detail —
              from the curve of a door panel to the roar of a hand-built engine. Every NEMO car is
              a statement of who you are.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}style={{
                padding: "14px 32px", borderRadius: 50,
                background: "linear-gradient(135deg, #c8a96e, #e8c98e)",
                border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 700, letterSpacing: 2,
                textTransform: "uppercase", color: "#0a0a0a",
                transition: "all 0.3s"
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 16px 40px rgba(200,169,110,0.35)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >Get In Touch</button>
          </div>
        </div>

        {/* Values Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {values.map((v) => (
            <div key={v.title} style={{
              padding: "32px 28px", borderRadius: 16,
              background: "linear-gradient(145deg, #161616, #111)",
              border: "1px solid rgba(255,255,255,0.06)",
              transition: "all 0.3s"
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{v.icon}</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{v.title}</div>
              <p style={{ color: "#777", fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{
        `@media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }`
      }</style>
    </div>
  );
}