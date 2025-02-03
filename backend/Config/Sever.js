const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://multiera95:95@recipe.q5sco.mongodb.net/?retryWrites=true&w=majority&appName=Recipe");
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);

    }
};

module.exports = connectDB;
