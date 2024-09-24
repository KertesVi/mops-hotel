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
  
  const transporter = nodemailer.createTransport({
    service: 'yahoo', // Or your email provider
    auth: {
      user: emailTo, // Replace with your email
      pass: password,  // Replace with your email password (use app password if 2FA is enabled)
    },
    debug: true,
  });
  
  const sendMail = async (mailOptions) => {
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };


  app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;
  
    const mailOptions = {
      from: email,
      to: emailTo,  // Your email to receive messages
      subject: `New message from ${name}: ${subject}`,
      text: message,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email: ', error);  // This will show the error in your server logs
        return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully.' });
      }
    });
  });
  
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

