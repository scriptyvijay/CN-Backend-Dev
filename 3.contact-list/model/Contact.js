const mongoose = require("mongoose");

const Contact = new mongoose.Schema({
	name: {
		require: true,
		type: String,
	},

	phone: {
		type: Number,
		require: true,
	},
});

const contact = mongoose.model("Contact", Contact);

module.exports.contact;
