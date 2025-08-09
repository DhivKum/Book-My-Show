const express = require("express");

const router = express.Router();

const User = require("../models/userModels");

router.post("/register", async (req, res) => {
  try {
    //if User already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    //Create a new User
    const newUser = new User(req.body);
    await newUser.save();
    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "User registration failed", error: err.message });
  }
});

router.post("/login", async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email});
        if(!user) { 
            return res.status(404).json({ message: "User not found" });
        }
        if(user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        return res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        return res.status(500).json({ message: "Login failed", error: err.message });
    }
});

module.exports = router;
