const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const { Connection } = require("database");
const route = require("./route/route");

dotenv.config();
const PORT = process.env.SERVER_PORT;

Connection.connect();

const app = express();

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`),
);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", route);
