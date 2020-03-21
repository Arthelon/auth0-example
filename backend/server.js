const express = require("express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
require("dotenv").config();
const { checkJwt } = require("./utils/auth");

const app = express();
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
    res.send({
        msg: "Your Access Token was successfully validated!"
    });
});

// Start the app
app.listen(3001, () => console.log("API listening on 3001"));
