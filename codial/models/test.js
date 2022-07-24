const mongoose = require("mongoose");

const testScheme = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
});

const Test = mongoose.model("Test", testScheme);

module.exports = Test;
