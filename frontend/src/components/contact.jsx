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

    const url = "https://send.api.mailtrap.io/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Api-Token": "demomailtrap.com token 1727857468",
      },
      body: '{"to":[{"email":"mopshotel@yahoo.com","name":"Kertesz Viki"}], \
      "from":{"email":{formData.email},"name":{formData.name},\
      "attachments":[{"content":"PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==",\
      "filename":"index.html",\
      "type":"text/html","disposition":"attachment"}],\
      "custom_variables":{"user_id":"45982","batch_id":"PSJ-12"},\
      "headers":{"X-Message-Source":"dev.mydomain.com"},\
      "subject":"Your Example Order Confirmation",\
      "text":"Congratulations on your order no. 1234",\
      "category":"API Test"}',
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="w3-container w3-light-grey"
      style={{ padding: "128px 16px" }}
      id="contact"
    >
      <h3 className="w3-center">Kapcsolat</h3>
      <p className="w3-center w3-large">
        Az alábbi módokon érhetsz el bennünket:
      </p>
      <div style={{ marginTop: "48px" }}>
        <p>
          <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>{" "}
          Pilisvörösvár, Pest <a href="https://g.co/kgs/Zr4WbRe">Térkép</a>
        </p>
        <p>
          <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> +36
          70 886-1300
        </p>
        <p>
          <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></i>{" "}
          Email: mopshotel@yahoo.com
        </p>
        <br />
        <p className="w3 w3-large">Küld egy üzenetet:</p>
        <form
          id="contact-form"
          action="sendemail.php"
          method="POST"
          onSubmit={handleSubmit}
        >
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
            >
              {isLoading ? "Küldés..." : "Küldés"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
