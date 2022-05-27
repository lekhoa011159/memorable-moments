const mongoose = require("mongoose");

function mongoConnection() {
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log(`DATABASE CONNECTED !`))
      .catch((err) => console.log(`Error: ${err}`));
  } catch (err) {
    throw err;
  }
}

module.exports = mongoConnection;
