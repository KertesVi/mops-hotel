import { useState } from "react";
import "./booking.css";


function Booking() {
  // Define state for each form field
  const [bookingData, setBookingData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    petName1: "",
    petName2: "",
    petAge1: "",
    petAge2: "",
    numberOfGuests: "1",
    checkIn: "",
    checkOut: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedbackMessage("");

    // Send the data to the backend
    try {
      const response = await fetch('/api/bookingForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        setFeedbackMessage("Üzenet sikeresen elküldve!");
        setBookingData({
          ownerName: "",
          phone: "",
          email: "",
          petName1: "",
          petName2: "",
          petAge1: "",
          petAge2: "",
          numberOfGuests: "1",
          checkIn: "",
          checkOut: ""
        });
        setTimeout(() => setFeedbackMessage(""), 5000); 
      } else {
        setFeedbackMessage("Hiba történt az üzenet küldésekor."); 
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedbackMessage("Hiba történt az üzenet küldésekor."); 
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <>
      <div className="flexBox">
        <div className="w3-display-middle w3-padding w3-col l6 m8 w3-card">
          <div className="w3-container w3-red w3-padding w3-col w3-margin-bottom w3-margin-top">
            <h2 className="w3-center">Mops Hotel Pilisvörösvár</h2>
          </div>

          {feedbackMessage === "" ? (
            <div className="w3-container w3-white w3-padding-16">
              <form onSubmit={handleSubmit}>
                {/* Owner Name and Phone */}
                <div className="w3-row-padding">
                  <div className="w3-half w3-margin-bottom">
                    <label>Gazdi neve:</label>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="ownerName"
                      value={bookingData.ownerName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w3-half w3-margin-bottom">
                    <label>Telefonszám:</label>
                    <input
                      className="w3-input w3-border"
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email and Number of Guests */}
                <div className="w3-row-padding">
                  <div className="w3-half w3-margin-bottom">
                    <label>Email:</label>
                    <input
                      className="w3-input w3-border"
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w3-half w3-margin-bottom">
                    <label>Vendég kutyák száma (max 2):</label>
                    <input
                      className="w3-input w3-border"
                      type="number"
                      name="numberOfGuests"
                      value={bookingData.numberOfGuests}
                      onChange={handleChange}
                      min="1"
                      max="2"
                      required
                    />
                  </div>
                </div>

                {/* Pet 1 Name and Age */}
                <div className="w3-row-padding">
                  <div className="w3-half w3-margin-bottom">
                    <label>1. Állat neve:</label>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="petName1"
                      value={bookingData.petName1}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w3-half w3-margin-bottom">
                    <label>1. Állat kora:</label>
                    <input
                      className="w3-input w3-border"
                      type="number"
                      name="petAge1"
                      value={bookingData.petAge1}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Pet 2 Name and Age (conditionally rendered) */}
                {bookingData.numberOfGuests === "2" && (
                  <div className="w3-row-padding">
                    <div className="w3-half w3-margin-bottom">
                      <label>2. Állat neve:</label>
                      <input
                        className="w3-input w3-border"
                        type="text"
                        name="petName2"
                        value={bookingData.petName2}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="w3-half w3-margin-bottom">
                      <label>2. Állat kora:</label>
                      <input
                        className="w3-input w3-border"
                        type="number"
                        name="petAge2"
                        value={bookingData.petAge2}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                {/* Check-In and Check-Out Dates */}
                <div className="w3-row-padding">
                  <div className="w3-half w3-margin-bottom">
                    <label>Bejelentkezés:</label>
                    <input
                      className="w3-input w3-border"
                      type="date"
                      name="checkIn"
                      value={bookingData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w3-half">
                    <label>Kijelentkezés:</label>
                    <input
                      className="w3-input w3-border"
                      type="date"
                      name="checkOut"
                      value={bookingData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w3-button w3-dark-grey" type="submit">
                  {isLoading ? "Az üzenet küldés alatt..." : "Foglalás"}
                </button>
              </form>
            </div>
          ) : (
            <div className="w3-center w3-green">{feedbackMessage}</div>
          )}
        </div>

        {/* Image */}
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
