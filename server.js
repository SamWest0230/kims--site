const express = require("express");
const app = express();
const morgan = require('morgan');
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const booking = require("./booking.js")
const cors = require("cors");
require('dotenv').config()
const PORT = process.env.PORT || 8080;
const path = require('path');

const limiter = rateLimit({
    max: 100,
    windowMs: 15 * 60 * 1000,
    message: "Too many request from this IP"
});
  
app.use(limiter);
app.use(helmet());
app.use(morgan('tiny'));

const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://shrouded-journey-38552.heroku...']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/booking", booking) 


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(express.static(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(express.static(__dirname, 'client/build', 'index.html'));
  });
}


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});