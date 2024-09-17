import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import User from "./model/Users.js";

dotenv.config(); 

const app = express(); 

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

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
  

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  // Start the server
  startServer();