import mongoose from "mongoose";
import dotenv from "dotenv/config";

// Load environment variables from .env file
dotenv.config();
const connString = process.env.DB_CONNECTION_STRING;

// Check if the connection string is missing
if (!connString) {
    throw new Error("Connection String is Missing");
}

const db = async () => {
    try {
        await mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to Database!!!....");
    } catch (error) {
        console.error("Couldn't connect to Database:", error);
    }
};

export default db;
