const express = require("express");

const server = express();
const projects = [];

server.use(express.json());
server.listen(3000);

function logReqs(req, res, next) {
  console.count("Número de requisições");

  return next();
}

server.use(logReqs);

function checkIdProject(req, res, next) {
  return next();
}

server.post("/projects", (req, res) => {
  return;
});

server.get("/projects", (req, res) => {
  return;
});

server.put("/projects/:id", checkIdProject, (req, res) => {
  return;
});

server.delete("/projects/:id", checkIdProject, (req, res) => {
  return;
});

server.post("/projects/:id/tasks", (req, res) => {
  return;
});
