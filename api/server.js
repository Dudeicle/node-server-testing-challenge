const express = require("express");

const Chicfila = require("../chicfila/chicfilaModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
	res.status(200).json({ api: "running..." });
});

server.get("/sandwiches", (req, res) => {
	Chicfila.getAll()
		.then((sandwiches) => {
			res.status(200).json(sandwiches);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

server.post("/sandwiches", (req, res) => {
	Chicfila.insert(req.body)
		.then((ids) => {
			res.status(201).json({ data: ids });
		})
		.catch((error) => {
			res.status(500).json({ error: error.message });
		});
});

module.exports = server;
