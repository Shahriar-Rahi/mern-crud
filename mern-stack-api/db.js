const bodyParser = require("body-parser");

const mongoose = require("mongoose");

require('dotenv').config();

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(
        "Error while connecting: " + JSON.stringify(err, undefined, 2)
      );
    } else {
      console.log("Connected to the database");
    }
  }
);
