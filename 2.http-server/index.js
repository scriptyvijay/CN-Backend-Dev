const http = require("http");
const port = 8000;
const fs = require("fs");

function requestHandler(req, res) {
	res.writeHead(200, { "content-type": "text/html" });

	fs.readFile("./index.html", (err, data) => {
		err ? res.end("<h1>Error</h1>") : res.end(data);
	});
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	err ? console.log(err) : console.log("Server is Up at port " + port);
});
