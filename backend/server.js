import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import FormModel from "./db/formData.model.js";
import BookindModel from './db/bookindData.model.js'; 

dotenv.config(); 

const app = express(); 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: ["https://www.mopshotel.fun", "https://mops-hotel.vercel.app"] }));


const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI;
const yahooPass = process.env.YAHOO_PASS;
const yahooUser = process.env.YAHOO_USER;
const googleUser = process.env.GOOGLE_USER;

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: yahooUser,
    pass: yahooPass
  }
});

const sendEmail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info);
      }
    });
  });
};


app.post("/api/bookingForm", async (req, res) => {
  const bookingData = req.body;
 
  try {
    const newbookingData = new BookindModel(bookingData);
    const savedData = await newbookingData.save();

    const userMailOptions = createMailOptions(
      bookingData.email.toLowerCase(),
      'Érdeklődésed megkaptuk!',
      `Kedves ${bookingData.ownerName}, Hamarosan felvesszük veled a kapcsolatot!`
    );

    // Create the email for admin
    const adminMailOptions = createMailOptions(
      googleUser,
      'Érdeklődés érkezett!',
      `Név: ${bookingData.ownerName}, Email: ${bookingData.email}, Telefonszám: ${bookingData.phone}, 
      Kutyus neve: ${bookingData.petName1}, Kutyus életkora: ${bookingData.petAge1}, 
      Kutyus neve: ${bookingData.petName2}, Kutyus életkora: ${bookingData.petAge2}, 
      Vendégek száma: ${bookingData.numberOfGuests}, Érkezés: ${bookingData.checkIn}, 
      Távozás: ${bookingData.checkOut}`
    );
    
  await Promise.all([sendEmail(userMailOptions), sendEmail(adminMailOptions)]);
    res.status(201).json(savedData); 

  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: 'An error occurred while saving the data' });
  }
});

app.post("/api/contactForm", async (req, res) => {
  const formData = req.body;

  try {
    const newFormData = new FormModel(formData);
    const savedData = await newFormData.save();

      // Create the email for the user
      const userMailOptions = createMailOptions(
        formData.email.toLowerCase(),
        'Érdeklődésed megkaptuk!',
        `Kedves ${formData.name}, Hamarosan felvesszük veled a kapcsolatot!`
      );
  
      // Create the email for admin
      const adminMailOptions = createMailOptions(
        googleUser,
        'Érdeklődés érkezett!',
        `Név: ${formData.name}, Email: ${formData.email}, Üzenet: ${formData.message}`
      );

    await Promise.all([sendEmail(userMailOptions), sendEmail(adminMailOptions)]); 
    res.status(201).json(savedData);
    
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "An error occurred while saving the data" });
  }
});


async function startServer() {
    try {
  
     await mongoose.connect(mongoURI);
      console.log("MongoDB connected");
  
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); 
    }
  }
startServer();
   
