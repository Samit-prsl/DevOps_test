const express = require('express')
const Router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/register')

Router.post('/', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the user
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Check the password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      //Generate JWT token
      const token = jwt.sign({ username: user.username }, 'your-secret-key');
  
      res.json({ token });
      
    } catch (err) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = Router