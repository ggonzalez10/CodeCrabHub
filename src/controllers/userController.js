const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const config = require('../config');

/**
 * Registers a new user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function registerUser(req, res, next) {
  try {
    const { email, password, role } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered.' });
    }

    // Create user
    const user = new User({ email, password, role });
    await user.save();

    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    next(error);
  }
}

/**
 * Logs in a user and returns a JWT token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Generate JWT
    const payload = { id: user._id, email: user.email, role: user.role };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: config.jwtExpiresIn });

    return res.json({ token });
  } catch (error) {
    next(error);
  }
}

/**
 * Returns the profile of the logged-in user
 * @param {*} req
 * @param {*} res
 */
async function getUserProfile(req, res, next) {
  try {
    const userId = req.user.id; // set by auth middleware
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    return res.json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
