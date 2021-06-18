const { Router } = require("express");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");
const nodemailer = require('nodemailer');
require('dotenv').config()
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

router.post("/", (req, res) => {
    const email = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: req.body.appointment,
            text: `NAME: ${req.body.name}, \nPHONE: ${req.body.phone}, \nEMAIL: ${req.body.email}, \nAPPOITMENT TYPE: ${req.body.appointment}, \nADDRESS ${req.body.address}, \nDATE: ${req.body.date}, \nTIME: ${req.body.time}, \nHEALTH-CONCERNS: ${req.body.health},`

    }
    console.log(email)
transporter.sendMail(email, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong.");
    } else {
      res.status(200).send("Email successfully sent to recipient!");
    }
});
 res.sendStatus(200)

})



module.exports = router;