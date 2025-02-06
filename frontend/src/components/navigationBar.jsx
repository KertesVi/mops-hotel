import { useState } from "react";
import { Link } from 'react-router-dom';


function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="w3-top w3-large">
        <div className="w3-bar w3-white w3-card" id="myNavbar">
          <Link to="/" className="w3-bar-item w3-button w3-wide">
            Mops Hotel Pilisvörösvár
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="w3-right w3-hide-small">
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
          <div className="w3-bar-block w3-white w3-hide-large w3-hide-medium">
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
  