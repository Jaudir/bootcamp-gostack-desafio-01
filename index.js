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
  const { id } = req.params;
  const p = projects.find(i => i.id == id);

  if (!p) {
    return res.status(400).json({ error: "Project not found!" });
  }

  return next();
}

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  p = {
    id,
    title,
    task: []
  };

  projects.push(p);
  return res.json(p);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", checkIdProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const p = projects.find(i => i.id == id);
  p.title = title;
  return res.json(p);
});

server.delete("/projects/:id", checkIdProject, (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex(i => i.id == id);
  projects.splice(index, 1);
  return res.send();
});

server.post("/projects/:id/tasks", checkIdProject, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const p = projects.find(i => i.id == id);
  p.task.push(title);
  return res.json(p);
});
