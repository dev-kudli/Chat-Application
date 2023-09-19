const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");

const { Connection } = require("database");
const route = require("./route/route");

dotenv.config();
const PORT = process.env.SERVER_PORT;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`)
  try {
    Connection.connect();
  } catch(e) {
    process.exit(1);
  }
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*', // Replace with your client's domain
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true, // Enable CORS with credentials
  allowedHeaders: ['Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'] // Allowed headers
};

app.use(cors(corsOptions));
app.use(cookieParser(process.env.SESSION_TOKEN));
app.use("/", route);
