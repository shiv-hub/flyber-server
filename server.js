const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// Constants
const PORT = 3090;

const app = express();

// for cross-origin
app.use(cors());

// for understanding request body json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// for logging purpose
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hey There...!");
});

app.listen(PORT, () => console.log(`Server is up and running at port ${PORT}`));
