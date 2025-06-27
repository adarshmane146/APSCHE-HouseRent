const mongoose = require('mongoose');

const connectionofDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // no options here
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

module.exports = connectionofDb;
