const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require(""./routes/userRoute")

dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database server connected succesfully"))
  .catch((err: String) => console.log(err));

app.use("/api/user", userRoute)
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is active");
});
