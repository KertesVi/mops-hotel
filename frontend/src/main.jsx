import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import NavigationBar from "./components/navigationBar.jsx";
import Footer from "./components/footer.jsx";
import Contact from "./components/contact.jsx";
import Booking from "./components/booking.jsx";
import AboutUs from "./components/aboutUs.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);