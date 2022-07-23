// Initialize mongoose

const mongoose = require("mongoose");

// Connect to MongoDB

mongoose.connect("mongodb://localhost:27017/contact_list_db");

// Create a schema for the data
const db = mongoose.connection;

// Check for connection error
db.on("error", console.error.bind(console, "connection error"));

// check for open connection
db.once("open", () => {
	console.log("Connected to MongoDB");
});
