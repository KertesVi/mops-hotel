import mongoose from "mongoose";

const { Schema } = mongoose;

const BookingFormSchema = new Schema({
    ownerName: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    petName1: {
        type: String,
        required: true,
    },
    petName2: {
        type: String,
        required: true,
    },
    petAge1: {
        type: Number,
        required: true,
    },
    petAge2: {
        type: Number,
        required: true,
    },
    numberOfGuests: {
        type: Number,
        required: true,
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    }
}, { timestamps: true });


export default mongoose.model("BookingData", BookingFormSchema);
