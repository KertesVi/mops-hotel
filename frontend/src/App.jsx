import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w3-display-container w3-grayscale-min" id="home" >
      {/* Full-Screen Background Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh", // Full screen height
          display: "flex",
          alignItems: isMobile ? "center" : "center",
          justifyContent: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left",
          padding: isMobile ? "20px" : "5%",
          overflow: "hidden",
        }}
      >
        {/* Background Image (placed behind the text) */}
        <img
          src="/mink-mingle-UAsFSsMDpa0-unsplash.jpg"
          alt="Mopsz kutya"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure it covers the entire screen
            zIndex: "-1", // Image is behind the text (lower z-index)
          }}
        />

        {/* Text & Button Container */}
        <div
          style={{
            position: "relative",
            zIndex: "2", // Keep text on top
            color: "rgba(0, 0, 0, 0.7)", // White text for contrast
            width: isMobile ? "90%" : "50%",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.9)", // Darker shadow for better contrast
          }}
        >
          <p
            className="w3-xxlarge"
            style={{
              fontSize: isMobile ? "6vw" : "2.5rem", // Adjust font size for mobile
              lineHeight: isMobile ? "1.2" : "1.5",
              marginBottom: "20px",
              paddingTop: isMobile ? "70%" : 0,
              
            }}
          >
            Nálunk kedvenced <br /> szeretetteljes törődést kap, <br />
            míg te nyugodtan pihensz, <br /> mintha csak otthon lenne!
          </p>

          {/* Center Button on Mobile */}
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            <Link
              to="/booking"
              className="w3-button w3-dark-grey w3-large"
              style={{
                padding: isMobile ? "12px 24px" : "14px 28px",
                fontSize: isMobile ? "1rem" : "1.2rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent button
                borderRadius: "8px",
              }}
            >
              Időpont keresés
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
