import './App.css';
import { Link } from 'react-router-dom';
import "./index.css"

function App() {
  return (
    <>
      <header className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
        <div>
          <span className="w3-jumbo w3-hide-small">Nálunk kedvenced szeretetteljes törődést kap,<br/> míg te nyugodtan pihenhetsz – mintha csak otthon lenne!</span>
      
          <p>
            <Link to="/booking" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">
              Időpont keresés
            </Link>
          </p>
        </div>
       
      </header>
    </>
  );
}

export default App;

