const express = require("express");
const compression = require("compression");
const mongoose = require("mongoose");
const path = require("path");
const projectRoutes = require("./routes/projectRoutes");
const PORT = process.env.PORT || 3001;
const server = express();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project")

// Allow server to use params
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(compression());
server.use(projectRoutes);

// Send every request to the React app
// Define any API routes before this runs
server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
