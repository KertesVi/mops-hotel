import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/mopshotel@yahoo.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please check the backend.");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div
      className="w3-container w3-light-grey"
      style={{ padding: "128px 16px" }}
      id="contact"
    >
     
      <h3 className="w3-center">Kapcsolat</h3>
      <p className="w3-center w3-large">Az alábbi módokon érhetsz el bennünket:</p>
      <div style={{ marginTop: "48px" }}>
        <p>
          <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>{" "}
          Pilisvörösvár, Pest   <a href="https://g.co/kgs/Zr4WbRe">Térkép</a>
        </p>
        <p>
          <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i>{" "}
          +36 70 886-1300
        </p>
        <p>
          <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i>{" "}
          Email: mopshotel@yahoo.com
        </p>
        <br />
        <p className="w3 w3-large">Küld egy üzenetet:</p>
        <form onSubmit={handleSubmit}>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Név"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="email"
              placeholder="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Tárgy"
              required
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              
            />
          </p>
          <p>
            <textarea
              className="w3-input w3-padding-16 w3-border"
              placeholder="Üzenet szövege"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              
            />
          </p>
          <p>
            <button
              className="w3-button w3-grey w3-padding-large"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Küldés..." : "KÜLDÉS"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
