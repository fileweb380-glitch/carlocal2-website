import React from "react";

function Soon() {
  
const styles = {

  page: {
    minHeight: "100vh",
    background: "#0a0a0a",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden",
    position: "relative",

    padding: "20px",
    fontFamily: "Inter, sans-serif"
  },

  glow1: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "rgba(200,169,110,0.12)",
    filter: "blur(120px)",
    top: "-100px",
    left: "-100px"
  },

  glow2: {
    position: "absolute",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background: "rgba(200,169,110,0.10)",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px"
  },

  card: {
    position: "relative",
    zIndex: 2,

    width: "100%",
    maxWidth: "700px",

    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(200,169,110,0.15)",

    backdropFilter: "blur(20px)",

    borderRadius: "28px",

    padding: "70px 40px",

    textAlign: "center",

    boxShadow: "0 0 40px rgba(0,0,0,0.5)"
  },

  badge: {
    display: "inline-block",

    padding: "8px 18px",

    borderRadius: "50px",

    background: "rgba(200,169,110,0.10)",
    border: "1px solid rgba(200,169,110,0.25)",

    color: "#c8a96e",

    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "2px",

    marginBottom: "28px"
  },

  title: {
    fontSize: "clamp(3rem, 8vw, 6rem)",
    fontWeight: "900",

    lineHeight: 1,

    color: "#fff",

    marginBottom: "24px",

    letterSpacing: "4px"
  },

  gold: {
    color: "#c8a96e"
  },

  text: {
    color: "#aaa",

    fontSize: "18px",
    lineHeight: "1.8",

    maxWidth: "520px",

    margin: "0 auto 40px"
  },

  button: {
    padding: "16px 42px",

    borderRadius: "50px",

    border: "none",

    background:
      "linear-gradient(135deg, #c8a96e, #e8c98e)",

    color: "#0a0a0a",

    fontSize: "14px",
    fontWeight: "800",

    letterSpacing: "2px",
    textTransform: "uppercase",

    cursor: "pointer",

    transition: "0.3s",

    boxShadow:
      "0 0 25px rgba(200,169,110,0.35)"
  }

}
  return (

    <div style={styles.page}>

      {/* Glow Background */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* Content */}
      <div style={styles.card}>

        <div style={styles.badge}>
          <a href="/" style={{textDecoration:'none', color:'white'}}>Back to Site</a>
        </div>

        <h1 style={styles.title}>
          COMING
          <span style={styles.gold}> SOON</span>
        </h1>

        <p style={styles.text}>
          Something luxurious and powerful is
          being crafted for you.
          Stay tuned for the grand launch.
        </p>

        <button style={styles.button}>
         When it Started We Notify You
        </button>

      </div>

    </div>

  )
}



export default Soon;