const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const wineRouter = require("./config/routes.js");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(wineRouter)

app.listen(PORT, function(){
  console.log(`Server is running on Port: ${PORT}`);
});
