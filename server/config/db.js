
const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://madhukiranpeddi_db_user:L2v4NrZRrWj1fHzy@cluster-2.mgg424r.mongodb.net/";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);

        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
