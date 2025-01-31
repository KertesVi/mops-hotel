import { Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <header className="w3-display-container w3-grayscale-min" id="home">
        <div
          className="w3-container w3-light-grey w3-text-dark-gray"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px", 
            height: "100vh", 
            margin: "0", 
          }}
        >
          <div className="w3-center" style={{ flex: 1, padding: "0", margin: "0" }}>
            {" "}
            {/* Padding csökkentése */}
            <p className="w3-jumbo w3-hide-small" style={{ margin: "0" }}>
              Nálunk kedvenced <br /> szeretetteljes törődést kap,
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

          <div
            style={{
              flex: 1,
              position: "relative",
              height: "100%", 
              overflow: "hidden",
              margin: "0", 
              padding: "0", 
            }}
          >
            <img
              src="./src/assets/images/mink-mingle-UAsFSsMDpa0-unsplash.jpg"
              alt="Mopsz kutya"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                margin: "0",
                padding: "0",
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
