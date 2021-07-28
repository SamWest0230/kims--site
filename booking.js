const { Router } = require("express");
const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config()
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token");
      }
      resolve(token);
   });
  

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });
 
router.post("/", (req, res) => {
  const email = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: req.body.appointment,
    text: `NAME: ${req.body.name}, \nPHONE: ${req.body.phone}, \nEMAIL: ${req.body.email}, \nAPPOITMENT TYPE: ${req.body.appointment}, \nADDRESS ${req.body.address}, \nDATE: ${req.body.date}, \nTIME: ${req.body.time}, \nHEALTH-CONCERNS: ${req.body.health},`
  }
    transporter.sendMail(email, (err) => {
      if(err){
        throw err
      }
    })
    res.send('Email has been sent: check your inbox!');  
})

module.exports = router;
