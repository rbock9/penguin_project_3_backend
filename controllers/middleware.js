require("dotenv").config(); // loading env variables
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Amiibo = require("../models/Amiibo");

// CREATE CONTEXT MIDDLEWARE
const createContext = (req, res, next) => {
  // put any data you want in the object below to be accessible to all routes
  req.context = {
    models: {
      User,
      Amiibo,
    },
  };
  next();
};

// MIDDLEWARE FOR AUTHORIZATION (MAKING SURE THEY ARE LOGGED IN)
const isLoggedIn = async (req, res, next) => {
  try {
    // check if auth header exists
    if (req.headers.authorization) {
      // parse token from header
      const token = req.headers.authorization.split(" ")[1]; //split the header and get the token
      if (token) {
        const payload = await jwt.verify(token, process.env.SECRET);
        if (payload) {
          // store user data in request object
          req.user = payload;
          next();
        } else {
          res.status(400).json({ error: "Token verification failed" });
        }
      } else {
        res.status(400).json({ error: "Malformed auth header" });
      }
    } else {
      res.status(400).json({ error: "No authorization header" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

// export custom middleware
module.exports = {
  isLoggedIn,
  createContext
};