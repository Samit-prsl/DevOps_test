const express = require('express')
const Router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/register')

Router.post('/', async (req, res) => {
    try {
      const { email,username, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).json({ message: 'Username already taken' });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create new user
      const newUser =  new User({ email,username, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({message : 'kal aana bhai'});
    }
  });

module.exports = Router