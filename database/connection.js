const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbURI = process.env.MONGODB_URI;

class Connection {
  static async connect() {
    try {
      await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }

  async subscribeToEvents() {
    // Graceful shutdown on process termination
    process.on("SIGINT", () => {
      this.close();
    });

    // Handle errors after initial connection
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
  }

  static async close() {
    await mongoose.connection.close();
  }

  static async checkConnectionStatus() {
    return await mongoose.connection.readyState;
  }
}

module.exports = Connection;
