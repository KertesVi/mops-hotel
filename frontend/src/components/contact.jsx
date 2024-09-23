function Contact() {
    return (
      <>
        <div className="w3-container" id="contact">
          <h2>Kapcsolat</h2>
          <p>Örömmel várjuk a megkeresésedet az alábbi módokon!</p>
          <i className="fa fa-map-marker w3-text-red" style={{ width: '30px' }}></i> Pilisvörösvár, Pest<br />
          <i className="fa fa-phone w3-text-red" style={{ width: '30px' }}></i> Telefon: +36 70 88613<br />
          <i className="fa fa-envelope w3-text-red" style={{ width: '30px' }}></i> Email: @gmail.com<br />
          <form action="/action_page.php" target="_blank">
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Név"
                required
                name="Name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="email"
                placeholder="Email"
                required
                name="Email"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Tárgy"
                required
                name="subject"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Üzenet szövege"
                required
                name="Message"
              />
            </p>
            <p>
              <button className="w3-button w3-black w3-padding-large" type="submit">
                KÜLDÉS
              </button>
            </p>
          </form>
        </div>
      </>
    );
  }
  
  export default Contact;
  