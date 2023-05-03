const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/contact-db");

const db = mongoose.connect();

db.once("error", console.log.bind("error", "error in connecting db"));

db.on(() => {
	console.log("Successfully Connected");
});
