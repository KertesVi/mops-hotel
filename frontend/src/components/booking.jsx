import { useState } from "react";
import "./booking.css";

function Booking() {
  // Set up state for the form fields
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      checkIn,
      checkOut,
      numberOfGuests: numberOfGuests,
    };
    console.log(bookingData); // Handle form data as needed
    // Optionally send the data to a server here (e.g., using fetch or axios)
  };

  return (
    <>
      <div className="flexBox">
        <div className="w3-display-left w3-padding w3-col l6 m8 w3-card">
          <div className="w3-container w3-red">
            <h2>
              <i className="w3-margin-right"></i>Mops Hotel Pilisvörösvár
            </h2>
          </div>
          <div className="w3-container w3-white w3-padding-16">
            <form onSubmit={handleSubmit}>
              <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                <div className="w3-half w3-margin-bottom">
                  <label>
                    <i className="fa fa-calendar-o"></i> Bejelentkezés
                  </label>
                  <input
                    className="w3-input w3-border"
                    type="date"
                    placeholder="DD MM YYYY"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                  />
                </div>
                <div className="w3-half">
                  <label>
                    <i className="fa fa-calendar-o"></i> Kijelentkezés
                  </label>
                  <input
                    className="w3-input w3-border"
                    type="date"
                    placeholder="DD MM YYYY"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="w3-row-padding" style={{ margin: "8px -16px" }}>
                <div className="w3-half w3-margin-bottom">
                  <label>
                    <i className="fa fa-dog"></i> Vendég kutyák száma (max 2)
                  </label>
                  <input
                    className="w3-input w3-border"
                    type="number"
                    value={numberOfGuests}
                    onChange={(e) => setNumberOfGuests(Number(e.target.value))}
                    min="1"
                    max="2"
                  />
                </div>
              </div>
              <button className="w3-button w3-dark-grey" type="submit">
                <i className="fa fa-search w3-margin-right"></i> Foglalás
              </button>
            </form>
          </div>
        </div>
        <div>
          <img
            alt="Mops Hotel"
            src="./assets/images/charlesdeluvio-zqhe4qjVTJI-unsplash.jpg"
            width="500"
            height="600"
          />
        </div>
      </div>
    </>
  );
}

export default Booking;
