const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB ${connection.connection.host}`);
  } catch (error) {
    console.log(`Nepavyko prisijungti ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
