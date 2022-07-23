module.export.home = function (req, res) {
	res.render("home", {
		title: "Home",
		user: req.user,
	});
};
