import mongoose from "mongoose";

const { Schema } = mongoose;

const BookingFormSchema = new Schema({
    ownerName: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        match: [/^\+?\d{7,15}$/, "Please enter a valid phone number"],
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
        required: true
    },
    petName2: {
        type: String,
        required: false
    },
    petAge1: {
        type: Number,
        required: true,
        min: 0
    },
    petAge2: {
        type: Number,
        required: false,
        min: 0
    },
    numberOfGuests: {
        type: Number,
        required: true,
        min: 1
    },
    checkIn: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value >= new Date().setHours(0, 0, 0, 0); // Check if the date is today or later
            },
            message: "Check-in date must be today or later.",
        },
    },
    checkOut: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return this.checkIn < value;
            },
            message: "Check-out date must be after check-in date",
        },
    }
}, { timestamps: true });


export default mongoose.model("BookingData", BookingFormSchema);
