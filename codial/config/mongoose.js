const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/codial", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", (err) => {
	if (err) {
		console.log(err);
	}
	console.log("Connected to MongoDB");
});
