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
            from: req.body.email,
            to: process.env.EMAIL,
            subject: req.body.appoitment,
            text: `NAME: ${req.body.name}, PHONE: ${req.body.phone}, EMAIL: ${req.body.email}, APPOITMENT TYPE: ${req.body.appoitment}, ADDRESS ${req.body.address}, DATE: ${req.body.date}, TIME: ${req.body.time}, HEALTH CONCERNS: ${req.body.health},`

    }
console.log(email);
transporter.sendMail(email, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong.");
    } else {
      res.status(200).send("Email successfully sent to recipient!");
    }
});


})



module.exports = router;