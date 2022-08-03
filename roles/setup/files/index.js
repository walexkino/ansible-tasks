var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Welcome to walexkino ansible home page, The ansible playbook script worked!!");
});
server.listen(3000); // this port as already been allowed in the ingress port for the target ec2 instance