const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const User = require("../models/userModels");
const e = require("express");

router.post("/register", async (req, res) => {
  try {

    //Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

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
      .json({ success: "true", message: "User registered successfully", user: newUser });
  } catch (err) {
    return res
      .status(400)
      .json({ success: "false", message: "User already exists", error: err.message });
  }
});

router.post("/login", async (req, res) => {
    try{
        //Check if user exists

        const { email, password } = req.body;
        const user = await User.findOne({ email});
        if(!user) { 
            return res.status(404).json({ message: "User not found" });
        }
       
        //Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        //Generate JWT token
        const token = jwt.sign({ id: user._id}, 'Scaler_movies', { expiresIn: "1d" });
        return res.status(200).json({ message: "Login successful", user, token });
    } catch (err) {
        return res.status(500).json({ message: "Login failed", error: err.message });
    }
});

module.exports = router;
