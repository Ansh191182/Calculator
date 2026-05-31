const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/userSchema");

router.post("/signUp", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fileds are required" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

   const newUser =  await new User({
      name,
      password: hashPassword,
      email,
    });
    await newUser.save();
    return res.status(200).json({ msg: "User successfully saved", newUser });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
