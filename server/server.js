const express = require("express");
const app = express();
const PORT = 8080;
const booking = require("./booking.js")
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/booking", booking) 



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});