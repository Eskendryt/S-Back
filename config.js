const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://eskndr:jWWx3dLG4ilphrto@cluster0.eefsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;
