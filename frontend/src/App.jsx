import "./App.css";
import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <header
          className=" w3-display-container w3-grayscale-min"
          id="home"
        >
          <div
            className="w3-container w3-light-grey w3-text-dark-gray "
            style={{
              padding: "128px 16px",
              minHeight: "100vh",
            }}
          >
         
            <p className="w3-jumbo w3-hide-small">
              Nálunk kedvenced szeretetteljes törődést kap,
              <br /> míg te nyugodtan pihensz, <br /> mintha csak otthon lenne!
            </p>

            <p>
              <Link
                to="/booking"
                className="w3-button w3-dark-grey w3-large"
                type="submit"
              >
                Időpont keresés
              </Link>
            </p>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
