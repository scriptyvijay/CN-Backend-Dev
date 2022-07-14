const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(requestHandle);

server.listen(port, (err) => {
	if (err) {
		console.log(err);
	}

	console.log("serer is up and running, port", port);
});

function requestHandle(req, res) {
	res.writeHead(200, { "content-type": "text/html" });

	let filepath;

	switch (req.url) {
		case "/":
			filepath = "./index.html";
			break;
		case "/about":
			filepath = "./about.html";
			break;
		default:
			filepath = "./404.html";
	}

	fs.readFile(filepath, (err, data) => {
		if (err) {
			console.log({ err });
			res.end("<h1>Error</h1>");
		}

		return res.end(data);
	});
}
