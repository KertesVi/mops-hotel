import { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Function to update state based on window size
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide footer on mobile screens
  if (isMobile) return null;
  
  return (
    <>
      <footer className="w3-padding-12 w3-black w3-bottom w3-center w3-margin-top">
        <p>
          Az oldalt készítette{" "}
          <a
            href="https://devopsjourney.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="w3-hover-text-green"
          >
            Kertész Viktória
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
