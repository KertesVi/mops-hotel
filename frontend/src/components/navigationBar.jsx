import { Link } from 'react-router-dom';


function NavigationBar() {
    return (
      <>
        <div className="w3-top">
          <div className="w3-bar w3-white w3-card" id="myNavbar">
            <Link to="/" className="w3-bar-item w3-button w3-wide">Mops Hotel Pilisvörösvár</Link>
            {/* Right-sided navbar links */}
            <div className="w3-right w3-hide-small">
              <Link to="/aboutUs" className="w3-bar-item w3-button"><i className="fa fa-user"></i> Bemutatkozás</Link>
              <Link to="/booking" className="w3-bar-item w3-button"><i className="fa fa-th"></i> Foglalás</Link>
              <Link to="/contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> Kapcsolat</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default NavigationBar;
  