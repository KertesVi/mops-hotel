import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import FormModel from "./db/formData.model.js";
import BookindModel from './db/bookindData.model.js'; 


dotenv.config(); 

const app = express(); 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;


app.post("/api/bookingForm", async (req, res) => {
  const bookingData = req.body;
 
  try {
    const newbookingData = new BookindModel(bookingData);
    const savedData = await newbookingData.save();
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
  
      app.listen(port, "0.0.0.0", () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); 
    }
  }
startServer();
   
