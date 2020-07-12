require("./db");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const postMessageRoutes = require("./controllers/postMessageController");

const app = express();

//const port = process.env.PORT || 3000;

app.use(bodyParser.json());
//app.listen(port, () => `Server running on port ${port} 🔥`);
//const port = process.env.PORT || 5000;
app.use(cors({origin:'http://localhost:3000'}))

app.listen(4000, () => console.log("server started at: 4000"));

// app.use(app.router);
// routes.initialize(app);

app.use("/postMessages", postMessageRoutes);
