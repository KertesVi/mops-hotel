import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import FormData from './db/formData.model.js';

dotenv.config(); 

const app = express(); 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;


app.post("/api/contactForm", async (req, res) => {
  const formData = req.body;
 
  try {
    const newFormData = new FormData(formData);
    const savedData = await newFormData.save();
    res.status(201).json(savedData); 
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: 'An error occurred while saving the data' });
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
   