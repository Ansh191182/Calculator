const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db");
connectDB();
app.use(cors());
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Radhe Radhe Jai shree krishn</h1>");
});

const signupRouter = require("./routes/userRoute");

app.use("/", signupRouter);
app.listen(PORT, () => {
  console.log(`app is successfully running on port number${PORT}`);
});
