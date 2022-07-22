const http = require("http");
const port = 8000;
const server = http.createServer(requestHandler);
const fs = require("fs");

server.listen(port, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Server is listening on port ${port}`);
	}
});

function requestHandler(req, res) {
	res.writeHead(200, { "Content-Type": "text/html" });
	let filePath;
	switch (req.url) {
		case "/":
			filePath = "./index.html";
			break;
		case "/profile":
			filePath = "./profile.html";
			break;
		default:
			filePath = "./404.html";
			break;
	}

	fs.readFile(filePath, (err, data) => {
		if (err) {
			console.log(err);
			res.end("<h1>Error</h1>");
		} else {
			res.end(data);
		}
	});
}
