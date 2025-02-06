import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null); // Reference for the navbar

  // Close menu if clicked outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false); // Close the menu if clicked outside
      }
    };

    // Add event listener for clicks outside
    document.addEventListener("click", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w3-top w3-large" ref={navbarRef}>
        <div className="w3-bar w3-white w3-card w3-flex w3-align-items-center" id="myNavbar" style={{ zIndex: 1000 }}>
          <Link to="/" className="w3-bar-item w3-button w3-wide">
            Mops Hotel Pilisvörösvár
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ marginLeft: "auto" }}  // Make sure the hamburger stays on the right
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="w3-right w3-hide-small" style={{ display: "flex", alignItems: "center" }}>
            <Link to="/aboutUs" className="w3-bar-item w3-button">
              <i className="fa fa-user"></i> Bemutatkozás
            </Link>
            <Link to="/booking" className="w3-bar-item w3-button">
              <i className="fa fa-th"></i> Foglalás
            </Link>
            <Link to="/contact" className="w3-bar-item w3-button">
              <i className="fa fa-envelope"></i> Kapcsolat
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="w3-bar-block w3-white w3-hide-large w3-hide-medium" style={{ textAlign: "center" }}>
            <Link
              to="/aboutUs"
              className="w3-bar-item w3-button"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa fa-user"></i> Bemutatkozás
            </Link>
            <Link
              to="/booking"
              className="w3-bar-item w3-button"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa fa-th"></i> Foglalás
            </Link>
            <Link
              to="/contact"
              className="w3-bar-item w3-button"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa fa-envelope"></i> Kapcsolat
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default NavigationBar;
