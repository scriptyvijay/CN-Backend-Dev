const express = require("express");
const port = 8000;
const db = require("./config/mongoose");
const app = express();
const path = require("path");
const Contact = require("./model/Contact");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));

const contactList = [
	{ name: "John", phone: "1234567890" },
	{ name: "Jane", phone: "1234567890" },
];

app.listen(port, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Server is running on port ${port}`);
	}
});

app.get("/", (req, res) => {
	return res.render("index", { title: "Contact List", contact_list: contactList });
});

app.post("/create-contact", (req, res) => {
	Contact.create(
		{
			name: req.body.name,
			phone: req.body.phone,
		},
		(err, newContact) => {
			if (err) {
				console.log("error in creating a contact");
				return res.redirect("back");
			} else {
				console.log(newContact);
				return res.redirect("back");
			}
		}
	);
});
