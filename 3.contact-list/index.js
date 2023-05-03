const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

let contact_list = [
	{
		name: "Vijay",
		phone: 9891821334,
	},
	{
		name: "Ajay",
		phone: 9891821334,
	},
	{
		name: "Rahul",
		phone: 9891821334,
	},
	{
		name: "Sandeep",
		phone: 9891821334,
	},
	{
		name: "Firdosh",
		phone: 9891821334,
	},
];

app.get("/", (req, res) => {
	return res.render("home", {
		title: "Contact List",
		contact_list,
	});
});

app.post("/add-contact", (req, res) => {
	var name = req.params;
	var hello = req.query.name;

	res.redirect("back");
});

app.delete("/delete-contact", (req, res) => {});

app.listen(port, (err) => {
	err ? console.log(err) : console.log("Started Successfully " + port);
});
