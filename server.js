var restify = require('restify');
var mongojs = require('mongojs');

var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(3000, function () {
    console.log("Server started @ 3000");
});

server.get("/products", function (req, res, next) {
    res.send("You will see all the products in the colection with this end point");
    return next();
});
