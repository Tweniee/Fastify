const fastify = require("fastify")();
var jwt = require("jsonwebtoken");
// define a middleware function
function myMiddleware(request, reply, done) {
  // perform some task
  var token = jwt.sign({ foo: "bar" }, "shhhhh");
  console.log({ token: token });
  // invoke the done callback to continue with the request
  done();
}

// register the middleware globally for all routes
fastify.addHook("onRequest", myMiddleware);

// define a route
fastify.get("/", (request, reply) => {
  reply.send("Hello World!");
});

// start the server
fastify.listen(3001, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Server started");
});
