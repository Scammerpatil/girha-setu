import Address from "@/models/Address";
import Flat from "@/models/Flat";
import Notification from "@/models/Notification";
import mongoose from "mongoose";

// Database Connection

const dbConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to the Database");
    });
    Address;
    Flat;
    Notification;
    connection.on("error", (error) => {
      console.log("Error: ", error);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default dbConfig;
