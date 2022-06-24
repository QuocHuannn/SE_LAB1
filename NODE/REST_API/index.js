// // Build a server with Node's HTTP module
// import { createServer } from "http";
// const port = 3001;
// const server = createServer();

// // request  server
// server.on("request", (request, response) => {
//     console.log(`URL: ${request.url}`);
//     response.end(" Hello, server!");
// });
// // Start the server
// server.listen(port, (error) => {
//     if (error) return console.log(`Error: ${error}`);
//     console.log(`Server is listening on port ${port}`);
// });

// Setting Up an Express Server
// Import packages and set the port
// import express from "express";
// const port = 3002;
// const app = express();

// app.get("/", (request, response) => {
//     console.log(`URL: ${request.url}`);
//     response.send("Hello, Server!");
// });

// const server = app.listen(port, (error) => {
//     if (error) return console.log(`Error: ${error}`);
//     console.log(`Server listening on port ${server.address().port}`);
// });

// Add Body Parsing Middleware
// Import packages and set the port
import bodyParser from "body-parser";
import express from "express";
const port = 3002;
const app = express();
 
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (request, response) => {
  response.send({
    message: "Node.js and Express REST API",
  });
});
// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});