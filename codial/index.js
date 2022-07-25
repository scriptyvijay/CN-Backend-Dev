const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const db = require("./config/mongoose");
app.use("/", require("./routes/index"));

app.set("view engine ", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
