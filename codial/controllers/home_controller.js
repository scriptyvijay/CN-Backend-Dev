module.exports.home = function (req, res) {
	res.end("home");
};

module.exports.signup = function (req, res) {
	return res.render("sign-up");
};
