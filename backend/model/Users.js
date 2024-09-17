import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  fullname: { type: String, required: true },
  address: { type: String, required: true },
  petName: { type: String, required: true },
  petAge: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model("User", userSchema);