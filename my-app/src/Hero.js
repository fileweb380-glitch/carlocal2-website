import React from "react";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <video
          src="/video_2026-04-10_17-13-08.mp4"
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(10,10,10,0.85) 100%)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(48px, 9vw, 110px)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -2,
            marginBottom: 12,
            color: "#fff",
          }}
        >
          DRIVE THE
        </h1>

        <h1
          style={{
            fontSize: "clamp(48px, 9vw, 110px)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: -2,
            marginBottom: 28,
            background:
              "linear-gradient(90deg, #c8a96e, #e8c98e, #c8a96e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          FUTURE
        </h1>

        <p
          style={{
            fontSize: "clamp(14px, 1.6vw, 18px)",
            color: "rgba(255,255,255,0.65)",
            maxWidth: 520,
            lineHeight: 1.7,
            marginBottom: 44,
            fontWeight: 300,
            letterSpacing: 0.5,
          }}
        >
          Experience automotive excellence redefined. NEMO delivers
          precision engineering, breathtaking design, and unmatched
          performance.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => scrollTo("cars")}
            style={{
              padding: "16px 40px",
              borderRadius: 50,
              background:
                "linear-gradient(135deg, #c8a96e, #e8c98e)",
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#0a0a0a",
            }}
          >
            Explore Cars
          </button>

          <button
            onClick={() => scrollTo("about")}
            style={{
              padding: "16px 40px",
              borderRadius: 50,
              background: "transparent",
              border: "1px solid rgba(200,169,110,0.5)",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#c8a96e",
            }}
          >
            Our Story
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;