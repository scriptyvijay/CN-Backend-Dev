const express = require("express");
const app = express();
const port = 8000;

// Adding Express Router
app.use("/", require("./routes"));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Codiel listening on port ${port}!`));
