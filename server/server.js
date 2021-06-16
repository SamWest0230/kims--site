const express = require("express");
const app = express();
const morgan = require('morgan');
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const PORT = 8080;
const booking = require("./booking.js")
const cors = require("cors");

const limiter = rateLimit({
    max: 100,
    windowMs: 15 * 60 * 1000,
    message: "Too many request from this IP"
});
  
app.use(limiter);
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use("/booking", booking) 



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});