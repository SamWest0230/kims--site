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

app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use("/booking", booking) 


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});