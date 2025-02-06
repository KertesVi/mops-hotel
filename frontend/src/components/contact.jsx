import { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const API_URL = "https://mops-hotel-v5sj.onrender.com";
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to hide elements based on the screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run it on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    setFeedbackMessage("");

    try {
      const response = await fetch(`${API_URL}/api/contactForm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Response:", formData);
        setFeedbackMessage(
          "Üzenet sikeresen elküldve! Hamarosan felvesszük Önnel a kapcsolatot."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFeedbackMessage(
          "Hiba történt az üzenet küldésekor. Kérem hívjon minket a +36 70 886-1365 telefonszámon."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedbackMessage("Server hiba.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setFeedbackMessage(""), 5000);
    }
  };

  return (
    <div
      className="w3-container w3-light-grey"
      style={{ padding: "64px", minHeight: "100vh" }}
      id="contact"
    >
     

      {isMobile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Stack the items vertically
            alignItems: "center",
            justifyContent: "center",
            marginTop: "48px",
            gap: "20px", // Reduced gap for better spacing between items
          }}
        >
           <h3 className="w3-center" >
        Kapcsolat
      </h3>
          <p className="w3-center w3-large">
            Az alábbi módokon érhetsz el bennünket:
          </p>
          <p>
            <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>{" "}
            Pilisvörösvár, Pest{" "}
            <a
              href="https://g.co/kgs/Zr4WbRe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Térkép
            </a>
          </p>

          <p>
            <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i>
            <a href="tel:+36708861365" style={{ textDecoration: "none" }}>
              +36 70 886-1365
            </a>
          </p>

          <p>
            <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i>{" "}
            <a
              href="mailto:mopshotel@yahoo.com?subject=Szabad helyek érdeklődés&body=Tisztelt Szállásadó,%0D%0A%0D%0AÉrdeklődni szeretnénk, hogy az alábbi napokon van-e szabad hely:%0D%0A[DÁTUMOK].%0D%0A%0D%0AVálaszukat előre is köszönjük!%0D%0AÜdvözlettel,%0D%0A[NÉV]"
              style={{ textDecoration: "none" }}
            >
              mopshotel@yahoo.com
            </a>
          </p>
        </div>
      )}

      <div>
        <br />
        {feedbackMessage === "" ? (
          <>
            {/* Show contact form only if it's not a mobile device */}
            {!isMobile && (
              <div className="w3-display-middle w3-padding w3-col l6 m8 w3-card">
                 <p className="w3-center w3-large">
            Az alábbi módokon érhetsz el bennünket:
          </p>
          <p>
            <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>{" "}
            Pilisvörösvár, Pest{" "}
            <a
              href="https://g.co/kgs/Zr4WbRe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Térkép
            </a>
          </p>

          <p>
            <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i>
            <a href="tel:+36708861365" style={{ textDecoration: "none" }}>
              +36 70 886-1365
            </a>
          </p>

          <p>
            <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i>{" "}
            <a
              href="mailto:mopshotel@yahoo.com?subject=Szabad helyek érdeklődés&body=Tisztelt Szállásadó,%0D%0A%0D%0AÉrdeklődni szeretnénk, hogy az alábbi napokon van-e szabad hely:%0D%0A[DÁTUMOK].%0D%0A%0D%0AVálaszukat előre is köszönjük!%0D%0AÜdvözlettel,%0D%0A[NÉV]"
              style={{ textDecoration: "none" }}
            >
              mopshotel@yahoo.com
            </a>
          </p>
                <p className="w3 w3-large">Küldj egy üzenetet:</p>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <p>
                    <input
                      className="w3-input w3-padding-16 w3-border"
                      type="text"
                      placeholder="Név"
                      id="name"
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
                      id="email"
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
                      id="subject"
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
                      className="w3-button w3-dark-grey w3-large"
                      type="submit"
                      disabled={isLoading}
                      style={{
                        padding: isMobile ? "12px 24px" : "14px 28px",
                        fontSize: isMobile ? "1rem" : "1.2rem",
                        backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent button
                        borderRadius: "8px",
                      }}
                    >
                      {isLoading ? "Az üzenet küldés alatt..." : "Küldés"}
                    </button>
                  </p>
                </form>
              </div>
            )}
          </>
        ) : feedbackMessage ===
          "Üzenet sikeresen elküldve! Hamarosan felvesszük Önnel a kapcsolatot." ? (
          <div className="w3-center w3-green">{feedbackMessage}</div>
        ) : (
          <div className="w3-center w3-orange">{feedbackMessage}</div>
        )}
      </div>
    </div>
  );
}

export default Contact;
