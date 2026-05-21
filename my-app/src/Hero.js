import React from "react";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

      <div style={{
        position: "absolute", inset: 0, zIndex: 0, overflow: "hidden"
      }}>
       
       <video src="/video_2026-04-10_17-13-08.mp4" 
       autoPlay loop muted
       style={{  height:'100vw', width:'100vw', overFlow:'hidden',
 objectFit:'cover'

       }} />
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(10,10,10,0.85) 100%)"
        }} />
      </div>

    {/* Hero Content */}
      <div style={{
        position: "relative", zIndex: 1,
        height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "0 20px"
      }}>
        {/* Badge */}
      

        <h1 style={{
          fontSize: "clamp(48px, 9vw, 110px)",
          fontWeight: 900, lineHeight: 1.0, letterSpacing: -2,
          marginBottom: 12, color: "#fff"
        }}>
          DRIVE THE
        </h1>
        <h1 style={{
          fontSize: "clamp(48px, 9vw, 110px)",
          fontWeight: 900, lineHeight: 1.0, letterSpacing: -2,
          marginBottom: 28,
          background: "linear-gradient(90deg, #c8a96e, #e8c98e, #c8a96e)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>
          FUTURE
        </h1>

        <p style={{
          fontSize: "clamp(14px, 1.6vw, 18px)", color: "rgba(255,255,255,0.65)",
          maxWidth: 520, lineHeight: 1.7, marginBottom: 44,
          fontWeight: 300, letterSpacing: 0.5
        }}>
          Experience automotive excellence redefined. NEMO delivers
          precision engineering, breathtaking design, and unmatched
          performance — built for those who demand the best.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <button onClick={() => scrollTo("cars")} style={{
            padding: "16px 40px", borderRadius: 50,
            background: "linear-gradient(135deg, #c8a96e, #e8c98e)",
            border: "none", cursor: "pointer",
            fontSize: 13, fontWeight: 700, letterSpacing: 2,
            textTransform: "uppercase", color: "#0a0a0a",
            transition: "all 0.3s"
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(200,169,110,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >Explore Cars</button><button onClick={() => scrollTo("about")} style={{
            padding: "16px 40px", borderRadius: 50,
            background: "transparent",
            border: "1px solid rgba(200,169,110,0.5)", cursor: "pointer",
            fontSize: 13, fontWeight: 600, letterSpacing: 2,
            textTransform: "uppercase", color: "#c8a96e",
            transition: "all 0.3s"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(200,169,110,0.1)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
          >Our Story</button>
        </div>

        {/* Stats */}
        <div style={{
          position: "absolute", bottom: 60, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", gap: "clamp(24px, 6vw, 80px)",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "20px 40px", borderRadius: 20
        }}>
          {[["500+", "Cars Available"], ["98%", "Client Satisfaction"], ["15+", "Years of Excellence"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 800,
                background: "linear-gradient(90deg, #c8a96e, #e8c98e)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{num}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)",
                letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 22, left: "50%",
        transform: "translateX(-50%)", zIndex: 2,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6
      }}>
        <div style={{
          width: 1, height: 40,
          background: "linear-gradient(to bottom, transparent, #c8a96e)",
          animation: "scrollLine 2s ease-in-out infinite"
        }} />
      </div>

      <style>{
      ` @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
        @keyframes scrollLine {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
        }`
      }</style>
    </div>
  );
}