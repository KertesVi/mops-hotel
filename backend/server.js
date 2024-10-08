import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
dotenv.config(); 

const app = express(); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;
const emailTo = process.env.EMAIL;
const password = process.env.PASSWORD;
const TOKEN = process.env.API_KEY;

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "4ed70de328bc9a",
    pass: "832bc1adc47206",
  },
});

const sender = {
  address: "kerteszviki@gmail.com",
  name: "Mailtrap Test",
};
const recipients = [
  "mopshotel@gmail.com",
];

transporter
  .sendMail({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
    sandbox: true
  })
  .then(console.log, console.error);





async function startServer() {
    try {
      // Connect to MongoDB
     await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("MongoDB connected");
  
      // Start the Express server
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);  // Exit process if there's a connection error
    }
  }
startServer();
   