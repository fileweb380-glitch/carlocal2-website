import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", model: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", model: "", message: "" });
  };

  const inputStyle = {
    width: "100%", padding: "14px 18px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12, color: "#f5f5f5",
    fontSize: 14, outline: "none",
    transition: "border-color 0.3s",
    fontFamily: "Inter, sans-serif"
  };

  return (
    <div style={{ background: "#0a0a0a", padding: "120px 40px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <span style={{ display: "inline-block", fontSize: 11, letterSpacing: 4,
            textTransform: "uppercase", color: "#c8a96e", marginBottom: 16, fontWeight: 600 }}>
            Contact Us
          </span>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900,
            letterSpacing: -1, marginBottom: 16 }}>
            Let's Find Your{" "}
            <span style={{
              background: "linear-gradient(90deg, #c8a96e, #e8c98e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>Dream Car</span>
          </h2>
          <p style={{ color: "#888", fontSize: 16, maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
            Our specialists are ready to guide you to the perfect NEMO vehicle.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.5fr",
          gap: 50, alignItems: "start"
        }}>

          {/* Info Side */}
          <div>
            {[
              { icon: "📍", label: "Visit Us", val: "1 NEMO Boulevard, Monaco" },
              { icon: "📞", label: "Call Us", val: "+1 (800) NEMO-CAR" },
              { icon: "✉️", label: "Email Us", val: "hello@nemocars.com" },
              { icon: "🕐", label: "Showroom Hours", val: "Mon–Sat: 9AM – 8PM" },
            ].map((item) => (
              <div key={item.label} style={{
                display: "flex", gap: 18, marginBottom: 32,
                padding: "22px", borderRadius: 14,
                background: "linear-gradient(145deg, #161616, #111)",
                border: "1px solid rgba(255,255,255,0.06)"
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: "rgba(200,169,110,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: "#c8a96e", letterSpacing: 2,
                    textTransform: "uppercase", fontWeight: 600, marginBottom: 5 }}>{item.label}</div>
                  <div style={{ fontSize: 15, color: "#ddd" }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{
            background: "linear-gradient(145deg, #161616, #111)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20, padding: "40px"
          }}>
            {submitted && (
              <div style={{
                padding: "16px 20px", borderRadius: 12, marginBottom: 24,
                background: "rgba(92,224,122,0.08)",
                border: "1px solid rgba(92,224,122,0.3)",
                color: "#5ce07a", fontSize: 14, textAlign: "center"
              }}>
                ✓ Message sent! We'll get back to you shortly.
              </div>
            )}<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              {[["name", "Full Name", "text"], ["email", "Email Address", "email"]].map(([name, ph, type]) => (
                <input key={name} type={type} name={name} placeholder={ph}
                  value={form[name]} onChange={handleChange} required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "rgba(200,169,110,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <input type="tel" name="phone" placeholder="Phone Number"
                value={form.phone} onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(200,169,110,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
              />
              <select name="model" value={form.model} onChange={handleChange}
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={e => e.target.style.borderColor = "rgba(200,169,110,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
              >
                <option value="" style={{ background: "#1a1a1a" }}>Select a Model</option>
                {["NEMO Phantom", "NEMO Apex", "NEMO Summit", "NEMO Volta"].map(m => (
                  <option key={m} value={m} style={{ background: "#1a1a1a" }}>{m}</option>
                ))}
              </select>
            </div>

            <textarea name="message" placeholder="Your Message" rows={5}
              value={form.message} onChange={handleChange}
              style={{ ...inputStyle, resize: "vertical", marginBottom: 24 }}
              onFocus={e => e.target.style.borderColor = "rgba(200,169,110,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
            />

            <button type="submit" style={{
              width: "100%", padding: "16px",
              background: "linear-gradient(135deg, #c8a96e, #e8c98e)",
              border: "none", borderRadius: 12, cursor: "pointer",
              fontSize: 14, fontWeight: 700, letterSpacing: 2,
              textTransform: "uppercase", color: "#0a0a0a",
              transition: "all 0.3s"
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 16px 40px rgba(200,169,110,0.35)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >Send Message</button>
          </form>
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center", marginTop: 80, paddingTop: 40,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color: "#555", fontSize: 13
        }}>
          <span style={{
            background: "linear-gradient(90deg, #c8a96e, #e8c98e)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            fontWeight: 800, fontSize: 18, letterSpacing: 3
          }}>NEMO</span>
          <p style={{ marginTop: 10 }}>© 2026 NEMO Automotive. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}